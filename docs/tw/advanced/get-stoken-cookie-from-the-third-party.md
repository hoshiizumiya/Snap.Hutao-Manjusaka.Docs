---
categories: [FAQ, 第三方工具]
icon: iconfont icon-read
order: 7
comment: false
description: 一些第三方工具可以幫助你獲取到包含 Stoken 字段值的米遊社 cookie 並將其用於胡桃工具箱。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False
---

# 使用第三方工具獲取有 Stoken 的 cookie

::: warning

- 以下步驟中涉及的軟件、開源項目等資源均來源於互聯網，與 DGP-Studio 無關
- 本說明文檔僅提供有關的解決思路，僅供學習使用，具體操作與操作後果與本項目無關

:::

## Android

Android 用戶可以使用開源項目 GetToken 來獲取包含 Stoken 字段的 cookie

::: tip GetToken 開源項目

- GitHub：[HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)

:::

- GetToken 項目的發佈會包含兩個 apk 文件，兩者最終效果相同。根據你的設備情況選擇適合你的版本即可。
  - `app-release.apk` 是一個 LSPosed 插件，其允許用戶在官方米遊社中使用 GetToken 功能
    - 需要 Root 權限
  - `miyoushe-361-lspatched.apk` 是一個已包含 GetToken 功能的修改版米遊社程序
    - 注意，你需要先卸載官方版米遊社以安裝該版本的米遊社
    - 本方法無須 Root
- 啟用插件或安裝修改版米遊社後打開米遊社，在底欄點擊“我的”，然後登錄
- 在右上角點擊形如 🔑 形狀的按鈕
- 勾選 `Stoken` 選項
- 點擊“複製登錄信息”以獲取 `Cookie`
- 將複製到的 Stoken 發送到已經安裝了胡桃工具箱的電腦
- 在“胡桃”中點擊“賬號登錄-手動輸入”
- 輸入之前獲取的 `Cookie` 即可完成登錄

## iOS

iOS 用戶可以在 App Store 下載抓包軟件 `Stream` 來獲取包含 Stoken 字段的 Cookie

- 從 App Store 下載 [Stream](https://apps.apple.com/cn/app/stream/id1312141691)
- 對域名 `api-takumi.mihoyo.com` 進行抓包分析
- 找到並複製帶有 `Stoken` 的數據
  - 形如 `stuid=****;stoken=v2****;mid=****;`
- 將複製到的 Stoken 發送到已經安裝了胡桃工具箱的電腦
- 在“胡桃”中賬號登錄的位置，點擊“手動輸入”
- 輸入之前獲取的 `Cookie` 即可完成登錄

## macOS

macOS 用戶可以通過 [TeyvatGuide](https://github.com/BTMuli/TeyvatGuide) 應用來獲取包含 Stoken 字段的 Cookie

- 從 [Github Release](https://github.com/BTMuli/TeyvatGuide/releases/latest) 下載 TeyvatGuide 對應的 macOS 包
- 參考 [TeyvatGuide 文檔](https://github.com/BTMuli/TeyvatGuide/blob/master/docs/macos-gatekeeper/README.md) 安裝
- 設置頁通過短信驗證碼登錄賬戶
- 在用戶 Badge 中選擇Cookie複製按鈕複製Cookie
- 在胡桃中賬號登錄的位置，點擊“手動輸入”
- 直接粘貼即可完成登錄
