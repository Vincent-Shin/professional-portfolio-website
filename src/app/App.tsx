
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Sparkles,
  Sun,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const projectCards = [
  {
    id: "project-portfolio-website-system",
    title: "Professional Portfolio Website",
    meta: "Engineering Portfolio Platform | 2026",
    summary:
      "Recruiter-focused portfolio website with dual-mode presentation, resume targeting, project storytelling, and polished modal navigation.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "UI Writing"],
    imageLabel: "Frontend / Portfolio System",
    imageSrc: assetPath("/project-visuals/01-portfolio.png"),
  },
  {
    id: "project-car-sales-revenue",
    title: "Predicting Car Sales Revenue",
    meta: "ENSF 444 � Machine Learning System � December 2025",
    summary:
      "Revenue forecasting system built on 500,000+ records with reproducible preprocessing, feature engineering, and regression benchmarking.",
    stack: ["Python", "pandas", "NumPy", "scikit-learn", "joblib"],
    imageLabel: "ML / Revenue Forecasting",
    imageSrc: assetPath("/project-visuals/02-car-sales.png"),
  },
  {
    id: "project-data-ingestion-backend-system",
    title: "Data Ingestion & Backend System",
    meta: "SENG 513 � February 2026",
    summary:
      "Backend ingestion pipeline for restaurant menu and nutrition data with normalization, deduplication, enrichment, and API delivery.",
    stack: ["Python", "Flask", "MongoDB", "Docker", "PyMongo"],
    imageLabel: "Backend / ETL Pipeline",
    imageSrc: assetPath("/project-visuals/04-data-ingestion.png"),
  },
  {
    id: "project-jp-morgan-chase-virtual-experience",
    title: "JP Morgan Chase Virtual Experience",
    meta: "Certificate / Simulation � January 2026",
    summary:
      "Spring Boot transaction-processing simulation with persistence, balance retrieval, and Kafka-based event-ingestion scaffolding.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "Kafka", "H2"],
    imageLabel: "Certificate / Finance Backend",
    imageSrc: assetPath("/project-visuals/05-jpmorgan-certificate.png"),
  },
  {
    id: "project-backend-job-market-simulation-system",
    title: "Backend Job-Market Simulation System",
    meta: "SENG 401 � February 2026",
    summary:
      "Service-layer backend for a job-market simulation game with persistent player state, progression logic, and application outcomes.",
    stack: ["Python", "Flask", "SQLAlchemy", "SQLite", "REST API"],
    imageLabel: "Simulation / Game Backend",
    imageSrc: assetPath("/project-visuals/03-job-market.png"),
  },
  {
    id: "project-movie-ticket-reservation-system",
    title: "Movie Ticket Reservation System",
    meta: "ENSF 480 � April 2025",
    summary:
      "Java reservation platform with relational persistence, booking workflows, receipt generation, and cancellation rule enforcement.",
    stack: ["Java", "JDBC", "MySQL", "SQL", "Swing"],
    imageLabel: "Database / Reservation System",
    imageSrc: assetPath("/project-visuals/movie-seatmap.jpg"),
  },
  {
    id: "project-java-web-quality-engineering-system",
    title: "Java Web Quality Engineering System",
    meta: "ENSF 400 � December 2025",
    summary:
      "Multi-module Java web application emphasizing quality engineering through automated testing, CI/CD, migration tooling, and validation.",
    stack: ["Java", "Servlets", "Tomcat", "JUnit", "Jenkins"],
    imageLabel: "Quality Engineering / Web App",
    imageSrc: assetPath("/project-visuals/06-java-web.png"),
  },
  {
    id: "project-disaster-relief-management-system",
    title: "Disaster Relief Management System",
    meta: "Object-Oriented Java System | 2025",
    summary:
      "Java case-management model for disaster-relief records with domain entities, a database manager layer, and unit-tested object behavior.",
    stack: ["Java", "OOP", "JUnit", "JDBC", "Domain Modeling"],
    imageLabel: "Java / Relief Case Management",
    imageSrc: assetPath("/project-visuals/09-disaster-relief.png"),
  },
  {
    id: "project-jfreechart-testing-project",
    title: "JFreeChart Testing Project",
    meta: "Testing Project � April 2025",
    summary:
      "White-box test suite expansion for core JFreeChart utility classes covering boundary conditions, exceptions, and mock-based isolation.",
    stack: ["Java", "JUnit", "JMock", "White-box Testing"],
    imageLabel: "Testing / QA Engineering",
    imageSrc: assetPath("/project-visuals/10-jfreechart.png"),
  },
  {
    id: "project-embedded-systems-control-project",
    title: "Embedded Systems Control Project",
    meta: "PIC24F16KA101 � December 2025",
    summary:
      "Interrupt-driven embedded firmware integrating change notification interrupts, timer-based LED control, UART output, and idle-mode execution.",
    stack: ["Embedded C", "PIC24", "UART", "Timer Interrupts"],
    imageLabel: "Embedded / Firmware Control",
    imageSrc: assetPath("/project-visuals/07-embedded.png"),
  },
  {
    id: "project-calgary-hackathon-arena-system",
    title: "Calgary Hackathon Arena System",
    meta: "Hackathon Project � February 2026",
    summary:
      "Godot-based arena and progression system with centralized game state, scene transitions, spawning logic, and meta-upgrade flow.",
    stack: ["Godot", "GDScript", "Game State", "Scene Systems"],
    imageLabel: "Hackathon / Game Systems",
    imageSrc: assetPath("/project-visuals/08-calgary-hack.png"),
  },
];

