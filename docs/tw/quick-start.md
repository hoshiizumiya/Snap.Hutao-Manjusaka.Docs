---
pageClass: link-box
externalLinkIcon: false
category: [功能, 教程]
comment: false
icon: iconfont icon-launch
order: 5
description: 遵循這篇快速開始文檔，你將可以快速地將 Snap Hutao-Manjusaka 胡桃工具箱設置為可用狀態。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# 快速開始

遵循這篇快速開始文檔，你將可以快速地將胡桃工具箱設置為可用狀態。

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> 最低系統要求

| 要求                  | 規格                                                                                                                                                                                                 |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **最低可運行系統版本**       | Windows 10 Build 19045.5371 (22H2)<br/> Windows 11 Build 22621 (22H2)                                                                                                                              |
| **推薦系統版本**          | Windows 11 Build 26100 (24H2) 或更高版本                                                                                                                                                                |
| **必要組件**            | Windows Update, App Installer, **MSVC 運行庫**                                                                                                                                                                      |
| 可選組件                | WebView2 Runtime                                                                                                                                                                      |

**不支持的系統版本**：

1. Windows 企業版，包括**LTSC 和 LTSB 分支**
2. Windows IoT 版本
3. **精簡版系統，所有來自非微軟官方完整版系統的問題均不會積極處理**。
4. Windows Insider 預覽版本的問題將不會被處理。

> **2025年1月發佈的 Windows [KB5049981](https://support.microsoft.com/en-us/topic/january-14-2025-kb5049981-os-builds-19044-5371-and-19045-5371-12f3788f-6e7d-4524-8ab3-27d1666e0510) 補丁是在 Windows 10 平臺運行 Snap Hutao 的必要條件，其已包含在 Windows 10 Build 19045.5371 及更高版本中。**

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> 下載胡桃工具箱

### 全新安裝

::: tabs

== 使用 MSI 安裝包安裝

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">提示：MSI 安裝包是新式的針對 Windows 系統的安裝包</p>
  </div>

<VPCard
title="GitHub"
desc="Snap Hutao Manjusaka 所有版本均會發佈於主代碼庫中"
logo="/images/202312/github-mark.svg"
link="https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka/releases"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

:::

## 二次開發衍生版本

來自社區力量！
:::tabs 

== Snap Hutao Remastered

<div class="vp-card-container">
<VPCard
title="Snap Hutao Remastered 官網"
desc="重做了高級功能的項目"
logo="http://snaphutaorp.org/logo.png"
link="http://snaphutaorp.org/"
background="rgba(155, 233, 168, 0.15)"
/>
</div>

== Snap Hutao 原版重置
<div class="vp-card-container">
<VPCard
title="Snap Hutao Remastered 官網"
desc="WDG 呈現"
logo="/images/202312/github-mark.svg"
link="https://github.com/wangdage12/Snap.Hutao"
background="rgba(155, 233, 168, 0.15)"
/>
</div>
:::

如果你有興趣通過你的力量讓 Snap Hutao Manjusaka 項目變得更好，歡迎[加入我們](development/join.md)！

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> 更新胡桃工具箱

通常，遵循應用內的更新提示即可完成更新。

只要不手動刪除數據目錄，你的本地數據不會受到影響。

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> 安裝可選組件

通過可選組件，胡桃工具箱能夠更高效地實現一些功能，儘管它們不是強制要求的組件，但可以顯著改善用戶體驗。

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 運行時

WebView2 運行時由微軟提供，允許胡桃工具箱內嵌低開銷的瀏覽器組件。此組件用於實現米遊社賬號的 WebView2 登錄功能。

你可以在[微軟官網](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)底部找到 `常青獨立安裝程序`，選擇 `x64` 下載並安裝。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Segoe Fluent Icons 字體

此字體由微軟提供，可優化胡桃工具箱的圖標顯示效果。缺少該字體可能導致部分圖標顯示不佳。

點擊[此鏈接](https://aka.ms/SegoeFluentIcons)下載字體壓縮包，解壓後右鍵安裝字體到系統。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC 運行庫（MSVCRT）

MSVC 運行庫是解鎖幀率功能的必要組件。如提示“缺少 XXX.dll”或“缺少 XXX 組件”，請安裝最新版 MSVCRT。

點擊[此鏈接](https://aka.ms/vs/17/release/vc_redist.x64.exe)下載 MSVC 運行庫（x64）安裝文件並完成安裝。

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 添加第一個米遊社賬號

在主界面點擊左下角文檔按鈕和設置按鈕中間的賬號面板。在彈出的米遊社賬號面板中，根據賬號類型選擇登錄方式。

無論使用哪種方式，請確保賬號已通過官方應用初始化。否則 Snap Hutao 無法正確獲取賬號信息。

:::: tabs

== 米遊社手機驗證碼登錄

::: warning
請確認米遊社賬號已綁定國服賬號。
:::

1. 點擊“手機驗證碼”按鈕，填寫手機號併發送驗證碼。
2. 填寫驗證碼後確認，稍等片刻即可添加賬號。

== 米遊社掃碼登錄

::: warning
請確認米遊社賬號已綁定國服賬號。
:::

1. 點擊“掃碼登錄”按鈕，等待二維碼加載。
2. 用米遊社 App 掃碼並確認登錄。
3. 稍等片刻，胡桃工具箱將添加賬號。

== HoYoLAB 密碼登錄

::: warning
請確認 HoYoLAB 賬號已綁定國際服賬號。
:::

1. 點擊“密碼登錄”按鈕，填寫賬號密碼並確認。
2. 稍等片刻，賬號將被添加。

== HoYoLAB 社媒賬號登錄

此方式依賴 WebView2 運行時組件。

::: warning
HoYoLAB 默認阻止中國大陸網絡連接。
:::

1. 點擊“三方登錄”按鈕並通過 WebView2 登錄。
2. 稍等片刻，賬號將被添加。

== Cookies 登錄

::: warning
請妥善保存 Cookie 信息，避免賬號風險。
:::

通過手動輸入 SToken 提交 Cookie 登錄。

1. 點擊目標 App 圖標選擇“手動輸入”。
2. 輸入有效 Cookie 並確認，稍等片刻賬號將被添加。
   ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> 安裝常見問題

### 為什麼程序中的圖標會出現亂碼現象

- Windows 10 用戶可通過安裝 `Segoe Fluent Icons` 字體解決問題。
- 在安裝時選擇“為系統所有用戶安裝”。

### 能否通過修復系統組件解決安裝問題

根據錯誤提示修復缺失組件，但 Snap Hutao 開發組不會提供支持。
