# Jerry Wang – Resume Website (React)

Personal resume website built with React and Webpack, deployed via **GitHub Pages (user page)**.

Website: https://pen9rum.github.io/

---

## 🚀 Deployment Guide

### Local Development
```bash
npm install
npm start
```
Open: http://localhost:8080

---

### GitHub Pages Deployment (Current Setup)

> ⚠️ This repository is a **GitHub user page** (`pen9rum.github.io`)  
> GitHub Pages serves files from the **repository root**, not `dist/`.

#### Deployment Steps (Run every time you update content)
```powershell
npm run deploy
```

**Explanation**
- `npm run deploy` runs `scripts/deploy.ps1`
- The script builds production files into `dist/`
- It copies `dist/` contents to the repository root
- It commits the changes and pushes to GitHub
- GitHub Pages automatically rebuilds and deploys the site

Useful options:
```powershell
npm run deploy --message="update reviewer service"
npm run deploy:nopush
npm run deploy:dry

# Direct PowerShell options also work:
powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1 -Message "update resume" -NoPush
```

---

## 📁 Project Structure (Key Files)
```
pen9rum.github.io/
├── src/                  # React source code
├── dist/                 # Webpack build output
├── bundle.js             # ⚠️ File actually served by GitHub Pages
├── index.html            # Entry point for Pages
├── webpack.config.js
└── package.json
```

---

## ✏️ Updating Resume Content
Edit the following file:
```text
src/data/resumeData.js
```

After editing, **always rebuild and deploy**.

---

## 🛠 Tech Stack
- React 18
- Webpack 5
- Bootstrap 5
- GitHub Pages

---

## 📄 License
MIT
