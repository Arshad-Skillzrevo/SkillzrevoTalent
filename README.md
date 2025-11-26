## **📌 1. Project Repositories**

All project repositories are hosted under the SkillzRevo GitHub organization:

| Project                 | Repository Link                                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Consulting Website      | [https://github.com/Arshad-Skillzrevo/Consulting](https://github.com/Arshad-Skillzrevo/Consulting)                   |
| Corporate Website       | [https://github.com/Arshad-Skillzrevo/SkillzrevoSolutions](https://github.com/Arshad-Skillzrevo/SkillzrevoSolutions) |
| Training Website        | [https://github.com/Arshad-Skillzrevo/Skillzrevo](https://github.com/Arshad-Skillzrevo/Skillzrevo)                   |
| Talent Staffing Website | [https://github.com/Arshad-Skillzrevo/SkillzrevoTalent](https://github.com/Arshad-Skillzrevo/SkillzrevoTalent)       |

Each repository uses **main** as the production branch and is connected to **Vercel for automatic deployment**.

---

## **📌 2. Requirements**

Before working on any project, ensure you have:

* **Node.js (LTS version)** – recommended v18+
* **Git** installed
* Any code editor (VS Code recommended)

---

## **📌 3. Cloning a Repository (Local Setup)**

Follow these steps to clone and run any repository locally:

### **Step 1: Clone the repository**

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/Arshad-Skillzrevo/Consulting
```

### **Step 2: Navigate into the project**

```bash
cd Consulting
```

### **Step 3: Install dependencies**

```bash
npm install
```

### **Step 4: Start the development server**

```bash
npm run dev
```

The project will run at:

```
http://localhost:3000
```

---

## **📌 4. Git Workflow (Committing & Pushing Changes)**

When making any changes to the code, follow this workflow:

### **Check current status**

```bash
git status
```

### **Stage all changes**

```bash
git add .
```

### **Commit your work**

```bash
git commit -m "Meaningful commit message"
```

### **Push to GitHub**

```bash
git push origin main
```

* The **main branch** is directly connected to Vercel.
* Any push to main triggers an **automatic deployment**.

---

## **📌 5. Deployment Workflow (Vercel Auto-Deploy)**

All four projects are deployed on Vercel, and the deployment is fully automated.

### **How Deployment Works**

1. Code pushed to GitHub → `main` branch
2. GitHub sends a webhook to Vercel
3. Vercel automatically runs:

   * Install packages
   * Build the project
   * Deploy it live
4. You can check build logs in the Vercel dashboard
5. Once successful, the live site updates instantly

---

## **📌 6. Accessing Vercel Dashboard**

### **Login Steps**

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Login**
3. Select **Continue with Email**
4. Enter: **[arshad@skillzrevo.com](mailto:arshad@skillzrevo.com)**
5. Check Webmail for OTP
6. Enter OTP → Access granted

### **What You Can Manage in Vercel**

* View **Live deployments**
* View logs & errors
* Trigger **manual redeployments**
* Manage domains & DNS
* Check environment variables
* Monitor build performance

---

## **📌 7. Folder Structure (General Overview)**

Most projects contain the following standard structure:

```
/app or /src     → Application pages & logic
/components      → Reusable UI components
/public          → Images & static assets
/styles          → Global CSS or Tailwind setup
/package.json    → Dependencies & scripts
/README.md       → Documentation
```

---

## **📌 8. Environment Variables (If Applicable)**

Some projects may require environment variables.

To set variables:

1. Go to **Vercel Dashboard**
2. Select Project
3. Navigate to **Settings → Environment Variables**
4. Enter required values
5. Click **Save**
6. Redeploy project

---

## **📌 9. Important Notes**

* There is **no uncommitted code** left locally.
* All changes are pushed to GitHub.
* All websites are functioning and deployed through Vercel.
* **Never delete** the email *[arshad@skillzrevo.com](mailto:arshad@skillzrevo.com)* because:

  * GitHub login
  * Vercel login
  * DNS, domains, hosting
  * Repository ownership
  * Deployment automation
    — all depend on this one email ID.

Deleting it will break access to all systems.

---

## **📌 10. Support or Further Assistance**

For any clarification regarding the setup, workflow, or deployment process, you can reach out directly, and I will be available to support during the transition phase.

