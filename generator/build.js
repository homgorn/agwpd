const fs = require('fs');
const path = require('path');
const { cases, categories } = require('./data');
const config = require('./config');

const OUT_DIR = path.join(__dirname, '../dist');
const WP_FILE = path.join(OUT_DIR, 'wordpress_import.xml');
const ASSETS_DIR = path.join(__dirname, '../assets');

// Ensure output dir exists
if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR);
}

// Copy assets
const assetsOut = path.join(OUT_DIR, 'assets');
if (!fs.existsSync(assetsOut)) {
    fs.mkdirSync(assetsOut);
}
if (fs.existsSync(ASSETS_DIR)) {
    fs.readdirSync(ASSETS_DIR).forEach(file => {
        fs.copyFileSync(path.join(ASSETS_DIR, file), path.join(assetsOut, file));
    });
}

function generateImprovedHtml() {
    console.log('Generating improved HTML files...');

    // Copy main index
    fs.copyFileSync(path.join(__dirname, '../index.html'), path.join(OUT_DIR, 'index.html'));

    // Generate use_cases.js
    const frontendCategories = {
        web: 'web-dev', backend: 'backend', ds: 'datascience', devops: 'devops',
        qa: 'testing', refactor: 'refactoring', debug: 'debugging',
        docs: 'docs', api: 'api', auto: 'automation'
    };

    const frontendCases = cases.map(c => ({
        id: c.id, category: frontendCategories[c.cat], title: c.title,
        desc: c.desc, link: `./${c.cat}/${c.id}.html`, tag: c.categoryName
    }));

    fs.writeFileSync(path.join(OUT_DIR, 'use_cases.js'), `const useCases = ${JSON.stringify(frontendCases, null, 4)};`);

    cases.forEach(c => {
        const related = cases.filter(r => r.cat === c.cat && r.id !== c.id).slice(0, 5);

        const pageContent = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${c.seo.title}</title>
    <meta name="robots" content="noindex, nofollow">
    <meta name="description" content="${c.seo.description}">
    <meta name="keywords" content="${c.seo.keywords}">
    <meta property="og:title" content="${c.seo.title}">
    <meta property="og:description" content="${c.seo.description}">
    <meta property="og:image" content="${c.image.url}">
    <script type="application/ld+json">
    ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": c.faq.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
        })}
    </script>
    <script type="application/ld+json">
    ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": c.howto.name,
            "step": c.howto.steps.map((s, i) => ({
                "@type": "HowToStep",
                "position": i + 1,
                "name": `Шаг ${i + 1}`,
                "text": s
            }))
        })}
    </script>
    <script type="application/ld+json">
    ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Главная",
                    "item": config.siteUrl
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": c.categoryName,
                    "item": `${config.siteUrl}/#${frontendCategories[c.cat]}`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": c.title
                }
            ]
        })}
    </script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; line-height: 1.7; color: #202124; background: #f8f9fa; }
        .page-wrapper { display: flex; max-width: 1400px; margin: 0 auto; background: white; }
        .sidebar { width: 280px; background: #f8f9fa; border-right: 1px solid #e8eaed; position: sticky; top: 0; height: 100vh; overflow-y: auto; }
        .main-content { flex: 1; min-width: 0; }
        .breadcrumbs { padding: 16px 40px; background: #f8f9fa; font-size: 14px; border-bottom: 1px solid #e8eaed; }
        .breadcrumbs a { color: #1a73e8; text-decoration: none; }
        .breadcrumbs span { margin: 0 8px; color: #5f6368; }
        .hero { padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .hero h1 { font-size: 2.5em; margin-bottom: 16px; font-weight: 600; }
        .hero-meta { display: flex; gap: 24px; margin-top: 20px; flex-wrap: wrap; }
        .meta-item { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-size: 14px; }
        .cta-button { display: inline-block; background: #34a853; color: white; padding: 14px 32px; border-radius: 24px; text-decoration: none; font-weight: 600; margin-top: 24px; transition: transform 0.2s; }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(52,168,83,0.4); }
        .content { padding: 40px; }
        .toc { padding: 24px; }
        .toc h3 { color: #202124; margin-bottom: 20px; font-size: 1em; font-weight: 600; }
        .toc ul { list-style: none; }
        .toc li { margin: 0; }
        .toc a { display: block; color: #5f6368; text-decoration: none; padding: 10px 16px; border-radius: 4px; font-size: 14px; transition: all 0.2s; }
        .toc a:hover, .toc a.active { background: #e8f0fe; color: #1a73e8; }
        .prompt-box { background: #263238; color: #aed581; padding: 24px; border-radius: 8px; margin: 24px 0; position: relative; font-family: 'Courier New', monospace; font-size: 14px; }
        .copy-btn { position: absolute; top: 12px; right: 12px; background: #34a853; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 12px; }
        .copy-btn:hover { background: #2d8e47; }
        .copy-btn.copied { background: #1a73e8; }
        .steps { counter-reset: step-counter; }
        .step { margin: 32px 0; padding: 24px; background: #f8f9fa; border-radius: 8px; position: relative; padding-left: 80px; }
        .step::before { counter-increment: step-counter; content: counter(step-counter); position: absolute; left: 24px; top: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; }
        .step h4 { color: #202124; margin-bottom: 12px; }
        .faq-item { margin: 16px 0; border: 1px solid #e8eaed; border-radius: 8px; overflow: hidden; }
        .faq-question { background: #f8f9fa; padding: 16px 20px; cursor: pointer; display: flex; justify-content: space-between; font-weight: 500; color: #202124; }
        .faq-question:hover { background: #e8eaed; }
        .faq-answer { padding: 16px 20px; display: none; color: #5f6368; }
        .faq-item.active .faq-answer { display: block; }
        .related { margin-top: 60px; padding: 32px; background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-radius: 12px; }
        .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
        .related-card { background: white; padding: 16px; border-radius: 8px; text-decoration: none; color: #202124; border: 1px solid #e8eaed; transition: box-shadow 0.2s; }
        .related-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        h2 { color: #202124; font-size: 1.8em; margin: 40px 0 20px; padding-bottom: 12px; border-bottom: 2px solid #e8eaed; }
    </style>
</head>
<body>
    <div class="page-wrapper">
        <aside class="sidebar">
            <div class="toc">
                <h3>📋 Содержание</h3>
                <ul>
                    <li><a href="#prompt">📝 Готовый промпт</a></li>
                    <li><a href="#guide">📖 Инструкция</a></li>
                    <li><a href="#faq">❓ FAQ (${c.faq.length})</a></li>
                    <li><a href="#related">🔗 Похожие кейсы</a></li>
                </ul>
            </div>
        </aside>
        
        <div class="main-content">
            <div class="breadcrumbs">
                <a href="../index.html">Главная</a>
                <span>›</span>
                <a href="../index.html#${frontendCategories[c.cat]}">${c.categoryName}</a>
                <span>›</span>
                <span>${c.title}</span>
            </div>
            
            <div class="hero">
                <h1>${c.title}</h1>
                <p style="font-size: 1.1em; opacity: 0.95; margin-top: 12px;">${c.desc}</p>
                <div class="hero-meta">
                    <div class="meta-item"><span>⏱️</span><span>2-5 минут</span></div>
                    <div class="meta-item"><span>📊</span><span>Средняя сложность</span></div>
                    <div class="meta-item"><span>🤖</span><span>Gemini 3 Pro</span></div>
                </div>
                <a href="https://antigravity.google" class="cta-button">🚀 Попробовать в Antigravity</a>
            </div>
            
            <div class="content">
                <div class="toc">
            
            <h2 id="prompt">📝 Готовый промпт для копирования</h2>
            <p>Скопируйте этот промпт и вставьте в Antigravity:</p>
            <div class="prompt-box">
                <button class="copy-btn" onclick="copyPrompt(this)">📋 Копировать</button>
                <pre>Помоги мне с задачей: ${c.title}

${c.desc}

Требования:
- Используй лучшие практики
- Добавь комментарии к коду
- Создай тесты
- Оптимизируй производительность</pre>
            </div>
            
            <h2 id="guide">📖 Пошаговая инструкция</h2>
            <div class="steps">
                ${c.howto.steps.map(s => `<div class="step"><h4>${s.split('.')[0]}</h4><p>${s}</p></div>`).join('')}
            </div>
            
            <h2 id="faq">❓ Часто задаваемые вопросы</h2>
            ${c.faq.map(f => `
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(this)">
                        ${f.q}
                        <span>▼</span>
                    </div>
                    <div class="faq-answer">${f.a}</div>
                </div>
            `).join('')}
            
            <div class="related" id="related">
                <h3>Смотрите также</h3>
                <div class="related-grid">
                    ${related.map(r => `
                        <a href="../${r.cat}/${r.id}.html" class="related-card">
                            <strong>${r.title}</strong>
                            <p style="font-size: 14px; color: #5f6368; margin-top: 8px;">${r.desc.substring(0, 80)}...</p>
                        </a>
                    `).join('')}
                </div>
            </div>
            </div>
        </div>
    </div>
    
    <script>
        function copyPrompt(btn) {
            const promptText = btn.parentElement.querySelector('pre').textContent;
            navigator.clipboard.writeText(promptText).then(() => {
                btn.textContent = '✅ Скопировано!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = '📋 Копировать';
                    btn.classList.remove('copied');
                }, 2000);
            });
        }
        
        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            faqItem.classList.toggle('active');
            const arrow = element.querySelector('span');
            arrow.textContent = faqItem.classList.contains('active') ? '▲' : '▼';
        }
    </script>
</body>
</html>`;

        const catDir = path.join(OUT_DIR, c.cat);
        if (!fs.existsSync(catDir)) fs.mkdirSync(catDir);
        fs.writeFileSync(path.join(catDir, `${c.id}.html`), pageContent);
    });
}

// WordPress XML (keep existing)
function generateWpXml() {
    console.log('Generating WordPress XML...');
    const items = cases.map((c, index) => {
        const pubDate = new Date().toUTCString();
        const related = cases.filter(r => r.cat === c.cat && r.id !== c.id).slice(0, 5);
        const relatedWp = related.map(r => `<li><a href="${config.siteUrl}/${r.cat}/${r.id}">${r.title}</a></li>`).join('');

        const content = `
<p>${c.desc}</p>
<h2 id="howto">Как реализовать: ${c.howto.name}</h2>
<ol>${c.howto.steps.map(s => `<li>${s}</li>`).join('')}</ol>
<h2 id="faq">FAQ</h2>
${c.faq.map(f => `<h3>${f.q}</h3><p>${f.a}</p>`).join('')}
<h3>Похожие кейсы</h3>
<ul>${relatedWp}</ul>`;

        return `
    <item>
        <title>${c.title}</title>
        <link>${config.siteUrl}/${c.cat}/${c.id}</link>
        <pubDate>${pubDate}</pubDate>
        <content:encoded><![CDATA[${content}]]></content:encoded>
        <wp:post_name>${c.id}</wp:post_name>
        <wp:status>publish</wp:status>
        <wp:post_type>post</wp:post_type>
    </item>`;
    }).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wp="http://wordpress.org/export/1.2/">
<channel>
    <title>${config.siteTitle}</title>
    <link>${config.siteUrl}</link>
    ${items}
</channel>
</rss>`;

    fs.writeFileSync(WP_FILE, xml);
}

generateImprovedHtml();
generateWpXml();
console.log('Build complete! Check /dist folder.');
