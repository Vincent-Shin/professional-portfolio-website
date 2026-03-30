# Trung Tuan Mai -- Master Project Background (Consolidated)

## Predicting Car Sales Revenue -- Machine Learning System (ENSF 444) - ENSF 444: December 2025


This project was a structured machine learning system built on a dataset
exceeding 500,000 records focused on revenue forecasting. The system was
implemented in Python using Pandas and NumPy for data preprocessing and
Scikit-learn for regression modeling. The workflow began with data
cleaning, handling missing values, normalizing feature scales, and
encoding categorical variables. Over 15 predictive features were
engineered based on domain understanding and statistical correlation
analysis.

A reproducible experimentation pipeline was designed to ensure
consistent training, evaluation, and logging across 47+ controlled
hyperparameter iterations. The model achieved an R² score of 0.91. The
system operated in a batch-processing structure where data
transformation always preceded model training to prevent data leakage.
Emphasis was placed on reproducibility, traceability of assumptions, and
structured validation before model deployment.
Background: Built a machine learning workflow for predicting car sales revenue from a large vehicle sales dataset, with the goal of converting raw transactional and vehicle metadata into a deployment-ready regression model.

Technical Skills: Used Python, pandas, NumPy, scikit-learn, matplotlib, seaborn, joblib, feature engineering, preprocessing pipelines, regression modeling, model evaluation, and serialized inference workflows. Worked with mixed-type tabular data, temporal feature extraction, missing-value handling, and comparative model benchmarking.

Method: Implemented an end-to-end modeling pipeline that loaded and profiled the raw CSV dataset, parsed custom date strings into usable datetime fields, engineered derived attributes such as sale year, sale month, sale weekday, and vehicle age, filled missing numeric and categorical values, and removed non-predictive identifiers. Built a typed preprocessing pipeline using ColumnTransformer, StandardScaler, and OneHotEncoder, then trained and evaluated Linear Regression, Decision Tree, Random Forest, and Gradient Boosting regressors using RMSE, MAE, R², and MAPE. After selecting the best model by error performance, retrained a final pipeline and serialized it with joblib for reuse in prediction.

Result: Delivered a reusable machine learning artifact capable of inferring car sales revenue from unseen input records through a single preprocessing-and-model pipeline. The project demonstrated full-cycle ML engineering, from raw data cleaning and feature construction to comparative evaluation and deployment-oriented model packaging.
------------------------------------------------------------------------

## Data Ingestion & Backend System -- Web-Based Systems (SENG 513)- SENG 513: February 2026

This project focused on backend engineering and data pipeline
construction using MongoDB and RESTful architecture. The system ingested
multi-source restaurant datasets and normalized them into structured
schemas to ensure data consistency and eliminate duplication. A
unique-key strategy was implemented to prevent record conflicts across
heterogeneous data formats.

The backend was developed with REST APIs handling business logic,
validation, and database interaction. MongoDB served as the primary
persistence layer. Docker was used to containerize both backend services
and database instances, while Docker Compose orchestrated multi-service
environments for consistent development and testing.

The operational workflow involved ingesting raw data, validating schema
constraints, normalizing fields, persisting clean records, and exposing
structured endpoints for downstream analytics.
Background: Built a Python-based menu and nutrition data pipeline that collects restaurant item data from multiple external sources and serves it through a backend API for storage, retrieval, and downstream enrichment.

Technical Skills: Used Python, Flask, Flask-CORS, MongoDB, PyMongo, requests, pdfplumber, regex-based parsing, JSON/HTML text extraction, API client design, and scraper orchestration. Worked with document normalization, unique-key deduplication, batch updates, and lightweight ETL-style backend workflows.

Method: Implemented a Flask backend with endpoints for health checks, idempotent menu item upserts, bulk price updates, and full item retrieval, backed by MongoDB with a unique index on a normalized unique_key. Built scraper runners that aggregate structured menu data from multiple restaurant-specific modules, then added a price-enrichment pipeline that fetches HTML and PDF sources, extracts price candidates from raw text and JSON-LD-like payloads, normalizes item names, performs token-overlap matching against stored menu items, and pushes matched prices back to the backend through batched API updates.

