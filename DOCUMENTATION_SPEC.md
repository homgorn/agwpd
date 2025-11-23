# 📋 Спецификация: Генератор документации (шаблон для тысяч проектов)

## Архитектура

### Структура проекта
```
project-name/
├── generator/
│   ├── data.js              # Данные кейсов
│   ├── build.js             # Главный билдер (модульный)
│   ├── config.js            # Конфигурация (домен, название)
│   ├── templates/
│   │   └── page-template.js # HTML шаблон
│   └── content-generator.js # AI генерация уникального контента
├── dist/                    # Сгенерированные HTML
├── assets/                  # Изображения
├── Dockerfile              # Docker образ
├── docker-compose.yml      # Для Coolify
├── nginx.conf              # Nginx конфиг
└── .env.example            # Переменные окружения
```

## Ключевые принципы

### 1. Уникальный контент
- ❌ НЕ использовать шаблонный текст
- ✅ Генерировать специфичный контент для каждого кейса
- ✅ Таблицы с реальными данными (версии, команды, параметры)
- ✅ Примеры кода для конкретной технологии

### 2. SEO оптимизация
- ✅ Slug-based URLs (транслитерация)
- ✅ Уникальные meta теги (title, description)
- ✅ Schema.org разметка (FAQPage, HowTo, BreadcrumbList)
- ✅ Open Graph + Twitter Card
- ✅ Canonical URLs
- ✅ XML + HTML sitemap
- ✅ robots.txt

### 3. Производительность
- ✅ Статические HTML (не SPA)
- ✅ Минимальный JS (только для UI)
- ✅ Lazy loading изображений
- ✅ Gzip compression (Nginx)
- ✅ CDN ready

### 4. Масштабируемость
- ✅ Модульная архитектура
- ✅ Генератор контента отдельно
- ✅ Легко добавлять новые кейсы
- ✅ Автоматизация через GitHub Actions

## Docker + Coolify

### Dockerfile
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

### docker-compose.yml
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    environment:
      - DOMAIN=${DOMAIN}
    restart: unless-stopped
```

### Coolify деплой
1. Подключить GitHub репозиторий
2. Выбрать Docker Compose
3. Добавить переменные окружения
4. Настроить домен
5. Auto-deploy on push

## Генерация контента

### Для каждого кейса генерировать:

**1. Специфичные промпты (3 шт)**
- Базовый: конкретная задача + технология
- Продвинутый: с реальными требованиями
- Production: с тестами, CI/CD, мониторингом

**2. Уникальный richContent**
- Таблица версий/зависимостей
- Команды установки
- Примеры конфигурации
- Сравнение альтернатив
- Реальные use cases

**3. FAQ (15 шт)**
- Специфичные для технологии вопросы
- Не общие, а конкретные

**4. HowTo (17 шагов)**
- Детальная инструкция
- С командами и скриншотами

## Workflow для тысяч проектов

### Шаг 1: Клонирование шаблона
```bash
git clone template-repo new-project
cd new-project
```

### Шаг 2: Конфигурация
```bash
# Обновить config.js
SITE_TITLE="New Documentation"
SITE_URL="https://newdocs.com"
DOMAIN="newdocs.com"
```

### Шаг 3: Добавление данных
```javascript
// generator/data.js
const rawCases = [
    { id: 'case-1', cat: 'category', title: '...', desc: '...' }
];
```

### Шаг 4: Генерация
```bash
node generator/build.js
```

### Шаг 5: Деплой
```bash
# Через Coolify
git push origin main
# Или Docker
docker-compose up -d
```

## Автоматизация

### GitHub Actions
```yaml
name: Build and Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: node generator/build.js
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Coolify Webhook
- Auto-deploy on git push
- Environment variables from UI
- SSL автоматически (Let's Encrypt)

## Оптимизации

### 1. Размер файлов
- Минификация HTML
- Оптимизация изображений (WebP)
- Удаление дублирующегося CSS

### 2. Скорость генерации
- Параллельная обработка кейсов
- Кэширование шаблонов
- Инкрементальная сборка

### 3. SEO
- Уникальный контент (не шаблоны!)
- Внутренняя перелинковка
- Structured data

## Чеклист для нового проекта

- [ ] Склонировать шаблон
- [ ] Обновить config.js (домен, название)
- [ ] Добавить данные в data.js
- [ ] Сгенерировать уникальный контент
- [ ] Добавить изображения в assets/
- [ ] Запустить build.js
- [ ] Проверить 3-5 страниц
- [ ] Настроить Coolify
- [ ] Добавить домен
- [ ] Включить SSL
- [ ] Снять noindex
- [ ] Отправить в Google Search Console

## Мониторинг

- Google Analytics
- Google Search Console
- Uptime monitoring (UptimeRobot)
- Error tracking (Sentry)

## Стоимость на 1000 проектов

- Хостинг: Coolify (self-hosted) - $0
- Домены: ~$10/год × 1000 = $10,000/год
- CDN: Cloudflare Free
- SSL: Let's Encrypt Free
- **Итого: ~$10k/год для 1000 сайтов**

## Рекомендации

1. **Один шаблон** — поддерживать централизованно
2. **Автоматизация** — GitHub Actions для всех проектов
3. **Мониторинг** — единая панель для всех сайтов
4. **Контент** — AI генерация уникального текста
5. **Домены** — bulk регистрация через API
