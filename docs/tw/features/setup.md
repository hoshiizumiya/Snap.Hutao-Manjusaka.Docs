---
headerDepth: 2
category: [功能, 教程]
tag: [用戶引導, 初始化, 安裝]
order: 1
comment: false
description: 胡桃工具箱的新用戶引導功能幫助用戶快速地檢查程序具體功能的可用狀態並將其設置為可用狀態。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/features/setup.html
---

# 初始化引導

在初次啟動胡桃工具箱時，程序將自動進入初始化引導流程，幫助用戶正確配置工具箱的各項功能。  
引導流程包括設置語言、確認重要的用戶協議、檢測必要的系統環境以及下載靜態資源。

## 語言設置

::: details
![language-selection](https://img.alicdn.com/imgextra/i4/1797064093/O1CN016IMEtP1g6dyEFo5uK_!!1797064093.png_.webp)

在語言設置環節，你可以選擇胡桃工具箱支持的界面語言。若更換語言，程序將自動重啟以應用更改。

- 簡體中文是 Snap Hutao 的基礎語言，開發團隊同時也維護英語翻譯
- Crowdin 社區成員貢獻了繁體中文、日語和韓語翻譯
- 剩餘語言由 Google Gemini 人工智能模型翻譯

如有興趣貢獻翻譯，可訪問 [https://translate.hut.ao](https://translate.hut.ao) 提供幫助。
:::

## 用戶協議

::: details
![user-agreement](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01SzKgb61g6dy2MZH5s_!!1797064093.png_.webp)

在用戶協議環節，您需要閱讀並同意胡桃工具箱提供的相關協議與服務條款。這些文檔旨在幫助您瞭解 Snap Hutao 項目的性質以及工具箱的使用規則。

確認並接受協議後可繼續完成初始化流程。
:::

## 環境檢測

::: details
![environment-check](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01T3lLLI1g6dyDspUsf_!!1797064093.png_.webp)

胡桃工具箱將自動檢測以下關鍵運行環境，並提示用戶是否需要安裝或更新：

1. **Segoe Fluent Icons 字體**：提供更好的界面圖標顯示效果。  
   下載地址：[Segoe Fluent Icons](https://aka.ms/SegoeFluentIcons)
2. **WebView2 運行時**：支持工具箱核心功能的現代瀏覽器組件。  
   下載地址：[WebView2 運行時](https://go.microsoft.com/fwlink/?linkid=2124701)

如果檢測到缺失環境，可點擊對應鏈接下載並完成安裝。  
上圖為完整環境下該環節的預期顯示效果。
:::

## 資源下載

::: details
![resource-download](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01QILPRh1g6dyHTUpV9_!!1797064093.png_.webp)

在資源下載環節，胡桃工具箱將自動獲取所需的靜態圖片資源。資源下載完成後，初始化流程將自動關閉，並加載工具箱主界面。

如果資源下載失敗，Snap Hutao 仍然可以正常使用，並在加載圖片時自動下載缺失資源。
:::
