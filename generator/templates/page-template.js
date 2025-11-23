// HTML Template for case pages
const { categories } = require('../data');

function generatePageTemplate(c, config, related, frontendCategories) {
    // Category navigation for sidebar
    const categoryNav = Object.keys(categories).map(catKey => {
        const catName = categories[catKey];
        const catCases = related.filter(r => r.cat === catKey);
        const isActive = c.cat === catKey;

        return `
        <div class="category-group ${isActive ? 'active' : ''}">
            <div class="category-header" onclick="toggleCategory(this)">
                <span>${catName}</span>
                <span class="arrow">▼</span>
            </div>
            <div class="category-items" style="display: ${isActive ? 'block' : 'none'}">
                ${catCases.map(r => `
                    <a href="../${r.cat}/${r.slug}.html" class="${r.id === c.id ? 'active' : ''}">${r.title}</a>
                `).join('')}
            </div>
        </div>`;
    }).join('');

    // Prompts accordion
    const promptsHtml = c.prompts.map((p, i) => `
        <div class="prompt-item">
            <div class="prompt-header" onclick="togglePrompt(this)">
                <span>${p.title}</span>
                <span class="arrow">▼</span>
            </div>
            <div class="prompt-content" style="display: ${i === 0 ? 'block' : 'none'}">
                <button class="copy-btn" onclick="copyPrompt(this)">📋 Копировать</button>
                <pre>${p.content}</pre>
            </div>
        </div>
    `).join('');

    // Related cases links
    const relatedHtml = related
        .filter(r => r.cat === c.cat && r.id !== c.id)
        .slice(0, 5)
        .map(r => `
            <a href="../${r.cat}/${r.slug}.html" class="related-card">
                <strong>${r.title}</strong>
                <p style="font-size: 14px; color: #5f6368; margin-top: 8px;">${r.desc.substring(0, 80)}...</p>
            </a>
        `).join('');

    return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${c.seo.title}</title>
    <meta name="robots" content="noindex, nofollow">
    <meta name="description" content="${c.seo.description}">
    <meta name="keywords" content="${c.seo.keywords}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${config.siteUrl}/${c.cat}/${c.slug}.html">
    <meta property="og:title" content="${c.seo.title}">
    <meta property="og:description" content="${c.seo.description}">
    <meta property="og:image" content="${config.siteUrl}/assets/${c.image.url.split('/').pop()}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${config.siteUrl}/${c.cat}/${c.slug}.html">
    <meta name="twitter:title" content="${c.seo.title}">
    <meta name="twitter:description" content="${c.seo.description}">
    <meta name="twitter:image" content="${config.siteUrl}/assets/${c.image.url.split('/').pop()}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${config.siteUrl}/${c.cat}/${c.slug}.html">
    
    ${generateSchemaMarkup(c, config)}
    ${generateStyles()}
</head>
<body itemscope itemtype="https://schema.org/TechArticle">
    <div class="page-wrapper">
        <aside class="sidebar">
            <div class="toc">
                <h3>📋 Содержание</h3>
                <ul>
                    <li><a href="#overview">📖 Обзор</a></li>
                    <li><a href="#prompts">📝 Промпты (${c.prompts.length})</a></li>
                    <li><a href="#guide">🔧 Инструкция</a></li>
                    <li><a href="#faq">❓ FAQ (${c.faq.length})</a></li>
                    <li><a href="#related">🔗 Похожие</a></li>
                </ul>
            </div>
            <div class="categories">
                <h3>🗂️ Категории</h3>
                ${categoryNav}
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
                <h2 id="overview">📖 Обзор</h2>
                ${c.richContent}
                
                <h2 id="prompts">📝 Готовые промпты для копирования</h2>
                <p>Выберите подходящий промпт в зависимости от ваших требований:</p>
                <div class="prompts-accordion">
                    ${promptsHtml}
                </div>
                
                <h2 id="guide">🔧 Пошаговая инструкция</h2>
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
                        ${relatedHtml}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    ${generateScripts()}
</body>
</html>`;
}

function generateSchemaMarkup(c, config) {
    return `
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
                "item": `${config.siteUrl}/#${c.cat}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": c.title
            }
        ]
    })}
    </script>`;
}

function generateStyles() {
    return `<style>
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
        .toc { padding: 24px; border-bottom: 1px solid #e8eaed; }
        .toc h3 { color: #202124; margin-bottom: 20px; font-size: 1em; font-weight: 600; }
        .toc ul { list-style: none; }
        .toc li { margin: 0; }
        .toc a { display: block; color: #5f6368; text-decoration: none; padding: 10px 16px; border-radius: 4px; font-size: 14px; transition: all 0.2s; }
        .toc a:hover, .toc a.active { background: #e8f0fe; color: #1a73e8; }
        .categories { padding: 24px; }
        .categories h3 { color: #202124; margin-bottom: 16px; font-size: 1em; font-weight: 600; }
        .category-group { margin-bottom: 8px; }
        .category-header { padding: 10px 12px; background: #fff; border-radius: 4px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; }
        .category-header:hover { background: #e8eaed; }
        .category-items { padding-left: 12px; margin-top: 4px; }
        .category-items a { display: block; padding: 8px 12px; color: #5f6368; text-decoration: none; font-size: 13px; border-radius: 4px; }
        .category-items a:hover { background: #e8f0fe; color: #1a73e8; }
        .category-items a.active { background: #e8f0fe; color: #1a73e8; font-weight: 500; }
        .prompts-accordion { margin: 24px 0; }
        .prompt-item { margin: 16px 0; border: 1px solid #e8eaed; border-radius: 8px; overflow: hidden; }
        .prompt-header { background: #f8f9fa; padding: 16px 20px; cursor: pointer; display: flex; justify-content: space-between; font-weight: 500; color: #202124; }
        .prompt-header:hover { background: #e8eaed; }
        .prompt-content { padding: 20px; background: #263238; color: #aed581; position: relative; font-family: 'Courier New', monospace; font-size: 14px; display: none; }
        .prompt-item .prompt-content.active { display: block; }
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
    </style>`;
}

function generateScripts() {
    return `<script>
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
        
        function togglePrompt(element) {
            const promptItem = element.parentElement;
            const content = promptItem.querySelector('.prompt-content');
            const arrow = element.querySelector('.arrow');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                arrow.textContent = '▲';
            } else {
                content.style.display = 'none';
                arrow.textContent = '▼';
            }
        }
        
        function toggleCategory(element) {
            const group = element.parentElement;
            const items = group.querySelector('.category-items');
            const arrow = element.querySelector('.arrow');
            
            if (items.style.display === 'none') {
                items.style.display = 'block';
                arrow.textContent = '▲';
            } else {
                items.style.display = 'none';
                arrow.textContent = '▼';
            }
        }
    </script>`;
}

module.exports = { generatePageTemplate };