const projectDetailsById = {
  "project-car-sales-revenue": {
    background:
      "Built an end-to-end machine learning workflow for an upper-level machine learning course using a 500K+ row vehicle-sales dataset, with emphasis on data cleaning, reproducible preprocessing, regression benchmarking, and deployable model packaging.",
    bullets: [
      "Normalized heterogeneous sale-date fields, imputed nulls with dtype-specific strategies, dropped leakage-prone columns, and generated temporal plus vehicle-age features for the regression feature matrix.",
      "Composed a scikit-learn preprocessing graph with ColumnTransformer, StandardScaler, and OneHotEncoder so categorical and numeric transforms were fit once and reused identically at inference time.",
      "Benchmarked linear regression, decision tree, random forest, and gradient boosting regressors under a shared pipeline, then serialized the top-performing estimator with joblib after reaching R-squared = 0.91 on held-out data.",
      "Instrumented model comparison with RMSE, MAE, MAPE, correlation analysis, and distribution plots to validate feature signal, residual behavior, and generalization quality.",
    ],
    frameworks: ["Python", "pandas", "NumPy", "scikit-learn", "ColumnTransformer", "StandardScaler", "OneHotEncoder", "matplotlib", "seaborn", "joblib"],
    projectUrl: "https://github.com/Vincent-Shin/ENSF444---Predicting-Car-Sales-Revenue.git",
    projectUrlLabel: "Open GitHub Project",
  },
  "project-data-ingestion-backend-system": {
    background:
      "Built a backend-heavy ingestion platform for a web-based systems project that collects restaurant menu and nutrition data from multiple sources, normalizes records, enriches prices, and serves the data through a Flask API backed by MongoDB.",
    bullets: [
      "Implemented Flask REST endpoints for health checks, collection reads, document upserts, and bulk price mutation with request-shape validation and defensive handling for malformed payloads.",
      "Used deterministic composite keys plus MongoDB upsert semantics to de-duplicate restaurant, item, and portion documents across repeated ingestion runs.",
      "Integrated scraper and seed pipelines that parsed menu, pricing, and nutrition sources, then mapped raw records into a normalized backend schema before persistence.",
      "Packaged schema initialization, seeding, scraper execution, and API serving into a repeatable backend workflow suitable for milestone demos, regression checks, and local redevelopment.",
    ],
    frameworks: ["Flask", "Flask-CORS", "MongoDB", "PyMongo", "Docker", "pdfplumber", "REST API", "Data Ingestion"],
    projectUrl: "https://csgit.ucalgary.ca/jashan.bhinder/seng513-202601-pg-17.git",
    projectUrlLabel: "Open Repository",
  },
  "project-jp-morgan-chase-virtual-experience": {
    background:
      "Completed an enterprise-style backend simulation in the JP Morgan Chase Forage experience, focusing on Spring Boot service structure, persistence, REST access, and transaction-driven system design rather than a polished public-facing product.",
    bullets: [
      "Implemented account-balance retrieval through Spring Data JPA repositories backed by H2, exposed via a dedicated REST controller and entity-driven persistence model.",
      "Structured the service around entity, repository, controller, and infrastructure layers so request handling, persistence access, and database bootstrapping remained separated by responsibility.",
      "Added Kafka consumer scaffolding for transaction ingestion to model an event-driven processing path instead of a purely synchronous request-response backend.",
      "Followed production-style package boundaries, naming, and service decomposition patterns to mirror enterprise Java backend conventions more closely than a typical coursework submission.",
    ],
    frameworks: ["Spring Boot", "Spring Web", "Spring Data JPA", "Spring Kafka", "H2", "Maven", "REST Controller"],
    projectUrl: null,
    projectUrlLabel: "Certificate Available on Request",
    certificateUrl: assetPath("/project-visuals/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_690295ec0ff91d19bfed78a1_1770692232407_completion_certificate.pdf"),
    certificateUrlLabel: "View Certificate PDF",
  },
  "project-backend-job-market-simulation-system": {
    background:
      "Built the backend architecture for a serious job-market simulation game in a software architecture course, centered on persistent progression, activity tracking, and rule-based hiring outcomes across multiple gameplay tiers.",
    bullets: [
      "Modeled player state, applications, and progression history as SQLAlchemy entities with relational persistence on SQLite locally and PostgreSQL-compatible deployment targets.",
      "Exposed backend state transitions through REST endpoints for player bootstrap, score mutation, stage advancement, activity completion, run reset, application resolution, and leaderboard reads.",
      "Encoded hiring logic as deterministic progression rules driven by score thresholds, tier gates, and activity prerequisites rather than ad hoc frontend branching.",
      "Connected the API to a separately deployed Unity WebGL client so backend persistence and game-state mutation could be exercised as an end-to-end system.",
    ],
    frameworks: ["Flask", "SQLAlchemy", "SQLite", "Supabase PostgreSQL", "Flask-CORS", "REST API", "Unity WebGL", "Firebase Hosting"],
    projectUrl: "https://github.com/Vincent-Shin/SENG401_PROJECT_GAME_L02_GROUP06",
    projectUrlLabel: "Open GitHub Project",
    liveUrl: "https://unemployed-simulator-web.web.app/",
    liveUrlLabel: "Play Web Build",
  },
  "project-movie-ticket-reservation-system": {
    background:
      "Built a database-backed Java reservation platform for a software design course that coordinated movie selection, theatre/showtime lookup, seat availability, payment capture, receipts, and cancellation rules across multiple entities.",
    bullets: [
      "Bound Swing booking screens to JDBC-backed CRUD flows over a relational schema spanning customers, theatres, showings, seat maps, seats, tickets, payments, and receipts.",
      "Implemented theatre, showtime, and seat-selection workflows with runtime availability checks and transactional updates against per-showing inventory.",
      "Encoded specification-driven business rules including registered-user early access windows, seat-ratio release constraints, and cancellation eligibility checks.",
      "Integrated GUI state, object-oriented domain logic, and SQL persistence into a single desktop workflow for booking, payment capture, receipt generation, and cancellation.",
    ],
    frameworks: ["Java Swing", "JDBC", "MySQL", "SQL", "Prepared Statements", "Object-Oriented Design"],
    projectUrl: "https://github.com/Vincent-Shin/ENSF480---Movie-Theatre-Ticket-Reservation-System.git",
    projectUrlLabel: "Open GitHub Project",
  },
  "project-java-web-quality-engineering-system": {
    background:
      "Worked within a Java web application for a quality engineering course, with the main learning goal centered on maintainable architecture, database-backed services, and broad automated validation across multiple testing layers.",
    bullets: [
      "Worked in a servlet-based Java web stack running on Tomcat with H2 persistence and Flyway-managed schema migrations for controlled database evolution.",
      "Extended validation coverage across unit, integration, API, BDD, and Selenium UI layers so defects could be surfaced at multiple boundaries in the request and release pipeline.",
      "Integrated Jenkins, SonarQube, OWASP Dependency-Check, mutation testing, and performance-test jobs as enforceable quality gates rather than optional post-development checks.",
      "Treated automated testing, static analysis, and CI orchestration as first-class engineering concerns tied directly to release readiness and maintainability.",
    ],
    frameworks: ["Java", "Servlets", "Tomcat", "H2", "Flyway", "JUnit", "Selenium", "Cucumber", "Jenkins", "SonarQube", "OWASP Dependency-Check"],
    projectUrl: "https://github.com/xrrays/ENSF400-Group-Project.git",
    projectUrlLabel: "Open Private Repository",
  },
  "project-disaster-relief-management-system": {
    background:
      "Built a Java object-oriented system for managing disaster-relief records, using domain entities, interface-based design, a basic database manager layer, and unit tests to model real-world case relationships.",
    bullets: [
      "Implemented strongly typed domain entities for victims, inquirers, medical records, locations, family relationships, dietary restrictions, supplies, and relief services.",
      "Added a DatabaseManager abstraction for connection handling, persistence, and retrieval so storage concerns were separated from core domain behavior.",
      "Wrote JUnit coverage around entity behavior, interface contracts, and record-management invariants to validate the object model under expected and edge-case usage.",
      "Organized the codebase around interfaces and domain boundaries to keep the model extensible for more realistic case-management workflows.",
    ],
    frameworks: ["Java", "OOP", "JUnit", "JDBC", "Interfaces", "MySQL", "Domain Modeling"],
    projectUrl: "https://github.com/Vincent-Shin/IA1-380.git",
    projectUrlLabel: "Open GitHub Project",
  },
  "project-jfreechart-testing-project": {
    background:
      "Completed several software testing labs around JFreeChart in a software testing, reliability, and quality course, focusing on white-box test design, boundary analysis, and defect-oriented validation of library utilities.",
    bullets: [
      "Designed JUnit test suites for Range and DataUtilities covering nominal behavior, null inputs, invalid parameters, and edge-boundary conditions.",
      "Used JMock to isolate dataset-dependent logic so method behavior could be validated against controlled mocked collaborators instead of full object graphs.",
      "Expanded white-box coverage with assertion-heavy defect-oriented cases aimed at exposing correctness faults in numerical utility paths, not just happy-path execution.",
    ],
    frameworks: ["JUnit", "JMock", "Eclipse", "White-box Testing"],
    projectUrl: null,
    projectUrlLabel: "Labs Available on Request",
  },
  "project-embedded-systems-control-project": {
    background:
      "Built interrupt-driven firmware on the PIC24F16KA101 for an embedded systems course, coordinating button input, timer-controlled LED behavior, UART diagnostics, and low-power execution on constrained hardware.",
    bullets: [
      "Configured PIC24 digital I/O, internal pull-ups, and change-notification interrupts so button events triggered state transitions without polling loops.",
      "Used Timer3 period reconfiguration to map pushbutton combinations onto multiple LED blink frequencies plus steady-on output states.",
      "Integrated UART diagnostics and Idle-mode execution so firmware behavior remained observable while the control loop stayed interrupt-driven and low power.",
    ],
    frameworks: ["Embedded C", "PIC24F16KA101", "UART", "Timer3", "CN Interrupts", "XC16"],
    projectUrl: "https://github.com/Vincent-Shin/ENSF460-Group-Project-Embedded-System.git",
    projectUrlLabel: "Open GitHub Project",
  },
  "project-calgary-hackathon-arena-system": {
    background:
      "Built a Godot-based hackathon prototype around progression, scene management, stat recomputation, and arena flow, shipping a playable systems-heavy concept under short deadline pressure.",
    bullets: [
      "Implemented a centralized game-state layer to manage life stages, temporary modifiers, persistent upgrades, rebirth logic, and run-to-run stat recomputation.",
      "Built deferred scene loading and hub-to-arena transitions behind a reusable scene manager instead of duplicating transition logic across Godot scenes.",
      "Connected progression data, combat-stage orchestration, and enemy-spawn rules into a single gameplay loop with explicit state transitions.",
      "Shipped a playable vertical slice under hackathon time constraints while preserving enough systems structure to demonstrate deliberate gameplay architecture.",
    ],
    frameworks: ["Godot", "GDScript", "Scene Management", "Game State", "Gameplay Systems", "Hackathon Delivery"],
    projectUrl: "https://devpost.com/software/death-and-rebirth",
    projectUrlLabel: "Open Devpost Project",
  },
  "project-portfolio-website-system": {
    background:
      "Built and iteratively refined this portfolio website as a recruiter-facing product rather than a static personal page, with a strong emphasis on presentation clarity, project storytelling, theme switching, and practical navigation.",
    bullets: [
      "Implemented dual-theme rendering paths with separate presentation logic for light-mode and dark-mode while preserving a shared React state model.",
      "Built paginated project navigation, modal detail views, keyboard shortcuts, conditional access states, and animated open-close transitions inside a single TypeScript app surface.",
      "Structured project metadata, resume variants, and recruiter-facing copy as app-level data objects so content targeting could be updated without rewriting layout logic.",
      "Integrated local asset pipelines, project-specific repository links, and conditional certificate or contact states to support mixed public and private project access patterns.",
      "Refined layout hierarchy, sidebar state, and CTA flows as product-level interaction decisions rather than treating the site as a static frontend mockup.",
    ],
    frameworks: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lucide React", "Responsive UI", "UI Content Strategy", "Interaction Design", "Portfolio Information Architecture"],
    projectUrl: "https://github.com/Vincent-Shin/professional-portfolio-website",
    projectUrlLabel: "Open GitHub Project",
  },
} as const;

const projectMetaById = {
  "project-car-sales-revenue": "Machine Learning Project | December 2025",
  "project-data-ingestion-backend-system": "Backend Data Platform | February 2026",
  "project-jp-morgan-chase-virtual-experience": "Backend Simulation | January 2026",
  "project-backend-job-market-simulation-system": "Simulation Backend | February 2026",
  "project-movie-ticket-reservation-system": "Reservation Platform | April 2025",
  "project-java-web-quality-engineering-system": "Quality Engineering Web App | December 2025",
  "project-disaster-relief-management-system": "Object-Oriented Java System | 2025",
  "project-jfreechart-testing-project": "Software Testing Labs | April 2025",
  "project-embedded-systems-control-project": "Embedded Firmware Project | December 2025",
  "project-calgary-hackathon-arena-system": "Hackathon Game Systems | February 2026",
  "project-portfolio-website-system": "Engineering Portfolio Platform | 2026",
} as const;

const capabilityGroups = [
  {
    heading: "Technical Roles of Interest",
    items: [
      "Software Engineering",
      "Data Scientist",
      "Machine Learning",
      "Data Engineering",
      "Backend Engineering",
      "Quant Developer",
      "FinTech",
    ],
  },
  {
    heading: "Core Stack",
    items: [
      "Python",
      "Java",
      "C",
      "Flask",
      "Spring Boot",
      "MongoDB",
      "SQLAlchemy",
      "MySQL",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Docker",
      "Kafka",
      "Git",
    ],
  },
];