Result: Delivered a working ingestion and enrichment platform that supports multi-source restaurant menu collection, duplicate-safe persistence, and large-scale automated price synchronization. The system functions as a lightweight ETL architecture with scraping, transformation, validation, deduplication, persistence, and post-processing stages.
------------------------------------------------------------------------

## JP Morgan Chase -- Advanced Software Engineering Virtual Experience January 2026

This simulation replicated a financial transaction processing backend
system using event-driven architecture. The platform processed
user-to-user transfers, updated account balances asynchronously, and
exposed REST APIs for balance retrieval.

The system was built using Java 17 and Spring Boot. Spring Web handled
REST controllers, Spring Data JPA managed persistence, and H2 functioned
as the development database. Kafka was used to simulate asynchronous
transaction publishing and consumption via Spring Kafka.

Development emphasized asynchronous event processing, enterprise backend
design, service integration, and test-driven understanding of business
logic.
Background: Built the core backend foundation of a Spring Boot financial transaction simulation service designed around account persistence, balance querying, and event-driven transaction ingestion.

Technical Skills: Used Java, Spring Boot, Spring Web, Spring Data JPA, H2, Spring Kafka, Maven, JPA entities, repository patterns, REST controller design, and embedded Kafka test scaffolding. Worked with backend service structure, persistence modeling, repository-backed data access, and asynchronous message-consumption architecture.

Method: Implemented core backend components including a JPA-backed UserRecord entity for persisted account data, a repository abstraction for balance lookup and writes, a DatabaseConduit persistence component, and a REST controller exposing /balance queries by user ID. Configured Kafka integration through a transaction listener bound to an application topic, and worked within a test-driven simulator environment that uses embedded Kafka and staged verification tasks to drive event-processing behavior and account-state validation.

Result: Delivered a backend architecture that established the core building blocks of a transaction-processing system, including REST access for balance reads, repository-backed persistence, and Kafka-based event-ingestion scaffolding. The project reflects a production-style enterprise Java backend structure even though the transaction-consumption logic remains an extensible skeleton.
------------------------------------------------------------------------

## SENG 401 -- Backend Job-Market Simulation System February 2026

This project involved building the backend foundation of a serious
job-market simulation game. The backend tracked player progression,
resume score, activity completion, application attempts, and employment
outcomes across startup, mid-tier, and big-tech company stages.

The system was implemented using Python, Flask, SQLAlchemy, and SQLite.
REST APIs were designed for player lifecycle management, score updates,
activity tracking, stage transitions, and application retrieval. Hiring
logic was implemented as a rule-based engine calculating interview
probability based on resume score and multipliers.
Background: Built the backend foundation for a serious-job-market simulation game by designing a service layer that tracks player progression, resume state, activity completion, and hiring outcomes across multiple company tiers.

Technical Skills: Used Python, Flask, Flask-CORS, SQLAlchemy, SQLite, and relational schema design with planned portability to PostgreSQL/MySQL. Worked with REST API design, ORM-based data modeling, business-rule enforcement, JSON serialization, persistence, and progression-state management.

Method: Implemented REST endpoints for player lifecycle management, score updates, stage transitions, activity completion, run resets, and application history retrieval. Designed normalized persistence models for players and applications, added rule-based progression constraints for startup, mid-tier, and big-tech stages, calculated interview probability from score, market multipliers, and networking/mentor bonuses, and enforced failure thresholds and one-time activity completion rules in backend logic.

Result: Delivered a working backend prototype that persisted player state, recorded application attempts, validated hiring prerequisites, and computed deterministic game progression through reusable API endpoints and database-backed business logic. The system established a clear backend architecture that could support Unity integration and future expansion into interviews, job offers, resume scoring, and market-state simulation.

example bullet point:

Engineered a Flask and SQLAlchemy backend for a job-market simulation game, modeling player progression, application history, activity completion, and employment outcomes in a relational database.
Designed REST APIs for player creation, score/stage updates, activity tracking, run resets, and application retrieval, enabling persistent state synchronization between gameplay and backend services.
Implemented rule-based hiring logic for startup, mid-tier, and big-tech tiers, enforcing score thresholds, prerequisite activities, prior-tier progression, and fail-state limits.
Built interview-probability computation using resume score, market multipliers, and networking/mentor bonuses, turning game progression into a database-backed decision engine.
------------------------------------------------------------------------

