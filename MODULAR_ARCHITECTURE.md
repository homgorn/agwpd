# 🧩 Модульная архитектура: Избежание лимитов токенов

## Проблема

При работе с большими проектами (1000+ строк кода) возникает проблема лимита токенов при взаимодействии с AI. Решение — **модульная архитектура**.

---

## Принципы разбиения кода

### 1. **Один файл = Одна ответственность**

❌ **Плохо:**
```javascript
// build.js (500+ строк)
// - генерация HTML
// - генерация sitemap
// - генерация WordPress XML
// - все шаблоны
```

✅ **Хорошо:**
```
generator/
├── build.js (50 строк - orchestrator)
├── templates/
│   ├── page-template.js (200 строк)
│   ├── sidebar-template.js (100 строк)
│   └── prompts-template.js (80 строк)
├── generators/
│   ├── html-generator.js (150 строк)
│   ├── sitemap-generator.js (100 строк)
│   └── wp-generator.js (120 строк)
└── utils/
    ├── slug-helpers.js (50 строк)
    └── content-generator.js (200 строк)
```

---

### 2. **Максимальный размер файла: 300 строк**

Если файл > 300 строк → разбить на модули

**Пример:**
```javascript
// ❌ data.js (500 строк)
const rawCases = [...]; // 200 строк
function enrichData() {...} // 300 строк

// ✅ Разбить:
// data/raw-cases.js (200 строк)
// data/enrichment.js (150 строк)
// data/index.js (50 строк - экспорт)
```

---

### 3. **Функции: максимум 50 строк**

Если функция > 50 строк → разбить на подфункции

**Пример:**
```javascript
// ❌ Плохо (100 строк)
function generatePageTemplate(c, config) {
  // 20 строк meta теги
  // 30 строк HTML структура
  // 30 строк стили
  // 20 строк скрипты
}

// ✅ Хорошо
function generatePageTemplate(c, config) {
  return `
    ${generateMetaTags(c, config)}
    ${generateHTML(c)}
    ${generateStyles()}
    ${generateScripts()}
  `;
}

function generateMetaTags(c, config) { /* 20 строк */ }
function generateHTML(c) { /* 30 строк */ }
function generateStyles() { /* 30 строк */ }
function generateScripts() { /* 20 строк */ }
```

---

## Структура проекта

### Рекомендуемая структура

```
project/
├── README.md                    # Обзор проекта
├── ARCHITECTURE.md              # Архитектура (этот файл)
├── package.json
├── .github/
│   └── workflows/
│       ├── quality-check.yml
│       └── self-review.yml
├── generator/
│   ├── build.js                 # Главный файл (50 строк)
│   ├── config.js                # Конфигурация (20 строк)
│   ├── data/
│   │   ├── index.js             # Экспорт (10 строк)
│   │   ├── raw-cases.js         # Данные (200 строк)
│   │   ├── categories.js        # Категории (30 строк)
│   │   └── enrichment.js        # Обогащение (150 строк)
│   ├── templates/
│   │   ├── page-template.js     # Шаблон страницы (200 строк)
│   │   ├── meta-tags.js         # Meta теги (80 строк)
│   │   ├── sidebar.js           # Сайдбар (100 строк)
│   │   └── prompts.js           # Промпты (80 строк)
│   ├── generators/
│   │   ├── html-generator.js    # HTML генератор (150 строк)
│   │   ├── sitemap-generator.js # Sitemap (100 строк)
│   │   └── wp-generator.js      # WordPress (120 строк)
│   └── utils/
│       ├── slug.js              # Slug helpers (50 строк)
│       ├── content.js           # Контент генератор (200 строк)
│       └── validation.js        # Валидация (80 строк)
├── dist/                        # Сгенерированные файлы
└── assets/                      # Изображения
```

---

## Правила именования

### Файлы

- **Kebab-case:** `page-template.js`, `slug-helpers.js`
- **Суффиксы:**
  - `-generator.js` — генераторы
  - `-template.js` — шаблоны
  - `-helpers.js` — утилиты
  - `.config.js` — конфигурация

### Функции

- **camelCase:** `generatePageTemplate`, `createSlug`
- **Префиксы:**
  - `generate*` — создание контента
  - `create*` — создание объектов
  - `validate*` — проверка
  - `format*` — форматирование

---

## Пример модульной архитектуры

### Главный файл (build.js)

```javascript
// generator/build.js (50 строк)
const { generateHTML } = require('./generators/html-generator');
const { generateSitemap } = require('./generators/sitemap-generator');
const { generateWP } = require('./generators/wp-generator');
const { cases } = require('./data');

function build() {
  console.log('Building...');
  generateHTML(cases);
  generateSitemap(cases);
  generateWP(cases);
  console.log('Done!');
}

build();
```

### Модуль генератора (html-generator.js)

