const useCases = [
    // 1. Web Development
    {
        id: 'web-1', category: 'web-dev', title: 'Генерация React Компонентов',
        desc: 'Автоматическое создание функциональных компонентов React с пропсами и стилями.',
        link: 'https://react.dev', tag: 'React'
    },
    {
        id: 'web-2', category: 'web-dev', title: 'Конвертация CSS в Tailwind',
        desc: 'Мгновенный перевод ванильного CSS в утилитарные классы Tailwind.',
        link: 'https://tailwindcss.com', tag: 'CSS'
    },
    {
        id: 'web-3', category: 'web-dev', title: 'Оптимизация изображений',
        desc: 'Автоматическое сжатие и конвертация изображений в WebP при сборке.',
        link: 'https://squoosh.app', tag: 'Performance'
    },
    {
        id: 'web-4', category: 'web-dev', title: 'Создание форм с валидацией',
        desc: 'Генерация сложных форм на базе React Hook Form и Zod.',
        link: 'https://react-hook-form.com', tag: 'Forms'
    },
    {
        id: 'web-5', category: 'web-dev', title: 'Настройка Next.js Routing',
        desc: 'Автоматическое создание структуры папок для App Router.',
        link: 'https://nextjs.org', tag: 'Next.js'
    },
    {
        id: 'web-6', category: 'web-dev', title: 'Интеграция Dark Mode',
        desc: 'Внедрение переключателя темы с сохранением в localStorage.',
        link: '#', tag: 'UI/UX'
    },
    {
        id: 'web-7', category: 'web-dev', title: 'Анимация с Framer Motion',
        desc: 'Генерация декларативных анимаций для компонентов интерфейса.',
        link: 'https://www.framer.com/motion/', tag: 'Animation'
    },
    {
        id: 'web-8', category: 'web-dev', title: 'SEO Оптимизация',
        desc: 'Автоматическая генерация мета-тегов и sitemap.xml.',
        link: '#', tag: 'SEO'
    },
    {
        id: 'web-9', category: 'web-dev', title: 'PWA Конфигурация',
        desc: 'Создание manifest.json и service worker для PWA.',
        link: 'https://web.dev/progressive-web-apps/', tag: 'PWA'
    },
    {
        id: 'web-10', category: 'web-dev', title: 'Web Accessibility (a11y)',
        desc: 'Аудит и исправление ARIA-атрибутов для доступности.',
        link: 'https://www.w3.org/WAI/', tag: 'a11y'
    },

    // 2. Backend Systems
    {
        id: 'be-1', category: 'backend', title: 'REST API на Go',
        desc: 'Создание каркаса REST API сервиса на Gin или Echo.',
        link: 'https://go.dev', tag: 'Go'
    },
    {
        id: 'be-2', category: 'backend', title: 'GraphQL Схема',
        desc: 'Генерация схемы GraphQL и резолверов на основе моделей БД.',
        link: 'https://graphql.org', tag: 'GraphQL'
    },
    {
        id: 'be-3', category: 'backend', title: 'Миграции Баз Данных',
        desc: 'Автоматическое создание SQL миграций для PostgreSQL.',
        link: 'https://www.postgresql.org', tag: 'SQL'
    },
    {
        id: 'be-4', category: 'backend', title: 'JWT Аутентификация',
        desc: 'Реализация полного цикла Auth: login, register, refresh token.',
        link: 'https://jwt.io', tag: 'Security'
    },
    {
        id: 'be-5', category: 'backend', title: 'Redis Кэширование',
        desc: 'Настройка кэширования ответов API через Redis.',
        link: 'https://redis.io', tag: 'Redis'
    },
    {
        id: 'be-6', category: 'backend', title: 'Microservices Boilerplate',
        desc: 'Развертывание шаблона микросервисной архитектуры с gRPC.',
        link: 'https://grpc.io', tag: 'Microservices'
    },
    {
        id: 'be-7', category: 'backend', title: 'WebSockets Чат',
        desc: 'Реализация сервера реального времени на Node.js + Socket.io.',
        link: 'https://socket.io', tag: 'Node.js'
    },
    {
        id: 'be-8', category: 'backend', title: 'Обработка Очередей',
        desc: 'Настройка RabbitMQ или Kafka консьюмеров.',
        link: 'https://www.rabbitmq.com', tag: 'Message Queue'
    },
    {
        id: 'be-9', category: 'backend', title: 'Serverless Functions',
        desc: 'Написание и деплой AWS Lambda функций.',
        link: 'https://aws.amazon.com/lambda/', tag: 'AWS'
    },
    {
        id: 'be-10', category: 'backend', title: 'Логирование и Мониторинг',
        desc: 'Интеграция Prometheus и Grafana для метрик.',
        link: 'https://prometheus.io', tag: 'DevOps'
    },

    // 3. Data Science & ML
    {
        id: 'ds-1', category: 'datascience', title: 'Анализ Pandas DataFrame',
        desc: 'Автоматическая генерация EDA (Exploratory Data Analysis) отчета.',
        link: 'https://pandas.pydata.org', tag: 'Python'
    },
    {
        id: 'ds-2', category: 'datascience', title: 'Обучение Scikit-learn',
        desc: 'Подбор гиперпараметров и обучение модели классификации.',
        link: 'https://scikit-learn.org', tag: 'ML'
    },
    {
        id: 'ds-3', category: 'datascience', title: 'Визуализация Matplotlib',
        desc: 'Создание сложных графиков и тепловых карт одной командой.',
        link: 'https://matplotlib.org', tag: 'Visualization'
    },
    {
        id: 'ds-4', category: 'datascience', title: 'PyTorch Нейросеть',
        desc: 'Генерация архитектуры CNN для распознавания изображений.',
        link: 'https://pytorch.org', tag: 'Deep Learning'
    },
    {
        id: 'ds-5', category: 'datascience', title: 'NLP Пайплайн',
        desc: 'Настройка токенизации и обработки текста с Hugging Face.',
        link: 'https://huggingface.co', tag: 'NLP'
    },
    {
        id: 'ds-6', category: 'datascience', title: 'Jupyter Notebook Clean',
        desc: 'Рефакторинг и очистка ноутбуков для продакшена.',
        link: 'https://jupyter.org', tag: 'Tools'
    },
    {
        id: 'ds-7', category: 'datascience', title: 'Data Cleaning Script',
        desc: 'Скрипт для обработки пропусков и аномалий в данных.',
        link: '#', tag: 'Data Eng'
    },
    {
        id: 'ds-8', category: 'datascience', title: 'ETL Процесс',
        desc: 'Создание Airflow DAG для перекладки данных.',
        link: 'https://airflow.apache.org', tag: 'Airflow'
    },
    {
        id: 'ds-9', category: 'datascience', title: 'Model Serving API',
        desc: 'Обертка ML модели в FastAPI сервис.',
        link: 'https://fastapi.tiangolo.com', tag: 'FastAPI'
    },
    {
        id: 'ds-10', category: 'datascience', title: 'A/B Тестирование',
        desc: 'Расчет статистической значимости результатов эксперимента.',
        link: '#', tag: 'Statistics'
    },

    // 4. DevOps & Cloud
    {
        id: 'ops-1', category: 'devops', title: 'Docker Compose',
        desc: 'Генерация docker-compose.yml для полного стека.',
        link: 'https://www.docker.com', tag: 'Docker'
    },
    {
        id: 'ops-2', category: 'devops', title: 'Kubernetes Manifests',
        desc: 'Создание Deployment и Service YAML файлов для K8s.',
        link: 'https://kubernetes.io', tag: 'K8s'
    },
    {
        id: 'ops-3', category: 'devops', title: 'Terraform AWS',
        desc: 'Описание инфраструктуры AWS (VPC, EC2, RDS) в коде.',
        link: 'https://www.terraform.io', tag: 'IaC'
    },
    {
        id: 'ops-4', category: 'devops', title: 'GitHub Actions CI/CD',
        desc: 'Настройка пайплайна для тестов и деплоя.',
        link: 'https://github.com/features/actions', tag: 'CI/CD'
    },
    {
        id: 'ops-5', category: 'devops', title: 'Nginx Конфиг',
        desc: 'Генерация конфига для reverse proxy и SSL.',
        link: 'https://nginx.org', tag: 'Server'
    },
    {
        id: 'ops-6', category: 'devops', title: 'Ansible Playbook',
        desc: 'Автоматизация настройки серверов.',
        link: 'https://www.ansible.com', tag: 'Automation'
    },
    {
        id: 'ops-7', category: 'devops', title: 'Prometheus Alerts',
        desc: 'Настройка правил алертинга для мониторинга.',
        link: 'https://prometheus.io', tag: 'Monitoring'
    },
    {
        id: 'ops-8', category: 'devops', title: 'Bash Scripting',
        desc: 'Написание скриптов для бэкапов и обслуживания.',
        link: '#', tag: 'Shell'
    },
    {
        id: 'ops-9', category: 'devops', title: 'SSL Сертификаты',
        desc: 'Автоматизация получения Let\'s Encrypt сертификатов.',
        link: 'https://letsencrypt.org', tag: 'Security'
    },
    {
        id: 'ops-10', category: 'devops', title: 'Cloudflare Workers',
        desc: 'Деплой edge-функций на Cloudflare.',
        link: 'https://workers.cloudflare.com', tag: 'Edge'
    },

    // 5. QA & Testing
    {
        id: 'qa-1', category: 'testing', title: 'Jest Unit Tests',
        desc: 'Генерация модульных тестов для JS функций.',
        link: 'https://jestjs.io', tag: 'Unit'
    },
    {
        id: 'qa-2', category: 'testing', title: 'Cypress E2E',
        desc: 'Написание сценариев сквозного тестирования.',
        link: 'https://www.cypress.io', tag: 'E2E'
    },
    {
        id: 'qa-3', category: 'testing', title: 'Playwright Tests',
        desc: 'Кроссбраузерное тестирование с Playwright.',
        link: 'https://playwright.dev', tag: 'Browser'
    },
    {
        id: 'qa-4', category: 'testing', title: 'API Testing Postman',
        desc: 'Генерация коллекции тестов для Postman/Newman.',
        link: 'https://www.postman.com', tag: 'API'
    },
    {
        id: 'qa-5', category: 'testing', title: 'Load Testing k6',
        desc: 'Скрипты нагрузочного тестирования на k6.',
        link: 'https://k6.io', tag: 'Performance'
    },
    {
        id: 'qa-6', category: 'testing', title: 'Mock Data Gen',
        desc: 'Создание реалистичных мок-данных (faker.js).',
        link: '#', tag: 'Data'
    },
    {
        id: 'qa-7', category: 'testing', title: 'Visual Regression',
        desc: 'Настройка тестов визуальной регрессии (Storybook).',
        link: 'https://storybook.js.org', tag: 'UI'
    },
    {
        id: 'qa-8', category: 'testing', title: 'Security Scan',
        desc: 'Интеграция OWASP ZAP в CI пайплайн.',
        link: 'https://www.zaproxy.org', tag: 'Security'
    },
    {
        id: 'qa-9', category: 'testing', title: 'Mobile Appium',
        desc: 'Тесты для мобильных приложений на Appium.',
        link: 'https://appium.io', tag: 'Mobile'
    },
    {
        id: 'qa-10', category: 'testing', title: 'Test Coverage Report',
        desc: 'Настройка отчетов о покрытии кода тестами.',
        link: '#', tag: 'Metrics'
    },

    // 6. Refactoring
    {
        id: 'ref-1', category: 'refactoring', title: 'Legacy Code to Modern JS',
        desc: 'Переписывание var на let/const, callback на async/await.',
        link: '#', tag: 'Modernization'
    },
    {
        id: 'ref-2', category: 'refactoring', title: 'Extract Component',
        desc: 'Выделение части JSX в отдельный переиспользуемый компонент.',
        link: '#', tag: 'React'
    },
    {
        id: 'ref-3', category: 'refactoring', title: 'Optimize Imports',
        desc: 'Удаление неиспользуемых импортов и сортировка.',
        link: '#', tag: 'Cleanup'
    },
    {
        id: 'ref-4', category: 'refactoring', title: 'Rename Symbol',
        desc: 'Умное переименование переменных во всем проекте.',
        link: '#', tag: 'IDE'
    },
    {
        id: 'ref-5', category: 'refactoring', title: 'Convert Class to Function',
        desc: 'Преобразование классовых компонентов React в функциональные.',
        link: 'https://react.dev', tag: 'React'
    },
    {
        id: 'ref-6', category: 'refactoring', title: 'Simplify Logic',
        desc: 'Упрощение сложных условий и вложенных циклов.',
        link: '#', tag: 'Logic'
    },
    {
        id: 'ref-7', category: 'refactoring', title: 'Type Definitions',
        desc: 'Добавление TypeScript типов к JS коду (JSDoc или .ts).',
        link: 'https://www.typescriptlang.org', tag: 'TypeScript'
    },
    {
        id: 'ref-8', category: 'refactoring', title: 'CSS Cleanup',
        desc: 'Удаление неиспользуемых CSS правил.',
        link: '#', tag: 'CSS'
    },
    {
        id: 'ref-9', category: 'refactoring', title: 'Design Patterns',
        desc: 'Внедрение паттернов (Singleton, Factory, Observer).',
        link: '#', tag: 'Architecture'
    },
    {
        id: 'ref-10', category: 'refactoring', title: 'Dead Code Elimination',
        desc: 'Поиск и удаление мертвого кода.',
        link: '#', tag: 'Cleanup'
    },

    // 7. Debugging
    {
        id: 'dbg-1', category: 'debugging', title: 'Analyze Stack Trace',
        desc: 'Разбор стека ошибок и предложение исправлений.',
        link: '#', tag: 'Error'
    },
    {
        id: 'dbg-2', category: 'debugging', title: 'Memory Leak Detection',
        desc: 'Поиск утечек памяти в JS/Node.js приложениях.',
        link: '#', tag: 'Performance'
    },
    {
        id: 'dbg-3', category: 'debugging', title: 'Network Request Debug',
        desc: 'Анализ проваленных HTTP запросов.',
        link: '#', tag: 'Network'
    },
    {
        id: 'dbg-4', category: 'debugging', title: 'React Render Cycle',
        desc: 'Выявление лишних ре-рендеров компонентов.',
        link: '#', tag: 'React'
    },
    {
        id: 'dbg-5', category: 'debugging', title: 'SQL Query Optimize',
        desc: 'Анализ медленных SQL запросов (EXPLAIN).',
        link: '#', tag: 'SQL'
    },
    {
        id: 'dbg-6', category: 'debugging', title: 'Log Analysis',
        desc: 'Парсинг логов сервера для поиска паттернов ошибок.',
        link: '#', tag: 'Logs'
    },
    {
        id: 'dbg-7', category: 'debugging', title: 'CSS Layout Debug',
        desc: 'Исправление проблем с z-index и overflow.',
        link: '#', tag: 'CSS'
    },
    {
        id: 'dbg-8', category: 'debugging', title: 'Async/Await Issues',
        desc: 'Поиск потерянных await и Promise.all.',
        link: '#', tag: 'Async'
    },
    {
        id: 'dbg-9', category: 'debugging', title: 'Environment Variables',
        desc: 'Проверка конфигурации переменных окружения.',
        link: '#', tag: 'Config'
    },
    {
        id: 'dbg-10', category: 'debugging', title: 'Dependency Conflict',
        desc: 'Разрешение конфликтов версий npm пакетов.',
        link: '#', tag: 'NPM'
    },

    // 8. Documentation
    {
        id: 'doc-1', category: 'docs', title: 'Generate Readme',
        desc: 'Создание профессионального README.md для проекта.',
        link: '#', tag: 'Markdown'
    },
    {
        id: 'doc-2', category: 'docs', title: 'API Documentation',
        desc: 'Генерация Swagger/OpenAPI спецификации из кода.',
        link: 'https://swagger.io', tag: 'OpenAPI'
    },
    {
        id: 'doc-3', category: 'docs', title: 'Code Comments',
        desc: 'Добавление JSDoc/DocString комментариев к функциям.',
        link: '#', tag: 'Comments'
    },
    {
        id: 'doc-4', category: 'docs', title: 'Changelog Generation',
        desc: 'Создание списка изменений на основе git коммитов.',
        link: '#', tag: 'Git'
    },
    {
        id: 'doc-5', category: 'docs', title: 'User Manual',
        desc: 'Написание инструкции для конечного пользователя.',
        link: '#', tag: 'Writing'
    },
    {
        id: 'doc-6', category: 'docs', title: 'Architecture Diagram',
        desc: 'Генерация Mermaid диаграмм архитектуры.',
        link: 'https://mermaid.js.org', tag: 'Diagrams'
    },
    {
        id: 'doc-7', category: 'docs', title: 'Translation',
        desc: 'Перевод документации на другие языки.',
        link: '#', tag: 'i18n'
    },
    {
        id: 'doc-8', category: 'docs', title: 'Tutorial Creation',
        desc: 'Создание пошаговых туториалов по коду.',
        link: '#', tag: 'Education'
    },
    {
        id: 'doc-9', category: 'docs', title: 'Contributing Guide',
        desc: 'Создание CONTRIBUTING.md для Open Source.',
        link: '#', tag: 'Community'
    },
    {
        id: 'doc-10', category: 'docs', title: 'License File',
        desc: 'Добавление файла лицензии (MIT, Apache).',
        link: '#', tag: 'Legal'
    },

    // 9. API Integrations
    {
        id: 'api-1', category: 'api', title: 'Stripe Payment',
        desc: 'Интеграция платежного шлюза Stripe.',
        link: 'https://stripe.com', tag: 'Payments'
    },
    {
        id: 'api-2', category: 'api', title: 'Google Maps',
        desc: 'Добавление карты и геолокации.',
        link: 'https://developers.google.com/maps', tag: 'Google'
    },
    {
        id: 'api-3', category: 'api', title: 'OpenAI API',
        desc: 'Подключение GPT-4 для генерации текста.',
        link: 'https://openai.com', tag: 'AI'
    },
    {
        id: 'api-4', category: 'api', title: 'Firebase Auth',
        desc: 'Настройка аутентификации через Firebase.',
        link: 'https://firebase.google.com', tag: 'Firebase'
    },
    {
        id: 'api-5', category: 'api', title: 'SendGrid Email',
        desc: 'Отправка транзакционных писем.',
        link: 'https://sendgrid.com', tag: 'Email'
    },
    {
        id: 'api-6', category: 'api', title: 'Twilio SMS',
        desc: 'Отправка SMS уведомлений.',
        link: 'https://www.twilio.com', tag: 'SMS'
    },
    {
        id: 'api-7', category: 'api', title: 'Slack Bot',
        desc: 'Создание бота для уведомлений в Slack.',
        link: 'https://api.slack.com', tag: 'Bot'
    },
    {
        id: 'api-8', category: 'api', title: 'Discord Webhook',
        desc: 'Отправка сообщений в Discord канал.',
        link: 'https://discord.com/developers', tag: 'Discord'
    },
    {
        id: 'api-9', category: 'api', title: 'Notion API',
        desc: 'Синхронизация данных с Notion.',
        link: 'https://developers.notion.com', tag: 'Notion'
    },
    {
        id: 'api-10', category: 'api', title: 'GitHub API',
        desc: 'Автоматизация работы с репозиториями.',
        link: 'https://docs.github.com/en/rest', tag: 'GitHub'
    },

    // 10. Automation
    {
        id: 'auto-1', category: 'automation', title: 'File Renamer',
        desc: 'Массовое переименование файлов по маске.',
        link: '#', tag: 'Scripting'
    },
    {
        id: 'auto-2', category: 'automation', title: 'Image Resizer',
        desc: 'Пакетное изменение размера изображений.',
        link: '#', tag: 'Media'
    },
    {
        id: 'auto-3', category: 'automation', title: 'Data Scraper',
        desc: 'Сбор данных с веб-страниц (Puppeteer).',
        link: '#', tag: 'Scraping'
    },
    {
        id: 'auto-4', category: 'automation', title: 'PDF Generator',
        desc: 'Генерация PDF отчетов из HTML.',
        link: '#', tag: 'PDF'
    },
    {
        id: 'auto-5', category: 'automation', title: 'Excel Parser',
        desc: 'Чтение и запись Excel файлов (xlsx).',
        link: '#', tag: 'Office'
    },
    {
        id: 'auto-6', category: 'automation', title: 'Cron Jobs',
        desc: 'Настройка периодических задач.',
        link: '#', tag: 'System'
    },
    {
        id: 'auto-7', category: 'automation', title: 'Backup Script',
        desc: 'Автоматическое создание резервных копий БД.',
        link: '#', tag: 'Backup'
    },
    {
        id: 'auto-8', category: 'automation', title: 'System Health Check',
        desc: 'Скрипт проверки доступности сервисов.',
        link: '#', tag: 'Monitoring'
    },
    {
        id: 'auto-9', category: 'automation', title: 'Git Hooks',
        desc: 'Настройка pre-commit хуков (Husky).',
        link: '#', tag: 'Git'
    },
    {
        id: 'auto-10', category: 'automation', title: 'Release Script',
        desc: 'Автоматизация версионирования и релиза.',
        link: '#', tag: 'CI/CD'
    }
];

