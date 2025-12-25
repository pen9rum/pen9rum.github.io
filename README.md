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
npm run build
Copy-Item -Recurse -Force dist\* .
git add .
git commit -m "update"
git push
```

**Explanation**
- `npm run build` generates production files in `dist/`
- Contents of `dist/` are copied to the repository root
- GitHub Pages automatically rebuilds and deploys the site

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
