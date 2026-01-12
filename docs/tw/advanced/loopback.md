---
headerDepth: 2
icon: iconfont icon-tool
category: [FAQ]
order: 3
description: Loopback網絡介紹及網絡代理失效的解決方案
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/loopback.html&has_description=False
---

# Loopback 網絡
::: tip
使用 msi 安裝包安裝的 Snap Hutao 版本沒有 msix 存在的問題，無需額外操作。下文僅作留存參考。
:::
## 什麼是 Loopback 網絡

『Appx 容器應用』是微軟推廣的一種應用類型，具有諸多優點。為確保其運行效率高、安全穩定且用戶友好，微軟對這些應用採取了一系列限制措施，其中之一便是『Loopback 網絡』。

Loopback 網絡是一種虛擬網絡接口，通常用於在同一臺計算機上的進程之間進行通信。它使用特殊的 IP 地址 `127.0.0.1`（IPv4）或 `::1`（IPv6），這些地址指向本地主機。當應用程序嘗試通過 Loopback 接口進行通信時，數據包不會離開主機，而是在操作系統內部進行處理。

目前 Appx 容器應用已經在 Windows 系統中得到廣泛應用，除了 Microsoft Store 中的 Appx 應用外，Windows 系統中的一些關鍵系統組件，包括 Windows 設置、Microsoft Store、Windows Updates 等，也都是容器應用。

Windows 默認**禁用了所有 Windows Appx 容器應用（包括 Snap Hutao）的 Loopback 網絡**。這一設計旨在限制應用的網絡訪問範圍，使其只能獲取運行所需的資源。

### 理解 Loopback 網絡

您可以將『Loopback 網絡』理解為一個將應用裝入其中的“盒子”。這個“盒子”隔離了應用的網絡環境與本機電腦環境，僅通過一個小孔允許應用與外部網絡交互。

當外界網絡環境變化（例如啟用網絡代理或遊戲加速器等）時，小孔可能被堵塞，導致盒子內的應用無法與外部網絡通信。

## 可能引發的問題

- 啟用代理後，Snap Hutao 無法訪問網絡。
- 某些網絡相關功能（如祈願記錄導出、實時便箋刷新等）失效。

## 解決方案

### 1. 在 Snap Hutao 內進行設置（推薦）

::: info Snap Hutao 已能檢測網絡代理環境
當 Snap Hutao 檢測到網絡代理且 Loopback 限制未解除時，Snap Hutao 會在程序啟動時自動彈出解除 Loopback 限制的提示窗口。在管理員模式下直接點擊確定即可解除 Loopback 限制。除此以外，你也可以跟隨下方的步驟隨時解除 Loopback 限制。
:::

1. 以**管理員**身份打開 Snap Hutao。
2. 點擊左側菜單中的“反饋中心”。
3. 在右側欄中找到並點擊“解除 Loopback 限制”。
4. 點擊彈出窗口中的“確認”按鈕。

此操作將解除 Loopback 限制，使 Snap Hutao 能夠正常使用代理網絡。

### 2. 在網絡代理軟件中進行設置

1. 啟用 **TUN 模式**（如果您的網絡代理軟件提供此選項）。
2. 聯繫您的網絡代理服務商，諮詢有關解決 Windows Appx 容器應用網絡代理問題的技術支持，獲取針對性的解決方案。

通過上述方法，您可以有效解決因 Loopback 限制導致的網絡代理失效問題，使 Snap Hutao 在各種網絡環境下正常運行。
