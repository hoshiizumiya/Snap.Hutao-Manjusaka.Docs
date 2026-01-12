---
category: [FAQ]
icon: iconfont icon-delete
tag: [卸載]
order: 9
comment: false
description: 卸載胡桃工具箱是一個簡單快速的過程，你可以根據本頁教程，以最適合你的程度來卸載胡桃工具箱。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/uninstall.html&has_description=False
---

# 卸載胡桃工具箱-Manjusaka

卸載 Snap Hutao Manjusaka是一個簡單的過程。如果您希望完全移除程序及其相關數據，請按照以下步驟操作：

## 卸載 Snap Hutao Manjusaka應用程序

1. 打開 **開始菜單**。
2. 搜索 `Snap Hutao`。
3. 右鍵點擊 Snap Hutao Manjusaka並選擇 **“卸載”**。

## 清除數據文件夾（如需完全卸載）

1. 打開文件資源管理器。
2. 前往以下路徑：`%USERPROFILE%\AppData\Local\Hutao`。如果你手動查找那麼 AppData 文件夾默認是隱藏的，若無法找到，請確保已啟用顯示隱藏文件夾的選項。
3. 刪除該 `Hutao` 文件夾。
::: info
下面的是原項目的內容，僅作留存參考。
:::
# 卸載胡桃工具箱

卸載 Snap Hutao 是一個簡單的過程。如果您希望完全移除程序及其相關數據，請按照以下步驟操作：

## 卸載 Snap Hutao 應用程序

1. 打開 **開始菜單**。
2. 搜索 `Snap Hutao`。
3. 右鍵點擊 Snap Hutao 並選擇 **“卸載”**。

## 清除數據文件夾（如需完全卸載）

1. 打開文件資源管理器。
2. 前往以下路徑：`%userprofile%/Documents/Hutao`。
3. 刪除 `Hutao` 文件夾。

## 常見問題

### 為什麼會彈出“需要使用新應用以打開”的對話框？

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

如果卸載 Snap Hutao 後出現如上圖所示的“需要使用新應用以打開此 hutao 鏈接”提示，這說明在卸載前未清除實時便箋定時任務。該問題僅出現在較老版本的 Snap Hutao 中。

解決方案：

1. 重新安裝 Snap Hutao。
2. 在設置中清除實時便箋定時任務。
3. 再次卸載 Snap Hutao。

若在系統定時任務中找不到相關任務但問題仍然存在，請參考 [這份文檔](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18) 獲取進一步解決方法。

### 如何完整備份/恢復客戶端數據？

::: warning 數據安全提示
`Userdata.db` 文件包含您的全部客戶端數據，包括安全敏感的米哈遊論壇 Cookie。請妥善保管此文件，不要與他人分享。
:::

#### 備份數據

1. 前往胡桃數據目錄（默認路徑為 `%userprofile%/Documents/Hutao`）。
2. 複製文件夾內的 `Userdata.db` 文件至您選擇的備份位置。

#### 恢復數據

1. 將備份的 `Userdata.db` 文件複製回胡桃數據目錄中。
2. 啟動 Snap Hutao，恢復您的數據。

通過以上步驟，您可以安全地備份或恢復胡桃工具箱的全部數據。