const resumeVariants = [
  {
    key: "backend",
    title: "Backend Engineering Resume",
    projects: [
      {
        name: "Data Ingestion & Backend System",
        course: "Web-Based Systems Course",
        date: "February 2026",
        bullets: [
          "Engineered a Flask and MongoDB backend by exposing REST APIs for ingestion, validation, and structured retrieval, improving consistency across multi-source restaurant datasets.",
          "Implemented unique-key deduplication with normalized persistence logic, reducing record conflicts across heterogeneous data sources.",
          "Containerized backend services with Docker and Docker Compose, creating reproducible development and testing environments for backend delivery.",
        ],
      },
      {
        name: "Backend Job-Market Simulation System",
        course: "Software Architecture Course",
        date: "February 2026",
        bullets: [
          "Architected a Flask and SQLAlchemy backend by modeling player progression, application history, and hiring outcomes in a relational database.",
          "Designed REST APIs for lifecycle management, score updates, and application retrieval, enabling persistent synchronization across gameplay systems.",
          "Implemented rule-based hiring logic with score thresholds and progression constraints, turning gameplay decisions into deterministic backend outcomes.",
        ],
      },
      {
        name: "JP Morgan Chase Virtual Experience",
        course: "Advanced Software Engineering Simulation",
        date: "January 2026",
        bullets: [
          "Developed Spring Boot backend services with JPA-backed persistence and REST balance retrieval, establishing the foundation for transaction-processing workflows.",
          "Integrated Kafka-oriented transaction scaffolding with repository-backed data access, supporting asynchronous event-driven service architecture.",
        ],
      },
    ],
  },
  {
    key: "data",
    title: "Data Scientist Resume",
    projects: [
      {
        name: "Predicting Car Sales Revenue",
        course: "Machine Learning System Course",
        date: "December 2025",
        bullets: [
          "Built an end-to-end regression pipeline using pandas, NumPy, and scikit-learn, enabling revenue prediction from a dataset exceeding 500K records.",
          "Engineered 15+ predictive features through temporal extraction and correlation analysis, strengthening model quality across multiple regression benchmarks.",
          "Evaluated model performance with RMSE, MAE, and R-squared metrics, supporting data-driven model selection before serialized deployment.",
        ],
      },
      {
        name: "Data Ingestion & Backend System",
        course: "Web-Based Systems Course",
        date: "February 2026",
        bullets: [
          "Designed ETL-style ingestion workflows by normalizing restaurant item data from multiple heterogeneous sources, improving downstream consistency for analysis and retrieval.",
          "Implemented parsing, matching, and price-enrichment logic across JSON, HTML, and PDF-like sources, increasing usability of collected data for analytics workflows.",
        ],
      },
      {
        name: "JP Morgan Chase Virtual Experience",
        course: "Advanced Software Engineering Simulation",
        date: "January 2026",
        bullets: [
          "Worked with Spring Boot, Kafka, and persisted account data in a transaction-processing simulation, extending my understanding of structured financial data flows.",
          "Applied repository-backed access patterns and event-driven processing concepts that complement analytics and data-platform thinking.",
        ],
      },
    ],
  },
  {
    key: "ai",
    title: "AI Engineering Resume",
    projects: [
      {
        name: "Predicting Car Sales Revenue",
        course: "Machine Learning System Course",
        date: "December 2025",
        bullets: [
          "Developed an end-to-end machine learning pipeline in Python using pandas, NumPy, and scikit-learn, enabling revenue prediction from raw vehicle and sales data.",
          "Built preprocessing pipelines with StandardScaler and OneHotEncoder to create consistent training and inference workflows for mixed-type features.",
          "Serialized the final preprocessing-and-model artifact with joblib after controlled experimentation, achieving an R-squared score of 0.91 on unseen data.",
        ],
      },
      {
        name: "Data Ingestion & Backend System",
        course: "Web-Based Systems Course",
        date: "February 2026",
        bullets: [
          "Constructed data ingestion workflows by combining scraping, parsing, validation, and persistence steps across multiple external content sources.",
          "Implemented normalization and matching logic across structured and semi-structured documents, improving downstream reliability for data enrichment tasks.",
        ],
      },
      {
        name: "JP Morgan Chase Virtual Experience",
        course: "Advanced Software Engineering Simulation",
        date: "January 2026",
        bullets: [
          "Worked within a Spring Boot and Kafka-based transaction simulation, reinforcing the system patterns often used around AI-enabled and event-driven platforms.",
          "Applied persistence and message-driven service concepts that map well to production-facing inference and data orchestration systems.",
        ],
      },
    ],
  },
  {
    key: "software",
    title: "Software Engineering Resume",
    projects: [
      {
        name: "Backend Job-Market Simulation System",
        course: "Software Architecture Course",
        date: "February 2026",
        bullets: [
          "Architected a Flask and SQLAlchemy service layer for a job-market simulation, persisting player state, stage progression, and application outcomes in a relational backend.",
          "Designed REST endpoints for score updates, application tracking, stage transitions, and run resets, enabling clean synchronization between gameplay logic and backend state.",
          "Implemented rule-based hiring decisions using score thresholds, progression constraints, and probability modifiers, turning product rules into deterministic backend behavior.",
        ],
      },
      {
        name: "Movie Ticket Reservation System",
        course: "Software Design Course",
        date: "April 2025",
        bullets: [
          "Built a Java, JDBC, and MySQL reservation platform that coordinated bookings, ticket persistence, receipt generation, and cancellation rules across a multi-entity database model.",
          "Connected UI actions, business rules, and SQL operations through structured object-oriented design, improving reliability across end-to-end reservation workflows.",
        ],
      },
      {
        name: "Java Web Quality Engineering System",
        course: "Quality Engineering Course",
        date: "December 2025",
        bullets: [
          "Worked within a multi-module Java web system using Servlets, Tomcat, H2, and Flyway, reinforcing maintainable web architecture and database-backed service structure.",
          "Applied JUnit, Selenium, Cucumber, Jenkins, and SonarQube workflows to strengthen validation discipline, delivery confidence, and software quality practices.",
        ],
      },
    ],
  },
];

const resumePdfByKey = {
  backend: assetPath("/resumes/backend-resume.pdf"),
  ai: assetPath("/resumes/ai-engineering-resume.pdf"),
  data: assetPath("/resumes/data-scientist-resume.pdf"),
  software: assetPath("/resumes/software-engineering-resume.pdf"),
};

const resumeMetaByKey = {
  backend: {
    skillLines: [
      "Programming: Python, Java, JavaScript, C/C++",
      "Backend Systems: Flask, REST APIs, Spring Boot, Kafka",
      "Databases: MongoDB, MySQL, H2, SQLAlchemy, JPA",
      "Tools: Docker, Git, Gradle, Linux",
      "Concepts: workflow automation, process analysis, data pipelines, system debugging",
    ],
  },
  data: {
    skillLines: [
      "Programming: Python, Java, JavaScript, C/C++",
      "Data & Analytics: pandas, NumPy, scikit-learn, KPI evaluation, data analysis",
      "Databases: MongoDB, MySQL, H2",
      "Tools: Docker, Git, Linux",
      "Concepts: data cleaning, feature extraction, regression modeling, structured experimentation",
    ],
  },
  ai: {
    skillLines: [
      "Programming: Python, Java, JavaScript, C/C++",
      "Data & Analytics: pandas, NumPy, scikit-learn, feature engineering, model evaluation",
      "Backend Systems: Flask, REST APIs, MongoDB",
      "Tools: Docker, Git, Linux, joblib",
      "Concepts: machine learning workflows, preprocessing pipelines, deployment-ready inference",
    ],
  },
  software: {
    skillLines: [
      "Programming: Python, Java, JavaScript, C/C++",
      "Software Systems: Flask, SQLAlchemy, JDBC, Servlets, REST APIs",
      "Databases: MySQL, SQLite, H2, SQLAlchemy, JDBC",
      "Tools: Docker, Git, Gradle, Jenkins, Selenium",
      "Concepts: software architecture, object-oriented design, validation workflows, database-backed applications",
    ],
  },
};

const extrasByKey = {
  backend: [
    {
      name: "Calgary Hackathon Arena System",
      detail: "Hackathon Project | February 2026",
      bullet:
        "Built a Godot-based arena prototype with centralized progression logic, scene transitions, and map-specific spawning behavior under hackathon constraints.",
    },
  ],
  data: [
    {
      name: "Calgary Hackathon Arena System",
      detail: "Hackathon Project | February 2026",
      bullet:
        "Built a Godot prototype with progression logic, map-dependent spawning, and centralized state management for runtime gameplay systems.",
    },
  ],
  ai: [
    {
      name: "Calgary Hackathon Arena System",
      detail: "Hackathon Project | February 2026",
      bullet:
        "Built a Godot-based runtime system by coordinating centralized state, scene transitions, and progression-driven spawning behavior.",
    },
  ],
  software: [
    {
      name: "JP Morgan Chase Virtual Experience",
      detail: "Advanced Software Engineering Simulation | January 2026",
      bullet:
        "Built core Spring Boot service components with repository-backed persistence and Kafka-based ingestion scaffolding, reinforcing enterprise backend design patterns.",
    },
    {
      name: "Calgary Hackathon Arena System",
      detail: "Hackathon Project | February 2026",
      bullet:
        "Built a Godot-based arena prototype with centralized progression logic, scene transitions, and map-specific spawning behavior under hackathon constraints.",
    },
  ],
};

const workExperience = {
  role: "Server",
  company: "Pho Pham Restaurant",
  date: "Present",
  bullets: [
    "Coordinated high-volume service operations handling 100+ transactions per shift while maintaining accuracy and workflow efficiency.",
    "Collaborated with team members to resolve operational issues in a fast-paced environment.",
  ],
};

const inProgressProjects = [
  "AI / NLP Risk Intelligence Project",
  "Quantitative Trading Capstone Project",
];

const currentFocusItems = [
  "Building practical AI/NLP systems for structured risk intelligence and document understanding.",
  "Designing quant and fintech workflows that combine market data, signals, and disciplined risk management.",
];

const explorationAreas = [
  "LLM-assisted retrieval and structured reasoning",
  "Financial data pipelines and signal generation",
  "Backend systems for analytics, APIs, and automation",
];

const projectDisplayOrder = [
  "project-portfolio-website-system",
  "project-car-sales-revenue",
  "project-backend-job-market-simulation-system",
  "project-data-ingestion-backend-system",
  "project-jp-morgan-chase-virtual-experience",
  "project-java-web-quality-engineering-system",
  "project-embedded-systems-control-project",
  "project-calgary-hackathon-arena-system",
  "project-movie-ticket-reservation-system",
  "project-jfreechart-testing-project",
  "project-disaster-relief-management-system",
] as const;

const sideProfileRows = {
  light: [
    { label: "Availability", value: "Open to full-time, internship, and entry-level opportunities." },
    { label: "Work Style", value: "Fast learner, proactive teammate, enthusiastic, and comfortable adapting quickly in collaborative environments." },
    { label: "Languages", value: "English and Vietnamese." },
  ],
  dark: [
    { label: "Availability", value: "Open to full-time, internship, and entry-level opportunities." },
    { label: "Work Style", value: "Friendly, easygoing, and always up for learning, building, talking tech, or hanging out with the team after work." },
    { label: "Languages", value: "English and Vietnamese." },
  ],
};

