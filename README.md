# Jerry Wang - Personal Resume Website

一個使用 React 構建的現代化個人履歷網站，展示學術研究成果、工作經驗、教育背景和獲獎記錄。

## 🌟 特色功能

### 📱 響應式設計
- 完全響應式佈局，支援桌面、平板和手機
- Bootstrap 5 框架確保跨瀏覽器相容性
- 現代化的卡片式設計風格

### 🎨 視覺設計
- 一致的卡片佈局系統
- 懸停動畫效果
- 專業的配色方案
- Font Awesome 圖示支援

### 📊 內容組織
- **About**: 個人簡介、最新消息、社交連結
- **Experience**: 研究經驗與實習經驗分類展示
- **Education**: 教育背景卡片式呈現
- **Skills**: 技術技能與工具展示
- **Publications**: 學術發表與研究成果
- **Awards**: 學術獎項與競賽成果分類
- **Leadership**: 領導經驗與教學活動
- **Interests**: 研究興趣與專業領域

## 🚀 快速開始

### 環境需求
- Node.js (版本 14 或以上)
- npm 或 yarn

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone https://github.com/pen9rum/pen9rum.github.io.git
   cd pen9rum.github.io
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **開發模式運行**
   ```bash
   npm start
   ```
   網站將在 `http://localhost:8080` 開啟

4. **建置生產版本**
   ```bash
   npm run build
   ```
   建置檔案將生成在 `dist/` 目錄

## 📁 專案結構

```
pen9rum.github.io/
├── src/
│   ├── components/          # React 組件
│   │   ├── About.jsx       # 關於我頁面
│   │   ├── Awards.jsx      # 獎項頁面
│   │   ├── Education.jsx   # 教育背景
│   │   ├── EducationCard.jsx
│   │   ├── Experience.jsx  # 工作經驗
│   │   ├── ExperienceCard.jsx
│   │   ├── Interests.jsx   # 研究興趣
│   │   ├── Leadership.jsx  # 領導經驗
│   │   ├── Navigation.jsx  # 導航欄
│   │   ├── Publications.jsx # 學術發表
│   │   ├── PublicationCard.jsx
│   │   └── Skills.jsx      # 技能展示
│   ├── data/
│   │   └── resumeData.js   # 個人資料配置
│   ├── styles/
│   │   └── styles.css      # 樣式文件
│   ├── index.html          # HTML 模板
│   └── index.js           # 應用程式入口
├── assets/
│   └── img/               # 圖片資源
├── dist/                  # 建置輸出目錄
├── webpack.config.js      # Webpack 配置
└── package.json          # 專案配置
```

## ⚙️ 自定義配置

### 修改個人資料
編輯 `src/data/resumeData.js` 文件：

```javascript
export const resumeData = {
  personal: {
    firstName: "Your",
    lastName: "Name",
    email: "your@email.com",
    // ... 其他個人資訊
  },
  experience: [
    // 您的工作經驗
  ],
  publications: [
    // 您的學術發表
  ],
  // ... 其他資料
};
```

### 更換圖片
1. 將圖片放入 `assets/img/` 目錄
2. 在 `resumeData.js` 中更新圖片路徑
3. 支援的格式：JPG, PNG, WebP

### 修改樣式
- 主要樣式：`src/styles/styles.css`
- 個人照片樣式：搜尋 `.img-profile`
- 卡片樣式：各組件內的 inline styles

## 🛠️ 技術棧

- **前端框架**: React 18
- **樣式框架**: Bootstrap 5
- **圖示**: Font Awesome 6+
- **建置工具**: Webpack 5
- **開發工具**: Babel, CSS Loader
- **部署**: GitHub Pages

## 📦 依賴項目

### 生產依賴
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `bootstrap`: ^5.2.3

### 開發依賴
- `webpack`: ^5.88.0
- `babel-loader`: ^9.1.0
- `css-loader`: ^6.8.0
- `html-webpack-plugin`: ^5.5.0

## 🌐 部署

### GitHub Pages 部署
1. 執行建置命令：
   ```bash
   npm run build
   ```

2. 將 `dist/` 目錄內容複製到根目錄或設定 GitHub Pages 使用 `dist` 資料夾

3. 推送到 GitHub repository

4. 在 repository 設定中啟用 GitHub Pages

### 其他部署選項
- **Vercel**: 支援自動部署
- **Netlify**: 拖拽部署或 Git 整合
- **Firebase Hosting**: Google 雲端託管

## 📱 功能亮點

### 🎯 Experience 頁面
- 自動分類：Research 和 Job Experience
- 卡片式佈局，支援圖片展示
- 固定順序顯示，不會動態重排

### 🎓 Education 頁面
- 卡片式設計，與其他頁面保持一致
- 支援學校 logo 展示
- 垂直置中對齊

### 🏆 Awards 頁面
- 分類顯示：Academic Awards 和 Competition Awards
- 不同圖示區分獎項類型
- 保持序數詞格式化（1st, 2nd, 3rd）

### 📄 Publications 頁面
- 學術發表卡片展示
- 支援狀態標籤（Accepted, Under Review）
- 多種連結按鈕（PDF, Code, Abstract）

## 🎨 設計特色

### 視覺一致性
- 統一的卡片設計語言
- 一致的懸停動畫效果
- 協調的配色方案

### 互動體驗
- 平滑的滾動導航
- 響應式導航欄收合
- 卡片懸停效果

### 無障礙設計
- 語意化 HTML 結構
- 適當的對比度
- 鍵盤導航支援

## 📞 聯絡資訊

- **Email**: 111306078@g.nccu.edu.tw
- **LinkedIn**: [teddyagee](https://linkedin.com/in/teddyagee)
- **GitHub**: [pen9rum](https://github.com/pen9rum)
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=NzBilksAAAAJ&hl=zh-TW)

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改善這個專案！

---

**⭐ 如果這個專案對您有幫助，請給它一個星星！**
