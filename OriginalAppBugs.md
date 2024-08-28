# Bug Report

This document outlines the bugs, risks and improvements found in the project. Each issue is described in detail to assist with resolution and tracking.

## Table of Contents

1. [Login Page Issues](#login-page-issues)

   1.1. [Risk: Multiple exposures to internals / file structure](#risk-multiple-exposures-to-internals--file-structure)

   1.2. [Risk: No login attempts limitation](#risk-no-login-attempts-limitation)

   1.3. [Improvement: No client-side input validation](#improvement-no-client-side-input-validation)

   1.4. [Improvement: No autofill of email/password](#improvement-no-autofill-of-emailpassword)

   1.5. [Improvement: No indication of wrong email/password](#improvement-no-indication-of-wrong-emailpassword)

   1.6. [Improvement: Action and method attributes have no effect](#improvement-action-and-method-attributes-have-no-effect)

3. [Dashboard Page Issues](#dashboard-page-issues)

   2.1. [Bug: Infinite fetch loop of Messages fetch requests](#bug-infinite-fetch-loop-of-messages-fetch-requests)

   2.2. [Bug: Logout button does not trigger logout process](#bug-logout-button-does-not-trigger-logout-process)

   2.3. [Near Miss: Total Messages and Total Actions data looks static](#near-miss-total-messages-and-total-actions-data-looks-static)

5. [Other Bugs](#other-bugs)

   3.1. [Bug: Parsing exception in case of Gateway Timeout](#bug-parsing-exception-in-case-of-gateway-timeout)

   3.2. [Bug: TimeoutException caused by explicit wait](#bug-timeoutexception-caused-by-explicit-wait)

   3.3. [Improvement: Messages showed partially](#improvement-messages-showed-partially)

   3.4. [Bug: Client-side rendering error (React hydration)](#bug-client-side-rendering-error-react-hydration)

   3.5. [Risk: Inserting raw HTML into the Search Results page](#risk-inserting-raw-html-into-the-search-results-page)

---

## 1. Login Page Issues

### 1.1. Risk: Multiple exposures to internals / file structure

![image](https://github.com/user-attachments/assets/eb81ffbb-89bf-4c61-b550-b335a7938b59)

### 1.2. Risk: No login attempts limitation

### 1.3. Improvement: No client-side input validation

![image](https://github.com/user-attachments/assets/6f45313c-be44-49fb-accd-c0332eed7d42)

### 1.4. Improvement: No autofill of email/password

### 1.5. Improvement: No indication of wrong email/password

### 1.6. Improvement: Action and method attributes have no effect

![image](https://github.com/user-attachments/assets/0bdee116-b5e0-4655-a5cf-892ecc62a67a)

## 2. Dashboard Page Issues

### 2.1. Bug: Infinite fetch loop of Messages fetch requests

![image](https://github.com/user-attachments/assets/03b11897-4114-4e74-8f73-c3331ef9c0cd)
![image](https://github.com/user-attachments/assets/9b9ea202-fb9f-457e-a080-400155fa0060)

**Fix Verification:**

![image](https://github.com/user-attachments/assets/92132348-de06-4523-a8b7-89d14d2cf0c3)

### 2.2. Bug: Logout button does not trigger logout process

![image](https://github.com/user-attachments/assets/03a34395-a782-47fc-8ea4-5500adbdf845)

### 2.3. Near Miss: Total Messages and Total Actions data looks static

![image](https://github.com/user-attachments/assets/f8ce0459-2fa0-422c-923f-b5ab20d16236)
![image](https://github.com/user-attachments/assets/cbf701cc-671e-44c8-9408-6aeff2da2277)

**Dynamic Data Confirmation:**

![image](https://github.com/user-attachments/assets/545efd89-0f37-4e1f-a4af-31217383e323)

## 3. Other Bugs

### 3.1. Bug: Parsing exception in case of Gateway Timeout

![image](https://github.com/user-attachments/assets/394d3512-6c28-4030-9ee6-58b0aa189333)

**Caused by no API response validation:**

![image](https://github.com/user-attachments/assets/923623b2-c631-4445-a27c-507d67b83d26)

### 3.2. Bug: TimeoutException caused by explicit wait

![image](https://github.com/user-attachments/assets/f7451c67-b3f7-46c7-86ce-18e4e7da20b4)
![image](https://github.com/user-attachments/assets/2d675d2a-6381-4118-a283-0672e7f651a8)

### 3.3. Improvement: Messages showed partially

![image](https://github.com/user-attachments/assets/eacdace4-50c3-48cc-8cba-84b78cca678d)
![image](https://github.com/user-attachments/assets/2d4e9605-1720-4306-bfe5-009fea8dd71c)

### 3.4. Bug: Client-side rendering error (React hydration)

![image](https://github.com/user-attachments/assets/218e7377-a66d-4363-b515-b4b7129f18f0)

### 3.5. Risk: Inserting raw HTML into the Search Results page

![image](https://github.com/user-attachments/assets/4a4bbf2c-8784-4b64-ae73-4509eef678bc)
