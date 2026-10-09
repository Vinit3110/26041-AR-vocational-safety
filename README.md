# SurakshaAR — AR-Based Industrial Safety Training Platform

SurakshaAR is an Android-based Augmented Reality (AR) safety-training platform designed for workers in Jharkhand's mining and manufacturing sectors. It aims to provide interactive, scenario-based safety training, practical assessments, performance tracking, and competency evaluation using accessible smartphone technology.

## 🎯 Project Objectives

- Provide immersive, interactive industrial safety training.
- Simulate workplace hazards and emergency-response scenarios.
- Support multilingual training, including Hindi and Santali.
- Enable offline-first operation in low-connectivity environments.
- Evaluate worker performance through training and assessments.
- Generate competency reports and QR-based certificates.

## ✨ Key Features

- **AR-Based Training:** Visualize safety scenarios in real-world environments using markerless plane detection.
- **Fallback Tracking:** Support marker-based tracking through Vuforia where applicable.
- **Interactive Scenarios:** Practice hazard identification, safety decisions, and emergency responses.
- **Assessment Module:** Evaluate knowledge, decisions, and task performance.
- **Competency Matrix:** Combine training and assessment results to identify strengths and improvement areas.
- **Offline-First Architecture:** Store relevant training data locally and synchronize when connectivity returns.
- **Compliance Dashboard:** Monitor workers, training progress, assessment results, and competency records.
- **QR-Based Certification:** Support certificate generation and verification workflows.
- **Multilingual Support:** Designed for the target workforce, including Hindi and Santali.

## 🏗️ Technology Stack

| Component | Technology |
|---|---|
| Android AR application | Unity, C# |
| AR framework | AR Foundation |
| AR fallback | Vuforia Engine |
| Mobile platform | Android |
| Backend API | Python, FastAPI |
| Database | PostgreSQL |
| Web dashboard | React |
| 3D asset creation | Blender |

## 📁 Repository Structure

```text
.
├── assets/              # Project assets and resources
├── backend/             # Backend API and server-side logic
├── dashboard/           # Web-based compliance dashboard
├── docs/                # Project documentation
├── mobile/
│   └── UnityProject/    # Unity-based Android AR application
├── scripts/             # Utility and automation scripts
├── tests/               # Test cases and testing resources
├── .gitignore
├── CODEOWNERS
└── README.md
```

## 🔄 How It Works

1. **Launch:** The worker opens the SurakshaAR Android application.
2. **Select:** The worker chooses a training scenario or assessment.
3. **Initialize AR:** The application detects suitable real-world surfaces and places the AR scenario. Vuforia can provide marker-based fallback tracking where supported by the implementation.
4. **Interact:** The worker identifies hazards and performs safety-related tasks.
5. **Assess:** The system evaluates training performance and assessment responses.
6. **Generate Results:** Performance data contributes to the worker's final competency matrix.
7. **Synchronize:** Results are stored locally when offline and synchronized with the backend when connectivity is available.
8. **Monitor:** Authorized personnel use the compliance dashboard to review worker progress and records.

## 🧩 Core Training Scenarios

The initial focus is on two industrial safety modules:

- **Fire & Explosion Response:** Hazard recognition and emergency-response decisions.
- **Gas Leak & Confined Space:** Hazard identification, safe procedures, and risk-aware decision-making.

The scenario architecture is intended to support additional training modules as the platform expands.

## ⚙️ Getting Started

### Prerequisites

- Git
- Unity Hub and a compatible Unity Editor version
- Android development tools and a compatible Android device
- Python environment for the backend
- Node.js and npm for the dashboard
- PostgreSQL for database-backed functionality

### Clone the Repository

```bash
git clone https://github.com/Vinit3110/26041-AR-vocational-safety.git
cd 26041-AR-vocational-safety
```

### Run the Components

**1. Android AR Application**

Open `mobile/UnityProject/` through Unity Hub. Configure the required Android build settings and AR dependencies before building and deploying to a compatible device.

**2. Backend**

Open `backend/` and follow the component-specific setup instructions. Configure the required environment variables and PostgreSQL connection before starting the API.

**3. Compliance Dashboard**

Open `dashboard/` and follow its package configuration and setup instructions to install dependencies and run the web application.

> Exact commands, environment variables, database migrations, and configuration values should be documented in the respective component directories.

## 📴 Offline-First Design

SurakshaAR is designed to support training in areas with unreliable internet connectivity. Relevant training content and records can be stored locally, with synchronization performed when a connection becomes available.

The exact offline capabilities depend on which modules and synchronization workflows have been implemented and tested.

## 📊 Assessment and Competency Evaluation

The proposed evaluation workflow combines:

- Training performance
- Assessment scores
- Decision-making accuracy
- Task completion
- Areas requiring improvement

These results are intended to contribute to a final worker competency matrix and support safety-training oversight through the dashboard.

## 🔐 Security and Data Handling

- Keep database credentials and API secrets out of version control.
- Use environment variables for sensitive configuration.
- Apply appropriate authentication and authorization to dashboard functions.
- Validate certificate and worker records before presenting them as verified.
- Avoid committing real worker personal information or production credentials.

## 🚧 Development Status

SurakshaAR is being developed as a Smart India Hackathon project. The repository contains the project's application, backend, dashboard, documentation, assets, scripts, and testing structure.

Feature availability may vary by component. Refer to the relevant source code and documentation for the current implementation status.

## 👥 Intended Users

- Mining and manufacturing workers
- Industrial safety officers
- Training centres and instructors
- Organizations responsible for workforce safety and compliance

## 📌 Project Information

- **Project:** SurakshaAR
- **Problem Statement ID:** 26041
- **Focus Area:** Industrial safety training using Augmented Reality
- **Target Region:** Jharkhand, India
- **Primary Platform:** Android 10+ version

---

*SurakshaAR — Practice safer decisions before facing real-world hazards.*
