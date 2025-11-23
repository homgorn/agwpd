# 📝 Как добавить новый кейс в документацию

## Быстрый способ (для вас)

Просто скопируйте описание кейса в чат с Antigravity в любом формате:

```
Название: Интеграция с Telegram Bot API
Описание: Создание бота для Telegram с обработкой команд и inline кнопок
Категория: API Integrations (или предложите новую)
```

Я автоматически:
1. Определю подходящую категорию (или создам новую)
2. Добавлю кейс в `generator/data.js`
3. Сгенерирую страницу с 15 FAQ и 17 шагами
4. Пересоберу сайт и опубликую на GitHub

## Ручной способ (для контрибьюторов)

### Шаг 1: Добавьте кейс в data.js

Откройте `generator/data.js` и добавьте объект в массив `rawCases`:

```javascript
{ 
    id: 'api-11',  // Следующий ID в категории
    cat: 'api',    // Категория
    title: 'Telegram Bot API', 
    desc: 'Создание бота для Telegram с обработкой команд.' 
}
```

### Шаг 2: Пересоберите сайт

```bash
node generator/build.js
```

### Шаг 3: Проверьте локально

```bash
cd dist
python3 -m http.server 8000
# Откройте http://localhost:8000/api/api-11.html
```

### Шаг 4: Опубликуйте

```bash
git add -A
git commit -m "Add new case: Telegram Bot API"
git push origin main
```

## Доступные категории

- `core` — Antigravity Core Features
- `web` — Web Development
- `backend` — Backend Systems
- `ds` — Data Science & ML
- `devops` — DevOps & Cloud
- `qa` — QA & Testing
- `refactor` — Refactoring
- `debug` — Debugging
- `docs` — Documentation
- `api` — API Integrations
- `auto` — Automation
- `mcp` — MCP (Model Context Protocol)

## Создание новой категории

Если нужна новая категория, добавьте её в `categories` объект:

```javascript
const categories = {
    // ... existing
    mobile: "Mobile Development"
};
```

И в `categoryImages`:

```javascript
const categoryImages = {
    // ... existing
    mobile: 'ag_mobile.png'
};
```

## Что генерируется автоматически

Для каждого кейса автоматически создается:
- ✅ Уникальный SEO title и description
- ✅ 15 FAQ вопросов-ответов
- ✅ 17 детальных шагов инструкции
- ✅ Schema.org разметка (FAQPage, HowTo, BreadcrumbList)
- ✅ Перелинковка с похожими кейсами
- ✅ Интерактивная страница с копируемым промптом

## Промпт-шаблон для меня (Antigravity)

Когда вы хотите добавить кейс, просто напишите:

```
Добавь кейс:
[Название кейса]
[Описание в 1-2 предложения]
[Категория или "создай новую"]
```

Я сделаю всё остальное! 🚀
