const https = require('https');
const { cases } = require('./data');

const WP_URL = process.env.WP_URL;
const WP_USER = process.env.WP_USER;
const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD;

if (!WP_URL || !WP_USER || !WP_APP_PASSWORD) {
    console.error('Error: Missing WP_URL, WP_USER, or WP_APP_PASSWORD environment variables.');
    process.exit(1);
}

const AUTH = Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString('base64');
const API_BASE = `${WP_URL.replace(/\/$/, '')}/wp-json/wp/v2`;

async function apiRequest(endpoint, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
        const url = new URL(`${API_BASE}${endpoint}`);
        const options = {
            method,
            headers: {
                'Authorization': `Basic ${AUTH}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Antigravity-Sync/1.0'
            }
        };

        const req = https.request(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        resolve(data); // In case of empty or non-json response
                    }
                } else {
                    reject(new Error(`Request failed with status ${res.statusCode}: ${data}`));
                }
            });
        });

        req.on('error', (e) => reject(e));

        if (body) {
            req.write(JSON.stringify(body));
        }
        req.end();
    });
}

function generateContent(item) {
    // Mimic the structure from build.js XML generation
    const howtoSteps = item.howto.steps.map(s => `<li>${s}</li>`).join('');
    const faqItems = item.faq.map(f => `<h3>${f.q}</h3><p>${f.a}</p>`).join('');

    // Related links logic (we need access to all cases, so we assume 'cases' is available globally or passed)
    // For simplicity in sync script, we'll just filter the global 'cases' array
    const related = cases.filter(r => r.cat === item.cat && r.id !== item.id).slice(0, 5);
    // Note: WP_URL is available in scope
    const relatedWp = related.map(r => `<li><a href="${WP_URL}/${r.cat}/${r.id}">${r.title}</a></li>`).join('');

    return `
<!-- wp:paragraph -->
<p>${item.desc}</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul>
<li><a href="#howto">Инструкция</a></li>
<li><a href="#faq">FAQ</a></li>
</ul>
<!-- /wp:list -->

<!-- wp:heading {"id":"howto"} -->
<h2 id="howto">Как реализовать: ${item.howto.name}</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol>${howtoSteps}</ol>
<!-- /wp:list -->

<!-- wp:heading {"id":"faq"} -->
<h2 id="faq">FAQ</h2>
<!-- /wp:heading -->

<!-- wp:group -->
${faqItems}
<!-- /wp:group -->

<!-- wp:separator -->
<hr class="wp-block-separator"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h3>Похожие кейсы</h3>
<!-- /wp:heading -->
<!-- wp:list -->
<ul>${relatedWp}</ul>
<!-- /wp:list -->

<p><em>Synced via Antigravity GitHub Action</em></p>
    `;
}

async function sync() {
    console.log(`Starting sync for ${cases.length} cases to ${WP_URL}...`);
    let created = 0;
    let updated = 0;
    let errors = 0;

    for (const item of cases) {
        try {
            // 1. Check if post exists by slug
            // Slug: use item.id or sanitize title
            const slug = item.id;
            const existing = await apiRequest(`/ posts ? slug = ${slug}& status=any`);

            const postContent = generateContent(item);
            const postData = {
                title: item.title,
                content: postContent,
                status: 'publish',
                slug: slug,
                // We could map categories here if we fetched them first, but for simplicity we skip or use IDs if known
            };

            if (existing && existing.length > 0) {
                const id = existing[0].id;
                console.log(`[UPDATE] ${item.title} (ID: ${id})`);
                await apiRequest(`/ posts / ${id} `, 'POST', postData);
                updated++;
            } else {
                console.log(`[CREATE] ${item.title} `);
                await apiRequest(`/ posts`, 'POST', postData);
                created++;
            }
        } catch (err) {
            console.error(`[ERROR] Failed to sync ${item.title}: `, err.message);
            errors++;
        }
    }

    console.log(`Sync complete.Created: ${created}, Updated: ${updated}, Errors: ${errors} `);
}

sync();
