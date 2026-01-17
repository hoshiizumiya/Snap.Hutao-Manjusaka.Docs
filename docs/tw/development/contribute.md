---
category: [開源, 開發]
tag: ["開發", "GitHub"]
icon: iconfont icon-code
order: 3
description: 胡桃工具箱使用 C# 和 .NET 框架開發桌面客戶端和服務端。我們廣泛地接受來自開源社區的反饋，如果你願意貢獻你的代碼，請閱讀本頁的指導文檔。
---

# 貢獻你的代碼

胡桃工具箱使用 `C#` 和 `.NET 框架` 開發桌面客戶端和服務端。我們廣泛接受來自開源社區的反饋。如果你有興趣貢獻代碼，請閱讀本頁的指導文檔。

你可以在 GitHub 上查看所有當前[未解決的問題](https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka/issues)。

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> 設置 Snap.Hutao 項目
更多貢獻詳情可參考 github 上的 [CONTRIBUTING.md](https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka?tab=contributing-ov-file#contribute-your-code)  
此指南並非強制要求，針對不同情況，可以根據個人習慣調整。
1. 下載並安裝 [Visual Studio 2026](https://visualstudio.microsoft.com/downloads/)
   - 需要安裝以下組件：
     - `.NET desktop development`（.NET 桌面開發）
     - `Desktop development with C++`（使用 C++ 的桌面開發）
     - `Windows application development`（Windows 應用程序開發）
2. 使用 Git 克隆項目倉庫：`git@github.com:hoshiizumiya/Snap.Hutao-Manjusaka.git`。
3. 將分支切換到 `develop`。
4. 使用 Visual Studio 打開項目解決方案（Solution）對應的 .slnx 文件，即可開始開發。

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> 開啟 Debug

1. 下載並安裝 [Sysinternals Suite](https://www.microsoft.com/store/productid/9P7KNL5RWT25)（微軟商店）或從[微軟官網](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite)下載。
2. 找到並啟動 `DebugView`（在開始菜單或解壓後的文件中）。
3. 啟動 Snap Hutao 主程序。
4. 觀察 `DebugView` 輸出的調試信息。

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> 發起 Pull Request

- 所有不是從項目其它分支發起的 Pull Request 僅允許合併到 `develop` 分支。
- 如果你的代碼與現有的 issue 相關，請使用[關鍵詞](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests)將你的 PR 關聯到相關的 issue。這將使相關 issue 在 PR 合併到 `main` 分支時自動關閉。

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> 測試打包程序

::: warning 注意事項
如果希望試用最新 Alpha 版本，請先下載並安裝 [**DGP_Studio_CA.crt**](https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt) 到 **受信任的根證書頒發機構**。
:::

- 每次 `push` 後，GitHub Actions 腳本會自動運行以構建最新解決方案：
  - 對於 `main`、`develop` 和 `feat` 分支，腳本將自動上傳構建的 `Snap Hutao Alpha` 壓縮包以供測試。
  - 其他分支僅驗證代碼可構建性，不提供上傳功能。
- 可在 [Alpha 流水線](https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka/actions/workflows/alpha.yml)中查看所有編譯記錄。
