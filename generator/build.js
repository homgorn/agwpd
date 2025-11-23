const fs = require('fs');
const path = require('path');
const { cases, categories } = require('./data');
const config = require('./config');
const { generatePageTemplate } = require('./templates/page-template');

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
        docs: 'docs', api: 'api', auto: 'automation', mcp: 'mcp', core: 'core'
    };

    const frontendCases = cases.map(c => ({
        id: c.id,
        slug: c.slug,
        category: frontendCategories[c.cat],
        title: c.title,
        desc: c.desc,
        link: `./${c.cat}/${c.slug}.html`,
        tag: c.categoryName
    }));

    fs.writeFileSync(path.join(OUT_DIR, 'use_cases.js'), `const useCases = ${JSON.stringify(frontendCases, null, 4)};`);

    cases.forEach(c => {
        const pageContent = generatePageTemplate(c, config, cases, frontendCategories);

        const catDir = path.join(OUT_DIR, c.cat);
        if (!fs.existsSync(catDir)) fs.mkdirSync(catDir);
        fs.writeFileSync(path.join(catDir, `${c.slug}.html`), pageContent);
    });
}

// WordPress XML (simplified)
function generateWpXml() {
    console.log('Generating WordPress XML...');
    const items = cases.map((c, index) => {
        const pubDate = new Date().toUTCString();
        const related = cases.filter(r => r.cat === c.cat && r.id !== c.id).slice(0, 5);
        const relatedWp = related.map(r => `<li><a href="${config.siteUrl}/${r.cat}/${r.slug}">${r.title}</a></li>`).join('');

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
        <link>${config.siteUrl}/${c.cat}/${c.slug}</link>
        <pubDate>${pubDate}</pubDate>
        <content:encoded><![CDATA[${content}]]></content:encoded>
        <wp:post_name>${c.slug}</wp:post_name>
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

// Sitemap generators
function generateHtmlSitemap() {
    console.log('Generating HTML sitemap...');

    const categorized = {};
    cases.forEach(c => {
        if (!categorized[c.categoryName]) categorized[c.categoryName] = [];
        categorized[c.categoryName].push(c);
    });

    const categoryLinks = Object.keys(categorized).map(catName => {
        const catCases = categorized[catName];
        const caseLinks = catCases.map(c =>
            `<li><a href="${c.cat}/${c.slug}.html">${c.title}</a></li>`
        ).join('\n');

        return `
        <div class="category-section">
            <h2>${catName} (${catCases.length})</h2>
            <ul>${caseLinks}</ul>
        </div>`;
    }).join('\n');

    const htmlSitemap = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Карта сайта - Google Antigravity Documentation</title>
    <meta name="robots" content="noindex, nofollow">
    <style>
        body { font-family: 'Segoe UI', system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 40px; background: #f8f9fa; }
        h1 { color: #1a73e8; margin-bottom: 40px; }
        .category-section { background: white; padding: 30px; margin-bottom: 30px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .category-section h2 { color: #202124; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e8eaed; }
        ul { list-style: none; padding: 0; column-count: 2; column-gap: 30px; }
        li { margin: 10px 0; break-inside: avoid; }
        a { color: #1a73e8; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .back-link { margin-bottom: 30px; }
    </style>
</head>
<body>
    <div class="back-link"><a href="index.html">← Назад на главную</a></div>
    <h1>📋 Карта сайта</h1>
    <p>Все ${cases.length} кейсов использования Google Antigravity, сгруппированные по категориям:</p>
    ${categoryLinks}
</body>
</html>`;

    fs.writeFileSync(path.join(OUT_DIR, 'sitemap.html'), htmlSitemap);
}

function generateXmlSitemap() {
    console.log('Generating XML sitemap...');

    const urls = cases.map(c => `
    <url>
        <loc>${config.siteUrl}/${c.cat}/${c.slug}.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`).join('');

    const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${config.siteUrl}/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${config.siteUrl}/sitemap.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>${urls}
</urlset>`;

    fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), xmlSitemap);
}

function generateRobotsTxt() {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml`;

    fs.writeFileSync(path.join(OUT_DIR, 'robots.txt'), robotsTxt);
}

generateImprovedHtml();
generateWpXml();
generateHtmlSitemap();
generateXmlSitemap();
generateRobotsTxt();
console.log('Build complete! Check /dist folder.');
