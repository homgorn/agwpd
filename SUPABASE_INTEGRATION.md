# Supabase Integration Guide

## Setup

### 1. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### 2. Create Supabase Table

SQL для создания таблицы в Supabase:

```sql
CREATE TABLE antigravity_cases (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    category_name TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    seo_title TEXT,
    seo_description TEXT,
    keywords TEXT,
    faq JSONB,
    howto JSONB,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_category ON antigravity_cases(category);
CREATE INDEX idx_title ON antigravity_cases USING GIN(to_tsvector('russian', title));
```

### 3. Configure Environment Variables

Добавьте в `.env`:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

### 4. Enable Sync in build.js

Раскомментируйте в конце `generator/build.js`:

```javascript
const { syncToSupabase } = require('./supabase_sync');

// ... existing code ...

// Uncomment to enable Supabase sync
// syncToSupabase(cases).then(() => {
//     console.log('All done!');
// });
```

## Usage

После настройки, каждый запуск `node generator/build.js` будет:
1. Генерировать HTML страницы
2. Синхронизировать данные с Supabase

## Querying Data

Примеры запросов к Supabase:

```javascript
// Get all cases
const { data } = await supabase
    .from('antigravity_cases')
    .select('*');

// Search by title
const { data } = await supabase
    .from('antigravity_cases')
    .select('*')
    .textSearch('title', 'React');

// Get by category
const { data } = await supabase
    .from('antigravity_cases')
    .select('*')
    .eq('category', 'web');
```

## Benefits

- 📊 **Analytics** — отслеживание популярных кейсов
- 🔍 **Full-text search** — поиск по содержимому
- 🌐 **API** — доступ к данным через REST/GraphQL
- 📱 **Mobile apps** — использование в мобильных приложениях
- 🔄 **Real-time** — подписки на изменения