```javascript
// generator/generators/html-generator.js (150 строк)
const { generatePageTemplate } = require('../templates/page-template');
const fs = require('fs');
const path = require('path');

function generateHTML(cases) {
  cases.forEach(c => {
    const html = generatePageTemplate(c);
    const filePath = path.join(__dirname, '../../dist', c.cat, `${c.slug}.html`);
    fs.writeFileSync(filePath, html);
  });
}

module.exports = { generateHTML };
```

### Модуль шаблона (page-template.js)

```javascript
// generator/templates/page-template.js (200 строк)
const { generateMetaTags } = require('./meta-tags');
const { generateSidebar } = require('./sidebar');
const { generatePrompts } = require('./prompts');

function generatePageTemplate(c) {
  return `<!DOCTYPE html>
<html>
<head>
  ${generateMetaTags(c)}
</head>
<body>
  ${generateSidebar(c)}
  <main>
    ${generatePrompts(c)}
  </main>
</body>
</html>`;
}

module.exports = { generatePageTemplate };
```

---

## Работа с AI при модульной архитектуре

### ✅ Правильный подход

**Шаг 1:** Показать структуру проекта
```
Вот структура проекта:
generator/
├── build.js
├── templates/
│   └── page-template.js
└── data/
    └── raw-cases.js
```

**Шаг 2:** Работать с одним модулем
```
Обнови generator/templates/page-template.js:
- Добавь секцию промптов
- Используй функцию generatePrompts()
```

**Шаг 3:** Интегрировать изменения
```
Теперь обнови build.js чтобы использовать новый шаблон
```

### ❌ Неправильный подход

```
Обнови весь проект: добавь промпты, исправь стили, 
обнови данные, пересобери всё
```
→ Слишком много токенов!

---

## Чеклист перед работой с AI

- [ ] Файл < 300 строк?
- [ ] Функция < 50 строк?
- [ ] Одна ответственность?
- [ ] Понятное имя?
- [ ] Есть комментарии?
- [ ] Экспортируется через module.exports?

---

## Инструкция для AI

### Промпт-шаблон

```
Я работаю над проектом с модульной архитектурой.

Структура:
[показать дерево файлов]

Текущая задача:
[описать задачу для ОДНОГО модуля]

Файл для изменения:
[путь к файлу]

Что нужно сделать:
1. [конкретное действие 1]
2. [конкретное действие 2]

Ограничения:
- Файл должен остаться < 300 строк
- Функции < 50 строк
- Использовать существующие утилиты из utils/
```

---

## Автоматизация

### Pre-commit hook (проверка размера файлов)

```bash
#!/bin/bash
# .git/hooks/pre-commit

MAX_LINES=300

for file in $(git diff --cached --name-only | grep '\.js$'); do
  lines=$(wc -l < "$file")
  if [ $lines -gt $MAX_LINES ]; then
    echo "❌ $file has $lines lines (max $MAX_LINES)"
    echo "   Consider splitting into modules"
    exit 1
  fi
done

echo "✅ All files within size limits"
```

### GitHub Action (проверка при PR)

```yaml
name: Check File Sizes

on: [pull_request]

jobs:
  check-sizes:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Check file sizes
        run: |
          find . -name "*.js" -type f | while read file; do
            lines=$(wc -l < "$file")
            if [ $lines -gt 300 ]; then
              echo "::warning file=$file::File has $lines lines (recommended max: 300)"
            fi
          done
```

---

## Рефакторинг существующего кода

### Шаг 1: Анализ

```bash
# Найти большие файлы
find generator -name "*.js" -exec wc -l {} + | sort -rn | head -10
```

### Шаг 2: Разбиение

```javascript
// Было: build.js (500 строк)

// Стало:
// build.js (50 строк) - orchestrator
// generators/html-generator.js (150 строк)
// generators/sitemap-generator.js (100 строк)
// templates/page-template.js (200 строк)
```

### Шаг 3: Тестирование

```bash
# Проверить что всё работает
node generator/build.js
```

---

## Преимущества модульной архитектуры

✅ **Для AI:**
- Меньше токенов на запрос
- Точечные изменения
- Легче понять контекст

✅ **Для разработчика:**
- Легче поддерживать
- Проще тестировать
- Быстрее находить баги

✅ **Для команды:**
- Меньше конфликтов в Git
- Параллельная разработка
- Переиспользование модулей

---

## Примеры из реальных проектов

### Next.js
```
app/
├── layout.tsx (50 строк)
├── page.tsx (80 строк)
└── components/
    ├── Header.tsx (100 строк)
    └── Footer.tsx (80 строк)
```

### Express.js
```
src/
├── app.js (50 строк)
├── routes/
│   ├── users.js (100 строк)
│   └── posts.js (120 строк)
└── middleware/
    ├── auth.js (80 строк)
    └── validation.js (90 строк)
```

---

## Итого

**Золотое правило:**
> Если файл не помещается на один экран (300 строк) — разбей на модули

**Для работы с AI:**
> Один запрос = Один модуль = Один файл

**Результат:**
> Меньше токенов + Лучше код + Быстрее разработка
