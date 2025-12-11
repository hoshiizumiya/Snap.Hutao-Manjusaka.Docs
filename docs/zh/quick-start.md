---
pageClass: link-box
externalLinkIcon: false
category: [功能, 教程]
comment: false
icon: iconfont icon-launch
order: 5
description: 遵循这篇快速开始文档，你将可以快速地将 Snap Hutao-Manjusaka 胡桃工具箱设置为可用状态。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# 快速开始

遵循这篇快速开始文档，你将可以快速地将胡桃工具箱设置为可用状态。

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> 最低系统要求

| 要求                  | 规格                                                                                                                                                                                                 |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **最低可运行系统版本**       | Windows 10 Build 19045.5371 (22H2)<br/> Windows 11 Build 22621 (22H2)                                                                                                                              |
| **推荐系统版本**          | Windows 11 Build 26100 (24H2) 或更高版本                                                                                                                                                                |
| **必要组件**            | Windows Update, App Installer, **MSVC 运行库**                                                                                                                                                                      |
| 可选组件                | WebView2 Runtime                                                                                                                                                                      |

**不支持的系统版本**：

1. Windows 企业版，包括**LTSC 和 LTSB 分支**
2. Windows IoT 版本
3. **精简版系统，所有来自非微软官方完整版系统的问题均不会积极处理**。
4. Windows Insider 预览版本的问题将不会被处理。

> **2025年1月发布的 Windows [KB5049981](https://support.microsoft.com/en-us/topic/january-14-2025-kb5049981-os-builds-19044-5371-and-19045-5371-12f3788f-6e7d-4524-8ab3-27d1666e0510) 补丁是在 Windows 10 平台运行 Snap Hutao 的必要条件，其已包含在 Windows 10 Build 19045.5371 及更高版本中。**

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> 下载胡桃工具箱

### 全新安装

::: tabs

@tab 使用 MSI 安装包安装

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">注意：MSI 安装包是新式的针对 Windows 系统的安装包</p>
  </div>

<VPCard
title="GitHub"
desc="Snap Hutao 所有版本均会发布于主代码库中"
logo="/images/202312/github-mark.svg"
link="https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka/releases"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

:::

---

如果你有兴趣通过你的力量让 Snap Hutao 项目变得更好，欢迎[加入我们](development/join.md)！

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> 更新胡桃工具箱

通常，遵循应用内的更新提示即可完成更新。

只要不手动删除数据目录，你的本地数据不会受到影响。

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> 安装可选组件

通过可选组件，胡桃工具箱能够更高效地实现一些功能，尽管它们不是强制要求的组件，但可以显著改善用户体验。

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 运行时

WebView2 运行时由微软提供，允许胡桃工具箱内嵌低开销的浏览器组件。此组件用于实现米游社账号的 WebView2 登录功能。

你可以在[微软官网](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)底部找到 `常青独立安装程序`，选择 `x64` 下载并安装。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Segoe Fluent Icons 字体

此字体由微软提供，可优化胡桃工具箱的图标显示效果。缺少该字体可能导致部分图标显示不佳。

点击[此链接](https://aka.ms/SegoeFluentIcons)下载字体压缩包，解压后右键安装字体到系统。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC 运行库（MSVCRT）

MSVC 运行库是解锁帧率功能的必要组件。如提示“缺少 XXX.dll”或“缺少 XXX 组件”，请安装最新版 MSVCRT。

点击[此链接](https://aka.ms/vs/17/release/vc_redist.x64.exe)下载 MSVC 运行库（x64）安装文件并完成安装。

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 添加第一个米游社账号

在主界面点击左下角文档按钮和设置按钮中间的账号面板。在弹出的米游社账号面板中，根据账号类型选择登录方式。

无论使用哪种方式，请确保账号已通过官方应用初始化。否则 Snap Hutao 无法正确获取账号信息。

:::: tabs

@tab 米游社手机验证码登录

::: warning
请确认米游社账号已绑定国服账号。
:::

1. 点击“手机验证码”按钮，填写手机号并发送验证码。
2. 填写验证码后确认，稍等片刻即可添加账号。

@tab 米游社扫码登录

::: warning
请确认米游社账号已绑定国服账号。
:::

1. 点击“扫码登录”按钮，等待二维码加载。
2. 用米游社 App 扫码并确认登录。
3. 稍等片刻，胡桃工具箱将添加账号。

@tab HoYoLAB 密码登录

::: warning
请确认 HoYoLAB 账号已绑定国际服账号。
:::

1. 点击“密码登录”按钮，填写账号密码并确认。
2. 稍等片刻，账号将被添加。

@tab HoYoLAB 社媒账号登录

此方式依赖 WebView2 运行时组件。

::: warning
HoYoLAB 默认阻止中国大陆网络连接。
:::

1. 点击“三方登录”按钮并通过 WebView2 登录。
2. 稍等片刻，账号将被添加。

@tab Cookies 登录

::: warning
请妥善保存 Cookie 信息，避免账号风险。
:::

通过手动输入 SToken 提交 Cookie 登录。

1. 点击目标 App 图标选择“手动输入”。
2. 输入有效 Cookie 并确认，稍等片刻账号将被添加。
   ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> 安装常见问题

### 为什么程序中的图标会出现乱码现象

- Windows 10 用户可通过安装 `Segoe Fluent Icons` 字体解决问题。
- 在安装时选择“为系统所有用户安装”。

### 能否通过修复系统组件解决安装问题

根据错误提示修复缺失组件，但 Snap Hutao 开发组不会提供支持。
