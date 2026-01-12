---
headerDepth: 2
category: [公告, 項目, 功能]
comment: false
icon: iconfont icon-workingDirectory
order: 6
description: Snap Hutao Manjusaka 是一個開源於 GitHub 的程序項目，我們廣泛接受來自社區的合作以讓這個項目獲得更多的活力。
---

# 項目說明

胡桃-Manjusaka是一款基於 MIT 協議開源的原神工具箱，是依託原胡桃工具箱項目開發的，專為現代化 Windows 平臺設計，旨在改善桌面端玩家的遊戲體驗。通過結合官方資源與團隊自主設計的全新功能，它提供了一套全面而實用的工具集，無需依賴任何移動設備。同時，它嚴格遵守非破壞性原則，不對遊戲客戶端進行任何修改，確保工具箱的使用安全性。

Snap Hutao-Manjusaka 項目採用 MSI 格式進行打包。
原先項目採用的 MSIX 是一種 Windows 原生的應用程序打包格式，其特性包括簡化的軟件安裝、更新和卸載流程。通過沙盒技術，MSIX 打包的應用程序在隔離環境中運行，避免對系統資源的直接修改，從而顯著提高系統安全性和穩定性。此外，MSIX 格式在卸載後不會留下任何殘餘文件或註冊表條目，保障系統的整潔性。這些優勢使 MSIX 成為開發者與用戶管理軟件的強大工具，提供流暢、安全、整潔的軟件體驗。
但是沙箱環境中具有無法規避的限制導致部分功能無法正常使用，為了安裝和使用體驗，胡桃-Manjusaka 採用了 MSI 格式以在這樣的特殊運行環境中規避顯然是合理的。同時代碼內部增強後同時提供了對 MSIX 環境的支持，用戶可自行編譯並打包使用。

## 胡桃能解決的原神桌面端缺陷

|         功能         | 移動端                    | 桌面端                   | 胡桃的方案                                                            |
| :------------------: | ------------------------- | ------------------------ | --------------------------------------------------------------------- |
|   **遊戲賬號切換**   | 已登錄的賬號會被記錄      | 註銷後賬號不會被記錄     | [高級啟動器 - 賬號切換](features/game-launcher.md#賬號保存)           |
|    **服務器切換**    | 無                        | 無                       | [高級啟動器 - 服務器切換](features/game-launcher.md)                  |
|   **祈願記錄導出**   | 無                        | 無                       | [祈願記錄導出](features/wish-export.md)                               |
|     **每日簽到**     | 米遊社客戶端              | 僅國際服用戶可在網頁簽到 | [賬號面板 - 簽到](features/mhy-account-switch.md)                     |
|     **實時便箋**     | 米遊社客戶端              | 無                       | [實時便箋](features/real-time-notes.md)                               |
| **派遣完成通知推送** | 通過移動端遊戲推送通知    | 無                       | [實時便箋推送消息](features/real-time-notes.md)                       |
|   **深淵數據查詢**   | 米遊社客戶端              | 僅國際服用戶可在網頁查詢 | [深境螺旋](features/hutao-API.md)                                     |
|     **養成計劃**     | 米遊社客戶端              | 僅國際服用戶可在網頁使用 | [養成計劃](features/develop-plan.md#養成計劃)                         |
|   **Discord 狀態**   | 無                        | 國際服客戶端可用         | [高級啟動器 - Discord Activity](features/game-launcher.md#高級啟動器) |

## 完整功能一覽

- [遊戲內公告及倒計時](features/dashboard.md)
- [米哈遊論壇多賬號登錄支持](features/mhy-account-switch.md)
  - 支持以網頁登錄和輸入 Cookie 的方式登錄米遊社和 HoYoLAB
  - 支持簽到獎勵
  - 支持自動簽到
- [高級啟動器](features/game-launcher.md)
  - 服務器切換
  - 遊戲賬號切換
  - 自定義遊戲幀率（停止支持）
  - 遊戲補丁包下載
  - 自定義遊戲啟動參數
  - 自定義應用啟動
  - 延遲啟動
- [祈願記錄管理](features/wish-export.md)
  - 從遊戲數據中一鍵更新數據
  - 導入 / 導出 UIGF 祈願數據文件
  - 祈願活動計時
  - 祈願活動歷史查詢
  - 全局祈願數據統計（暫時停止支持）
- [成就管理](features/achievements.md)
  - 從遊戲數據中刷新數據（正在尋找解決方案）
  - 導入/導出 UIAF 數據文件
- [實時便箋](features/real-time-notes.md)
  - 支持多賬號實時便箋
  - 自定義刷新間隔
  - Windows 原生通知推送
- [我的角色](features/character-data.md)
  - 支持多數據源同步數據
  - 導出我的角色數據至剪貼板
- [深境螺旋/幻想真境劇詩](features/hutao-API.md)
  - 每期怪物和淵月祝福詳情
  - 同步深境螺旋分詳情戰鬥數據
  - 胡桃深淵數據庫（暫時停止支持）
    - 角色使用率
    - 角色出場率
    - 隊伍出場統計
    - 角色持有率
- [養成計劃](features/develop-plan.md)
  - 支持從實時數據和 WIKI 數據創建角色和武器養成計劃
  - 支持多計劃存檔
- WIKI 數據
  - [角色資料](features/character-wiki.md)
  - [武器資料](features/weapon-wiki.md)
  - [怪物資料](features/monster-wiki.md)
- [胡桃賬號系統](features/hutao-settings.md#胡桃帳號)
  - 祈願數據備份
  - 祈願統計預測