## ENSF 480 -- Movie Ticket Reservation System  April 2025

This Java-based system implemented a movie reservation platform using
JDBC and MySQL. It supported customers, registered users, admins,
theatres, showings, seat maps, tickets, and receipts.

Booking logic updated seat availability, inserted ticket and receipt
records, generated receipt files, and enforced cancellation rules. The
system maintained synchronization between in-memory objects and database
state.
ENSF480 technical/backend version
Background: Developed a Java-based movie ticket reservation system with persistent storage and transactional booking logic for customers, registered users, admins, theatres, showings, seats, tickets, and receipts.

Technical Skills: Used Java, JDBC, MySQL, SQL, Swing, prepared statements, object-oriented design, file I/O, and domain modeling. Worked with relational data access, booking workflows, cancellation rules, and synchronization between in-memory objects and database state.

Method: Built a database connector layer to fetch and update customers, admins, cards, movies, theatres, showings, seat maps, seats, tickets, and receipts from MySQL. Implemented booking logic that updated seat availability, inserted ticket and receipt records, generated receipt/ticket files, and enforced business rules such as 72-hour cancellation windows, registered-user benefits, and early-release seat-ratio constraints.

Result: Delivered a database-backed desktop reservation system that handled end-to-end booking and cancellation flows while keeping UI actions, business rules, and persistence operations connected through structured Java classes and SQL updates.
------------------------------------------------------------------------

## ENSF 400 -- Java Web Quality Engineering System December 2025

This project was a multi-module Java web application deployed on Tomcat
and built using Gradle. H2 database and Flyway managed schema migration.

Quality engineering included JUnit, Mockito, Cucumber, Selenium, Jenkins
CI pipelines, SonarQube, JaCoCo, OWASP Dependency-Check, and JMeter. The
system emphasized automated validation and CI/CD integration.
Background: Worked with a Java web application designed to demonstrate software quality practices through a server-rendered architecture spanning authentication, library, and mathematical service domains.

Technical Skills: Used Java, Servlets, Tomcat, H2, Flyway, Gradle, JUnit, Mockito, Cucumber, Selenium, Jenkins, SonarQube, OWASP Dependency-Check, and JMeter. Worked with persistence-layer design, test automation, CI/CD, schema migration, and layered web application architecture.

Method: Used a servlet-based web layer on Tomcat with a centralized persistence layer backed by H2 and Flyway migrations. Applied TDD and BDD to drive business logic and endpoint behavior, implemented database access through prepared statements and reusable query/update templates, and validated the application through unit, integration, API, UI, security, and performance tests orchestrated by Gradle and Jenkins.

Result: Produced or worked within a full-stack quality-engineering project that emphasized maintainability, database correctness, automated validation, and delivery discipline rather than only feature implementation.

------------------------------------------------------------------------

## JFreeChart Testing Project - April 2025

Expanded a Java unit testing suite for JFreeChart utility classes such
as DataUtilities and Range. Used JUnit and JMock to test valid flows,
boundary conditions, null handling, negative values, and exception
behavior. Strengthened white-box testing and mock-based isolation
skills.
Developed and expanded a Java unit testing suite for the JFreeChart library in Eclipse, focusing on validating core utility classes such as DataUtilities and Range. Used JUnit and JMock to design tests for normal cases, boundary conditions, null inputs, invalid parameters, negative values, and empty datasets, improving coverage of data-processing and range-handling logic while demonstrating strong debugging and software quality assurance skills.



Designed and implemented a comprehensive Java unit test suite for selected JFreeChart utility classes by using JUnit for assertion-based validation and JMock to simulate dataset interfaces such as Values2D. Applied systematic test design across valid flows, edge cases, null handling, exception scenarios, negative values, and empty inputs for methods including calculateColumnTotal, calculateRowTotal, createNumberArray, createNumberArray2D, getCumulativePercentages, and multiple Range operations. Strengthened the reliability and correctness of core library behaviors while building practical experience in white-box testing, mock-based isolation, and defect-oriented quality verification.
Completion Date: April 2025

