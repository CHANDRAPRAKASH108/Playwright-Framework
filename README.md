# Playwright Automation Framework (TypeScript)

This project is a **Test Automation Framework** built using **Playwright** with **TypeScript**. It includes **ESLint, Prettier, and Husky** for code quality and **GitHub Actions** for CI/CD.

## 🚀 Features
- **End-to-End Testing** with **Playwright**
- **TypeScript** for better maintainability
- **ESLint & Prettier** for code quality and formatting
- **Husky** for pre-commit checks
- **Parallel Execution & Tracing**
- **CI/CD with GitHub Actions**

---

## 🛠️ Setup Instructions

### **1️⃣ Prerequisites**
- Install **Node.js** (LTS recommended)
- Install **pnpm** (or npm/yarn)

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/playwright-automation.git](https://github.com/CHANDRAPRAKASH108/Playwright-Framework
cd playwright-automation
```

### **3️⃣ Install Dependencies**
```sh
npm install  # or npm install / yarn install
```

### **4️⃣ Run Tests**
```sh
npm test  # or npm test / yarn test
```

### **5️⃣ Run Tests in Headed Mode**
```sh
$env:ENVIRONMENT="dev"; npx playwright test --headed
```

### **6️⃣ Generate & View Playwright Report**
```sh
pnpm playwright show-report
```

---

## 🧩 Code Quality & Linting

### **Run ESLint**
```sh
npx eslint .
```

### **Run Prettier**
```sh
npx format
```

### **Husky Pre-commit Hooks**
Automatically runs linting and formatting before commits.

---

## 📊 Test Reports & Artifacts
- **Playwright HTML Report**: `playwright-report/index.html`
- **Trace Files for Debugging**: `test-results/`

---

## 📁 Project Structure
```
playwright-automation/
├── tests/              # Test cases
├── pages/              # Page Object Models
├── utils/              # Helper functions
├── config/             # Playwright config
├── .eslintrc.js        # ESLint Configuration
├── .prettierrc         # Prettier Configuration
├── package.json        # Project Dependencies
├── playwright.config.ts # Playwright Configuration
└── .husky/             # Git Hooks for Pre-commit
```

---

## 🚀 CI/CD Pipeline (GitHub Actions)
- **Triggers on Push & PRs**
- **Runs Tests & Linting**
- **Uploads Reports as Artifacts**

---

### Happy Testing! 🚀

