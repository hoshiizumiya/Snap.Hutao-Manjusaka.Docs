---
headerDepth: 3
icon: iconfont icon-ask
category: [FAQ]
order: 1
comment: false
description: 本頁包含了一些常見的與用戶網絡和程序生命週期問題相關的問題及解決方案。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/faq.html&has_description=False
---

# 其他常見問題

## 如何創建胡桃的桌面快捷方式（非管理員模式）
::: tip 新方案
胡桃工具箱 Manjusaka 支持通過設置頁面一鍵創建桌面快捷方式，推薦使用此方法。
:::
::: info
下面的內容以過時僅保留參考
:::
::: tip 社區力量
感謝 [CzHUV 提供的解決方案](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12)
:::

1. 使用 `Win+R` 打開運行窗口，在輸入框中輸入 `shell:AppsFolder`。
   ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp)
2. Windows 會彈出應用程序目錄，找到胡桃工具箱。
3. 右鍵點擊胡桃工具箱圖標，選擇“創建快捷方式”。
4. 根據系統提示操作，即可在桌面創建快捷方式。

## 如何創建胡桃的桌面快捷方式（管理員模式）
::: tip 新方案
胡桃工具箱 Manjusaka 支持通過設置頁面一鍵創建桌面快捷方式，推薦使用此方法。
:::
::: info
下面的內容以過時僅保留參考
:::
- 進入胡桃工具箱的程序設置頁面，點擊“創建快捷方式”按鈕，即可在桌面生成一個具有管理員權限的快捷方式。

## 如何讓胡桃工具箱開機自動啟動
::: tip 新方案
胡桃工具箱 Manjusaka 支持通過設置頁面一鍵開啟開機自啟，同時同步可以設置是否以管理員模式自啟動，推薦使用此方法。
:::
::: info
下面的內容以過時僅保留參考
:::
### 方法一：通過批處理文件

1. 創建一個批處理文件，參考[此 Issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184) 中提供的命令，使胡桃以管理員模式直接運行。
2. 使用以下方式配置批處理文件的自動啟動：

- 創建計劃任務程序，使批處理文件在系統啟動時執行。
- 將批處理文件添加到系統的啟動項。

### 方法二：使用工具

- 使用類似 `SkipUAC` 的程序，使胡桃工具箱以管理員權限靜默啟動。

::: warning 注意事項
上述方法可能會因系統配置或其他問題失效。Snap Hutao 不直接支持開機自啟功能，嘗試相關操作需自行承擔風險。
:::

## 無法使用管理員模式啟動胡桃工具箱

> **問題範圍**: 僅限 Windows 10 低於 22H2 的版本

- 當用戶系統版本低於 `Windows Build 19045`（即 Windows 10 22H2 版本）時，可能無法通過管理員模式啟動胡桃工具箱。
- **解決方案**: 建議將系統升級至 Windows 10 的最新版本，以避免此類兼容性問題。

## 如何通過網絡代理使用胡桃工具箱

> Snap Hutao 提供良好的雲端網絡結構，確保用戶在全球各地均能享受優質服務。

1. 配置系統或軟件代理服務。
2. 推薦啟用 `Loopback 網絡`，詳細教程可參見 [此處](loopback.md)。


# 添加通知圖標創建失敗

打開 PowerShell 並執行下方的命令以修復問題

```PowerShell
irm hut.ao/install.ps1 | iex
```
