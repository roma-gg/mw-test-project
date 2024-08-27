<p align="center">
  <img src="https://github.com/user-attachments/assets/f2c58edc-3507-4dc4-a8ed-9b1dee503379" alt="image" />
</p>

## **MirrorWeb Testing Framework**

Welcome to the **MirrorWeb Testing Framework** repository! 🎉

This repository contains a testing framework built using JavaScript, Cucumber, and Playwright. It's designed to provide a robust solution for end-to-end testing and is geared towards enhancing the reliability of web applications.

## 🛠️ Features

- **Behavior-Driven Development (BDD):** Utilizes Cucumber for writing clear, human-readable test scenarios.
- **Automated Testing:** Leverages Playwright for powerful browser automation and testing.
- **JavaScript Framework:** Implemented in JavaScript due to compatibility considerations with Cucumber.js.

## Getting Started

To get started with the framework, ensure you have original app running and follow these steps:

### 1. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 2. Fix 2 critical bugs in original app:
- Add dependency array in useEffect of MessageList() function (_layout.dashboard.tsx)
- Remove wait from app.get('/messages') function

### 3. Run the Tests

Execute the tests with the following command:

```bash
npm test
```

Or run tests directly from .feature files.

## 📂 Structure

Here's an overview of the project structure:

- **`features/`**: Contains your Cucumber feature files and step definitions.
- **`step_definitions/`**: Houses the step definitions that correspond to the scenarios defined in your feature files.
- **`pages/`**: Contains Page Object Model (POM) classes for organizing interactions with web pages.
- **`reports/`**: Stores Cucumber test reports and other related output files.

## 📚 Usage

To use the framework, follow these steps:

### 1. Write Test Scenarios

Define your scenarios in `.feature` files located in the `features/` directory.

### 2. Implement Step Definitions

Add the corresponding step definitions in the `step_definitions/` folder.

### 3. Run and Review

Execute your tests and review the results in the console.

## 🤝 Contact

If you have any questions or need assistance, don't hesitate to reach out. We're here to help!

Happy testing! 🚀