Background: Built a Java white-box testing project focused on validating core utility behavior in the JFreeChart library, particularly around numeric aggregation, dataset handling, and range-processing logic in reusable utility classes.

Technical Skills: Used Java, JUnit, JMock, mock-based isolation, white-box testing, boundary-value analysis, exception validation, assertion-based verification, and utility-class test design. Worked with dataset interface mocking, edge-case coverage, and correctness validation for library-level code.

Method: Designed and implemented a unit test suite for JFreeChart classes such as DataUtilities and Range, using JUnit for structured assertions and JMock to simulate interfaces such as Values2D. Covered valid flows, null input handling, invalid parameters, negative values, empty datasets, boundary conditions, and exception behavior across methods including calculateColumnTotal, calculateRowTotal, createNumberArray, createNumberArray2D, getCumulativePercentages, and Range operations such as combine, constrain, contains, equals, and expand.

Result: Delivered a structured testing suite that strengthened the reliability and correctness of JFreeChart utility behavior while demonstrating practical experience in white-box reasoning, defect-oriented verification, mock-based isolation, and rigorous unit test development for Java library code.
------------------------------------------------------------------------

## Embedded Systems Control Project -- PIC24F16KA101 - December 2025

Implemented interrupt-driven firmware in C using Change Notification
interrupts, Timer3, UART communication, and low-power Idle mode.
Designed event-driven LED control logic based on button inputs with
hardware timer scheduling.
Background: Built an interrupt-driven embedded firmware application on the PIC24F16KA101 microcontroller to handle pushbutton input, LED output control, UART state reporting, and low-power event-based execution.

Technical Skills: Used embedded C, MPLAB/XC16-style PIC development, PIC24 register-level programming, Change Notification interrupts, Timer3 interrupt configuration, UART serial output, clock configuration, digital I/O, bitmask-based state handling, and idle-mode power-aware firmware design.

Method: Configured pushbuttons as digital inputs with internal pull-up resistors, mapped their state into a compact bitmask, and enabled Change Notification interrupts so button transitions triggered lightweight event flags rather than active polling. Implemented the main control loop around Idle() and deferred button-state evaluation to application logic that compared current and previous states before reconfiguring output behavior. Used Timer3 to generate LED blinking intervals for individual button states, maintained steady-on behavior for multi-button combinations, and emitted UART messages describing the current pushbutton combination and system response.

Result: Delivered a responsive event-driven firmware design that integrates CN interrupts, timer-based LED control, UART diagnostics, and low-power execution into a single embedded application. The implementation demonstrates practical microcontroller-level control over hardware interrupts, timing, I/O configuration, and stateful event processing.
------------------------------------------------------------------------

## Calgary Hackathon -- Godot Arena System - February 2026

Built a 2D arena management system using Godot and GDScript. Implemented
dynamic scene instantiation, timed enemy spawning, collision boundaries,
and event-driven state transitions for stage management.
Background: Built a Godot-based game prototype centered on stage progression, meta-upgrades, life-stage stat evolution, map selection, and arena transitions, with gameplay state managed through a centralized runtime system.

Technical Skills: Used Godot, GDScript, scene-based architecture, stateful gameplay systems, UI synchronization, runtime stat calculation, event-driven scene switching, spawn systems, and progression logic design. Worked with centralized game-state management, arena/hub flow, actor spawning, and turn-based meta-progression mechanics.

Method: Implemented a global GameState system that tracks turn progression, life stages, base stats, temporary bonuses, persistent legacy augments, weapon proficiency, energy resources, and rebirth logic. Built scene management that transitions between hub and arena views, wired hub UI components to reflect live game state, and implemented arena logic that loads map-dependent backgrounds, spawns players and enemies, supports boss and map-specific enemy flow, and feeds end-of-stage results back into the progression system. The stat engine recalculates player attributes by combining base values, life-stage modifiers, inherited bonuses, and temporary upgrades, allowing round-to-round persistence and death/rebirth mechanics to alter future runs.

