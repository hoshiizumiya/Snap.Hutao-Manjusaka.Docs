---
headerDepth: 2
category: [FAQ]
icon: iconfont icon-read
order: 8
comment: false
description: Snap Hutao 使用多種方式獲取用戶的登錄信息並配合原神 API 獲取祈願記錄。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html&has_description=False
---

# 祈願系統與導出原理

> Gacha System and Principal

胡桃的祈願系統相較 Snap Genshin 進行了整體架構上的重新設計。

本文將解釋原神的祈願記錄機制和胡桃工具箱祈願導出功能的技術原理。

---

## 祈願的獲取

獲取祈願記錄需要請求米哈遊的 API。

關於此 API，有以下注意事項：

- 通過米哈遊服務器的 API，只能查詢到過去一年內的祈願記錄。
  - 這也是原神客戶端中祈願記錄的來源。
- API 存在請求速率限制，過快的請求會導致後續的請求失敗，從而無法正常獲取數據。

### 請求 API 的關鍵參數

為了請求此 API，我們需要以下四個關鍵參數：

1. 卡池類型
2. 抽卡物品
3. 時間
4. 抽卡記錄 ID

- 當前已知獲取這些參數的方法包括：
  1. 遍歷 Unity 的日誌文件，查找用戶打開的祈願記錄 URL。
  2. 代理本機流量，篩選祈願記錄 URL。
  3. 查找 `CefBrowser` 的瀏覽器緩存，找到祈願記錄 URL。
  4. 使用包含 `SToken` 的 Cookie 調用 `genAuthKey` API，獲取參數。
  5. 讓高級用戶手動輸入相關 URL。

### 數據拼接與完整記錄生成

在請求 API 後，可以獲取到零散的祈願記錄。將這些記錄拼接後即可生成一份完整的祈願記錄列表。

---

## 祈願的存儲

完整的祈願記錄列表在獲取後會被序列化存儲於本地數據庫中，並在需要時反序列化以呈現給用戶。

- 在後續請求中，胡桃只需與數據庫中的數據對比，以獲取新增部分的數據。
- 這種方式確保了用戶可以長期保存帳號的完整祈願記錄。

---

## UIGF 格式

> 統一可交換祈願記錄標準  
> Uniformed Interchangeable GachaLog Format Standard

`UIGF` 是由我們聯合其他祈願記錄應用共同倡導、推出並**長期維護**的一個統一祈願記錄數據交換標準。

標準化的數據格式允許用戶在不同工具間自由轉移數據，從而使用各工具的特色功能。

### 祈願的導入

使用 `UIGF` 數據格式，可以導入其他應用中儲存的祈願記錄數據。

- 胡桃在導入數據時，會對比本地存儲中的最早索引（ID），僅導入更早的記錄。
- 新數據始終可以從米哈遊服務器獲取，其原始數據精度更高。

### 祈願的導出

胡桃支持將祈願記錄以 `UIGF` 數據格式保存為文件，並輸出至用戶指定的文件夾。

用戶可以通過導出的文件在其他支持 `UIGF` 格式的工具中繼續使用祈願記錄。
