---
category: [公告]
icon: iconfont icon-update
order: 1
comment: false
externalLinkIcon: false
description: Snap Hutao 通過持續地更新修復已知問題併發布全新功能，以保證用戶獲得最好的使用體驗，我們將始終發佈更新日誌以追蹤程序的變化。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
---

# 更新日誌
V2.1.0 Release<Badge text="最新版" type="tip" />
- 新增：
  - ✨優化了設置頁面的佈局
  - ✨優化了程序名稱獲取邏輯和顯示
  - ✨優化了下載對話框的 UI 提示效果
  - ✨優化了部分界面語言
  - ✨重構自動簽到邏輯，現在支持手動切換賬號後多賬號的自動簽到和跨天簽到
  - ✨自動簽到現在應該不會重複簽到或者與UI不同步了
  - ✨重構自啟動邏輯，現在自啟動會永遠同步始終以管理員運行狀態了
  - ✨優化了創建快捷方式邏輯，刪除了快捷方式附帶的版本信息，添加選項對應的圖標
  - ✨更改了任務欄圖標左鍵邏輯，左鍵將永遠打開主窗口
  - ✨為任務欄窗口添加關閉窗口隱藏按鈕
  - ✨同步 v1.18.1 添加第三方工具功能，優化啟動遊戲界面速度
  - ✨添加了開源信息
  - ✨部分公告可以關閉提醒了
- 修復：
  - 🛠️修復下載對話框測試路徑
  - 🛠️修復主頁遊戲啟動操作未能觸發延遲啟動
  - 🛠️修復自定義啟動-延遲啟動 DataTable 列拖動導致閃退
  - 🛠️修復偶現的重啟失敗
  - 🛠️修復 LZMA/LZMA2 格式解壓縮錯誤
- 已知問題：
  - ❔IP 檢測服務未上線
  - ❔網頁幫助鏈接可能無法正確重定向到對應語言頁面
  - ❔注入頁面樣式錯位
  - ❔部分圖片資源暫未更新
  
V2.0.3.0 Release
新增：
✨優化了自定義啟動界面的 UI
✨連帶啟動延遲啟動程序功能上線，現在可以更方便地啟動延遲啟動程序了
✨優化和提高了多處的多語言支持
修復：
🛠️提高了部分場景下的穩定性
🛠️同步 WDG 修復武器 ID
已知問題：
❔無法使用成就導入功能
❔IP 檢測服務未上線
❔在部分語言下為未編寫元數據做的回退機制不能隱藏默認的不可用角色，進入將導致不可恢復錯誤
針對中國大陸優化的下載鏈接：
github mirror (請自行檢查域可用性): https://gh-proxy.net/github.com/hoshiizumiya/Snap.Hutao-Manjusaka/releases/download/V2.0.3.0/Snap.Hutao.Installer-V2.0.3.0.7z
github mirrors站點監控: https://uptime.akams.cn/status/philanthropy

V2.0.2.0 Release
4 days ago
@hoshiizumiya hoshiizumiya
 V2.0.2.0
 67397b2
V2.0.2.0 Release
V2.0.2.0 Release
新增：
✨自定義啟動上線，是的，現在可以自定義獲取和快速下載啟動任何你想要的但在胡桃內未實現的程序了
✨延遲啟動上線，你可以同時快捷啟動其他程序
✨優化和提高了多處的多語言支持
修復：
🛠️修復了聖誕節無法結束的問題，現在在設置中可以自由切換
🛠️提高了部分場景下的穩定性
🛠️解決了以管理員權限運行偶現啟動無反應和低UAC情況下無法啟動的問題
已知問題：
❔無法使用成就導入功能
❔IP 檢測服務未上線
❔在部分語言下為未編寫元數據做的回退機制不能隱藏默認的不可用角色，進入將導致不可恢復錯誤
針對中國大陸優化的下載鏈接：
github mirror (請自行檢查域可用性): https://gh-proxy.net/github.com/hoshiizumiya/Snap.Hutao-Manjusaka/releases/download/V2.0.2.0/Snap.Hutao.Installer-V2.0.2.0.7z
github mirrors站點監控: https://uptime.akams.cn/status/philanthropy

V2.0.1.0 Release
last month
@hoshiizumiya hoshiizumiya
 V2.0.1.0
 fac4050
V2.0.1.0 Release
🎁🎄V2.0.1.0 發佈🎄🎁
新增：
✨聖誕快樂
✨自動簽到功能上線
✨胡桃-彼岸 的文檔主頁上線鏈接
✨項目更名 Snap Hutao Manjusaka
✨胡桃雲功能上線
✨完善了部分多語言支持
✨新的 logo 和圖標
✨引入了新的聖誕表情，僅此次在12月開啟一次，在設置中啟用或關閉
修復：
🛠️關閉了針對開發人員的主題切換
🛠️提高了部分場景下的穩定性
🛠️修復部分頁面下相關跳轉鏈接
🛠️添加自啟動依賴缺失提示、臨時使用本地構建包以修復 action 中缺失的Runner.dll（V2.0.1）
已知問題：
❔無法使用成就導入功能
❔新角色數據未編寫完整
❔注入功能暫不可用
❔IP 檢測服務未上線
❔在部分語言下為未編寫元數據做的回退機制不能隱藏默認的不可用角色，進入將導致不可恢復錯誤

## V2.0.0 前的原項目開發日誌

**如需早於 2.0.0 版本的更新日誌，請查閱 [`早於 2.0.0 版本的更新日誌`](update-log-pre-2.0.0-archive.md) 一文**