type ChatMessage = {
  id: string;
  role: "assistant" | "user" | "system";
  content: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedBullet(bullet: string, frameworks: readonly string[]) {
  const emphasisTerms = Array.from(
    new Set(
      [
        ...frameworks,
        "REST APIs",
        "REST API",
        "CI/CD",
        "RMSE",
        "MAE",
        "MAPE",
        "R-squared",
        "R-squared score",
        "UI tests",
        "light-mode",
        "dark-mode",
        "keyboard navigation",
        "open-close transitions",
        "project-specific access states",
        "sidebar content",
        "recruiter expectations",
        "project ordering",
        "resume targeting",
        "visual assets",
        "project metadata",
        "access controls",
        "data cleaning",
        "feature engineering",
        "model-selection decisions",
        "evaluation metrics",
        "held-out data",
        "unique-key generation",
        "upsert logic",
        "batch scrapers",
        "seed scripts",
        "schema initialization",
        "repository-backed balance lookup",
        "REST controller",
        "Kafka listener scaffolding",
        "service decomposition patterns",
        "persistent progression",
        "stage transitions",
        "leaderboard retrieval",
        "relational schema",
        "seat-selection workflows",
        "cancellation logic",
        "servlet-based web layer",
        "quality tooling",
        "DatabaseManager layer",
        "domain classes",
        "change-notification interrupts",
        "Idle-mode execution",
        "deferred scene loading",
        "scene manager",
        "API",
        "BDD",
      ]
        .filter(Boolean)
        .sort((left, right) => right.length - left.length),
    ),
  );
  const emphasisPattern = emphasisTerms.length > 0 ? emphasisTerms.map(escapeRegex).join("|") : "$^";
  const tokenPattern = new RegExp(`(${emphasisPattern}|\\b\\d+(?:[.,]\\d+)?(?:K\\+|\\+|%|x)?\\b)`, "g");
  const emphasisCheckPattern = new RegExp(`^(?:${emphasisPattern}|\\d+(?:[.,]\\d+)?(?:K\\+|\\+|%|x)?)$`);
  const parts = bullet.split(tokenPattern).filter(Boolean);
  const hasEmphasis = parts.some((part) => emphasisCheckPattern.test(part));

  if (!hasEmphasis) {
    const fallbackMatch = bullet.match(/^([^,;]+?)(?=(?:,| so | with | through | instead of | while | under | across )|$)/i);

    if (fallbackMatch) {
      const leading = fallbackMatch[1];
      const trailing = bullet.slice(leading.length);

      return [
        <strong key="fallback-leading" className="font-semibold text-current">
          {leading}
        </strong>,
        trailing,
      ];
    }
  }

  return parts.map((part, index) =>
    emphasisCheckPattern.test(part) ? (
      <strong key={`${part}-${index}`} className="font-semibold text-current">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function normalizeText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getAssistantGreeting(isDark: boolean) {
  return isDark
    ? "Hey, I'm basically Vincent's closest referral voice in this portfolio. Ask me about his projects, strengths, personality, availability, or the fastest way to reach him."
    : "Hello, I'm Trung Tuan Mai's portfolio assistant. I can summarize his projects, target roles, availability, personality, and the fastest way to contact him.";
}

function getProjectAccessSummary(projectId: keyof typeof projectDetailsById) {
  const detail = projectDetailsById[projectId];

  if (detail.projectUrl) {
    return `${detail.projectUrlLabel}: ${detail.projectUrl}`;
  }
  if (detail.liveUrl) {
    return `${detail.liveUrlLabel}: ${detail.liveUrl}`;
  }
  if (detail.certificateUrl) {
    return `${detail.certificateUrlLabel}: ${detail.certificateUrl}`;
  }

  return detail.projectUrlLabel;
}

function getProjectMatch(query: string) {
  const queryTerms = normalizeText(query).split(" ").filter((term) => term.length >= 4);
  let bestMatch: (typeof projectCards)[number] | null = null;
  let bestScore = 0;

  for (const project of projectCards) {
    const detail = projectDetailsById[project.id as keyof typeof projectDetailsById];
    const haystack = normalizeText(
      [project.title, project.summary, project.meta, project.stack.join(" "), detail.background, detail.bullets.join(" "), detail.frameworks.join(" ")].join(" "),
    );

    let score = 0;
    for (const term of queryTerms) {
      if (haystack.includes(term)) {
        score += 1;
      }
    }

    if (haystack.includes(normalizeText(query))) {
      score += 2;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = project;
    }
  }

  return bestScore >= 2 ? bestMatch : null;
}

function getPortfolioAssistantReply(message: string, isDark: boolean) {
  const query = normalizeText(message);
  const toneLead = isDark ? "Short answer: " : "";
  const backendProjects = [
    "Data Ingestion & Backend System",
    "Backend Job-Market Simulation System",
    "JP Morgan Chase Virtual Experience",
  ];
  const roleTargets = capabilityGroups[0].items.join(", ");
  const personName = isDark ? "Vincent" : "Trung Tuan Mai";

  if (!query) {
    return getAssistantGreeting(isDark);
  }

  if (
    query.includes("who he is") ||
    query.includes("who is he") ||
    query.includes("who is trung") ||
    query.includes("who is vincent") ||
    query.includes("who trung is") ||
    query.includes("who vincent is") ||
    query === "who he" ||
    query === "who is he"
  ) {
    return isDark
      ? "Vincent is a final-year Software Engineering student at the University of Calgary who is strongest in backend systems, data-heavy engineering, and applied ML work. He comes across as someone who actually builds real systems, not just class demos."
      : "Trung Tuan Mai is a Software Engineering student at the University of Calgary with a portfolio focused on backend systems, data workflows, practical machine learning, and recruiter-ready technical communication.";
  }

  if (query.includes("personality") || query.includes("what is he like") || query.includes("what his personality") || query.includes("work style") || query.includes("soft skills")) {
    return isDark
      ? "Personality-wise, he comes across as friendly, easy to work with, curious, and technically serious. He learns fast, collaborates well, and feels like the kind of teammate who can contribute early without being hard to work with."
      : "His working style is collaborative, fast-learning, proactive, and easy to work with. The portfolio positions him as technically capable while still approachable, coachable, and strong in team settings.";
  }

  if (
    query.includes("is he good") ||
    query.includes("is trung good") ||
    query.includes("is vincent good") ||
    query.includes("good engineer") ||
    query.includes("good candidate") ||
    query.includes("worth hiring")
  ) {
    return isDark
      ? "Yeah, he is a strong candidate. The best part is that the portfolio shows real backend, data, ML, and systems work with enough technical depth to back it up, plus he comes across as easy to work with."
      : "Yes. He presents as a strong early-career candidate with credible backend, data, machine learning, and software engineering work, supported by concrete project depth rather than generic claims.";
  }

  if (query === "uhm" || query === "hmm" || query === "ok" || query === "okay") {
    return isDark
      ? "No problem. Ask me about his backend projects, ML work, personality, availability, or the best way to contact him."
      : "Sure. You can ask about his projects, backend fit, machine learning experience, personality, availability, or contact details.";
  }

  if (query.includes("available") || query.includes("availability") || query.includes("work right now") || query.includes("hiring")) {
    return `${toneLead}Yes. ${personName} is open to full-time, internship, and entry-level opportunities, especially in backend engineering, software engineering, data, ML, and fintech-oriented roles.`;
  }

  if (query.includes("contact") || query.includes("email") || query.includes("linkedin") || query.includes("reach")) {
    return `${toneLead}Best contact path is email at trungtuan.mai@ucalgary.ca. LinkedIn is linkedin.com/in/tuanmai3011, and GitHub is github.com/Vincent-Shin.`;
  }

  if (query.includes("role") || query.includes("target") || query.includes("looking for") || query.includes("fit")) {
    return `${toneLead}He is targeting ${roleTargets}. The strongest recruiter-facing fit in this portfolio is backend-heavy engineering with solid overlap into data and applied ML work.`;
  }

  if (query.includes("backend")) {
    return `${toneLead}The strongest backend examples are ${backendProjects.join(", ")}. Together they show REST APIs, persistence, relational and document databases, ingestion workflows, SQLAlchemy, Spring Boot, and deployment-oriented system design.`;
  }

  if (query.includes("machine learning") || query.includes("ml") || query.includes("ai") || query.includes("data")) {
    return `${toneLead}The clearest ML and data work is Predicting Car Sales Revenue, which uses a reproducible scikit-learn pipeline, feature engineering, regression benchmarking, and serialized model packaging over 500K+ rows. Data Ingestion & Backend System also shows ETL-style normalization and API delivery.`;
  }

  if (query.includes("education") || query.includes("school") || query.includes("degree")) {
    return `${toneLead}${personName} is a Software Engineering student at the University of Calgary, expected to graduate in April 2027.`;
  }

  if (query.includes("resume")) {
    return `${toneLead}The portfolio includes targeted resume variants for backend engineering, data science, AI engineering, and software engineering, so the site can be tailored to different recruiter conversations.`;
  }

  if (query.includes("strength") || query.includes("why") || query.includes("good candidate")) {
    return `${toneLead}His strongest signal is range with real systems depth: backend APIs, persistence layers, data pipelines, applied ML, testing-heavy Java work, and a portfolio that explains technical decisions clearly instead of just listing tools.`;
  }

  const matchedProject = getProjectMatch(message);
  if (matchedProject) {
    const detail = projectDetailsById[matchedProject.id as keyof typeof projectDetailsById];

    return `${toneLead}${matchedProject.title} is a strong match here. ${matchedProject.summary} Core stack: ${detail.frameworks.slice(0, 6).join(", ")}. Access: ${getProjectAccessSummary(matchedProject.id as keyof typeof projectDetailsById)}.`;
  }

  return isDark
    ? "I can help with backend projects, ML work, resume fit, availability, contact details, or a specific project from the portfolio. Try asking which project best fits backend roles or whether Vincent is available right now."
    : "I can help with project summaries, backend fit, machine learning experience, availability, resume targeting, or contact information. Try asking which project best matches backend roles or how to contact Vincent.";
}

export default function App() {
  const [activeResume, setActiveResume] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState(projectCards[0].id);
  const [projectPage, setProjectPage] = useState(0);
  const [projectModalState, setProjectModalState] = useState<"closed" | "opening" | "open" | "closing">("closed");
  const [theme, setTheme] = useState("light");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatDraft, setChatDraft] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const previousThemeRef = useRef<string | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const savedSound = window.localStorage.getItem("portfolio-sound");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
    if (savedSound === "on" || savedSound === "off") {
      setSoundEnabled(savedSound === "on");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-sound", soundEnabled ? "on" : "off");
  }, [soundEnabled]);

  const isDark = theme === "dark";
  const sidebarRows = isDark ? sideProfileRows.dark : sideProfileRows.light;
  const currentResume = resumeVariants[activeResume];
  const orderedProjectCards = projectDisplayOrder
    .map((id) => projectCards.find((project) => project.id === id))
    .filter((project): project is (typeof projectCards)[number] => Boolean(project));
  const selectedProject =
    orderedProjectCards.find((project) => project.id === selectedProjectId) ?? orderedProjectCards[0];
  const selectedProjectIndex = orderedProjectCards.findIndex((project) => project.id === selectedProject.id);
  const selectedProjectDetail = projectDetailsById[selectedProject.id as keyof typeof projectDetailsById];
  const selectedProjectMeta = projectMetaById[selectedProject.id as keyof typeof projectMetaById];
  const projectModalOpen = projectModalState !== "closed";
  const projectModalVisible = projectModalState === "opening" || projectModalState === "open";
  const projectsPerPage = 4;
  const projectPageCount = Math.ceil(orderedProjectCards.length / projectsPerPage);
  const pagedProjects = orderedProjectCards.slice(projectPage * projectsPerPage, (projectPage + 1) * projectsPerPage);
  const projectAnchorByName = useMemo(
    () => Object.fromEntries(orderedProjectCards.map((project) => [project.title, project.id])),
    [],
  );

  const currentResumeView = {
    label: currentResume.title.replace(" Resume", ""),
    pdf: resumePdfByKey[currentResume.key as keyof typeof resumePdfByKey],
    education: [
      "Bachelor of Science, Software Engineering",
      "Expected April 2027",
      "Schulich School of Engineering, University of Calgary",
    ],
    skillLines: resumeMetaByKey[currentResume.key as keyof typeof resumeMetaByKey].skillLines,
    projects: currentResume.projects.map((project) => ({
      name: project.name,
      detail: `${project.course} | ${project.date}`,
      bullets: project.bullets,
    })),
    extrasTitle: "EXTRA-CURRICULARS",
    extras: extrasByKey[currentResume.key as keyof typeof extrasByKey],
    work: workExperience,
  };

  const visibleLayerCount = Math.max(0, 3 - activeResume);
  const visibleLayers = Array.from({ length: visibleLayerCount }, (_, index) => visibleLayerCount - index);

  const playUiTick = (frequency = 540, force = false) => {
    if (!soundEnabled) {
      return;
    }
    if (!isDark && !force) {
      return;
    }
    if (!isDark && force && frequency !== 680) {
      return;
    }

    const AudioCtor = window.AudioContext;
    if (!AudioCtor) {
      return;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioCtor();
    }

    const ctx = audioContextRef.current;
    if (ctx.state === "suspended") {
      void ctx.resume();
    }

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.12, now + 0.08);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.038, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  };

  const handleThemeToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      playUiTick(680, true);
    }
  };

  const handleSoundToggle = () => {
    if (!isDark) {
      return;
    }
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) {
      playUiTick(620, true);
    }
  };

  const downloadResume = () => {
    playUiTick(570);
    const link = document.createElement("a");
    link.href = currentResumeView.pdf;
    link.download = currentResumeView.pdf.split("/").pop() || "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shellClass = isDark ? "bg-[#090c10] text-[#eef2f7]" : "bg-[#f6f4ef] text-[#181818]";
  const navClass = isDark
    ? "border-white/10 bg-[#0d1117]/92 text-white/70"
    : "border-black/10 bg-[#f6f4ef]/95 text-black/70";
  const sidebarClass = isDark
    ? "border-white/10 bg-[linear-gradient(180deg,rgba(23,28,36,0.96),rgba(12,16,21,0.98))] text-white shadow-[0_40px_120px_rgba(0,0,0,0.4)]"
    : "border-black/10 bg-white/90 text-[#181818] shadow-[0_24px_90px_rgba(0,0,0,0.12)]";
  const surfaceClass = isDark
    ? "border-white/10 bg-[#121821] text-white shadow-[0_20px_70px_rgba(0,0,0,0.24)]"
    : "border-black/10 bg-white text-[#181818] shadow-[0_20px_70px_rgba(0,0,0,0.08)]";
  const softSurfaceClass = isDark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-[#faf9f6]";
  const mutedTextClass = isDark ? "text-white/68" : "text-black/62";
  const softTextClass = isDark ? "text-white/46" : "text-black/45";
  const actionClass = isDark
    ? "border-white/12 bg-white/5 text-white/78 hover:border-white/20 hover:bg-white/8 hover:text-white"
    : "border-black/12 bg-white text-black/70 hover:border-black/20 hover:text-black";
  const railButtonClass = isDark
    ? "border-white/12 bg-white/6 text-white/84 hover:border-white/20 hover:bg-white/10"
    : "border-black/12 bg-black/[0.02] text-black/78 hover:border-black/20 hover:bg-black/[0.05]";
  const projectLightPanelClass = "border-[#d9ccb7] bg-[linear-gradient(135deg,#f4efe6,#e8decc)]";
  const projectLightChipClass = "border-[#d1c2aa] bg-white/55 text-black/72";
  const projectLightRailButtonClass = "border-[#d3c5af] bg-[linear-gradient(135deg,#f4efe6,#ece3d4)] text-black/78 hover:border-[#c8b799] hover:bg-[linear-gradient(135deg,#f6f1e8,#ede2d1)]";
  const goToProjectByOffset = (offset: number) => {
    const nextIndex = (selectedProjectIndex + offset + orderedProjectCards.length) % orderedProjectCards.length;
    setSelectedProjectId(orderedProjectCards[nextIndex].id);
    playUiTick(offset > 0 ? 585 : 545, true);
  };

  const openProjectModal = (projectId: string) => {
    setSelectedProjectId(projectId);
    setProjectModalState("opening");
    playUiTick(570, true);
  };

  const closeProjectModal = () => {
    setProjectModalState("closing");
    playUiTick(520, true);
  };

  useEffect(() => {
    if (projectModalState === "opening") {
      const frame = window.requestAnimationFrame(() => setProjectModalState("open"));
      return () => window.cancelAnimationFrame(frame);
    }

    if (projectModalState === "closing") {
      const timer = window.setTimeout(() => setProjectModalState("closed"), 180);
      return () => window.clearTimeout(timer);
    }
  }, [projectModalState]);

  useEffect(() => {
    if (!projectModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProjectModal();
      }
      if (event.key === "ArrowRight") {
        goToProjectByOffset(1);
      }
      if (event.key === "ArrowLeft") {
        goToProjectByOffset(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projectModalOpen, selectedProjectIndex]);

  useEffect(() => {
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          id: "assistant-greeting",
          role: "assistant",
          content: getAssistantGreeting(isDark),
        },
      ]);
    }
  }, [chatMessages.length, isDark]);

  useEffect(() => {
    if (previousThemeRef.current === null) {
      previousThemeRef.current = theme;
      return;
    }

    if (previousThemeRef.current === theme) {
      return;
    }

    previousThemeRef.current = theme;
    setChatMessages((messages) => [
      ...messages,
      {
        id: `theme-${Date.now()}`,
        role: "system",
        content:
          theme === "dark"
            ? "Assistant switched to Vincent's referral voice: more personal, still positive, still recruiter-useful."
            : "Assistant switched to Trung Tuan Mai portfolio mode: more polished, more professional, and recruiter-facing.",
      },
    ]);
  }, [theme]);

  const submitChatMessage = (rawMessage: string) => {
    const message = rawMessage.trim();
    if (!message) {
      return;
    }

    const assistantReply = getPortfolioAssistantReply(message, isDark);
    const timestamp = Date.now().toString();

    setChatMessages((messages) => [
      ...messages,
      { id: `user-${timestamp}`, role: "user", content: message },
      { id: `assistant-${timestamp}`, role: "assistant", content: assistantReply },
    ]);
    setChatDraft("");
    playUiTick(600, true);
  };

  const chatQuickPrompts = isDark
    ? ["Is he available to work right now?", "Which projects best fit backend roles?", "How can I contact him?"]
    : ["Is he available to work right now?", "Which project is strongest for backend roles?", "Can you summarize his ML experience?"];

  return (
    <div className={cx("min-h-screen transition-colors duration-500", shellClass)}>
      {isDark && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-10rem] top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-8rem] top-56 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/8 blur-3xl" />
        </div>
      )}

            <aside className="fixed left-6 top-6 bottom-6 z-60 hidden w-[20.75rem] xl:block">
        <div className={cx("flex h-full min-h-0 flex-col overflow-hidden rounded-[30px] border p-6 transition-colors duration-500", sidebarClass)}>
          <div className="min-h-0 flex-1 overflow-y-auto pr-1">
            <div>
              <h1 className="text-[2.2rem] leading-[1.02] tracking-[-0.05em]">{isDark ? "Vincent Mai" : "Trung Tuan Mai"}</h1>
              <p className={cx("mt-4 text-[15px] leading-7", mutedTextClass)}>
                {isDark
                  ? "Final-year builder into backend systems, data-heavy work, and turning ideas into something real."
                  : "Final-year Software Engineering student building backend systems, data workflows, and practical machine learning projects."}
              </p>
            </div>

            <div className={cx("mt-6 rounded-[24px] border p-4", isDark ? "border-cyan-400/20 bg-cyan-400/8" : "border-black/10 bg-black/[0.02]")}>
              <div className="flex items-center gap-3">
                <span className={cx("inline-flex h-2.5 w-2.5 rounded-full", isDark ? "bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.14)]" : "bg-black/80 shadow-[0_0_0_6px_rgba(24,24,24,0.08)]")} />
                <p className={cx("text-[11px] font-medium uppercase tracking-[0.28em]", isDark ? "text-cyan-200" : "text-black/70")}>{isDark ? "Available" : "Professional Profile"}</p>
              </div>
              <p className={cx("mt-3 text-[14px] leading-7", isDark ? "text-cyan-50/90" : "text-black/78")}>
                {isDark
                  ? "Friendly, easy to talk to, and genuinely excited to build useful things with good people."
                  : "Open to meaningful engineering opportunities where I can contribute early, learn quickly, and grow with a strong team."}
              </p>
            </div>

            <div className="mt-6 space-y-4 pb-2 text-[14px]">
              {sidebarRows.slice(0, 2).map((row) => (
                <div key={row.label} className={cx("rounded-[20px] border px-4 py-3", softSurfaceClass)}>
                  <p className={cx("text-[10px] uppercase tracking-[0.28em]", softTextClass)}>{row.label}</p>
                  <p className={cx("mt-2 leading-6", mutedTextClass)}>{row.value}</p>
                </div>
              ))}
              {isDark && (
                <div className={cx("rounded-[20px] border px-4 py-3", softSurfaceClass)}>
                  <p className={cx("text-[10px] uppercase tracking-[0.28em]", softTextClass)}>Personal Mode</p>
                  <div className={cx("mt-2 flex items-center gap-3 leading-6", mutedTextClass)}>
                    <Sparkles className="h-4 w-4" />
                    <span>Personal mode: still technical, just a little more me.</span>
                  </div>
                </div>
              )}
              <div className={cx("rounded-[20px] border px-4 py-3", softSurfaceClass)}>
                <p className={cx("text-[10px] uppercase tracking-[0.28em]", softTextClass)}>Current Focus</p>
                <div className={cx("mt-2 space-y-2 text-[14px] leading-6", mutedTextClass)}>
                  {currentFocusItems.map((item) => (
                    <div key={item} className={cx("rounded-[14px] border px-3 py-2", isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-black/[0.02]")}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx("rounded-[20px] border px-4 py-3", softSurfaceClass)}>
                <p className={cx("text-[10px] uppercase tracking-[0.28em]", softTextClass)}>In Progress Projects</p>
                <div className={cx("mt-2 space-y-2 text-[14px] leading-6", mutedTextClass)}>
                  {inProgressProjects.map((project) => (
                    <div key={project} className={cx("rounded-[14px] border px-3 py-2", isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-black/[0.02]")}>
                      {project}
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx("rounded-[20px] border px-4 py-3", softSurfaceClass)}>
                <p className={cx("text-[10px] uppercase tracking-[0.28em]", softTextClass)}>Exploration Areas</p>
                <div className={cx("mt-2 space-y-2 text-[14px] leading-6", mutedTextClass)}>
                  {explorationAreas.map((item) => (
                    <div key={item} className={cx("rounded-[14px] border px-3 py-2", isDark ? "border-white/8 bg-white/[0.03]" : "border-black/8 bg-black/[0.02]")}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {sidebarRows.slice(2).map((row) => (
                <div key={row.label} className={cx("rounded-[20px] border px-4 py-3", softSurfaceClass)}>
                  <p className={cx("text-[10px] uppercase tracking-[0.28em]", softTextClass)}>{row.label}</p>
                  <p className={cx("mt-2 leading-6", mutedTextClass)}>{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleThemeToggle}
                className={cx("inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm transition-colors", railButtonClass)}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {isDark ? "Light" : "Dark"}
              </button>
              {isDark ? (
                <button
                  type="button"
                  onClick={handleSoundToggle}
                  className={cx("inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm transition-colors", railButtonClass)}
                >
                  {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                  Sound
                </button>
              ) : (
                <div className={cx("inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm", "border-black/10 bg-black/[0.02] text-black/45")}>
                  <VolumeX className="h-4 w-4" />
                  Sound Off in Light Mode
                </div>
              )}
            </div>
            <a
              href="#contact"
              onClick={() => playUiTick(610)}
              className={cx(
                "inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm transition-colors",
                isDark
                  ? "border-white/12 bg-white text-[#0f1217] hover:bg-white/90"
                  : "border-black/12 bg-black text-white hover:bg-black/90",
              )}
            >
              <Sparkles className="h-4 w-4" />
              {isDark ? "Hire Me, Please" : "Let's Connect"}
            </a>
          </div>
        </div>
      </aside>

      <nav className={cx("fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-colors duration-500", navClass)}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#about" onClick={() => playUiTick(540)} className={cx("text-[15px] uppercase tracking-[0.28em]", isDark ? "text-white" : "text-[#111111]")}>
            Trung Tuan Mai
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <div className={cx("flex gap-6 text-sm", isDark ? "text-white/60" : "text-black/60")}>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => playUiTick(520)} className={cx("transition-colors", isDark ? "hover:text-white" : "hover:text-black")}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 xl:hidden">
              <button type="button" onClick={handleThemeToggle} className={cx("rounded-full border p-2 transition-colors", railButtonClass)}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              {isDark && (
              <button type="button" onClick={handleSoundToggle} className={cx("rounded-full border p-2 transition-colors", railButtonClass)}>
                {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
            )}
            </div>
          </div>
        </div>
      </nav>

      <main className="px-6 pt-28 pb-20 xl:pl-[23.25rem]">
        <div className="mx-auto max-w-6xl space-y-20">
          <section id="about" className="scroll-mt-28 min-h-[calc(100vh-7rem)] flex items-center">
            <div className="grid w-full gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
              <div className="flex min-h-[470px] flex-col justify-between pr-4">
                <div className="space-y-5">
                  <h2 className="max-w-4xl text-7xl leading-[0.92] tracking-[-0.055em] md:text-[7rem]">About Me</h2>
                  <div className={cx("max-w-4xl space-y-4 text-[1.22rem] leading-[1.82]", mutedTextClass)}>
                    <p>
                      I am Trung Tuan Mai, a final-year Software Engineering student at the University of Calgary interested in backend engineering, data science, machine learning, data engineering, and finance-oriented technology.
                    </p>
                    <p>
                      I bring hands-on experience with APIs, databases, model pipelines, and implementation-focused software systems. I learn quickly, work proactively, and enjoy turning technical ideas into reliable, practical solutions in collaborative team environments.
                    </p>
                    <p>
                      I am looking for opportunities where I can contribute early, keep improving fast, and grow into a strong engineering role.
                    </p>
                  </div>

                  <div className={cx("max-w-4xl rounded-[22px] border px-6 py-5", isDark ? "border-cyan-400/20 bg-cyan-400/8" : "border-emerald-200 bg-emerald-50/90")}>
                    <div className="flex items-center gap-3">
                      <span className={cx("inline-flex h-3 w-3 rounded-full", isDark ? "bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.14)]" : "bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.16)]")} />
                      <p className={cx("text-sm font-medium uppercase tracking-[0.22em]", isDark ? "text-cyan-200" : "text-emerald-700")}>
                        Availability
                      </p>
                    </div>
                    <p className={cx("mt-3 text-[1.08rem] leading-8", isDark ? "text-cyan-50/88" : "text-emerald-950/85")}>
                      Open to full-time, internship, and entry-level opportunities. Open to hybrid or remote roles and able to relocate across Canada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[470px]">
                <div className={cx("absolute inset-x-4 top-4 bottom-0 rounded-[28px] border transition-colors duration-500", isDark ? "border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.3)]" : "border-black/8 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.10)]")} />
                <div className={cx("relative flex h-full min-h-[470px] flex-col rounded-[28px] border p-7 transition-colors duration-500 md:p-8", surfaceClass)}>
                  <div className={cx("mb-5 border-b pb-5", isDark ? "border-white/10" : "border-black/10")}>
                    <p className={cx("text-[1rem] uppercase tracking-[0.28em]", softTextClass)}>Professional Profile</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h3 className={cx("mb-3 text-[14px] uppercase tracking-[0.24em]", softTextClass)}>Education</h3>
                      <div className={cx("rounded-[20px] border px-5 py-4", softSurfaceClass, mutedTextClass)}>
                        <p className={cx("text-[1.12rem] font-medium", isDark ? "text-white/92" : "text-black/85")}>Bachelor of Science</p>
                        <p className="mt-1 text-[1rem]">Major in Software Engineering</p>
                        <p className="mt-2 text-[1rem] leading-6">
                          University of Calgary
                          <br />
                          Calgary, Alberta, Canada
                        </p>
                      </div>
                    </div>

                    {capabilityGroups.map((group) => (
                      <div key={group.heading}>
                        <h3 className={cx("mb-3 text-[14px] uppercase tracking-[0.24em]", softTextClass)}>{group.heading}</h3>
                        <div className="flex flex-wrap gap-2.5">
                          {group.items.map((item) => (
                            <span key={item} className={cx("rounded-full border px-3.5 py-1.5 text-[1rem]", isDark ? "border-white/10 bg-white/[0.03] text-white/74" : "border-black/10 text-black/72")}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="resume" className="scroll-mt-28">
            <div className="space-y-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-4xl tracking-[-0.04em] md:text-5xl">My Resume</h2>
                  <p className={cx("mt-2 text-[13px] uppercase tracking-[0.28em]", softTextClass)}>{currentResumeView.label}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {resumeVariants.map((resume, index) => (
                      <button
                        key={resume.key}
                        type="button"
                        aria-label={resume.title}
                        onClick={() => {
                          playUiTick(590);
                          setActiveResume(index);
                        }}
                        className={cx(
                          "h-2.5 w-2.5 rounded-full transition-all duration-300",
                          activeResume === index
                            ? isDark
                              ? "scale-110 bg-cyan-300"
                              : "scale-110 bg-black"
                            : isDark
                              ? "bg-white/24 hover:bg-white/40"
                              : "bg-black/20 hover:bg-black/40",
                        )}
                      />
                    ))}
                  </div>
                  <button type="button" onClick={downloadResume} className={cx("inline-flex items-center rounded-full border px-5 py-2.5 text-sm transition-colors", actionClass)}>
                    Download Resume
                  </button>
                </div>
              </div>

              <div className="resume-stack relative px-6 pt-5 pb-6 md:px-8 md:pt-6 md:pb-8">
                {visibleLayers.map((layer) => (
                  <div
                    key={layer}
                    className="pointer-events-none absolute left-1/2 top-0 h-[calc(100%-1rem)] rounded-[34px] border border-black/10 bg-white transition-all duration-700 ease-out"
                    style={{
                      width: `calc(min(940px, 100%) - ${layer * 18}px)`,
                      transform: `translateX(calc(-50% - ${layer * 34}px)) translateY(${layer * 15}px) scale(${1 - layer * 0.01}) rotate(${-layer * 0.9}deg)`,
                      opacity: layer === 1 ? 0.72 : 0.6 - layer * 0.08,
                      boxShadow: "0 24px 70px rgba(0,0,0,0.12)",
                      zIndex: layer,
                    }}
                  />
                ))}

                <div className="relative mx-auto w-full max-w-[860px] rounded-[26px] border border-black/10 bg-white px-8 py-8 text-[#181818] shadow-[0_30px_90px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out md:px-10 md:py-9" style={{ zIndex: 10 }}>
                  <div className="border-b border-black/10 pb-7">
                    <h3 className="text-[2rem] tracking-[0.08em]">TRUNG TUAN MAI</h3>
                    <p className="mt-3 text-[13px] text-black/62">trungtuan.mai@ucalgary.ca | linkedin.com/in/tuanmai3011 | Cell: (825) 488-2472</p>
                  </div>

                  <div className="grid gap-8 border-b border-black/10 py-5 lg:grid-cols-[0.92fr_1.08fr]">
                    <div>
                      <p className="mb-3 text-[12px] uppercase tracking-[0.32em] text-black/48">Education</p>
                      <div className="space-y-1.5 text-[14px] leading-6 text-black/72">
                        {currentResumeView.education.map((line, index) => (
                          <p key={line} className={index === 0 ? "font-medium text-black/86" : ""}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-[12px] uppercase tracking-[0.32em] text-black/48">Core Skills</p>
                      <div className="space-y-1 text-[14px] leading-6 text-black/72">
                        {currentResumeView.skillLines.map((line) => {
                          const parts = line.split(":");
                          const label = parts.shift();
                          const value = parts.join(":").trim();
                          return (
                            <p key={line}>
                              <span className="font-medium text-black/86">{label}:</span> {value}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-black/10 py-5">
                    <a href="#projects" onClick={() => playUiTick(530)} className="mb-4 inline-block text-[12px] uppercase tracking-[0.32em] text-black/48 hover:text-black">Projects</a>
                    <div className="space-y-5">
                      {currentResumeView.projects.map((project) => (
                        <article key={project.name} className="border-b border-black/8 pb-5 last:border-b-0 last:pb-0">
                          <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                            <a href={`#${projectAnchorByName[project.name] ?? "projects"}`} onClick={() => playUiTick(550)} className="text-[1rem] font-medium text-black/88 hover:underline">{project.name}</a>
                            <p className="flex items-center justify-end gap-2 text-right text-[12px] text-black/50">
                              <span>{project.detail.split("|")[0]}</span>
                              <span className="inline-block h-1 w-1 rounded-full bg-black/35" />
                              <span>{project.detail.split("|")[1]}</span>
                            </p>
                          </div>
                          <ul className="mt-2.5 space-y-1 text-[14px] leading-6 text-black/72">
                            {project.bullets.map((bullet) => (
                              <li key={bullet}>- {bullet}</li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-8 py-5 lg:grid-cols-[0.92fr_1.08fr]">
                    <div>
                      <p className="mb-3 text-[12px] uppercase tracking-[0.32em] text-black/48">{currentResumeView.extrasTitle}</p>
                      <div className="space-y-5">
                        {currentResumeView.extras.map((item) => (
                          <article key={item.name}>
                            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                              <h4 className="text-[0.98rem] font-medium text-black/88">{item.name}</h4>
                              <p className="text-right text-[12px] text-black/50">{item.detail}</p>
                            </div>
                            <ul className="mt-2.5 space-y-1 text-[14px] leading-6 text-black/72">
                              <li>- {item.bullet}</li>
                            </ul>
                          </article>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-[12px] uppercase tracking-[0.32em] text-black/48">Work Experience</p>
                      <article>
                        <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                          <h4 className="text-[0.98rem] font-medium text-black/88">{currentResumeView.work.role}</h4>
                          <p className="text-right text-[12px] text-black/50">{currentResumeView.work.date}</p>
                        </div>
                        <p className="text-[12px] text-black/50">{currentResumeView.work.company}</p>
                        <ul className="mt-2.5 space-y-1 text-[14px] leading-6 text-black/72">
                          {currentResumeView.work.bullets.map((bullet) => (
                            <li key={bullet}>- {bullet}</li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-28">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl tracking-[-0.04em] md:text-5xl">Featured Engineering Projects</h2>
                <p className={cx("mt-4 max-w-3xl text-base leading-7", mutedTextClass)}>
                  A compact project view with four projects per page. Open any card to see the full background, highlights, frameworks, and project access details.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {pagedProjects.map((project) => (
                  <article
                    id={project.id}
                    key={project.title}
                    className={cx(
                      "rounded-[28px] border p-6 scroll-mt-28 transition-colors duration-500",
                      surfaceClass,
                      selectedProjectId === project.id && (isDark ? "border-cyan-400/30" : "border-black/20"),
                    )}
                  >
                    <div className={cx("mb-5 overflow-hidden rounded-[22px] border", isDark ? "border-white/10 bg-[linear-gradient(135deg,#18212c,#0f141b)]" : "border-black/10 bg-[linear-gradient(135deg,#f4f1eb,#e8e3d8)]")}>
                      {project.imageSrc && (
                        <>
                          <div className="aspect-[16/10]">
                            <img src={project.imageSrc} alt={project.title} className="h-full w-full object-cover" />
                          </div>
                        </>
                      )}
                      {!project.imageSrc && <div className="aspect-[16/10]" />}
                      <div className="px-5 pb-5 pt-4">
                        <p className={cx("text-[11px] uppercase tracking-[0.28em]", softTextClass)}>Project Snapshot</p>
                        <p className="mt-2 text-lg tracking-[-0.02em]">{project.imageLabel}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>
                          {projectMetaById[project.id as keyof typeof projectMetaById]}
                        </p>
                        <button
                          type="button"
                          onClick={() => openProjectModal(project.id)}
                          className={cx("mt-2 text-left text-2xl tracking-[-0.03em] transition-colors", isDark ? "hover:text-cyan-200" : "hover:text-black")}
                        >
                          {project.title}
                        </button>
                      </div>
                      <p className={cx("text-sm leading-7", mutedTextClass)}>{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className={cx("rounded-full border px-3 py-1 text-xs", isDark ? "border-white/10 bg-white/[0.03] text-white/72" : "border-black/10 text-black/68")}>
                            {item}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => openProjectModal(project.id)}
                        className={cx("inline-flex rounded-full border px-4 py-2 text-sm transition-colors", actionClass)}
                      >
                        View details
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <p className={cx("text-sm", mutedTextClass)}>
                  Page {projectPage + 1} of {projectPageCount}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setProjectPage((page) => Math.max(0, page - 1))}
                    disabled={projectPage === 0}
                    className={cx(
                      "rounded-full border px-4 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                      actionClass,
                    )}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectPage((page) => Math.min(projectPageCount - 1, page + 1))}
                    disabled={projectPage === projectPageCount - 1}
                    className={cx(
                      "rounded-full border px-4 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                      actionClass,
                    )}
                  >
                    Next
                  </button>
                </div>
              </div>

            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <div className={cx("rounded-[32px] border px-7 py-8 transition-colors duration-500 md:px-12 md:py-12", surfaceClass)}>
              <div className={isDark ? "max-w-3xl" : "max-w-2xl"}>
                <p className={cx("text-xs uppercase tracking-[0.35em]", softTextClass)}>Contact Me</p>
                <h2 className="mt-2 text-4xl tracking-[-0.04em] md:text-5xl">{isDark ? "Let's talk" : "Let's connect"}</h2>
                {isDark && (
                  <p className={cx("mt-4 text-base leading-7", mutedTextClass)}>
                    If you are hiring, or building a fun, collaborative, high-energy team where people learn fast and enjoy working together, I would love to connect.
                  </p>
                )}
              </div>

              {isDark ? (
                <div className="mt-10 space-y-6">
                  <div className="grid items-start gap-6 xl:grid-cols-3">
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                          <Mail className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>Email</p>
                          <a href="mailto:trungtuan.mai@ucalgary.ca" onClick={() => playUiTick(560)} className="mt-2 block break-all text-[1.08rem] leading-7 hover:underline">
                            trungtuan.mai@ucalgary.ca
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>Location</p>
                          <p className="mt-2 text-lg">Calgary, Alberta, Canada</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>LinkedIn</p>
                          <a href="https://linkedin.com/in/tuanmai3011" target="_blank" rel="noreferrer" onClick={() => playUiTick(560)} className="mt-2 block break-all text-[1.08rem] leading-7 hover:underline">
                            linkedin.com/in/tuanmai3011
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                          <Github className="h-5 w-5" />
                        </div>
                        <div>
                          <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>GitHub</p>
                          <a href="https://github.com/Vincent-Shin" target="_blank" rel="noreferrer" onClick={() => playUiTick(560)} className="mt-2 block text-lg hover:underline">github.com/Vincent-Shin</a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                          <Instagram className="h-5 w-5" />
                        </div>
                        <div>
                          <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>Instagram</p>
                          <a href="https://www.instagram.com/chu.be.dan3011/" target="_blank" rel="noreferrer" onClick={() => playUiTick(560)} className="mt-2 block text-lg hover:underline">
                            instagram.com/chu.be.dan3011
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>Facebook</p>
                          <a href="https://www.facebook.com/tuan.mai.545285" target="_blank" rel="noreferrer" onClick={() => playUiTick(560)} className="mt-2 block text-lg hover:underline">
                            facebook.com/tuan.mai.545285
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 xl:grid-cols-[1.6fr_0.85fr]">
                    <div>
                      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/10 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
                        <iframe
                          src="https://www.tiktok.com/player/v1/7613104661293223189?controls=0&description=0&music_info=0"
                          title="Dark mode personal clip"
                          className="h-[340px] w-full"
                          allow="fullscreen"
                        />
                      </div>
                    </div>

                    <div className="self-start rounded-[28px] border border-cyan-400/28 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_32%),linear-gradient(180deg,rgba(16,34,46,0.96),rgba(12,20,33,0.96))] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.28)] xl:min-h-[340px]">
                      <div className="flex items-center gap-3">
                        <Sparkles className="h-5 w-5 text-cyan-300 drop-shadow-[0_0_14px_rgba(34,211,238,0.4)]" />
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">Hire Me</p>
                      </div>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-cyan-100/60">Personal mode, but still serious about building good work.</p>
                      <p className={cx("mt-4 text-[1rem] leading-7", mutedTextClass)}>
                        If you are hiring and want someone friendly, energetic, and excited to contribute in a positive, people-oriented team culture, I would genuinely love the chance to talk.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a href="mailto:trungtuan.mai@ucalgary.ca" onClick={() => playUiTick(580)} className={cx("inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors", actionClass)}>
                          <Mail className="h-4 w-4" />
                          Email Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-10 grid items-start gap-10 xl:grid-cols-[1.28fr_0.72fr]">
                  <div>
                    <div className="max-w-[46rem]">
                      <p className={cx("text-base leading-7", mutedTextClass)}>
                        Available for backend, software engineering, data, and AI-leaning opportunities. The details below are the fastest way to reach me.
                      </p>
                    </div>

                    <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>Email</p>
                        <a href="mailto:trungtuan.mai@ucalgary.ca" onClick={() => playUiTick(560)} className="mt-2 block text-[1rem] leading-7 hover:underline">
                          trungtuan.mai@ucalgary.ca
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>LinkedIn</p>
                        <a href="https://linkedin.com/in/tuanmai3011" target="_blank" rel="noreferrer" onClick={() => playUiTick(560)} className="mt-2 block whitespace-nowrap text-[0.98rem] leading-7 hover:underline">
                          linkedin.com/in/tuanmai3011
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>Location</p>
                        <p className="mt-2 text-[1.08rem] leading-7">Calgary, Alberta, Canada</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={cx("rounded-2xl border p-3", softSurfaceClass)}>
                        <Github className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className={cx("text-xs uppercase tracking-[0.24em]", softTextClass)}>GitHub</p>
                        <a href="https://github.com/Vincent-Shin" target="_blank" rel="noreferrer" onClick={() => playUiTick(560)} className="mt-2 block whitespace-nowrap text-[1rem] leading-7 hover:underline">
                          github.com/Vincent-Shin
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="self-start rounded-[28px] border border-black/10 bg-black/[0.02] p-8 xl:min-h-[270px]">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-black/70" />
                      <p className="text-sm font-medium uppercase tracking-[0.24em] text-black/70">Professional Inquiry</p>
                    </div>
                    <p className={cx("mt-4 text-[1rem] leading-8", mutedTextClass)}>
                      Open to full-time, internship, and entry-level opportunities in backend, software engineering, data, and AI-focused roles.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="mailto:trungtuan.mai@ucalgary.ca" onClick={() => playUiTick(580)} className={cx("inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors", actionClass)}>
                        <Mail className="h-4 w-4" />
                        Email Me
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      {projectModalOpen && (
        <div
          className={cx(
            "fixed inset-0 z-[90] flex items-center justify-center px-4 py-8 backdrop-blur-sm transition-all duration-200",
            projectModalVisible ? "bg-black/55 opacity-100" : "bg-black/0 opacity-0",
          )}
          onClick={closeProjectModal}
        >
          <div
            className={cx(
              "relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[34px] border shadow-[0_30px_120px_rgba(0,0,0,0.35)] transition-all duration-200",
              surfaceClass,
              projectModalVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.985] opacity-0",
            )}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={cx(
                "flex items-center justify-between gap-4 border-b px-7 py-5 md:px-9 md:py-6",
                isDark ? "border-white/10 bg-[#121821]" : "border-black/10 bg-[#f8f5ef]",
              )}
            >
              <p className={cx("text-xs uppercase tracking-[0.28em]", softTextClass)}>
                Project {selectedProjectIndex + 1} / {orderedProjectCards.length}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => goToProjectByOffset(-1)}
                  className={cx("rounded-full border px-4 py-2 text-sm transition-colors", isDark ? railButtonClass : projectLightRailButtonClass)}
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => goToProjectByOffset(1)}
                  className={cx("rounded-full border px-4 py-2 text-sm transition-colors", isDark ? railButtonClass : projectLightRailButtonClass)}
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={closeProjectModal}
                  className={cx("inline-flex rounded-full border p-2 transition-colors", isDark ? railButtonClass : projectLightRailButtonClass)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="min-h-0 overflow-y-auto px-7 py-7 md:px-9 md:py-8">
              <div className="grid gap-8 xl:grid-cols-[1fr_1.05fr]">
                <div>
                  <p className={cx("text-xs uppercase tracking-[0.35em]", softTextClass)}>Project Detail</p>
                  <h3 className="mt-3 text-3xl tracking-[-0.04em] md:text-5xl">{selectedProject.title}</h3>
                  <p className={cx("mt-3 text-sm uppercase tracking-[0.24em]", softTextClass)}>{selectedProjectMeta}</p>

                  <div className={cx("mt-6 rounded-[24px] border p-6", isDark ? "border-white/10 bg-white/[0.03]" : projectLightPanelClass)}>
                    <p className={cx("text-xs uppercase tracking-[0.28em]", softTextClass)}>Background</p>
                    <p className={cx("mt-3 text-base leading-8", mutedTextClass)}>{selectedProjectDetail.background}</p>
                  </div>

                  <div className="mt-6">
                    <p className={cx("text-xs uppercase tracking-[0.28em]", softTextClass)}>Technical Highlights</p>
                    <div className={cx("mt-3 rounded-[24px] border p-5 md:p-6", isDark ? "border-white/10 bg-white/[0.03]" : projectLightPanelClass)}>
                      <ul className={cx("space-y-4 text-sm leading-7", mutedTextClass)}>
                        {selectedProjectDetail.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span
                              aria-hidden="true"
                              className={cx(
                                "mt-2 h-2.5 w-2.5 flex-none rounded-full",
                                isDark ? "bg-cyan-300/85 shadow-[0_0_0_4px_rgba(103,232,249,0.12)]" : "bg-[#9f7f43] shadow-[0_0_0_4px_rgba(159,127,67,0.12)]",
                              )}
                            />
                            <span>{renderHighlightedBullet(bullet, selectedProjectDetail.frameworks)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className={cx("overflow-hidden rounded-[30px] border", isDark ? "border-white/10 bg-[linear-gradient(135deg,#17212d,#0d1219)]" : projectLightPanelClass)}>
                    {selectedProject.imageSrc && (
                      <div className="px-5 pt-5">
                        <div className={cx("overflow-hidden rounded-[24px] border", isDark ? "border-white/12 bg-black/10" : "border-[#d1c2aa] bg-white/60")}>
                          <div className="h-[250px] md:h-[290px]">
                            <img src={selectedProject.imageSrc} alt={selectedProject.title} className="h-full w-full object-cover object-top" />
                          </div>
                        </div>
                      </div>
                    )}
                    {!selectedProject.imageSrc && <div className="h-[250px] md:h-[290px]" />}
                    <div className="px-7 pb-7 pt-5">
                      <p className={cx("text-[11px] uppercase tracking-[0.28em]", softTextClass)}>Project Snapshot</p>
                      <p className="mt-3 text-4xl tracking-[-0.04em]">{selectedProject.imageLabel}</p>
                      <p className={cx("mt-4 max-w-xl text-base leading-8", mutedTextClass)}>{selectedProject.summary}</p>
                    </div>
                  </div>

                  <div className={cx("rounded-[24px] border p-6", isDark ? "border-cyan-400/18 bg-cyan-400/[0.06]" : projectLightPanelClass)}>
                    <p className={cx("text-xs uppercase tracking-[0.28em]", softTextClass)}>Tech Stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProjectDetail.frameworks.map((item) => (
                        <span key={item} className={cx("rounded-full border px-3 py-1.5 text-xs", isDark ? "border-white/12 bg-white/[0.04] text-white/78" : projectLightChipClass)}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={cx("rounded-[24px] border p-6", isDark ? "border-white/10 bg-white/[0.03]" : projectLightPanelClass)}>
                    <p className={cx("text-xs uppercase tracking-[0.28em]", softTextClass)}>Project Access</p>
                    {selectedProjectDetail.projectUrl || selectedProjectDetail.certificateUrl ? (
                      <div className="mt-4 space-y-3">
                        <div className="flex flex-wrap gap-3">
                          {selectedProjectDetail.projectUrl && (
                            <a href={selectedProjectDetail.projectUrl} target="_blank" rel="noreferrer" className={cx("inline-flex rounded-full border px-4 py-2 text-sm transition-colors", actionClass)}>
                              {selectedProjectDetail.projectUrlLabel}
                            </a>
                          )}
                          {selectedProjectDetail.certificateUrl && (
                            <a href={selectedProjectDetail.certificateUrl} target="_blank" rel="noreferrer" className={cx("inline-flex rounded-full border px-4 py-2 text-sm transition-colors", actionClass)}>
                              {selectedProjectDetail.certificateUrlLabel}
                            </a>
                          )}
                          {selectedProjectDetail.liveUrl && (
                            <a href={selectedProjectDetail.liveUrl} target="_blank" rel="noreferrer" className={cx("inline-flex rounded-full border px-4 py-2 text-sm transition-colors", actionClass)}>
                              {selectedProjectDetail.liveUrlLabel}
                            </a>
                          )}
                        </div>
                        {selectedProject.id === "project-java-web-quality-engineering-system" && (
                          <p className={cx("text-sm leading-7", mutedTextClass)}>Repository access is private, but I can walk through the architecture, testing strategy, and CI setup in detail.</p>
                        )}
                      </div>
                    ) : (
                      <div className="mt-3 space-y-4">
                        <p className={cx("text-sm leading-7", mutedTextClass)}>
                          {selectedProject.id === "project-jp-morgan-chase-virtual-experience"
                            ? "This project is represented through the completion certificate and local implementation files rather than a public repository."
                            : "Private GitHub, contact me for more detail."}
                        </p>
                        <a
                          href="#contact"
                          onClick={() => {
                            closeProjectModal();
                            playUiTick(560, true);
                          }}
                          className={cx("inline-flex rounded-full border px-4 py-2 text-sm transition-colors", actionClass)}
                        >
                          Contact Me
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-6 right-6 z-[80] hidden xl:block">
        {chatOpen && (
          <div className={cx("mb-3 flex h-[38rem] w-[28rem] flex-col rounded-[28px] border p-4 transition-colors duration-500", isDark ? "border-cyan-400/16 bg-[#111723]/96 text-white shadow-[0_30px_80px_rgba(0,0,0,0.4)]" : "border-black/10 bg-white/96 text-[#181818] shadow-[0_20px_60px_rgba(0,0,0,0.16)]")}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className={cx("text-[11px] uppercase tracking-[0.24em]", softTextClass)}>{isDark ? "Vincent's Best Referral" : "Trung Tuan Mai Portfolio Assistant"}</p>
                <p className="mt-1 text-sm">{isDark ? "Friendly, honest, and ready to vouch for him." : "Professional recruiter-facing assistant."}</p>
              </div>
              <button type="button" onClick={() => setChatOpen(false)} className={cx("rounded-full border px-2 py-1 text-xs transition-colors", railButtonClass)}>
                Close
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {chatQuickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => submitChatMessage(prompt)}
                  className={cx("rounded-full border px-3 py-1.5 text-xs transition-colors", isDark ? "border-white/10 bg-white/[0.04] text-white/72 hover:bg-white/[0.08]" : "border-black/10 bg-black/[0.02] text-black/70 hover:bg-black/[0.05]")}
                >
                  {prompt}
                </button>
              ))}
            </div>
            <div className={cx("mt-4 min-h-0 flex-1 space-y-3 overflow-y-auto rounded-[22px] border p-3", isDark ? "border-white/10 bg-black/10" : "border-black/10 bg-[#faf8f3]")}>
              {chatMessages.map((message) => (
                <div key={message.id} className={cx("flex", message.role === "user" ? "justify-end" : message.role === "system" ? "justify-center" : "justify-start")}>
                  <div
                    className={cx(
                      "max-w-[85%] rounded-[18px] px-4 py-3 text-[13px] leading-6",
                      message.role === "user"
                        ? isDark
                          ? "bg-cyan-300 text-[#0d1117]"
                          : "bg-black text-white"
                        : message.role === "system"
                          ? isDark
                            ? "border border-cyan-300/16 bg-cyan-300/[0.08] text-center text-white/72"
                            : "border border-black/10 bg-black/[0.04] text-center text-black/55"
                        : isDark
                          ? "border border-white/10 bg-white/[0.04] text-white/86"
                          : "border border-black/10 bg-white text-black/80",
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            <form
              className="mt-4 flex items-end gap-3"
              onSubmit={(event) => {
                event.preventDefault();
                submitChatMessage(chatDraft);
              }}
            >
              <label className="sr-only" htmlFor="portfolio-chat-input">
                Ask the portfolio assistant
              </label>
              <input
                id="portfolio-chat-input"
                value={chatDraft}
                onChange={(event) => setChatDraft(event.target.value)}
                placeholder={isDark ? "Ask about projects, roles, or availability..." : "Ask about backend work, projects, or contact details..."}
                className={cx(
                  "min-w-0 flex-1 rounded-[18px] border px-4 py-3 text-sm outline-none transition-colors",
                  isDark
                    ? "border-white/10 bg-white/[0.04] text-white placeholder:text-white/34 focus:border-cyan-300/40"
                    : "border-black/10 bg-[#faf8f3] text-black placeholder:text-black/35 focus:border-black/25",
                )}
              />
              <button
                type="submit"
                className={cx(
                  "rounded-[18px] border px-4 py-3 text-sm transition-colors",
                  isDark ? "border-cyan-300/18 bg-cyan-300 text-[#0d1117] hover:bg-cyan-200" : "border-black bg-black text-white hover:bg-black/90",
                )}
              >
                Send
              </button>
            </form>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            playUiTick(610, true);
            setChatOpen((open) => !open);
          }}
          className={cx("inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm transition-colors", isDark ? "border-cyan-300/18 bg-[#111723]/96 text-white shadow-[0_20px_60px_rgba(0,0,0,0.34)] hover:bg-[#161d29]" : "border-black/10 bg-white/96 text-black shadow-[0_16px_50px_rgba(0,0,0,0.14)] hover:bg-white")}
        >
          <MessageCircle className="h-4 w-4" />
          Chatbot
        </button>
      </div>
      </main>
    </div>
  );
}








