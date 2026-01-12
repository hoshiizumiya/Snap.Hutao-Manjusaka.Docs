---
headerDepth: 2
category: [公告]
icon: iconfont icon-debug
order: 2
comment: false
description: 胡桃工具箱是一個發佈於 GitHub 的開源程序，我們亦使用 GitHub 議題功能來收集問題反饋，你可以通過 GitHub Issues 來提交問題報告。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/statements/bug-report.html
---

# 提交 BUG 報告

如果你在使用 Snap Hutao 時發現了可復現或無法自行修復的問題，可以通過提交問題反饋來告知開發者。

![suggestion](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01jXBMbe1g6du15k9kx_!!1797064093.jpg_.webp)

## 在提交 Issue 之前

在發起新的 Issue 之前，請務必完成以下檢查清單：

- [ ] 確認當前使用的是 Snap Hutao 的最新版本客戶端。
- [ ] 使用搜索功能查找你的問題，並檢查[已知問題](../advanced/known-issue.md)文檔。
- [ ] 在項目的 Issue 頁面搜索是否已有相同或類似的問題。

若經過上述步驟後仍未找到解決方案，你可以在 GitHub 上發起一個新的 Issue。

## 如何提交 Issue

### 提交問題前的準備

在提交 Issue 時，請確保提供以下信息：

1. **設備信息**

   - [ ] 你的設備 ID。
   - [ ] 你的操作系統版本。

2. **問題描述**

   - [ ] 詳細描述你的問題，使開發人員能夠根據你的描述復現問題。
     - 問題是如何觸發的？
     - 程序或操作系統顯示了怎樣的錯誤提示？
     - 你嘗試了哪些操作來排查問題，結果如何？

3. **程序崩潰相關**

- 如果你的問題涉及到程序崩潰，請在 Windows 事件查看器中查找與 Snap Hutao 相關的 `.NET 錯誤`，並將其中的詳細內容附加在 Issue 中。

### 提交 Issue 的方法

- 前往 [GitHub 提交頁面](https://github.com/DGP-Studio/Snap.Hutao/issues/new/choose)。
- 按照模板填寫內容並提交。

若不清楚怎樣是一個好的 Issue，請參考一些[優質問題](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20label%3A%E4%BC%98%E8%B4%A8%E9%97%AE%E9%A2%98)。

## 遠程調試

當開發者無法在自己的設備中復現某些問題時，可能需要通過遠程調試進行問題定位。若你同意參與遠程調試，將會有指定的管理員通過 QQ 添加你為好友，並將你拉入遠程協助群以便交流。

**參與遠程調試的計算機需滿足以下條件：**

- 至少 15GB 的可用硬盤空間。
- 足夠的網絡流量以支持調試操作。

### 調試前準備

1. 執行[貢獻代碼-設置 Snap Hutao 項目](../development/contribute.md#設置-snaphutao-項目)中的第 `1～3` 步。
2. 下載並安裝 [網易UU](https://uuyc.163.com/) 遠程工具。

遠程調試將幫助我們更快速地解決問題，感謝你的支持！
