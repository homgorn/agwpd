const categories = {
    core: "Antigravity Core Features",
    web: "Web Development",
    backend: "Backend Systems",
    ds: "Data Science & ML",
    devops: "DevOps & Cloud",
    qa: "QA & Testing",
    refactor: "Refactoring",
    debug: "Debugging",
    docs: "Documentation",
    api: "API Integrations",
    auto: "Automation",
    mcp: "MCP (Model Context Protocol)"
};

const rawCases = [
    // --- CORE FEATURES ---
    { id: 'core-1', cat: 'core', title: 'Agent-First IDE Workflow', desc: 'Как использовать агент-ориентированный подход вместо традиционного редактора.' },
    { id: 'core-2', cat: 'core', title: 'Manager Surface Dashboard', desc: 'Управление несколькими агентами через Mission Control интерфейс.' },
    { id: 'core-3', cat: 'core', title: 'Browser Subagent Automation', desc: 'Использование встроенного браузерного агента для E2E тестов и веб-скрапинга.' },
    { id: 'core-4', cat: 'core', title: 'Generating Artifacts', desc: 'Создание и экспорт артефактов: планы, диаграммы, видео-отчеты.' },
    { id: 'core-5', cat: 'core', title: 'Multi-Agent Collaboration', desc: 'Запуск параллельных агентов для фронтенда и бэкенда одновременно.' },
    { id: 'core-6', cat: 'core', title: 'Feedback Loops & Learning', desc: 'Как обучать агента через комментарии в стиле Google Docs.' },
    { id: 'core-7', cat: 'core', title: 'Model Selection (Gemini/Claude)', desc: 'Переключение между Gemini 3, Claude Sonnet 4.5 и GPT-OSS.' },
    { id: 'core-8', cat: 'core', title: 'Context Management', desc: 'Управление контекстом и базой знаний агента.' },
    { id: 'core-9', cat: 'core', title: 'Terminal Integration', desc: 'Безопасное выполнение терминальных команд агентом.' },
    { id: 'core-10', cat: 'core', title: 'Visual Regression with Artifacts', desc: 'Использование скриншотов-артефактов для визуальной проверки.' },

    // --- WEB DEV ---
    { id: 'web-1', cat: 'web', title: 'React Component Generation', desc: 'Создание функциональных компонентов с пропсами и типами.' },
    { id: 'web-2', cat: 'web', title: 'Tailwind CSS Conversion', desc: 'Миграция с CSS/SASS на Tailwind Utility Classes.' },
    { id: 'web-3', cat: 'web', title: 'Next.js App Router Setup', desc: 'Скаффолдинг структуры папок для Next.js 14+.' },
    { id: 'web-4', cat: 'web', title: 'Form Validation (Zod/RHF)', desc: 'Генерация форм с клиентской и серверной валидацией.' },
    { id: 'web-5', cat: 'web', title: 'Responsive Design Implementation', desc: 'Адаптация верстки под мобильные устройства.' },
    { id: 'web-6', cat: 'web', title: 'Dark Mode Integration', desc: 'Реализация темизации с системными настройками.' },
    { id: 'web-7', cat: 'web', title: 'Framer Motion Animations', desc: 'Добавление декларативных анимаций интерфейса.' },
    { id: 'web-8', cat: 'web', title: 'Web Performance Optimization', desc: 'Lazy loading, оптимизация шрифтов и изображений.' },
    { id: 'web-9', cat: 'web', title: 'PWA Configuration', desc: 'Настройка Service Workers и манифеста.' },
    { id: 'web-10', cat: 'web', title: 'Accessibility (a11y) Audit', desc: 'Автоматическое исправление ARIA-атрибутов.' },

    // --- BACKEND ---
    { id: 'be-1', cat: 'backend', title: 'Go REST API Boilerplate', desc: 'Генерация сервиса на Gin/Echo с чистой архитектурой.' },
    { id: 'be-2', cat: 'backend', title: 'GraphQL Schema Generation', desc: 'Создание схемы и резолверов из SQL моделей.' },
    { id: 'be-3', cat: 'backend', title: 'PostgreSQL Migrations', desc: 'Написание SQL миграций для изменения схемы БД.' },
    { id: 'be-4', cat: 'backend', title: 'JWT Auth Implementation', desc: 'Полный цикл аутентификации и авторизации.' },
    { id: 'be-5', cat: 'backend', title: 'Redis Caching Layer', desc: 'Интеграция кэширования для высоконагруженных API.' },
    { id: 'be-6', cat: 'backend', title: 'gRPC Microservices', desc: 'Создание .proto файлов и генерация кода сервисов.' },
    { id: 'be-7', cat: 'backend', title: 'WebSocket Real-time Server', desc: 'Чат-сервер на Node.js или Go.' },
    { id: 'be-8', cat: 'backend', title: 'Message Queue Consumers', desc: 'Обработка сообщений RabbitMQ/Kafka.' },
    { id: 'be-9', cat: 'backend', title: 'Serverless Functions (AWS)', desc: 'Деплой Lambda функций через SAM или Terraform.' },
    { id: 'be-10', cat: 'backend', title: 'Logging & Telemetry', desc: 'Настройка OpenTelemetry и ELK стека.' },

    // --- DATA SCIENCE ---
    { id: 'ds-1', cat: 'ds', title: 'EDA Report Generation', desc: 'Автоматический разведочный анализ данных (Pandas).' },
    { id: 'ds-2', cat: 'ds', title: 'Scikit-learn Model Training', desc: 'Пайплайн обучения и валидации классификатора.' },
    { id: 'ds-3', cat: 'ds', title: 'Advanced Matplotlib Plots', desc: 'Генерация сложных визуализаций для публикаций.' },
    { id: 'ds-4', cat: 'ds', title: 'PyTorch CNN Architecture', desc: 'Создание нейросети для компьютерного зрения.' },
    { id: 'ds-5', cat: 'ds', title: 'NLP Text Preprocessing', desc: 'Токенизация и лемматизация с NLTK/Spacy.' },
    { id: 'ds-6', cat: 'ds', title: 'Jupyter Notebook Refactoring', desc: 'Очистка ноутбуков для продакшена.' },
    { id: 'ds-7', cat: 'ds', title: 'Data Cleaning Scripts', desc: 'Обработка пропусков и выбросов в датасетах.' },
    { id: 'ds-8', cat: 'ds', title: 'Airflow DAG Creation', desc: 'Написание ETL процессов для Apache Airflow.' },
    { id: 'ds-9', cat: 'ds', title: 'FastAPI Model Serving', desc: 'Обертка ML модели в REST API.' },
    { id: 'ds-10', cat: 'ds', title: 'A/B Test Analysis', desc: 'Статистический анализ результатов экспериментов.' },

    // --- DEVOPS ---
    { id: 'ops-1', cat: 'devops', title: 'Docker Compose Setup', desc: 'Мульти-контейнерная среда для разработки.' },
    { id: 'ops-2', cat: 'devops', title: 'K8s Manifest Generation', desc: 'Deployment, Service и Ingress для Kubernetes.' },
    { id: 'ops-3', cat: 'devops', title: 'Terraform AWS Infrastructure', desc: 'IaC для VPC, EC2 и RDS.' },
    { id: 'ops-4', cat: 'devops', title: 'GitHub Actions CI/CD', desc: 'Пайплайн сборки, тестов и деплоя.' },
    { id: 'ops-5', cat: 'devops', title: 'Nginx Reverse Proxy', desc: 'Конфигурация проксирования и SSL.' },
    { id: 'ops-6', cat: 'devops', title: 'Ansible Playbooks', desc: 'Управление конфигурацией серверов.' },
    { id: 'ops-7', cat: 'devops', title: 'Prometheus Alerting', desc: 'Настройка правил для Alertmanager.' },
    { id: 'ops-8', cat: 'devops', title: 'Bash Maintenance Scripts', desc: 'Скрипты бэкапов и ротации логов.' },
    { id: 'ops-9', cat: 'devops', title: 'SSL Certificate Auto-renewal', desc: 'Настройка Certbot и Let\'s Encrypt.' },
    { id: 'ops-10', cat: 'devops', title: 'Cloudflare Workers Deploy', desc: 'Развертывание Edge-функций.' },

    // --- QA ---
    { id: 'qa-1', cat: 'qa', title: 'Jest Unit Testing', desc: 'Генерация тестов для JS/TS функций.' },
    { id: 'qa-2', cat: 'qa', title: 'Cypress E2E Scenarios', desc: 'Сквозное тестирование пользовательских путей.' },
    { id: 'qa-3', cat: 'qa', title: 'Playwright Cross-browser', desc: 'Автоматизация браузерных тестов.' },
    { id: 'qa-4', cat: 'qa', title: 'Postman Collection Gen', desc: 'Создание коллекции тестов для API.' },
    { id: 'qa-5', cat: 'qa', title: 'k6 Load Testing', desc: 'Нагрузочное тестирование производительности.' },
    { id: 'qa-6', cat: 'qa', title: 'Faker.js Mock Data', desc: 'Генерация реалистичных тестовых данных.' },
    { id: 'qa-7', cat: 'qa', title: 'Storybook Visual Tests', desc: 'Тестирование компонентов в изоляции.' },
    { id: 'qa-8', cat: 'qa', title: 'OWASP ZAP Security Scan', desc: 'Автоматизированный поиск уязвимостей.' },
    { id: 'qa-9', cat: 'qa', title: 'Appium Mobile Tests', desc: 'Тесты для iOS и Android приложений.' },
    { id: 'qa-10', cat: 'qa', title: 'Coverage Reports Setup', desc: 'Интеграция Codecov или Istanbul.' },

    // --- REFACTORING ---
    { id: 'ref-1', cat: 'refactor', title: 'Legacy JS to Modern', desc: 'Обновление синтаксиса (ES6+).' },
    { id: 'ref-2', cat: 'refactor', title: 'Extract React Component', desc: 'Декомпозиция больших компонентов.' },
    { id: 'ref-3', cat: 'refactor', title: 'Optimize Imports', desc: 'Удаление неиспользуемых зависимостей.' },
    { id: 'ref-4', cat: 'refactor', title: 'Variable Renaming', desc: 'Улучшение читаемости кода.' },
    { id: 'ref-5', cat: 'refactor', title: 'Class to Function', desc: 'Миграция на React Hooks.' },
    { id: 'ref-6', cat: 'refactor', title: 'Logic Simplification', desc: 'Устранение вложенности (Guard Clauses).' },
    { id: 'ref-7', cat: 'refactor', title: 'TypeScript Migration', desc: 'Добавление строгой типизации в JS проект.' },
    { id: 'ref-8', cat: 'refactor', title: 'CSS Cleanup', desc: 'Удаление мертвого CSS кода.' },
    { id: 'ref-9', cat: 'refactor', title: 'Design Patterns Impl', desc: 'Внедрение Singleton, Factory, Observer.' },
    { id: 'ref-10', cat: 'refactor', title: 'Dead Code Elimination', desc: 'Анализ и удаление неиспользуемого кода.' },

    // --- DEBUGGING ---
    { id: 'dbg-1', cat: 'debug', title: 'Stack Trace Analysis', desc: 'Расшифровка и исправление ошибок.' },
    { id: 'dbg-2', cat: 'debug', title: 'Memory Leak Hunt', desc: 'Поиск утечек в Node.js/Browser.' },
    { id: 'dbg-3', cat: 'debug', title: 'Network Request Debug', desc: 'Анализ заголовков и тел запросов.' },
    { id: 'dbg-4', cat: 'debug', title: 'React Render Optimization', desc: 'Поиск лишних ре-рендеров.' },
    { id: 'dbg-5', cat: 'debug', title: 'Slow SQL Query Fix', desc: 'Оптимизация индексов и запросов.' },
    { id: 'dbg-6', cat: 'debug', title: 'Server Log Parsing', desc: 'Анализ логов доступа и ошибок.' },
    { id: 'dbg-7', cat: 'debug', title: 'CSS Layout Fixes', desc: 'Решение проблем с z-index и flexbox.' },
    { id: 'dbg-8', cat: 'debug', title: 'Async Race Conditions', desc: 'Отладка проблем асинхронности.' },
    { id: 'dbg-9', cat: 'debug', title: 'Env Config Validation', desc: 'Проверка переменных окружения.' },
    { id: 'dbg-10', cat: 'debug', title: 'Dependency Hell Fix', desc: 'Разрешение конфликтов версий npm.' },

    // --- DOCS ---
    { id: 'doc-1', cat: 'docs', title: 'README.md Generation', desc: 'Создание продающего описания проекта.' },
    { id: 'doc-2', cat: 'docs', title: 'OpenAPI/Swagger Specs', desc: 'Авто-генерация документации API.' },
    { id: 'doc-3', cat: 'docs', title: 'JSDoc/DocStrings', desc: 'Документирование функций и классов.' },
    { id: 'doc-4', cat: 'docs', title: 'Changelog Automation', desc: 'Генерация списка изменений из git.' },
    { id: 'doc-5', cat: 'docs', title: 'User Manuals', desc: 'Написание инструкций для пользователей.' },
    { id: 'doc-6', cat: 'docs', title: 'Mermaid Architecture Maps', desc: 'Визуализация архитектуры в коде.' },
    { id: 'doc-7', cat: 'docs', title: 'i18n Documentation', desc: 'Перевод документации на языки мира.' },
    { id: 'doc-8', cat: 'docs', title: 'Code Tutorials', desc: 'Создание обучающих материалов.' },
    { id: 'doc-9', cat: 'docs', title: 'CONTRIBUTING.md', desc: 'Гайдлайны для контрибьюторов.' },
    { id: 'doc-10', cat: 'docs', title: 'License Management', desc: 'Добавление и проверка лицензий.' },

    // --- API ---
    { id: 'api-1', cat: 'api', title: 'Stripe Integration', desc: 'Прием платежей и подписки.' },
    { id: 'api-2', cat: 'api', title: 'Google Maps API', desc: 'Геолокация и карты.' },
    { id: 'api-3', cat: 'api', title: 'OpenAI/Gemini API', desc: 'Внедрение ИИ возможностей.' },
    { id: 'api-4', cat: 'api', title: 'Firebase Services', desc: 'Auth, Firestore, Storage.' },
    { id: 'api-5', cat: 'api', title: 'SendGrid/Mailgun', desc: 'Транзакционные email рассылки.' },
    { id: 'api-6', cat: 'api', title: 'Twilio SMS/Voice', desc: 'Коммуникации и уведомления.' },
    { id: 'api-7', cat: 'api', title: 'Slack/Discord Bots', desc: 'Интеграция с мессенджерами.' },
    { id: 'api-8', cat: 'api', title: 'Notion API Sync', desc: 'Управление базами знаний.' },
    { id: 'api-9', cat: 'api', title: 'GitHub REST API', desc: 'Автоматизация работы с кодом.' },
    { id: 'api-10', cat: 'api', title: 'OAuth2 Providers', desc: 'Вход через Google/Facebook/GitHub.' },

    // --- AUTOMATION ---
    { id: 'auto-1', cat: 'auto', title: 'Batch File Renaming', desc: 'Массовая обработка файлов.' },
    { id: 'auto-2', cat: 'auto', title: 'Image Processing', desc: 'Ресайз и конвертация форматов.' },
    { id: 'auto-3', cat: 'auto', title: 'Web Scraping (Puppeteer)', desc: 'Сбор данных с сайтов.' },
    { id: 'auto-4', cat: 'auto', title: 'PDF Generation', desc: 'Создание отчетов из HTML/Markdown.' },
    { id: 'auto-5', cat: 'auto', title: 'Excel/CSV Parsing', desc: 'Обработка табличных данных.' },
    { id: 'auto-6', cat: 'auto', title: 'Cron Job Scheduling', desc: 'Планирование периодических задач.' },
    { id: 'auto-7', cat: 'auto', title: 'Database Backups', desc: 'Автоматизация дампов БД.' },
    { id: 'auto-8', cat: 'auto', title: 'Health Check Scripts', desc: 'Мониторинг доступности сервисов.' },
    { id: 'auto-9', cat: 'auto', title: 'Git Hooks (Husky)', desc: 'Проверки перед коммитом.' },
    { id: 'auto-10', cat: 'auto', title: 'Release Versioning', desc: 'SemVer и генерация тегов.' },

    // --- MCP (Model Context Protocol) ---
    { id: 'mcp-1', cat: 'mcp', title: 'MCP Server Creation', desc: 'Создание собственного MCP сервера для расширения возможностей LLM.' },
    { id: 'mcp-2', cat: 'mcp', title: 'File System MCP Server', desc: 'Сервер для безопасного доступа к файловой системе через MCP.' },
    { id: 'mcp-3', cat: 'mcp', title: 'Database MCP Integration', desc: 'Подключение баз данных (PostgreSQL, MySQL) через MCP протокол.' },
    { id: 'mcp-4', cat: 'mcp', title: 'Web Search MCP Tool', desc: 'Интеграция поисковых API (Google, Brave) как MCP инструмент.' },
    { id: 'mcp-5', cat: 'mcp', title: 'GitHub MCP Server', desc: 'Управление репозиториями и issues через MCP.' },
    { id: 'mcp-6', cat: 'mcp', title: 'Slack MCP Integration', desc: 'Отправка сообщений и чтение каналов через MCP.' },
    { id: 'mcp-7', cat: 'mcp', title: 'Custom MCP Resources', desc: 'Создание кастомных ресурсов для контекста модели.' },
    { id: 'mcp-8', cat: 'mcp', title: 'MCP Prompts Library', desc: 'Библиотека переиспользуемых промптов через MCP.' },
    { id: 'mcp-9', cat: 'mcp', title: 'MCP Tools Development', desc: 'Разработка инструментов (Tools) для расширения функционала.' },
    { id: 'mcp-10', cat: 'mcp', title: 'Memory MCP Server', desc: 'Долгосрочная память для агента через MCP.' },
    { id: 'mcp-11', cat: 'mcp', title: 'Puppeteer MCP Automation', desc: 'Браузерная автоматизация через MCP протокол.' },
    { id: 'mcp-12', cat: 'mcp', title: 'Google Drive MCP', desc: 'Доступ к Google Drive документам через MCP.' },
    { id: 'mcp-13', cat: 'mcp', title: 'Sequential Thinking MCP', desc: 'Улучшение рассуждений модели через MCP промпты.' },
    { id: 'mcp-14', cat: 'mcp', title: 'Time & Calendar MCP', desc: 'Работа с датами, временем и календарями через MCP.' },
    { id: 'mcp-15', cat: 'mcp', title: 'Fetch MCP Server', desc: 'HTTP запросы к внешним API через MCP.' },
    { id: 'mcp-16', cat: 'mcp', title: 'Notion MCP Integration', desc: 'Синхронизация с Notion базами знаний.' },
    { id: 'mcp-17', cat: 'mcp', title: 'MCP Server Security', desc: 'Настройка аутентификации и авторизации для MCP серверов.' },
    { id: 'mcp-18', cat: 'mcp', title: 'MCP Logging & Monitoring', desc: 'Отслеживание использования и ошибок MCP серверов.' },
    { id: 'mcp-19', cat: 'mcp', title: 'Multi-Server MCP Setup', desc: 'Конфигурация нескольких MCP серверов одновременно.' },
    { id: 'mcp-20', cat: 'mcp', title: 'MCP TypeScript SDK', desc: 'Использование официального SDK для разработки MCP серверов.' }
];

