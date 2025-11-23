const fs = require('fs');
const path = require('path');
const { cases, categories } = require('./data');
const config = require('./config');

const OUT_DIR = path.join(__dirname, '../dist');
const WP_FILE = path.join(OUT_DIR, 'wordpress_import.xml');

// Ensure output dir exists
if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR);
}

// --- HTML GENERATOR (Simple) ---
function generateHtml() {
    console.log('Generating HTML files...');

    // 1. Copy main entry files to dist to make it a complete website
    fs.copyFileSync(path.join(__dirname, '../index.html'), path.join(OUT_DIR, 'index.html'));
    fs.copyFileSync(path.join(__dirname, '../use_cases.js'), path.join(OUT_DIR, 'use_cases.js'));

    const template = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');

    // Create index listing
    let indexContent = template;
    // (In a real SSG we would replace the content, but for now we just keep the main index as is, 
    // maybe injecting the list if it wasn't dynamic. But the main index.html is already dynamic JS.
    // So we will generate INDIVIDUAL pages for SEO).

    cases.forEach(c => {
        const pageContent = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${c.seo.title}</title>
    <meta name="description" content="${c.seo.description}">
    <meta name="keywords" content="${c.seo.keywords}">
    <meta property="og:title" content="${c.seo.title}">
    <meta property="og:description" content="${c.seo.description}">
    <meta property="og:image" content="${c.image.url}">
    <meta property="og:type" content="article">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": ${JSON.stringify(c.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        })))}
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "${c.howto.name}",
      "step": ${JSON.stringify(c.howto.steps.map((s, i) => ({
            "@type": "HowToStep",
            "position": i + 1,
            "name": `Шаг ${i + 1}`,
            "text": s
        })))}
    }
    </script>
    <style>
        body { font-family: system-ui, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; color: #333; }
        h1 { color: #4285f4; }
        .faq-item { margin-bottom: 20px; }
        .step { margin-bottom: 15px; padding: 15px; background: #f5f5f5; border-radius: 8px; }
        a { color: #4285f4; text-decoration: none; }
        .nav { margin-bottom: 40px; }
        .hero-image { width: 100%; height: auto; border-radius: 12px; margin-bottom: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <nav class="nav"><a href="../index.html">← Назад к списку кейсов</a></nav>
    
    <article>
        <img src="${c.image.localPath}" alt="${c.image.alt}" class="hero-image">
        <h1>${c.title}</h1>
        <p class="lead">${c.desc}</p>
        
        <div class="meta">
            <span class="tag">Категория: ${c.categoryName}</span>
        </div>

        <hr>

        <h2>Как это работает в Antigravity</h2>
        <div class="howto">
            ${c.howto.steps.map((s, i) => `<div class="step"><strong>Шаг ${i + 1}:</strong> ${s}</div>`).join('')}
        </div>

        <h2>Часто задаваемые вопросы (FAQ)</h2>
        <div class="faq">
            ${c.faq.map(f => `
                <div class="faq-item">
                    <h3>${f.q}</h3>
                    <p>${f.a}</p>
                </div>
            `).join('')}
        </div>
    </article>
</body>
</html>
        `;

        const catDir = path.join(OUT_DIR, c.cat);
        if (!fs.existsSync(catDir)) fs.mkdirSync(catDir);
        fs.writeFileSync(path.join(catDir, `${c.id}.html`), pageContent);
    });
}

// --- WORDPRESS XML GENERATOR ---
function generateWpXml() {
    console.log('Generating WordPress XML...');

    const items = cases.map((c, index) => {
        const pubDate = new Date().toUTCString();
        const content = `
<!-- wp:image {"align":"center","sizeSlug":"large"} -->
<figure class="wp-block-image aligncenter size-large"><img src="${c.image.url}" alt="${c.image.alt}"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>${c.desc}</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Как реализовать: ${c.howto.name}</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol>
${c.howto.steps.map(s => `<li>${s}</li>`).join('\n')}
</ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>FAQ</h2>
<!-- /wp:heading -->

<!-- wp:group -->
${c.faq.map(f => `
<h3>${f.q}</h3>
<p>${f.a}</p>
`).join('\n')}
<!-- /wp:group -->

<!-- wp:separator -->
<hr class="wp-block-separator"/>
<!-- /wp:separator -->

<p><em>Сгенерировано Google Antigravity Documentation Generator</em></p>
        `;

        return `
    <item>
        <title>${c.title}</title>
        <link>${config.siteUrl}/${c.cat}/${c.id}</link>
        <pubDate>${pubDate}</pubDate>
        <dc:creator>admin</dc:creator>
        <guid isPermaLink="false">${config.siteUrl}/?p=${index + 1000}</guid>
        <description></description>
        <content:encoded><![CDATA[${content}]]></content:encoded>
        <excerpt:encoded><![CDATA[${c.desc}]]></excerpt:encoded>
        <wp:post_id>${index + 1000}</wp:post_id>
        <wp:post_date>${new Date().toISOString().replace('T', ' ').split('.')[0]}</wp:post_date>
        <wp:post_date_gmt>${new Date().toISOString().replace('T', ' ').split('.')[0]}</wp:post_date_gmt>
        <wp:comment_status>open</wp:comment_status>
        <wp:ping_status>open</wp:ping_status>
        <wp:post_name>${c.id}</wp:post_name>
        <wp:status>publish</wp:status>
        <wp:post_parent>0</wp:post_parent>
        <wp:menu_order>0</wp:menu_order>
        <wp:post_type>post</wp:post_type>
        <wp:post_password></wp:post_password>
        <wp:is_sticky>0</wp:is_sticky>
        <category domain="category" nicename="${c.cat}"><![CDATA[${c.categoryName}]]></category>
        ${c.seo.keywords.split(', ').map(k => `<category domain="post_tag" nicename="${k.replace(/\s+/g, '-').toLowerCase()}"><![CDATA[${k}]]></category>`).join('\n')}
    </item>
        `;
    }).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
    xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:wp="http://wordpress.org/export/1.2/"
>
<channel>
    <title>${config.siteTitle}</title>
    <link>${config.siteUrl}</link>
    <description>${config.description}</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <language>${config.locale}</language>
    <wp:wxr_version>1.2</wp:wxr_version>
    <wp:base_site_url>${config.siteUrl}</wp:base_site_url>
    <wp:base_blog_url>${config.siteUrl}</wp:base_blog_url>

    ${items}
</channel>
</rss>
    `;

    fs.writeFileSync(WP_FILE, xml);
}

// Run
generateHtml();
generateWpXml();
console.log('Build complete! Check /dist folder.');
