const useCases = [
    {
        "id": "core-1",
        "category": "core",
        "title": "Agent-First IDE Workflow",
        "desc": "Как использовать агент-ориентированный подход вместо традиционного редактора.",
        "link": "./core/core-1.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-2",
        "category": "core",
        "title": "Manager Surface Dashboard",
        "desc": "Управление несколькими агентами через Mission Control интерфейс.",
        "link": "./core/core-2.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-3",
        "category": "core",
        "title": "Browser Subagent Automation",
        "desc": "Использование встроенного браузерного агента для E2E тестов и веб-скрапинга.",
        "link": "./core/core-3.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-4",
        "category": "core",
        "title": "Generating Artifacts",
        "desc": "Создание и экспорт артефактов: планы, диаграммы, видео-отчеты.",
        "link": "./core/core-4.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-5",
        "category": "core",
        "title": "Multi-Agent Collaboration",
        "desc": "Запуск параллельных агентов для фронтенда и бэкенда одновременно.",
        "link": "./core/core-5.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-6",
        "category": "core",
        "title": "Feedback Loops & Learning",
        "desc": "Как обучать агента через комментарии в стиле Google Docs.",
        "link": "./core/core-6.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-7",
        "category": "core",
        "title": "Model Selection (Gemini/Claude)",
        "desc": "Переключение между Gemini 3, Claude Sonnet 4.5 и GPT-OSS.",
        "link": "./core/core-7.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-8",
        "category": "core",
        "title": "Context Management",
        "desc": "Управление контекстом и базой знаний агента.",
        "link": "./core/core-8.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-9",
        "category": "core",
        "title": "Terminal Integration",
        "desc": "Безопасное выполнение терминальных команд агентом.",
        "link": "./core/core-9.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-10",
        "category": "core",
        "title": "Visual Regression with Artifacts",
        "desc": "Использование скриншотов-артефактов для визуальной проверки.",
        "link": "./core/core-10.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "web-1",
        "category": "web-dev",
        "title": "React Component Generation",
        "desc": "Создание функциональных компонентов с пропсами и типами.",
        "link": "./web/web-1.html",
        "tag": "Web Development"
    },
    {
        "id": "web-2",
        "category": "web-dev",
        "title": "Tailwind CSS Conversion",
        "desc": "Миграция с CSS/SASS на Tailwind Utility Classes.",
        "link": "./web/web-2.html",
        "tag": "Web Development"
    },
    {
        "id": "web-3",
        "category": "web-dev",
        "title": "Next.js App Router Setup",
        "desc": "Скаффолдинг структуры папок для Next.js 14+.",
        "link": "./web/web-3.html",
        "tag": "Web Development"
    },
    {
        "id": "web-4",
        "category": "web-dev",
        "title": "Form Validation (Zod/RHF)",
        "desc": "Генерация форм с клиентской и серверной валидацией.",
        "link": "./web/web-4.html",
        "tag": "Web Development"
    },
    {
        "id": "web-5",
        "category": "web-dev",
        "title": "Responsive Design Implementation",
        "desc": "Адаптация верстки под мобильные устройства.",
        "link": "./web/web-5.html",
        "tag": "Web Development"
    },
    {
        "id": "web-6",
        "category": "web-dev",
        "title": "Dark Mode Integration",
        "desc": "Реализация темизации с системными настройками.",
        "link": "./web/web-6.html",
        "tag": "Web Development"
    },
    {
        "id": "web-7",
        "category": "web-dev",
        "title": "Framer Motion Animations",
        "desc": "Добавление декларативных анимаций интерфейса.",
        "link": "./web/web-7.html",
        "tag": "Web Development"
    },
    {
        "id": "web-8",
        "category": "web-dev",
        "title": "Web Performance Optimization",
        "desc": "Lazy loading, оптимизация шрифтов и изображений.",
        "link": "./web/web-8.html",
        "tag": "Web Development"
    },
    {
        "id": "web-9",
        "category": "web-dev",
        "title": "PWA Configuration",
        "desc": "Настройка Service Workers и манифеста.",
        "link": "./web/web-9.html",
        "tag": "Web Development"
    },
    {
        "id": "web-10",
        "category": "web-dev",
        "title": "Accessibility (a11y) Audit",
        "desc": "Автоматическое исправление ARIA-атрибутов.",
        "link": "./web/web-10.html",
        "tag": "Web Development"
    },
    {
        "id": "be-1",
        "category": "backend",
        "title": "Go REST API Boilerplate",
        "desc": "Генерация сервиса на Gin/Echo с чистой архитектурой.",
        "link": "./backend/be-1.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-2",
        "category": "backend",
        "title": "GraphQL Schema Generation",
        "desc": "Создание схемы и резолверов из SQL моделей.",
        "link": "./backend/be-2.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-3",
        "category": "backend",
        "title": "PostgreSQL Migrations",
        "desc": "Написание SQL миграций для изменения схемы БД.",
        "link": "./backend/be-3.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-4",
        "category": "backend",
        "title": "JWT Auth Implementation",
        "desc": "Полный цикл аутентификации и авторизации.",
        "link": "./backend/be-4.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-5",
        "category": "backend",
        "title": "Redis Caching Layer",
        "desc": "Интеграция кэширования для высоконагруженных API.",
        "link": "./backend/be-5.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-6",
        "category": "backend",
        "title": "gRPC Microservices",
        "desc": "Создание .proto файлов и генерация кода сервисов.",
        "link": "./backend/be-6.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-7",
        "category": "backend",
        "title": "WebSocket Real-time Server",
        "desc": "Чат-сервер на Node.js или Go.",
        "link": "./backend/be-7.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-8",
        "category": "backend",
        "title": "Message Queue Consumers",
        "desc": "Обработка сообщений RabbitMQ/Kafka.",
        "link": "./backend/be-8.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-9",
        "category": "backend",
        "title": "Serverless Functions (AWS)",
        "desc": "Деплой Lambda функций через SAM или Terraform.",
        "link": "./backend/be-9.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-10",
        "category": "backend",
        "title": "Logging & Telemetry",
        "desc": "Настройка OpenTelemetry и ELK стека.",
        "link": "./backend/be-10.html",
        "tag": "Backend Systems"
    },
    {
        "id": "ds-1",
        "category": "datascience",
        "title": "EDA Report Generation",
        "desc": "Автоматический разведочный анализ данных (Pandas).",
        "link": "./ds/ds-1.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-2",
        "category": "datascience",
        "title": "Scikit-learn Model Training",
        "desc": "Пайплайн обучения и валидации классификатора.",
        "link": "./ds/ds-2.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-3",
        "category": "datascience",
        "title": "Advanced Matplotlib Plots",
        "desc": "Генерация сложных визуализаций для публикаций.",
        "link": "./ds/ds-3.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-4",
        "category": "datascience",
        "title": "PyTorch CNN Architecture",
        "desc": "Создание нейросети для компьютерного зрения.",
        "link": "./ds/ds-4.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-5",
        "category": "datascience",
        "title": "NLP Text Preprocessing",
        "desc": "Токенизация и лемматизация с NLTK/Spacy.",
        "link": "./ds/ds-5.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-6",
        "category": "datascience",
        "title": "Jupyter Notebook Refactoring",
        "desc": "Очистка ноутбуков для продакшена.",
        "link": "./ds/ds-6.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-7",
        "category": "datascience",
        "title": "Data Cleaning Scripts",
        "desc": "Обработка пропусков и выбросов в датасетах.",
        "link": "./ds/ds-7.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-8",
        "category": "datascience",
        "title": "Airflow DAG Creation",
        "desc": "Написание ETL процессов для Apache Airflow.",
        "link": "./ds/ds-8.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-9",
        "category": "datascience",
        "title": "FastAPI Model Serving",
        "desc": "Обертка ML модели в REST API.",
        "link": "./ds/ds-9.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-10",
        "category": "datascience",
        "title": "A/B Test Analysis",
        "desc": "Статистический анализ результатов экспериментов.",
        "link": "./ds/ds-10.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ops-1",
        "category": "devops",
        "title": "Docker Compose Setup",
        "desc": "Мульти-контейнерная среда для разработки.",
        "link": "./devops/ops-1.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-2",
        "category": "devops",
        "title": "K8s Manifest Generation",
        "desc": "Deployment, Service и Ingress для Kubernetes.",
        "link": "./devops/ops-2.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-3",
        "category": "devops",
        "title": "Terraform AWS Infrastructure",
        "desc": "IaC для VPC, EC2 и RDS.",
        "link": "./devops/ops-3.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-4",
        "category": "devops",
        "title": "GitHub Actions CI/CD",
        "desc": "Пайплайн сборки, тестов и деплоя.",
        "link": "./devops/ops-4.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-5",
        "category": "devops",
        "title": "Nginx Reverse Proxy",
        "desc": "Конфигурация проксирования и SSL.",
        "link": "./devops/ops-5.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-6",
        "category": "devops",
        "title": "Ansible Playbooks",
        "desc": "Управление конфигурацией серверов.",
        "link": "./devops/ops-6.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-7",
        "category": "devops",
        "title": "Prometheus Alerting",
        "desc": "Настройка правил для Alertmanager.",
        "link": "./devops/ops-7.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-8",
        "category": "devops",
        "title": "Bash Maintenance Scripts",
        "desc": "Скрипты бэкапов и ротации логов.",
        "link": "./devops/ops-8.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-9",
        "category": "devops",
        "title": "SSL Certificate Auto-renewal",
        "desc": "Настройка Certbot и Let's Encrypt.",
        "link": "./devops/ops-9.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-10",
        "category": "devops",
        "title": "Cloudflare Workers Deploy",
        "desc": "Развертывание Edge-функций.",
        "link": "./devops/ops-10.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "qa-1",
        "category": "testing",
        "title": "Jest Unit Testing",
        "desc": "Генерация тестов для JS/TS функций.",
        "link": "./qa/qa-1.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-2",
        "category": "testing",
        "title": "Cypress E2E Scenarios",
        "desc": "Сквозное тестирование пользовательских путей.",
        "link": "./qa/qa-2.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-3",
        "category": "testing",
        "title": "Playwright Cross-browser",
        "desc": "Автоматизация браузерных тестов.",
        "link": "./qa/qa-3.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-4",
        "category": "testing",
        "title": "Postman Collection Gen",
        "desc": "Создание коллекции тестов для API.",
        "link": "./qa/qa-4.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-5",
        "category": "testing",
        "title": "k6 Load Testing",
        "desc": "Нагрузочное тестирование производительности.",
        "link": "./qa/qa-5.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-6",
        "category": "testing",
        "title": "Faker.js Mock Data",
        "desc": "Генерация реалистичных тестовых данных.",
        "link": "./qa/qa-6.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-7",
        "category": "testing",
        "title": "Storybook Visual Tests",
        "desc": "Тестирование компонентов в изоляции.",
        "link": "./qa/qa-7.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-8",
        "category": "testing",
        "title": "OWASP ZAP Security Scan",
        "desc": "Автоматизированный поиск уязвимостей.",
        "link": "./qa/qa-8.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-9",
        "category": "testing",
        "title": "Appium Mobile Tests",
        "desc": "Тесты для iOS и Android приложений.",
        "link": "./qa/qa-9.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-10",
        "category": "testing",
        "title": "Coverage Reports Setup",
        "desc": "Интеграция Codecov или Istanbul.",
        "link": "./qa/qa-10.html",
        "tag": "QA & Testing"
    },
    {
        "id": "ref-1",
        "category": "refactoring",
        "title": "Legacy JS to Modern",
        "desc": "Обновление синтаксиса (ES6+).",
        "link": "./refactor/ref-1.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-2",
        "category": "refactoring",
        "title": "Extract React Component",
        "desc": "Декомпозиция больших компонентов.",
        "link": "./refactor/ref-2.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-3",
        "category": "refactoring",
        "title": "Optimize Imports",
        "desc": "Удаление неиспользуемых зависимостей.",
        "link": "./refactor/ref-3.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-4",
        "category": "refactoring",
        "title": "Variable Renaming",
        "desc": "Улучшение читаемости кода.",
        "link": "./refactor/ref-4.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-5",
        "category": "refactoring",
        "title": "Class to Function",
        "desc": "Миграция на React Hooks.",
        "link": "./refactor/ref-5.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-6",
        "category": "refactoring",
        "title": "Logic Simplification",
        "desc": "Устранение вложенности (Guard Clauses).",
        "link": "./refactor/ref-6.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-7",
        "category": "refactoring",
        "title": "TypeScript Migration",
        "desc": "Добавление строгой типизации в JS проект.",
        "link": "./refactor/ref-7.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-8",
        "category": "refactoring",
        "title": "CSS Cleanup",
        "desc": "Удаление мертвого CSS кода.",
        "link": "./refactor/ref-8.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-9",
        "category": "refactoring",
        "title": "Design Patterns Impl",
        "desc": "Внедрение Singleton, Factory, Observer.",
        "link": "./refactor/ref-9.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-10",
        "category": "refactoring",
        "title": "Dead Code Elimination",
        "desc": "Анализ и удаление неиспользуемого кода.",
        "link": "./refactor/ref-10.html",
        "tag": "Refactoring"
    },
    {
        "id": "dbg-1",
        "category": "debugging",
        "title": "Stack Trace Analysis",
        "desc": "Расшифровка и исправление ошибок.",
        "link": "./debug/dbg-1.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-2",
        "category": "debugging",
        "title": "Memory Leak Hunt",
        "desc": "Поиск утечек в Node.js/Browser.",
        "link": "./debug/dbg-2.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-3",
        "category": "debugging",
        "title": "Network Request Debug",
        "desc": "Анализ заголовков и тел запросов.",
        "link": "./debug/dbg-3.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-4",
        "category": "debugging",
        "title": "React Render Optimization",
        "desc": "Поиск лишних ре-рендеров.",
        "link": "./debug/dbg-4.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-5",
        "category": "debugging",
        "title": "Slow SQL Query Fix",
        "desc": "Оптимизация индексов и запросов.",
        "link": "./debug/dbg-5.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-6",
        "category": "debugging",
        "title": "Server Log Parsing",
        "desc": "Анализ логов доступа и ошибок.",
        "link": "./debug/dbg-6.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-7",
        "category": "debugging",
        "title": "CSS Layout Fixes",
        "desc": "Решение проблем с z-index и flexbox.",
        "link": "./debug/dbg-7.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-8",
        "category": "debugging",
        "title": "Async Race Conditions",
        "desc": "Отладка проблем асинхронности.",
        "link": "./debug/dbg-8.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-9",
        "category": "debugging",
        "title": "Env Config Validation",
        "desc": "Проверка переменных окружения.",
        "link": "./debug/dbg-9.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-10",
        "category": "debugging",
        "title": "Dependency Hell Fix",
        "desc": "Разрешение конфликтов версий npm.",
        "link": "./debug/dbg-10.html",
        "tag": "Debugging"
    },
    {
        "id": "doc-1",
        "category": "docs",
        "title": "README.md Generation",
        "desc": "Создание продающего описания проекта.",
        "link": "./docs/doc-1.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-2",
        "category": "docs",
        "title": "OpenAPI/Swagger Specs",
        "desc": "Авто-генерация документации API.",
        "link": "./docs/doc-2.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-3",
        "category": "docs",
        "title": "JSDoc/DocStrings",
        "desc": "Документирование функций и классов.",
        "link": "./docs/doc-3.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-4",
        "category": "docs",
        "title": "Changelog Automation",
        "desc": "Генерация списка изменений из git.",
        "link": "./docs/doc-4.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-5",
        "category": "docs",
        "title": "User Manuals",
        "desc": "Написание инструкций для пользователей.",
        "link": "./docs/doc-5.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-6",
        "category": "docs",
        "title": "Mermaid Architecture Maps",
        "desc": "Визуализация архитектуры в коде.",
        "link": "./docs/doc-6.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-7",
        "category": "docs",
        "title": "i18n Documentation",
        "desc": "Перевод документации на языки мира.",
        "link": "./docs/doc-7.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-8",
        "category": "docs",
        "title": "Code Tutorials",
        "desc": "Создание обучающих материалов.",
        "link": "./docs/doc-8.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-9",
        "category": "docs",
        "title": "CONTRIBUTING.md",
        "desc": "Гайдлайны для контрибьюторов.",
        "link": "./docs/doc-9.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-10",
        "category": "docs",
        "title": "License Management",
        "desc": "Добавление и проверка лицензий.",
        "link": "./docs/doc-10.html",
        "tag": "Documentation"
    },
    {
        "id": "api-1",
        "category": "api",
        "title": "Stripe Integration",
        "desc": "Прием платежей и подписки.",
        "link": "./api/api-1.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-2",
        "category": "api",
        "title": "Google Maps API",
        "desc": "Геолокация и карты.",
        "link": "./api/api-2.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-3",
        "category": "api",
        "title": "OpenAI/Gemini API",
        "desc": "Внедрение ИИ возможностей.",
        "link": "./api/api-3.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-4",
        "category": "api",
        "title": "Firebase Services",
        "desc": "Auth, Firestore, Storage.",
        "link": "./api/api-4.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-5",
        "category": "api",
        "title": "SendGrid/Mailgun",
        "desc": "Транзакционные email рассылки.",
        "link": "./api/api-5.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-6",
        "category": "api",
        "title": "Twilio SMS/Voice",
        "desc": "Коммуникации и уведомления.",
        "link": "./api/api-6.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-7",
        "category": "api",
        "title": "Slack/Discord Bots",
        "desc": "Интеграция с мессенджерами.",
        "link": "./api/api-7.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-8",
        "category": "api",
        "title": "Notion API Sync",
        "desc": "Управление базами знаний.",
        "link": "./api/api-8.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-9",
        "category": "api",
        "title": "GitHub REST API",
        "desc": "Автоматизация работы с кодом.",
        "link": "./api/api-9.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-10",
        "category": "api",
        "title": "OAuth2 Providers",
        "desc": "Вход через Google/Facebook/GitHub.",
        "link": "./api/api-10.html",
        "tag": "API Integrations"
    },
    {
        "id": "auto-1",
        "category": "automation",
        "title": "Batch File Renaming",
        "desc": "Массовая обработка файлов.",
        "link": "./auto/auto-1.html",
        "tag": "Automation"
    },
    {
        "id": "auto-2",
        "category": "automation",
        "title": "Image Processing",
        "desc": "Ресайз и конвертация форматов.",
        "link": "./auto/auto-2.html",
        "tag": "Automation"
    },
    {
        "id": "auto-3",
        "category": "automation",
        "title": "Web Scraping (Puppeteer)",
        "desc": "Сбор данных с сайтов.",
        "link": "./auto/auto-3.html",
        "tag": "Automation"
    },
    {
        "id": "auto-4",
        "category": "automation",
        "title": "PDF Generation",
        "desc": "Создание отчетов из HTML/Markdown.",
        "link": "./auto/auto-4.html",
        "tag": "Automation"
    },
    {
        "id": "auto-5",
        "category": "automation",
        "title": "Excel/CSV Parsing",
        "desc": "Обработка табличных данных.",
        "link": "./auto/auto-5.html",
        "tag": "Automation"
    },
    {
        "id": "auto-6",
        "category": "automation",
        "title": "Cron Job Scheduling",
        "desc": "Планирование периодических задач.",
        "link": "./auto/auto-6.html",
        "tag": "Automation"
    },
    {
        "id": "auto-7",
        "category": "automation",
        "title": "Database Backups",
        "desc": "Автоматизация дампов БД.",
        "link": "./auto/auto-7.html",
        "tag": "Automation"
    },
    {
        "id": "auto-8",
        "category": "automation",
        "title": "Health Check Scripts",
        "desc": "Мониторинг доступности сервисов.",
        "link": "./auto/auto-8.html",
        "tag": "Automation"
    },
    {
        "id": "auto-9",
        "category": "automation",
        "title": "Git Hooks (Husky)",
        "desc": "Проверки перед коммитом.",
        "link": "./auto/auto-9.html",
        "tag": "Automation"
    },
    {
        "id": "auto-10",
        "category": "automation",
        "title": "Release Versioning",
        "desc": "SemVer и генерация тегов.",
        "link": "./auto/auto-10.html",
        "tag": "Automation"
    },
    {
        "id": "mcp-1",
        "category": "mcp",
        "title": "MCP Server Creation",
        "desc": "Создание собственного MCP сервера для расширения возможностей LLM.",
        "link": "./mcp/mcp-1.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-2",
        "category": "mcp",
        "title": "File System MCP Server",
        "desc": "Сервер для безопасного доступа к файловой системе через MCP.",
        "link": "./mcp/mcp-2.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-3",
        "category": "mcp",
        "title": "Database MCP Integration",
        "desc": "Подключение баз данных (PostgreSQL, MySQL) через MCP протокол.",
        "link": "./mcp/mcp-3.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-4",
        "category": "mcp",
        "title": "Web Search MCP Tool",
        "desc": "Интеграция поисковых API (Google, Brave) как MCP инструмент.",
        "link": "./mcp/mcp-4.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-5",
        "category": "mcp",
        "title": "GitHub MCP Server",
        "desc": "Управление репозиториями и issues через MCP.",
        "link": "./mcp/mcp-5.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-6",
        "category": "mcp",
        "title": "Slack MCP Integration",
        "desc": "Отправка сообщений и чтение каналов через MCP.",
        "link": "./mcp/mcp-6.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-7",
        "category": "mcp",
        "title": "Custom MCP Resources",
        "desc": "Создание кастомных ресурсов для контекста модели.",
        "link": "./mcp/mcp-7.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-8",
        "category": "mcp",
        "title": "MCP Prompts Library",
        "desc": "Библиотека переиспользуемых промптов через MCP.",
        "link": "./mcp/mcp-8.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-9",
        "category": "mcp",
        "title": "MCP Tools Development",
        "desc": "Разработка инструментов (Tools) для расширения функционала.",
        "link": "./mcp/mcp-9.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-10",
        "category": "mcp",
        "title": "Memory MCP Server",
        "desc": "Долгосрочная память для агента через MCP.",
        "link": "./mcp/mcp-10.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-11",
        "category": "mcp",
        "title": "Puppeteer MCP Automation",
        "desc": "Браузерная автоматизация через MCP протокол.",
        "link": "./mcp/mcp-11.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-12",
        "category": "mcp",
        "title": "Google Drive MCP",
        "desc": "Доступ к Google Drive документам через MCP.",
        "link": "./mcp/mcp-12.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-13",
        "category": "mcp",
        "title": "Sequential Thinking MCP",
        "desc": "Улучшение рассуждений модели через MCP промпты.",
        "link": "./mcp/mcp-13.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-14",
        "category": "mcp",
        "title": "Time & Calendar MCP",
        "desc": "Работа с датами, временем и календарями через MCP.",
        "link": "./mcp/mcp-14.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-15",
        "category": "mcp",
        "title": "Fetch MCP Server",
        "desc": "HTTP запросы к внешним API через MCP.",
        "link": "./mcp/mcp-15.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-16",
        "category": "mcp",
        "title": "Notion MCP Integration",
        "desc": "Синхронизация с Notion базами знаний.",
        "link": "./mcp/mcp-16.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-17",
        "category": "mcp",
        "title": "MCP Server Security",
        "desc": "Настройка аутентификации и авторизации для MCP серверов.",
        "link": "./mcp/mcp-17.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-18",
        "category": "mcp",
        "title": "MCP Logging & Monitoring",
        "desc": "Отслеживание использования и ошибок MCP серверов.",
        "link": "./mcp/mcp-18.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-19",
        "category": "mcp",
        "title": "Multi-Server MCP Setup",
        "desc": "Конфигурация нескольких MCP серверов одновременно.",
        "link": "./mcp/mcp-19.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-20",
        "category": "mcp",
        "title": "MCP TypeScript SDK",
        "desc": "Использование официального SDK для разработки MCP серверов.",
        "link": "./mcp/mcp-20.html",
        "tag": "MCP (Model Context Protocol)"
    }
];