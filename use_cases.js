const useCases = [
    {
        "id": "core-1",
        "slug": "agent-first-ide-workflow",
        "category": "core",
        "title": "Agent-First IDE Workflow",
        "desc": "Как использовать агент-ориентированный подход вместо традиционного редактора.",
        "link": "./core/agent-first-ide-workflow.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-2",
        "slug": "manager-surface-dashboard",
        "category": "core",
        "title": "Manager Surface Dashboard",
        "desc": "Управление несколькими агентами через Mission Control интерфейс.",
        "link": "./core/manager-surface-dashboard.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-3",
        "slug": "browser-subagent-automation",
        "category": "core",
        "title": "Browser Subagent Automation",
        "desc": "Использование встроенного браузерного агента для E2E тестов и веб-скрапинга.",
        "link": "./core/browser-subagent-automation.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-4",
        "slug": "generating-artifacts",
        "category": "core",
        "title": "Generating Artifacts",
        "desc": "Создание и экспорт артефактов: планы, диаграммы, видео-отчеты.",
        "link": "./core/generating-artifacts.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-5",
        "slug": "multi-agent-collaboration",
        "category": "core",
        "title": "Multi-Agent Collaboration",
        "desc": "Запуск параллельных агентов для фронтенда и бэкенда одновременно.",
        "link": "./core/multi-agent-collaboration.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-6",
        "slug": "feedback-loops-learning",
        "category": "core",
        "title": "Feedback Loops & Learning",
        "desc": "Как обучать агента через комментарии в стиле Google Docs.",
        "link": "./core/feedback-loops-learning.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-7",
        "slug": "model-selection-gemini-claude",
        "category": "core",
        "title": "Model Selection (Gemini/Claude)",
        "desc": "Переключение между Gemini 3, Claude Sonnet 4.5 и GPT-OSS.",
        "link": "./core/model-selection-gemini-claude.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-8",
        "slug": "context-management",
        "category": "core",
        "title": "Context Management",
        "desc": "Управление контекстом и базой знаний агента.",
        "link": "./core/context-management.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-9",
        "slug": "terminal-integration",
        "category": "core",
        "title": "Terminal Integration",
        "desc": "Безопасное выполнение терминальных команд агентом.",
        "link": "./core/terminal-integration.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "core-10",
        "slug": "visual-regression-with-artifacts",
        "category": "core",
        "title": "Visual Regression with Artifacts",
        "desc": "Использование скриншотов-артефактов для визуальной проверки.",
        "link": "./core/visual-regression-with-artifacts.html",
        "tag": "Antigravity Core Features"
    },
    {
        "id": "web-1",
        "slug": "react-component-generation",
        "category": "web-dev",
        "title": "React Component Generation",
        "desc": "Создание функциональных компонентов с пропсами и типами.",
        "link": "./web/react-component-generation.html",
        "tag": "Web Development"
    },
    {
        "id": "web-2",
        "slug": "tailwind-css-conversion",
        "category": "web-dev",
        "title": "Tailwind CSS Conversion",
        "desc": "Миграция с CSS/SASS на Tailwind Utility Classes.",
        "link": "./web/tailwind-css-conversion.html",
        "tag": "Web Development"
    },
    {
        "id": "web-3",
        "slug": "next-js-app-router-setup",
        "category": "web-dev",
        "title": "Next.js App Router Setup",
        "desc": "Скаффолдинг структуры папок для Next.js 14+.",
        "link": "./web/next-js-app-router-setup.html",
        "tag": "Web Development"
    },
    {
        "id": "web-4",
        "slug": "form-validation-zod-rhf",
        "category": "web-dev",
        "title": "Form Validation (Zod/RHF)",
        "desc": "Генерация форм с клиентской и серверной валидацией.",
        "link": "./web/form-validation-zod-rhf.html",
        "tag": "Web Development"
    },
    {
        "id": "web-5",
        "slug": "responsive-design-implementation",
        "category": "web-dev",
        "title": "Responsive Design Implementation",
        "desc": "Адаптация верстки под мобильные устройства.",
        "link": "./web/responsive-design-implementation.html",
        "tag": "Web Development"
    },
    {
        "id": "web-6",
        "slug": "dark-mode-integration",
        "category": "web-dev",
        "title": "Dark Mode Integration",
        "desc": "Реализация темизации с системными настройками.",
        "link": "./web/dark-mode-integration.html",
        "tag": "Web Development"
    },
    {
        "id": "web-7",
        "slug": "framer-motion-animations",
        "category": "web-dev",
        "title": "Framer Motion Animations",
        "desc": "Добавление декларативных анимаций интерфейса.",
        "link": "./web/framer-motion-animations.html",
        "tag": "Web Development"
    },
    {
        "id": "web-8",
        "slug": "web-performance-optimization",
        "category": "web-dev",
        "title": "Web Performance Optimization",
        "desc": "Lazy loading, оптимизация шрифтов и изображений.",
        "link": "./web/web-performance-optimization.html",
        "tag": "Web Development"
    },
    {
        "id": "web-9",
        "slug": "pwa-configuration",
        "category": "web-dev",
        "title": "PWA Configuration",
        "desc": "Настройка Service Workers и манифеста.",
        "link": "./web/pwa-configuration.html",
        "tag": "Web Development"
    },
    {
        "id": "web-10",
        "slug": "accessibility-a11y-audit",
        "category": "web-dev",
        "title": "Accessibility (a11y) Audit",
        "desc": "Автоматическое исправление ARIA-атрибутов.",
        "link": "./web/accessibility-a11y-audit.html",
        "tag": "Web Development"
    },
    {
        "id": "be-1",
        "slug": "go-rest-api-boilerplate",
        "category": "backend",
        "title": "Go REST API Boilerplate",
        "desc": "Генерация сервиса на Gin/Echo с чистой архитектурой.",
        "link": "./backend/go-rest-api-boilerplate.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-2",
        "slug": "graphql-schema-generation",
        "category": "backend",
        "title": "GraphQL Schema Generation",
        "desc": "Создание схемы и резолверов из SQL моделей.",
        "link": "./backend/graphql-schema-generation.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-3",
        "slug": "postgresql-migrations",
        "category": "backend",
        "title": "PostgreSQL Migrations",
        "desc": "Написание SQL миграций для изменения схемы БД.",
        "link": "./backend/postgresql-migrations.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-4",
        "slug": "jwt-auth-implementation",
        "category": "backend",
        "title": "JWT Auth Implementation",
        "desc": "Полный цикл аутентификации и авторизации.",
        "link": "./backend/jwt-auth-implementation.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-5",
        "slug": "redis-caching-layer",
        "category": "backend",
        "title": "Redis Caching Layer",
        "desc": "Интеграция кэширования для высоконагруженных API.",
        "link": "./backend/redis-caching-layer.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-6",
        "slug": "grpc-microservices",
        "category": "backend",
        "title": "gRPC Microservices",
        "desc": "Создание .proto файлов и генерация кода сервисов.",
        "link": "./backend/grpc-microservices.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-7",
        "slug": "websocket-real-time-server",
        "category": "backend",
        "title": "WebSocket Real-time Server",
        "desc": "Чат-сервер на Node.js или Go.",
        "link": "./backend/websocket-real-time-server.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-8",
        "slug": "message-queue-consumers",
        "category": "backend",
        "title": "Message Queue Consumers",
        "desc": "Обработка сообщений RabbitMQ/Kafka.",
        "link": "./backend/message-queue-consumers.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-9",
        "slug": "serverless-functions-aws",
        "category": "backend",
        "title": "Serverless Functions (AWS)",
        "desc": "Деплой Lambda функций через SAM или Terraform.",
        "link": "./backend/serverless-functions-aws.html",
        "tag": "Backend Systems"
    },
    {
        "id": "be-10",
        "slug": "logging-telemetry",
        "category": "backend",
        "title": "Logging & Telemetry",
        "desc": "Настройка OpenTelemetry и ELK стека.",
        "link": "./backend/logging-telemetry.html",
        "tag": "Backend Systems"
    },
    {
        "id": "ds-1",
        "slug": "eda-report-generation",
        "category": "datascience",
        "title": "EDA Report Generation",
        "desc": "Автоматический разведочный анализ данных (Pandas).",
        "link": "./ds/eda-report-generation.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-2",
        "slug": "scikit-learn-model-training",
        "category": "datascience",
        "title": "Scikit-learn Model Training",
        "desc": "Пайплайн обучения и валидации классификатора.",
        "link": "./ds/scikit-learn-model-training.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-3",
        "slug": "advanced-matplotlib-plots",
        "category": "datascience",
        "title": "Advanced Matplotlib Plots",
        "desc": "Генерация сложных визуализаций для публикаций.",
        "link": "./ds/advanced-matplotlib-plots.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-4",
        "slug": "pytorch-cnn-architecture",
        "category": "datascience",
        "title": "PyTorch CNN Architecture",
        "desc": "Создание нейросети для компьютерного зрения.",
        "link": "./ds/pytorch-cnn-architecture.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-5",
        "slug": "nlp-text-preprocessing",
        "category": "datascience",
        "title": "NLP Text Preprocessing",
        "desc": "Токенизация и лемматизация с NLTK/Spacy.",
        "link": "./ds/nlp-text-preprocessing.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-6",
        "slug": "jupyter-notebook-refactoring",
        "category": "datascience",
        "title": "Jupyter Notebook Refactoring",
        "desc": "Очистка ноутбуков для продакшена.",
        "link": "./ds/jupyter-notebook-refactoring.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-7",
        "slug": "data-cleaning-scripts",
        "category": "datascience",
        "title": "Data Cleaning Scripts",
        "desc": "Обработка пропусков и выбросов в датасетах.",
        "link": "./ds/data-cleaning-scripts.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-8",
        "slug": "airflow-dag-creation",
        "category": "datascience",
        "title": "Airflow DAG Creation",
        "desc": "Написание ETL процессов для Apache Airflow.",
        "link": "./ds/airflow-dag-creation.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-9",
        "slug": "fastapi-model-serving",
        "category": "datascience",
        "title": "FastAPI Model Serving",
        "desc": "Обертка ML модели в REST API.",
        "link": "./ds/fastapi-model-serving.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ds-10",
        "slug": "a-b-test-analysis",
        "category": "datascience",
        "title": "A/B Test Analysis",
        "desc": "Статистический анализ результатов экспериментов.",
        "link": "./ds/a-b-test-analysis.html",
        "tag": "Data Science & ML"
    },
    {
        "id": "ops-1",
        "slug": "docker-compose-setup",
        "category": "devops",
        "title": "Docker Compose Setup",
        "desc": "Мульти-контейнерная среда для разработки.",
        "link": "./devops/docker-compose-setup.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-2",
        "slug": "k8s-manifest-generation",
        "category": "devops",
        "title": "K8s Manifest Generation",
        "desc": "Deployment, Service и Ingress для Kubernetes.",
        "link": "./devops/k8s-manifest-generation.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-3",
        "slug": "terraform-aws-infrastructure",
        "category": "devops",
        "title": "Terraform AWS Infrastructure",
        "desc": "IaC для VPC, EC2 и RDS.",
        "link": "./devops/terraform-aws-infrastructure.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-4",
        "slug": "github-actions-ci-cd",
        "category": "devops",
        "title": "GitHub Actions CI/CD",
        "desc": "Пайплайн сборки, тестов и деплоя.",
        "link": "./devops/github-actions-ci-cd.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-5",
        "slug": "nginx-reverse-proxy",
        "category": "devops",
        "title": "Nginx Reverse Proxy",
        "desc": "Конфигурация проксирования и SSL.",
        "link": "./devops/nginx-reverse-proxy.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-6",
        "slug": "ansible-playbooks",
        "category": "devops",
        "title": "Ansible Playbooks",
        "desc": "Управление конфигурацией серверов.",
        "link": "./devops/ansible-playbooks.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-7",
        "slug": "prometheus-alerting",
        "category": "devops",
        "title": "Prometheus Alerting",
        "desc": "Настройка правил для Alertmanager.",
        "link": "./devops/prometheus-alerting.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-8",
        "slug": "bash-maintenance-scripts",
        "category": "devops",
        "title": "Bash Maintenance Scripts",
        "desc": "Скрипты бэкапов и ротации логов.",
        "link": "./devops/bash-maintenance-scripts.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-9",
        "slug": "ssl-certificate-auto-renewal",
        "category": "devops",
        "title": "SSL Certificate Auto-renewal",
        "desc": "Настройка Certbot и Let's Encrypt.",
        "link": "./devops/ssl-certificate-auto-renewal.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "ops-10",
        "slug": "cloudflare-workers-deploy",
        "category": "devops",
        "title": "Cloudflare Workers Deploy",
        "desc": "Развертывание Edge-функций.",
        "link": "./devops/cloudflare-workers-deploy.html",
        "tag": "DevOps & Cloud"
    },
    {
        "id": "qa-1",
        "slug": "jest-unit-testing",
        "category": "testing",
        "title": "Jest Unit Testing",
        "desc": "Генерация тестов для JS/TS функций.",
        "link": "./qa/jest-unit-testing.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-2",
        "slug": "cypress-e2e-scenarios",
        "category": "testing",
        "title": "Cypress E2E Scenarios",
        "desc": "Сквозное тестирование пользовательских путей.",
        "link": "./qa/cypress-e2e-scenarios.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-3",
        "slug": "playwright-cross-browser",
        "category": "testing",
        "title": "Playwright Cross-browser",
        "desc": "Автоматизация браузерных тестов.",
        "link": "./qa/playwright-cross-browser.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-4",
        "slug": "postman-collection-gen",
        "category": "testing",
        "title": "Postman Collection Gen",
        "desc": "Создание коллекции тестов для API.",
        "link": "./qa/postman-collection-gen.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-5",
        "slug": "k6-load-testing",
        "category": "testing",
        "title": "k6 Load Testing",
        "desc": "Нагрузочное тестирование производительности.",
        "link": "./qa/k6-load-testing.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-6",
        "slug": "faker-js-mock-data",
        "category": "testing",
        "title": "Faker.js Mock Data",
        "desc": "Генерация реалистичных тестовых данных.",
        "link": "./qa/faker-js-mock-data.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-7",
        "slug": "storybook-visual-tests",
        "category": "testing",
        "title": "Storybook Visual Tests",
        "desc": "Тестирование компонентов в изоляции.",
        "link": "./qa/storybook-visual-tests.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-8",
        "slug": "owasp-zap-security-scan",
        "category": "testing",
        "title": "OWASP ZAP Security Scan",
        "desc": "Автоматизированный поиск уязвимостей.",
        "link": "./qa/owasp-zap-security-scan.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-9",
        "slug": "appium-mobile-tests",
        "category": "testing",
        "title": "Appium Mobile Tests",
        "desc": "Тесты для iOS и Android приложений.",
        "link": "./qa/appium-mobile-tests.html",
        "tag": "QA & Testing"
    },
    {
        "id": "qa-10",
        "slug": "coverage-reports-setup",
        "category": "testing",
        "title": "Coverage Reports Setup",
        "desc": "Интеграция Codecov или Istanbul.",
        "link": "./qa/coverage-reports-setup.html",
        "tag": "QA & Testing"
    },
    {
        "id": "ref-1",
        "slug": "legacy-js-to-modern",
        "category": "refactoring",
        "title": "Legacy JS to Modern",
        "desc": "Обновление синтаксиса (ES6+).",
        "link": "./refactor/legacy-js-to-modern.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-2",
        "slug": "extract-react-component",
        "category": "refactoring",
        "title": "Extract React Component",
        "desc": "Декомпозиция больших компонентов.",
        "link": "./refactor/extract-react-component.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-3",
        "slug": "optimize-imports",
        "category": "refactoring",
        "title": "Optimize Imports",
        "desc": "Удаление неиспользуемых зависимостей.",
        "link": "./refactor/optimize-imports.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-4",
        "slug": "variable-renaming",
        "category": "refactoring",
        "title": "Variable Renaming",
        "desc": "Улучшение читаемости кода.",
        "link": "./refactor/variable-renaming.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-5",
        "slug": "class-to-function",
        "category": "refactoring",
        "title": "Class to Function",
        "desc": "Миграция на React Hooks.",
        "link": "./refactor/class-to-function.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-6",
        "slug": "logic-simplification",
        "category": "refactoring",
        "title": "Logic Simplification",
        "desc": "Устранение вложенности (Guard Clauses).",
        "link": "./refactor/logic-simplification.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-7",
        "slug": "typescript-migration",
        "category": "refactoring",
        "title": "TypeScript Migration",
        "desc": "Добавление строгой типизации в JS проект.",
        "link": "./refactor/typescript-migration.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-8",
        "slug": "css-cleanup",
        "category": "refactoring",
        "title": "CSS Cleanup",
        "desc": "Удаление мертвого CSS кода.",
        "link": "./refactor/css-cleanup.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-9",
        "slug": "design-patterns-impl",
        "category": "refactoring",
        "title": "Design Patterns Impl",
        "desc": "Внедрение Singleton, Factory, Observer.",
        "link": "./refactor/design-patterns-impl.html",
        "tag": "Refactoring"
    },
    {
        "id": "ref-10",
        "slug": "dead-code-elimination",
        "category": "refactoring",
        "title": "Dead Code Elimination",
        "desc": "Анализ и удаление неиспользуемого кода.",
        "link": "./refactor/dead-code-elimination.html",
        "tag": "Refactoring"
    },
    {
        "id": "dbg-1",
        "slug": "stack-trace-analysis",
        "category": "debugging",
        "title": "Stack Trace Analysis",
        "desc": "Расшифровка и исправление ошибок.",
        "link": "./debug/stack-trace-analysis.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-2",
        "slug": "memory-leak-hunt",
        "category": "debugging",
        "title": "Memory Leak Hunt",
        "desc": "Поиск утечек в Node.js/Browser.",
        "link": "./debug/memory-leak-hunt.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-3",
        "slug": "network-request-debug",
        "category": "debugging",
        "title": "Network Request Debug",
        "desc": "Анализ заголовков и тел запросов.",
        "link": "./debug/network-request-debug.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-4",
        "slug": "react-render-optimization",
        "category": "debugging",
        "title": "React Render Optimization",
        "desc": "Поиск лишних ре-рендеров.",
        "link": "./debug/react-render-optimization.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-5",
        "slug": "slow-sql-query-fix",
        "category": "debugging",
        "title": "Slow SQL Query Fix",
        "desc": "Оптимизация индексов и запросов.",
        "link": "./debug/slow-sql-query-fix.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-6",
        "slug": "server-log-parsing",
        "category": "debugging",
        "title": "Server Log Parsing",
        "desc": "Анализ логов доступа и ошибок.",
        "link": "./debug/server-log-parsing.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-7",
        "slug": "css-layout-fixes",
        "category": "debugging",
        "title": "CSS Layout Fixes",
        "desc": "Решение проблем с z-index и flexbox.",
        "link": "./debug/css-layout-fixes.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-8",
        "slug": "async-race-conditions",
        "category": "debugging",
        "title": "Async Race Conditions",
        "desc": "Отладка проблем асинхронности.",
        "link": "./debug/async-race-conditions.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-9",
        "slug": "env-config-validation",
        "category": "debugging",
        "title": "Env Config Validation",
        "desc": "Проверка переменных окружения.",
        "link": "./debug/env-config-validation.html",
        "tag": "Debugging"
    },
    {
        "id": "dbg-10",
        "slug": "dependency-hell-fix",
        "category": "debugging",
        "title": "Dependency Hell Fix",
        "desc": "Разрешение конфликтов версий npm.",
        "link": "./debug/dependency-hell-fix.html",
        "tag": "Debugging"
    },
    {
        "id": "doc-1",
        "slug": "readme-md-generation",
        "category": "docs",
        "title": "README.md Generation",
        "desc": "Создание продающего описания проекта.",
        "link": "./docs/readme-md-generation.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-2",
        "slug": "openapi-swagger-specs",
        "category": "docs",
        "title": "OpenAPI/Swagger Specs",
        "desc": "Авто-генерация документации API.",
        "link": "./docs/openapi-swagger-specs.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-3",
        "slug": "jsdoc-docstrings",
        "category": "docs",
        "title": "JSDoc/DocStrings",
        "desc": "Документирование функций и классов.",
        "link": "./docs/jsdoc-docstrings.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-4",
        "slug": "changelog-automation",
        "category": "docs",
        "title": "Changelog Automation",
        "desc": "Генерация списка изменений из git.",
        "link": "./docs/changelog-automation.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-5",
        "slug": "user-manuals",
        "category": "docs",
        "title": "User Manuals",
        "desc": "Написание инструкций для пользователей.",
        "link": "./docs/user-manuals.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-6",
        "slug": "mermaid-architecture-maps",
        "category": "docs",
        "title": "Mermaid Architecture Maps",
        "desc": "Визуализация архитектуры в коде.",
        "link": "./docs/mermaid-architecture-maps.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-7",
        "slug": "i18n-documentation",
        "category": "docs",
        "title": "i18n Documentation",
        "desc": "Перевод документации на языки мира.",
        "link": "./docs/i18n-documentation.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-8",
        "slug": "code-tutorials",
        "category": "docs",
        "title": "Code Tutorials",
        "desc": "Создание обучающих материалов.",
        "link": "./docs/code-tutorials.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-9",
        "slug": "contributing-md",
        "category": "docs",
        "title": "CONTRIBUTING.md",
        "desc": "Гайдлайны для контрибьюторов.",
        "link": "./docs/contributing-md.html",
        "tag": "Documentation"
    },
    {
        "id": "doc-10",
        "slug": "license-management",
        "category": "docs",
        "title": "License Management",
        "desc": "Добавление и проверка лицензий.",
        "link": "./docs/license-management.html",
        "tag": "Documentation"
    },
    {
        "id": "api-1",
        "slug": "stripe-integration",
        "category": "api",
        "title": "Stripe Integration",
        "desc": "Прием платежей и подписки.",
        "link": "./api/stripe-integration.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-2",
        "slug": "google-maps-api",
        "category": "api",
        "title": "Google Maps API",
        "desc": "Геолокация и карты.",
        "link": "./api/google-maps-api.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-3",
        "slug": "openai-gemini-api",
        "category": "api",
        "title": "OpenAI/Gemini API",
        "desc": "Внедрение ИИ возможностей.",
        "link": "./api/openai-gemini-api.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-4",
        "slug": "firebase-services",
        "category": "api",
        "title": "Firebase Services",
        "desc": "Auth, Firestore, Storage.",
        "link": "./api/firebase-services.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-5",
        "slug": "sendgrid-mailgun",
        "category": "api",
        "title": "SendGrid/Mailgun",
        "desc": "Транзакционные email рассылки.",
        "link": "./api/sendgrid-mailgun.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-6",
        "slug": "twilio-sms-voice",
        "category": "api",
        "title": "Twilio SMS/Voice",
        "desc": "Коммуникации и уведомления.",
        "link": "./api/twilio-sms-voice.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-7",
        "slug": "slack-discord-bots",
        "category": "api",
        "title": "Slack/Discord Bots",
        "desc": "Интеграция с мессенджерами.",
        "link": "./api/slack-discord-bots.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-8",
        "slug": "notion-api-sync",
        "category": "api",
        "title": "Notion API Sync",
        "desc": "Управление базами знаний.",
        "link": "./api/notion-api-sync.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-9",
        "slug": "github-rest-api",
        "category": "api",
        "title": "GitHub REST API",
        "desc": "Автоматизация работы с кодом.",
        "link": "./api/github-rest-api.html",
        "tag": "API Integrations"
    },
    {
        "id": "api-10",
        "slug": "oauth2-providers",
        "category": "api",
        "title": "OAuth2 Providers",
        "desc": "Вход через Google/Facebook/GitHub.",
        "link": "./api/oauth2-providers.html",
        "tag": "API Integrations"
    },
    {
        "id": "auto-1",
        "slug": "batch-file-renaming",
        "category": "automation",
        "title": "Batch File Renaming",
        "desc": "Массовая обработка файлов.",
        "link": "./auto/batch-file-renaming.html",
        "tag": "Automation"
    },
    {
        "id": "auto-2",
        "slug": "image-processing",
        "category": "automation",
        "title": "Image Processing",
        "desc": "Ресайз и конвертация форматов.",
        "link": "./auto/image-processing.html",
        "tag": "Automation"
    },
    {
        "id": "auto-3",
        "slug": "web-scraping-puppeteer",
        "category": "automation",
        "title": "Web Scraping (Puppeteer)",
        "desc": "Сбор данных с сайтов.",
        "link": "./auto/web-scraping-puppeteer.html",
        "tag": "Automation"
    },
    {
        "id": "auto-4",
        "slug": "pdf-generation",
        "category": "automation",
        "title": "PDF Generation",
        "desc": "Создание отчетов из HTML/Markdown.",
        "link": "./auto/pdf-generation.html",
        "tag": "Automation"
    },
    {
        "id": "auto-5",
        "slug": "excel-csv-parsing",
        "category": "automation",
        "title": "Excel/CSV Parsing",
        "desc": "Обработка табличных данных.",
        "link": "./auto/excel-csv-parsing.html",
        "tag": "Automation"
    },
    {
        "id": "auto-6",
        "slug": "cron-job-scheduling",
        "category": "automation",
        "title": "Cron Job Scheduling",
        "desc": "Планирование периодических задач.",
        "link": "./auto/cron-job-scheduling.html",
        "tag": "Automation"
    },
    {
        "id": "auto-7",
        "slug": "database-backups",
        "category": "automation",
        "title": "Database Backups",
        "desc": "Автоматизация дампов БД.",
        "link": "./auto/database-backups.html",
        "tag": "Automation"
    },
    {
        "id": "auto-8",
        "slug": "health-check-scripts",
        "category": "automation",
        "title": "Health Check Scripts",
        "desc": "Мониторинг доступности сервисов.",
        "link": "./auto/health-check-scripts.html",
        "tag": "Automation"
    },
    {
        "id": "auto-9",
        "slug": "git-hooks-husky",
        "category": "automation",
        "title": "Git Hooks (Husky)",
        "desc": "Проверки перед коммитом.",
        "link": "./auto/git-hooks-husky.html",
        "tag": "Automation"
    },
    {
        "id": "auto-10",
        "slug": "release-versioning",
        "category": "automation",
        "title": "Release Versioning",
        "desc": "SemVer и генерация тегов.",
        "link": "./auto/release-versioning.html",
        "tag": "Automation"
    },
    {
        "id": "mcp-1",
        "slug": "mcp-server-creation",
        "category": "mcp",
        "title": "MCP Server Creation",
        "desc": "Создание собственного MCP сервера для расширения возможностей LLM.",
        "link": "./mcp/mcp-server-creation.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-2",
        "slug": "file-system-mcp-server",
        "category": "mcp",
        "title": "File System MCP Server",
        "desc": "Сервер для безопасного доступа к файловой системе через MCP.",
        "link": "./mcp/file-system-mcp-server.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-3",
        "slug": "database-mcp-integration",
        "category": "mcp",
        "title": "Database MCP Integration",
        "desc": "Подключение баз данных (PostgreSQL, MySQL) через MCP протокол.",
        "link": "./mcp/database-mcp-integration.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-4",
        "slug": "web-search-mcp-tool",
        "category": "mcp",
        "title": "Web Search MCP Tool",
        "desc": "Интеграция поисковых API (Google, Brave) как MCP инструмент.",
        "link": "./mcp/web-search-mcp-tool.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-5",
        "slug": "github-mcp-server",
        "category": "mcp",
        "title": "GitHub MCP Server",
        "desc": "Управление репозиториями и issues через MCP.",
        "link": "./mcp/github-mcp-server.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-6",
        "slug": "slack-mcp-integration",
        "category": "mcp",
        "title": "Slack MCP Integration",
        "desc": "Отправка сообщений и чтение каналов через MCP.",
        "link": "./mcp/slack-mcp-integration.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-7",
        "slug": "custom-mcp-resources",
        "category": "mcp",
        "title": "Custom MCP Resources",
        "desc": "Создание кастомных ресурсов для контекста модели.",
        "link": "./mcp/custom-mcp-resources.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-8",
        "slug": "mcp-prompts-library",
        "category": "mcp",
        "title": "MCP Prompts Library",
        "desc": "Библиотека переиспользуемых промптов через MCP.",
        "link": "./mcp/mcp-prompts-library.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-9",
        "slug": "mcp-tools-development",
        "category": "mcp",
        "title": "MCP Tools Development",
        "desc": "Разработка инструментов (Tools) для расширения функционала.",
        "link": "./mcp/mcp-tools-development.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-10",
        "slug": "memory-mcp-server",
        "category": "mcp",
        "title": "Memory MCP Server",
        "desc": "Долгосрочная память для агента через MCP.",
        "link": "./mcp/memory-mcp-server.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-11",
        "slug": "puppeteer-mcp-automation",
        "category": "mcp",
        "title": "Puppeteer MCP Automation",
        "desc": "Браузерная автоматизация через MCP протокол.",
        "link": "./mcp/puppeteer-mcp-automation.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-12",
        "slug": "google-drive-mcp",
        "category": "mcp",
        "title": "Google Drive MCP",
        "desc": "Доступ к Google Drive документам через MCP.",
        "link": "./mcp/google-drive-mcp.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-13",
        "slug": "sequential-thinking-mcp",
        "category": "mcp",
        "title": "Sequential Thinking MCP",
        "desc": "Улучшение рассуждений модели через MCP промпты.",
        "link": "./mcp/sequential-thinking-mcp.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-14",
        "slug": "time-calendar-mcp",
        "category": "mcp",
        "title": "Time & Calendar MCP",
        "desc": "Работа с датами, временем и календарями через MCP.",
        "link": "./mcp/time-calendar-mcp.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-15",
        "slug": "fetch-mcp-server",
        "category": "mcp",
        "title": "Fetch MCP Server",
        "desc": "HTTP запросы к внешним API через MCP.",
        "link": "./mcp/fetch-mcp-server.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-16",
        "slug": "notion-mcp-integration",
        "category": "mcp",
        "title": "Notion MCP Integration",
        "desc": "Синхронизация с Notion базами знаний.",
        "link": "./mcp/notion-mcp-integration.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-17",
        "slug": "mcp-server-security",
        "category": "mcp",
        "title": "MCP Server Security",
        "desc": "Настройка аутентификации и авторизации для MCP серверов.",
        "link": "./mcp/mcp-server-security.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-18",
        "slug": "mcp-logging-monitoring",
        "category": "mcp",
        "title": "MCP Logging & Monitoring",
        "desc": "Отслеживание использования и ошибок MCP серверов.",
        "link": "./mcp/mcp-logging-monitoring.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-19",
        "slug": "multi-server-mcp-setup",
        "category": "mcp",
        "title": "Multi-Server MCP Setup",
        "desc": "Конфигурация нескольких MCP серверов одновременно.",
        "link": "./mcp/multi-server-mcp-setup.html",
        "tag": "MCP (Model Context Protocol)"
    },
    {
        "id": "mcp-20",
        "slug": "mcp-typescript-sdk",
        "category": "mcp",
        "title": "MCP TypeScript SDK",
        "desc": "Использование официального SDK для разработки MCP серверов.",
        "link": "./mcp/mcp-typescript-sdk.html",
        "tag": "MCP (Model Context Protocol)"
    }
];