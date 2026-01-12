---
headerDepth: 2
category: [功能, 教程]
tag: [深境螺旋, 深淵, 深淵數據庫]
order: 9
comment: false
description: 胡桃工具箱內置的胡桃數據庫功能幫助玩家歸檔並查詢深境螺旋挑戰數據，提供全面的統計分析並支持玩家上傳數據到數據庫。
---

# 胡桃數據庫 / 深淵統計

胡桃工具箱提供兩種主要的深境螺旋挑戰統計功能：

- **分期詳情**：幫助玩家保存每一期深境螺旋挑戰數據，便於個人數據回顧和統計。
- **本期統計**：展示所有上傳至胡桃數據庫的玩家深境螺旋數據，為玩家提供角色和隊伍的使用參考。
  - “本期統計”依賴於玩家提交的“分期詳情”數據。

::: tabs
== 分期詳情
![personal-record-details](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ykD0CZ1g6e0sAQMn1_!!1797064093.png_.webp)
== 角色使用率
![character-usage-rate](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01dvdsCG1g6e0xyDPo5_!!1797064093.png_.webp)
== 角色出場率
![character-held-n-usage-rate](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01Pdv5w01g6e0u1ewov_!!1797064093.png_.webp)
== 隊伍出場次數
![hutaoapi](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01k1W4tw1g6e0wOyjdf_!!1797064093.png_.webp)
== 角色持有率
![character-held-rate](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01bQvukt1g6e0uuU2Fh_!!1797064093.png_.webp)
:::

## 查看深淵數據

::: warning 數據範圍侷限性
所有計算基於**上傳至胡桃數據庫的玩家數據**，可能無法代表全體原神玩家的平均數據，僅供參考。
:::

::: info 數據刷新週期

1. 深境螺旋統計數據（角色使用率、角色出場率、隊伍出場）在帳號所屬服務器時區每月 1 日和 16 日的 4 點自動更新。
2. 如果用戶在 30 天內未重新上傳數據，其角色持有記錄將被清理。
   :::

- 點擊左側菜單欄進入“深境螺旋”頁面，選擇“本期統計”標籤。
- 查看數據：
  - **角色使用率**：
    - 公式：角色使用率 = 角色在當前層數的出場次數[^first] / 持有該角色的玩家在該層數的記錄總數。
  - **角色出場率**：
    - 公式：角色出場率 = 角色在當前層數的出場次數[^first-2] / 當前層數的記錄總數。
  - **角色持有率**：
    - 公式：角色持有率[^third] = 擁有該角色的玩家數量 / 全部玩家數量。
  - **隊伍出場次數**：展示隊伍組合的出場次數排名。

## 上傳深境螺旋數據

### 使用胡桃客戶端

::: important 胡桃雲權限獎勵
首次成功提交數據後，可獲得為期 3 天的“胡桃雲祈願記錄服務”權限作為獎勵（即使未通關第 12 層）。
:::

1. 點擊左側菜單欄進入“深境螺旋”頁面。
2. 點擊右上角的“刷新數據”以確保工具箱已獲取最新的個人深境螺旋數據。
3. 點擊“上傳數據”按鈕提交數據。

- 上傳可能需要數秒，完成後會顯示成功提示。

### 使用瀏覽器

::: info
此方法不適用於 HoYoLAB。
:::

1. 打開 [JavaScript 腳本](/upload-abyss-data.js) 鏈接並複製代碼。
2. 在瀏覽器中創建一個新書籤：
   - 填寫合適的名稱。
   - 將複製的代碼粘貼至書籤 URL。
     ![add-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png_.webp)
3. 打開米遊社並等待頁面加載完成後，點擊書籤。
4. 確認上傳提示，完成上傳。

## 數據共享

Snap Hutao 與其它開發者共同維護胡桃數據庫。用戶可在多個應用中查看深淵統計數據並上傳數據。目前合作應用包括：

<div class="vp-card-container">

```component VPCard
title: Miao-Plugin for Yunzai-Bot
desc: QQ機器人 Miao-Plugin 插件
logo: /images/202312/miao-plugin-logo.webp
link: https://github.com/yoimiya-kokomi/miao-plugin/tree/master
```

```component VPCard
title: 原神披薩助手
desc: MacOS/iOS下的原神工具
logo: /images/202312/genshin-pizza-helper-logo.webp
link: https://apps.apple.com/cn/app/%E6%8A%AB%E8%90%A8%E5%B0%8F%E5%8A%A9%E6%89%8B/id1635319193
```

```component VPCard
title: Ysin
desc: 微信小程序 Ysin
logo: /images/202312/ysin-logo.png
link: https://yuanshen.xin/
```

</div>

[^first]: 在當前層中不同間內多次出現的同一個角色僅記 1 次出場次數。

[^first-2]: 在當前層中不同間內多次出現的同一個角色僅記 1 次出場次數。

[^third]: 擁有該角色即計入持有狀態，即使未在深境螺旋中登場。上傳過記錄即計入全部玩家統計。
