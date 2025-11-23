# Руководство по интеграции с WordPress и GitHub

## 1. Импорт контента в WordPress (Быстрый способ)

Мы сгенерировали файл `dist/wordpress_import.xml`, который содержит все 100+ кейсов с SEO-оптимизацией, тегами и категориями.

**Инструкция:**
1. Зайдите в админку WordPress -> **Инструменты (Tools)** -> **Импорт (Import)**.
2. Выберите **WordPress** (установите плагин импорта, если нужно).
3. Загрузите файл `wordpress_import.xml` из папки `dist`.
4. Назначьте автора для записей.
5. Нажмите "Submit". Все кейсы появятся как "Записи" (Posts).

## 2. Автоматическое обновление через GitHub (Advanced)

Если вы хотите, чтобы изменения в репозитории GitHub автоматически обновляли WordPress, настройте следующий Workflow.

### Шаг 1: Подготовка
Вам понадобится плагин **Application Passwords** в WordPress или базовая аутентификация REST API.

### Шаг 2: Скрипт синхронизации
Создайте файл `.github/workflows/wp-sync.yml`:

```yaml
name: Sync to WordPress
on:
  push:
    branches:
      - main
    paths:
      - 'generator/data.js'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm install
      
      - name: Run Sync Script
        run: node generator/wp_sync.js
        env:
          WP_URL: ${{ secrets.WP_URL }}       # https://your-site.com
          WP_USER: ${{ secrets.WP_USER }}     # admin
          WP_APP_PASSWORD: ${{ secrets.WP_APP_PASSWORD }}
```

### Шаг 3: Скрипт `generator/wp_sync.js` (Пример)

```javascript
const https = require('https');
const { cases } = require('./data');

const WP_URL = process.env.WP_URL;
const AUTH = Buffer.from(`${process.env.WP_USER}:${process.env.WP_APP_PASSWORD}`).toString('base64');

async function syncPost(postData) {
    // Логика отправки POST запроса на /wp-json/wp/v2/posts
    // Проверка существования поста по slug и обновление (POST) или создание (POST)
}

// Запуск цикла по всем кейсам...
```

## 3. SEO и Контент
Для каждого кейса мы автоматически сгенерировали:
- **SEO Title/Description**: Оптимизировано под поисковые запросы.
- **Schema.org**: Разметка `FAQPage` и `HowTo` для Google Rich Snippets.
- **Keywords**: Теги добавлены автоматически.

## 4. Медиа
Изображение `antigravity_manager_dashboard.png` можно использовать как обложку для главной страницы документации или раздела "Core Features".
