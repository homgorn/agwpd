# Руководство по внесению вклада в Antigravity Documentation

Спасибо за интерес к улучшению документации Google Antigravity! 🚀

## 📝 Как добавить новый кейс использования

### Шаг 1: Форкните репозиторий
Нажмите кнопку "Fork" в правом верхнем углу этой страницы.

### Шаг 2: Клонируйте свой форк
```bash
git clone https://github.com/ВАШ_ЮЗЕРНЕЙМ/ag_docs_wp.git
cd ag_docs_wp
```

### Шаг 3: Создайте новую ветку
```bash
git checkout -b add-new-case-название-кейса
```

### Шаг 4: Добавьте кейс в `generator/data.js`

Найдите нужную категорию и добавьте объект в массив `rawCases`:

```javascript
{
    id: 'web-11', // Следующий по порядку ID
    title: 'Название вашего кейса',
    desc: 'Краткое описание (1-2 предложения)'
}
```

#### Доступные категории:
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

### Шаг 5: Сгенерируйте страницы
```bash
node generator/build.js
```

Это создаст HTML файл для вашего кейса в папке `dist/`.

### Шаг 6: Проверьте результат локально
```bash
cd dist
python3 -m http.server 8000
```

Откройте http://localhost:8000/категория/ваш-id.html

### Шаг 7: Закоммитьте изменения
```bash
git add generator/data.js
git commit -m "Add new case: Название кейса"
git push origin add-new-case-название-кейса
```

### Шаг 8: Создайте Pull Request
1. Перейдите на GitHub в свой форк
2. Нажмите "Compare & pull request"
3. Заполните описание:
   - Какой кейс вы добавили
   - Почему он полезен
   - Скриншот результата (опционально)

## 🐛 Нашли ошибку?

Создайте [Issue](https://github.com/homgorn/ag_docs_wp/issues/new) с описанием:
- Какая страница
- Что не так
- Как должно быть

## 💡 Предложения по улучшению

Мы приветствуем:
- Новые кейсы использования
- Улучшение существующих промптов
- Добавление ссылок на полезные сервисы
- Исправление опечаток
- Улучшение SEO

## 📋 Требования к контенту

### Для новых кейсов:
- ✅ Реальный практический сценарий
- ✅ Понятное название (3-5 слов)
- ✅ Краткое описание (1-2 предложения)
- ✅ Уникальность (не дублирует существующие)

### Стиль написания:
- Используйте русский язык
- Пишите просто и понятно
- Избегайте жаргона без объяснений
- Добавляйте примеры

## 🔄 Процесс ревью

1. Мы проверим ваш PR в течение 48 часов
2. Возможны запросы на изменения
3. После одобрения — мерж в main
4. Автоматический деплой на GitHub Pages

## 🎯 Приоритетные направления

Сейчас особенно нужны кейсы по:
- Mobile Development (iOS, Android, React Native)
- Game Development
- Blockchain & Web3
- AI/ML интеграции
- Accessibility (a11y)

## 📞 Контакты

Вопросы? Создайте [Discussion](https://github.com/homgorn/ag_docs_wp/discussions)

---

**Спасибо за вклад в развитие документации Antigravity!** 🙏