// Image mapping
const categoryImages = {
    core: 'antigravity_manager_dashboard.png',
    web: 'ag_web_dev.png',
    refactor: 'ag_web_dev.png',
    docs: 'ag_web_dev.png',
    backend: 'ag_backend.png',
    api: 'ag_backend.png',
    ds: 'ag_datascience.png',
    auto: 'ag_datascience.png',
    devops: 'ag_devops.png',
    qa: 'ag_testing.png',
    debug: 'ag_devops.png',
    mcp: 'antigravity_manager_dashboard.png'
};

// Helper to create SEO-friendly slug
function createSlug(title) {
    const translitMap = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    };

    return title.toLowerCase()
        .split('').map(char => translitMap[char] || char).join('')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .substring(0, 60);
}

// Helper to generate extensive content (15+ items)
function generateExtendedContent(c) {
    const slug = createSlug(c.title);

    // 3 промпта для разных сценариев
    const prompts = [
        {
            title: 'Базовый промпт',
            content: `Создай решение для задачи: ${c.title}

Требования:
- ${c.desc}
- Используй современные практики и паттерны
- Добавь комментарии к коду
- Следуй best practices для ${c.categoryName}`
        },
        {
            title: 'Продвинутый промпт с деталями',
            content: `Реализуй ${c.title} с учетом следующих требований:

Функциональность:
- ${c.desc}
- Обработка ошибок и граничных случаев
- Логирование всех важных операций
- Валидация входных данных

Качество кода:
- Следуй принципам SOLID
- Используй TypeScript для типобезопасности
- Добавь JSDoc комментарии
- Оптимизируй производительность

Дополнительно:
- Создай README.md с инструкцией
- Добавь примеры использования`
        },
        {
            title: 'С тестами и документацией',
            content: `Полная реализация: ${c.title}

Основная задача:
${c.desc}

Обязательные компоненты:
1. Рабочий код с обработкой ошибок
2. Unit-тесты (покрытие >80%)
3. Integration тесты для критичных путей
4. README.md с:
   - Описанием функционала
   - Инструкцией по установке
   - Примерами использования
   - API документацией
5. CHANGELOG.md для отслеживания изменений

Технические требования:
- Современный стек технологий
- Чистая архитектура
- Производительность и масштабируемость`
        }
    ];

    // Структурированный контент 2-3к знаков
    const richContent = `
<h3>Обзор технологии</h3>
<p>${c.title} — это важный аспект современной разработки в области ${c.categoryName}. ${c.desc} Данный подход позволяет значительно ускорить процесс разработки и повысить качество кода благодаря использованию ИИ-агента Google Antigravity.</p>

<h3>Ключевые преимущества</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <thead>
        <tr style="background: #f8f9fa;">
            <th style="padding: 12px; text-align: left; border: 1px solid #e8eaed;">Преимущество</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e8eaed;">Описание</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e8eaed;">Экономия времени</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #e8eaed;"><strong>Автоматизация</strong></td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Агент генерирует код автоматически</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">До 80%</td>
        </tr>
        <tr style="background: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #e8eaed;"><strong>Качество</strong></td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Следование best practices</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">-</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #e8eaed;"><strong>Тестирование</strong></td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Автогенерация тестов</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">До 70%</td>
        </tr>
    </tbody>
</table>

<h3>Требования к проекту</h3>
<ul style="margin: 15px 0; padding-left: 25px;">
    <li><strong>Технические:</strong> Современная версия языка/фреймворка, доступ к интернету для агента</li>
    <li><strong>Навыки:</strong> Базовое понимание ${c.categoryName}, умение формулировать задачи</li>
    <li><strong>Инструменты:</strong> Google Antigravity IDE, Git для версионирования</li>
    <li><strong>Время:</strong> 2-10 минут в зависимости от сложности задачи</li>
</ul>

<h3>Сценарии применения</h3>
<p>Технология ${c.title} особенно полезна в следующих случаях:</p>
<ol style="margin: 15px 0; padding-left: 25px;">
    <li><strong>Быстрое прототипирование:</strong> Когда нужно быстро проверить идею или создать MVP</li>
    <li><strong>Рутинные задачи:</strong> Автоматизация повторяющихся паттернов кода</li>
    <li><strong>Обучение:</strong> Изучение новых технологий через примеры от агента</li>
    <li><strong>Рефакторинг:</strong> Улучшение существующего кода с сохранением функциональности</li>
    <li><strong>Документация:</strong> Автоматическая генерация README и комментариев</li>
</ol>

<h3>Сравнение подходов</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <thead>
        <tr style="background: #f8f9fa;">
            <th style="padding: 12px; text-align: left; border: 1px solid #e8eaed;">Критерий</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e8eaed;">Ручная разработка</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e8eaed;">С Antigravity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Время разработки</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">2-4 часа</td>
            <td style="padding: 12px; border: 1px solid #e8eaed; background: #e8f5e9;"><strong>5-15 минут</strong></td>
        </tr>
        <tr style="background: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #e8eaed;">Покрытие тестами</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">30-50%</td>
            <td style="padding: 12px; border: 1px solid #e8eaed; background: #e8f5e9;"><strong>70-90%</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Документация</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Часто отсутствует</td>
            <td style="padding: 12px; border: 1px solid #e8eaed; background: #e8f5e9;"><strong>Автоматически</strong></td>
        </tr>
    </tbody>
</table>

<h3>Лучшие практики</h3>
<div style="background: #e8f5e9; padding: 20px; border-left: 4px solid #34a853; margin: 20px 0; border-radius: 4px;">
    <p><strong>💡 Совет эксперта:</strong> Для достижения наилучших результатов с ${c.title}:</p>
    <ul style="margin: 10px 0; padding-left: 25px;">
        <li>Формулируйте промпты максимально конкретно</li>
        <li>Указывайте желаемые технологии и паттерны</li>
        <li>Проверяйте сгенерированный код перед использованием</li>
        <li>Используйте итеративный подход: уточняйте и дополняйте</li>
        <li>Сохраняйте успешные промпты для повторного использования</li>
    </ul>
</div>

<h3>Типичные ошибки и решения</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <thead>
        <tr style="background: #f8f9fa;">
            <th style="padding: 12px; text-align: left; border: 1px solid #e8eaed;">Проблема</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e8eaed;">Решение</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Агент не понимает контекст</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Откройте нужные файлы в редакторе, используйте @-упоминания</td>
        </tr>
        <tr style="background: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #e8eaed;">Код не соответствует стилю проекта</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Укажите в промпте конкретные требования к стилю</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Генерация занимает слишком долго</td>
            <td style="padding: 12px; border: 1px solid #e8eaed;">Разбейте задачу на более мелкие подзадачи</td>
        </tr>
    </tbody>
</table>
`;

    const steps = [
        `Откройте Google Antigravity IDE и перейдите в рабочее пространство проекта.`,
        `Убедитесь, что у вас выбрана модель Gemini 3 Pro для максимальной точности генерации кода.`,
        `Откройте панель "Manager Surface" для визуализации задач агента.`,
        `В чате с агентом введите промпт: "Создай решение для задачи: ${c.title}".`,
        `Уточните требования: "Используй современные практики и паттерны проектирования для ${c.categoryName}".`,
        `Агент начнет планирование. Дождитесь появления плана действий (Implementation Plan) в артефактах.`,
        `Проверьте предложенный план. Если нужно, добавьте комментарий: "Учти обработку ошибок и логирование".`,
        `Подтвердите выполнение плана. Агент начнет писать код в реальном времени.`,
        `Следите за прогрессом через терминал, встроенный в интерфейс Antigravity.`,
        `Агент автоматически создаст необходимые файлы и папки для ${c.title}.`,
        `После генерации кода агент запустит тесты. Если тестов нет, попросите: "Напиши unit-тесты для этого функционала".`,
        `Если возникли ошибки при запуске, агент попытается исправить их самостоятельно (Self-healing).`,
        `Используйте встроенный браузер для предпросмотра результата (если это веб-интерфейс).`,
        `Попросите агента создать документацию: "Сгенерируй README.md с инструкцией по запуску".`,
        `Проведите финальное ревью кода (Code Review) в диффе изменений.`,
        `Если все устраивает, подтвердите коммит изменений в git.`,
        `Выполните деплой или сборку проекта, используя команды, предложенные агентом.`
    ];

    const faqs = [
        { q: `Как Antigravity помогает с ${c.title}?`, a: `Antigravity берет на себя рутину: от скаффолдинга проекта до написания конкретной логики ${c.title}, позволяя вам сосредоточиться на архитектуре.` },
        { q: `Нужно ли мне знать синтаксис языка досконально?`, a: `Для задачи ${c.title} глубокое знание не обязательно, так как агент генерирует синтаксически верный код, но понимание логики поможет при ревью.` },
        { q: `Может ли агент исправить ошибки в ${c.title}?`, a: `Да, Antigravity имеет цикл обратной связи: он читает ошибки из терминала и автоматически предлагает исправления.` },
        { q: `Как интегрировать это в существующий проект?`, a: `Агент умеет работать с контекстом. Просто откройте ваш проект и попросите добавить функционал ${c.title} в существующую структуру.` },
        { q: `Какие модели используются?`, a: `По умолчанию Gemini 3, но вы можете переключиться на Claude Sonnet или GPT-OSS в настройках агента.` },
        { q: `Безопасно ли доверять агенту ${c.title}?`, a: `Код выполняется в песочнице, и вы всегда должны подтверждать критические действия (удаление файлов, API запросы).` },
        { q: `Сколько времени занимает генерация?`, a: `Простые задачи типа ${c.title} решаются за 1-3 минуты. Сложные архитектурные изменения могут занять до 10-15 минут.` },
        { q: `Генерируются ли тесты?`, a: `Да, мы рекомендуем всегда просить агента генерировать тесты для ${c.title} для гарантии качества.` },
        { q: `Можно ли экспортировать результат?`, a: `Конечно, результат — это обычные файлы в вашей файловой системе, которые можно залить в Git.` },
        { q: `Поддерживается ли командная работа?`, a: `Да, через Manager Surface вы можете видеть, над чем работают агенты ваших коллег в реальном времени.` },
        { q: `Нужен ли доступ в интернет?`, a: `Для работы модели нужен интернет, но локальный код остается на вашей машине (если не включена облачная синхронизация).` },
        { q: `Как улучшить качество генерации для ${c.title}?`, a: `Чем детальнее ваш промпт и контекст (открытые файлы), тем лучше результат. Используйте @-упоминания файлов.` },
        { q: `Есть ли плагины для ${c.title}?`, a: `Antigravity поддерживает расширения VS Code, поэтому вы можете использовать привычные инструменты.` },
        { q: `Что делать, если агент завис?`, a: `Вы можете перезапустить задачу или уточнить промпт. Состояние агента сохраняется.` },
        { q: `Где найти документацию?`, a: `Вся документация доступна на официальном сайте antigravity.google и в этом справочнике.` }
    ];

    return { steps, faqs, slug, prompts, richContent };
}

