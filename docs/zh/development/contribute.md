---
category: [开源, 开发]
tag: ["开发", "GitHub"]
icon: iconfont icon-code
order: 3
description: 胡桃工具箱使用 C# 和 .NET 框架开发桌面客户端和服务端。我们广泛地接受来自开源社区的反馈，如果你愿意贡献你的代码，请阅读本页的指导文档。
---

# 贡献你的代码

胡桃工具箱使用 `C#` 和 `.NET 框架` 开发桌面客户端和服务端。我们广泛接受来自开源社区的反馈。如果你有兴趣贡献代码，请阅读本页的指导文档。

你可以在 GitHub 上查看所有当前[未解决的问题](https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka/issues)。

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> 设置 Snap.Hutao 项目
更多贡献详情可参考 github 上的 [CONTRIBUTING.md](https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka?tab=contributing-ov-file#contribute-your-code)  
此指南并非强制要求，针对不同情况，可以根据个人习惯调整。
1. 下载并安装 [Visual Studio 2026](https://visualstudio.microsoft.com/downloads/)
   - 需要安装以下组件：
     - `.NET desktop development`（.NET 桌面开发）
     - `Desktop development with C++`（使用 C++ 的桌面开发）
     - `Windows application development`（Windows 应用程序开发）
2. 使用 Git 克隆项目仓库：`git@github.com:hoshiizumiya/Snap.Hutao-Manjusaka.git`。
3. 将分支切换到 `develop`。
4. 使用 Visual Studio 打开项目解决方案（Solution）对应的 .slnx 文件，即可开始开发。

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> 开启 Debug

1. 下载并安装 [Sysinternals Suite](https://www.microsoft.com/store/productid/9P7KNL5RWT25)（微软商店）或从[微软官网](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite)下载。
2. 找到并启动 `DebugView`（在开始菜单或解压后的文件中）。
3. 启动 Snap Hutao 主程序。
4. 观察 `DebugView` 输出的调试信息。

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> 发起 Pull Request

- 所有不是从项目其它分支发起的 Pull Request 仅允许合并到 `develop` 分支。
- 如果你的代码与现有的 issue 相关，请使用[关键词](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests)将你的 PR 关联到相关的 issue。这将使相关 issue 在 PR 合并到 `main` 分支时自动关闭。

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> 测试打包程序

::: warning 注意事项
如果希望试用最新 Alpha 版本，请先下载并安装 [**DGP_Studio_CA.crt**](https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt) 到 **受信任的根证书颁发机构**。
:::

- 每次 `push` 后，GitHub Actions 脚本会自动运行以构建最新解决方案：
  - 对于 `main`、`develop` 和 `feat` 分支，脚本将自动上传构建的 `Snap Hutao Alpha` 压缩包以供测试。
  - 其他分支仅验证代码可构建性，不提供上传功能。
- 可在 [Alpha 流水线](https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka/actions/workflows/alpha.yml)中查看所有编译记录。