Result: Delivered a functional game systems prototype with centralized progression logic, data-driven stat recomputation, scene transitions, map-specific spawning behavior, and persistent meta-upgrade mechanics. The project demonstrates gameplay architecture design in Godot beyond simple scene scripting by integrating UI, combat-stage flow, persistent systems, and run-based progression into a coherent runtime model.
------------------------------------------------------------------------
## AI / NLP Risk Intelligence Project (Template Placeholder for Future Expansion)- AI / NLP Risk Intelligence Project: In Progress


Planned AI system focused on NLP-based risk extraction and structured
document intelligence. Intended architecture includes Python-based
pipeline, LLM-assisted retrieval, structured database querying, and
API-driven risk classification. Designed for supply-chain or financial
risk analysis scenarios involving multi-step reasoning and automated
information synthesis.

## Work Experience -- Pho Pham Calgary

Performed high-volume transaction handling, operational coordination,
and real-time issue resolution in a fast-paced service environment,
demonstrating structured problem-solving and workflow management under
pressure.

------------------------------------------------------------------------
# MASTER RESUME GENERATION PROMPT SYSTEM
whenever the job description have been sent:
Use the following master instruction when generating resumes:

1.  First evaluate job description fit score.

    -   If fit score \< 60 → Do not generate resume. Recommend missing
        skills.
    -   If fit score 60--75 → Generate partial-fit resume with gap
        alignment.
    -   If fit score ≥ 75 → Automatically generate optimized 1-page
        ATS-ready resume.

2.  Resume constraints:

    -   Maximum 1 page.
    -   Sections allowed: Profile (optional) Education (mandatory), technical skill(mandatory)
        Technical Projects (mandatory) Extracurricular (optional) Work
        Experience (optional)
    -   Pho Pham work experience should ONLY be included when soft
        skills such as teamwork, fast-paced operations, responsibility,
        or communication are relevant to the job.

3.  Project point allocation logic:

    -   Extremely strong project (direct JD alignment): 4--5 bullet
        points.
    -   Strong project: 3--4 bullet points.
    -   Moderate relevance: 2--3 bullet points.
    -   Weak relevance: 2 bullet points.
    -   No relevance: Remove project entirely.

4.  Bullet point format must follow: Strong Verb + Method/Technology +
    Result/Impact. Combine with XYZ method when measurable results
    exist. And dont be duplicate ideas or same ideas, strongverbs, technique. and must be align on job description.

5.  ATS optimization rules:

    -   Mirror technical keywords from JD exactly where applicable.
    -   Avoid unnecessary formatting symbols.
    -   Use clean section headers.
    -   Avoid graphics, tables, columns.
    -   Use standard fonts and spacing structure.

6.  Always prioritize:

    -   Direct JD keyword alignment.
    -   Demonstrated technical depth.
    -   Clear system architecture understanding.
    -   Evidence of ownership and end-to-end implementation.

7.  If AI/NLP/LLM related role: 

    -   Automatically include AI/NLP Risk Intelligence project section.
    -   Emphasize data pipelines, LLM experimentation, prompt design,
        structured reasoning, and API integration.

This master system ensures resume generation is optimized for ATS
scanning, recruiter readability, and technical credibility.

# Resume Bullet Writing Framework

Format 1 (XYZ): Strong Verb + How (Method/Tool) + Result

Format 2 (Strong Verb + Method + Result):
note: avoid duplicate strong verb and encourage use keywork in jd
Engineered a Kafka-driven backend using Spring Boot and JPA, ensuring
asynchronous transaction processing and consistent financial state
updates.

Designed interrupt-based firmware using hardware timers and change
notification interrupts, enabling low-power event-driven control logic.

# Example for project writing 
- Contain named of project under that is name of the course not the id of course , and date, also the bullet points

Structured Data Ingestion Backend 
(Web-Based System Course)	February 2026
•	Built containerized backend services using Docker and configured multi-service environments to ensure reproducible deployments.
•	Developed RESTful APIs and backend business logic to support structured data processing in a Linux-based development environment.
•	Implemented validation logic and structured schema controls to enforce data integrity across services.
•	Debugged API-to-database integration issues to improve system reliability under concurrent service execution.