// Helper to enrich data with SEO, FAQ, HowTo, Images
function enrichData(cases) {
    return cases.map(c => {
        const keywords = [c.title, c.desc.split(' ')[0] + ' ' + c.desc.split(' ')[1], 'Google Antigravity', 'AI coding', 'Automation', 'GenAI'];

        let imageName = categoryImages[c.cat] || 'ag_web_dev.png';
        const lowerTitle = c.title.toLowerCase();
        const lowerDesc = c.desc.toLowerCase();
        if (lowerTitle.includes('mobile') || lowerTitle.includes('ios') || lowerTitle.includes('android') || lowerDesc.includes('mobile')) {
            imageName = 'ag_mobile.png';
        } else if (lowerTitle.includes('test') || lowerTitle.includes('qa') || lowerTitle.includes('cypress') || lowerTitle.includes('jest')) {
            imageName = 'ag_testing.png';
        }

        const { steps, faqs, slug, prompts, richContent } = generateExtendedContent(c);

        return {
            ...c,
            slug,
            categoryName: categories[c.cat],
            image: {
                url: `https://antigravity.google/assets/${imageName}`,
                localPath: `../assets/${imageName}`,
                alt: `Иллюстрация: ${c.title} в Google Antigravity`
            },
            seo: {
                title: `${c.title}: Полное руководство и Кейс Google Antigravity`,
                description: `Пошаговая инструкция (15 шагов) как реализовать ${c.title} с помощью ИИ агента Google Antigravity. FAQ, примеры кода и лучшие практики.`,
                keywords: keywords.join(', ')
            },
            faq: faqs,
            howto: {
                name: `Инструкция: Реализация ${c.title}`,
                steps: steps
            },
            prompts,
            richContent
        };
    });
}

module.exports = {
    categories,
    cases: enrichData(rawCases)
};
