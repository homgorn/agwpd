# Google Antigravity Documentation

> Comprehensive Russian documentation and 100+ use cases for Google Antigravity - The Agent-First IDE

[![GitHub Pages](https://img.shields.io/badge/docs-live-brightgreen)](https://homgorn.github.io/agwpd/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🚀 О проекте

Это полная русскоязычная документация для Google Antigravity с более чем 100 детальными кейсами использования, охватывающими:

- 🌐 Web Development (React, Next.js, Vue)
- ⚙️ Backend Systems (Node.js, Python, Go)
- 📊 Data Science & ML
- ☁️ DevOps & Cloud
- 🧪 QA & Testing
- 🔧 Refactoring & Debugging
- 📝 Documentation
- 🔌 API Integrations
- 🤖 Automation

## 📖 Документация

Посетите [https://homgorn.github.io/agwpd/](https://homgorn.github.io/agwpd/) для просмотра полной документации.

## 🛠️ Локальная разработка

### Требования
- Node.js 16+
- Git

### Установка

```bash
git clone https://github.com/homgorn/agwpd.git
cd agwpd
```

### Генерация страниц

```bash
node generator/build.js
```

### Локальный просмотр

```bash
cd dist
python3 -m http.server 8000
```

Откройте http://localhost:8000

## 🤝 Внесение вклада

Мы приветствуем вклад сообщества! См. [CONTRIBUTING.md](CONTRIBUTING.md) для деталей.

### Быстрый старт для контрибьюторов

1. Форкните репозиторий
2. Создайте ветку (`git checkout -b feature/amazing-case`)
3. Добавьте кейс в `generator/data.js`
4. Сгенерируйте страницы (`node generator/build.js`)
5. Закоммитьте (`git commit -m 'Add amazing case'`)
6. Запушьте (`git push origin feature/amazing-case`)
7. Создайте Pull Request

## 📁 Структура проекта

```
.
├── generator/          # Генератор статических страниц
│   ├── data.js        # Данные всех кейсов
│   ├── build.js       # Скрипт генерации HTML
│   └── config.js      # Конфигурация сайта
├── dist/              # Сгенерированные HTML страницы
├── .github/           # GitHub Actions и templates
└── index.html         # Главная страница
```

## 🔄 Автоматизация

- **GitHub Actions** автоматически генерирует и публикует страницы при push в `main`
- **WordPress синхронизация** (опционально) через `wp_sync.js`

## 📝 Лицензия

MIT License - см. [LICENSE](LICENSE)

## 🙏 Благодарности

- Google DeepMind за создание Antigravity
- Всем контрибьюторам этого проекта

## 📞 Контакты

- Issues: [GitHub Issues](https://github.com/homgorn/agwpd/issues)
- Discussions: [GitHub Discussions](https://github.com/homgorn/agwpd/discussions)

---

**Сделано с ❤️ сообществом Antigravity**