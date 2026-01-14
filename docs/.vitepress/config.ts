import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import markdownItContainer from 'markdown-it-container'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
    base: '/Snap.Hutao-Manjusaka.Docs/',
    title: 'Snap Hutao Manjusaka',
    outDir: './dist',
    publicDir: 'public',
    ignoreDeadLinks: true,
    cleanUrls: true,
    lastUpdated: true,
    markdown: {
        config(md: any) {
            md.use(tabsMarkdownPlugin)

            // 注册自定义容器：
            // 输出与其它容器相同的结构，但使用 .caution 类以供样式覆盖
            // 因为 VitePress 内置只支持 tip/warning/danger/info/details
            // 我们使用 markdown-it-container 显式注册 caution
            md.use(markdownItContainer, 'caution', {
                render(tokens: any[], idx: number) {
                    const token = tokens[idx]
                    if (token.nesting === 1) {
                        // render an empty title element; label will be provided via CSS based on html[lang]
                        return '<div class="caution custom-block"><p class="custom-block-title" data-i18n="caution"></p>'
                    } else {
                        return '</div>'
                    }
                },
            })
            // 注册 important 容器（内容名称：重要）
            md.use(markdownItContainer, 'important', {
                render(tokens: any[], idx: number) {
                    const token = tokens[idx]
                    if (token.nesting === 1) {
                        // empty title; use CSS for localized text
                        return '<div class="important custom-block"><p class="custom-block-title" data-i18n="important"></p>'
                    } else {
                        return '</div>'
                    }
                },
            })
        },
        html: true,
        container: {
            tipLabel: '提示',
            warningLabel: '注意',
            dangerLabel: '警告',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        }
    },
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        ],
        [
            'link',
            {
                href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Noto+Sans+SC:wght@500&display=swap',
                rel: 'stylesheet',
            },
        ],
        [
            'script',
            {},
            `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-F3LFJCE3RM');
      `,
        ],
        [
            'script',
            {},
            `
      !function(b,c,f,d,a,e){b.dclsPxl||(((d=b.dclsPxl=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)}).push=d).queue=[],(a=c.createElement("script")).async=!0,a.src=f,(e=c.getElementsByTagName("script")[0]).parentNode.insertBefore(a,e))}(window,document,"https://ducalis.io/js/widget.js");
        dclsPxl("initWidget", {
        appId: "a64fd9c44c5b0c957fa36f76d39d47a80e5d5869",
        boardId: "abcf6f090ecb20af83d067f0498ef7c5"
      });
      `,
        ],
        [
            'script',
            {},
            `!function() {
                var target = document.querySelector('[aria-label="ducalis-changelog-widget"]');
                var callback = () => {
                    target = document.querySelector('[aria-label="ducalis-changelog-widget"]');
                    if(!target) return;
                    try {
                        if(!target.classList.contains('ducalis-changelog-widget')) {
                            target.classList.add('ducalis-changelog-widget');
                        }
                    } catch (e) {
                        // ignore errors when DOM APIs are unavailable
                    }
                };
                var observer = new MutationObserver(callback);
                callback();
                // 检测定时器
                var timer = setInterval(callback, 1000);
                if(target) {
                    clearInterval(timer);
                    try {
                        observer.observe(target, { childList: true });
                    } catch (e) {
                        // target may not be a Node in some environments; ignore
                    }
                }
        }();`,
        ],
    ],
    locales: {
        root: {
            label: ' ',
            lang: 'zh-CN',
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka.Docs/edit/dev/docs/:path',
                    text: 'Edit this page on GitHub'
                },
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Document', link: '/en/menu' },
                    { text: 'Download', link: '/en/quick-start' },
                    {
                        text: 'Help & Support',
                        items: [
                            { text: 'Update Log', link: '/en/statements/update-log' },
                            {
                                text: 'Service Availability',
                                items: [
                                    { text: 'Uptime Kuma', link: 'http://serverjp.wdg.cloudns.ch:3001/status/hts' },
                                ],
                            },
                            {
                                text: 'Issues & Feedback',
                                items: [
                                    { text: 'FAQ', link: '/en/advanced/FAQ' },
                                    { text: 'Report Issue', link: '/en/statements/bug-report' },
                                ],
                            },
                        ],
                    },
                ],
            }
        },
        zh: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh/',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka.Docs/edit/dev/docs/:path',
                    text: '在 GitHub 上编辑此页'
                },
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: '文档', link: '/zh/menu' },
                    { text: '下载', link: '/zh/quick-start' },
                    {
                        text: '帮助与支持',
                        items: [
                            { text: '更新日志', link: '/zh/statements/update-log' },
                            {
                                text: '服务可用性',
                                items: [
                                    { text: 'Uptime Kuma', link: 'http://serverjp.wdg.cloudns.ch:3001/status/hts' },
                                ],
                            },
                            {
                                text: '问题与反馈',
                                items: [
                                    { text: '常见问题', link: '/zh/advanced/FAQ' },
                                    { text: '反馈问题', link: '/zh/statements/bug-report' },
                                ],
                            },
                        ],
                    },
                ],
            }
        },
        ru: {
            label: 'Русский',
            lang: 'ru-RU',
            link: '/ru/',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka.Docs/edit/dev/docs/:path',
                    text: 'Редактировать эту страницу на GitHub'
                },
                nav: [
                    { text: 'Главная', link: '/ru/' },
                    { text: 'Документация', link: '/ru/menu' },
                    { text: 'Скачать', link: '/ru/quick-start' },
                    {
                        text: 'Помощь и поддержка',
                        items: [
                            { text: 'Журнал обновлений', link: '/ru/statements/update-log' },
                            {
                                text: 'Доступность сервиса',
                                items: [
                                    { text: 'Uptime Kuma', link: 'http://serverjp.wdg.cloudns.ch:3001/status/hts' },
                                ],
                            },
                            {
                                text: 'Проблемы и обратная связь',
                                items: [
                                    { text: 'Часто задаваемые вопросы', link: '/ru/advanced/FAQ' },
                                    { text: 'Сообщить о проблеме', link: '/ru/statements/bug-report' },
                                ],
                            },
                        ],
                    },
                ],
            }
        },
        id: {
            label: 'Bahasa Indonesia',
            lang: 'id-ID',
            link: '/id/',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka.Docs/edit/dev/docs/:path',
                    text: 'Edit halaman ini di GitHub'
                },
                nav: [
                    { text: 'Beranda', link: '/id/' },
                    { text: 'Dokumentasi', link: '/id/menu' },
                    { text: 'Unduh', link: '/id/quick-start' },
                    {
                        text: 'Bantuan dan Dukungan',
                        items: [
                            { text: 'Log Pembaruan', link: '/id/statements/update-log' },
                            {
                                text: 'Ketersediaan Layanan',
                                items: [
                                    { text: 'Uptime Kuma', link: 'http://serverjp.wdg.cloudns.ch:3001/status/hts' },
                                ],
                            },
                            {
                                text: 'Masalah dan Umpan Balik',
                                items: [
                                    { text: 'FAQ', link: '/id/advanced/FAQ' },
                                    { text: 'Laporkan Masalah', link: '/id/statements/bug-report' },
                                ],
                            },
                        ],
                    },
                ],
            }
        },
        jp: {
            label: '日本語',
            lang: 'ja-JP',
            link: '/jp/',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka.Docs/edit/dev/docs/:path',
                    text: 'GitHub でこのページを編集'
                },
                nav: [
                    { text: 'ホーム', link: '/jp/' },
                    { text: 'ドキュメント', link: '/jp/menu' },
                    { text: 'ダウンロード', link: '/jp/quick-start' },
                    {
                        text: 'ヘルプとサポート',
                        items: [
                            { text: '更新履歴', link: '/jp/statements/update-log' },
                            {
                                text: 'サービスの可用性',
                                items: [
                                    { text: 'Uptime Kuma', link: 'http://serverjp.wdg.cloudns.ch:3001/status/hts' },
                                ],
                            },
                            {
                                text: '問題とフィードバック',
                                items: [
                                    { text: 'FAQ', link: '/jp/advanced/FAQ' },
                                    { text: '問題を報告', link: '/jp/statements/bug-report' },
                                ],
                            },
                        ],
                    },
                ],
            }
        },
        tw: {
            label: '繁體中文',
            lang: 'zh-TW',
            link: '/tw/',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka.Docs/edit/dev/docs/:path',
                    text: '在 GitHub 上編輯此頁'
                },
                nav: [
                    { text: '首頁', link: '/tw/' },
                    { text: '文檔', link: '/tw/menu' },
                    { text: '下載', link: '/tw/quick-start' },
                    {
                        text: '幫助與支援',
                        items: [
                            { text: '更新日誌', link: '/tw/statements/update-log' },
                            {
                                text: '服務可用性',
                                items: [
                                    { text: 'Uptime Kuma', link: 'http://serverjp.wdg.cloudns.ch:3001/status/hts' },
                                ],
                            },
                            {
                                text: '問題與回饋',
                                items: [
                                    { text: '常見問題', link: '/tw/advanced/FAQ' },
                                    { text: '回饋問題', link: '/tw/statements/bug-report' },
                                ],
                            },
                        ],
                    },
                ],
            }
        },
    },
    themeConfig: {
        siteTitle: false,

        sidebar: generateSidebar([
            {
                documentRootPath: 'docs',
                scanStartPath: 'zh',
                resolvePath: '/zh/',
                useTitleFromFrontmatter: true,
                useTitleFromFileHeading: true,
                useFolderTitleFromIndexFile: true,
                useFolderLinkFromIndexFile: true,
                sortMenusByFrontmatterOrder: true,
                hyphenToSpace: true,
                excludePattern: ['zh/index.md', 'zh/menu.md'],
                collapsed: false,
                capitalizeFirst: true,
            },
            {
                documentRootPath: 'docs',
                scanStartPath: 'en',
                resolvePath: '/en/',
                useTitleFromFrontmatter: true,
                useTitleFromFileHeading: true,
                useFolderTitleFromIndexFile: true,
                useFolderLinkFromIndexFile: true,
                sortMenusByFrontmatterOrder: true,
                hyphenToSpace: true,
                excludePattern: ['en/index.md', 'en/menu.md'],
                collapsed: false,
                capitalizeFirst: true,
            },
            {
                documentRootPath: 'docs',
                scanStartPath: 'ru',
                resolvePath: '/ru/',
                useTitleFromFrontmatter: true,
                useTitleFromFileHeading: true,
                useFolderTitleFromIndexFile: true,
                useFolderLinkFromIndexFile: true,
                sortMenusByFrontmatterOrder: true,
                hyphenToSpace: true,
                excludePattern: ['ru/index.md', 'ru/menu.md'],
                collapsed: false,
                capitalizeFirst: true,
            },
            {
                documentRootPath: 'docs',
                scanStartPath: 'id',
                resolvePath: '/id/',
                useTitleFromFrontmatter: true,
                useTitleFromFileHeading: true,
                useFolderTitleFromIndexFile: true,
                useFolderLinkFromIndexFile: true,
                sortMenusByFrontmatterOrder: true,
                hyphenToSpace: true,
                excludePattern: ['id/index.md', 'id/menu.md'],
                collapsed: false,
                capitalizeFirst: true,
            },
            {
                documentRootPath: 'docs',
                scanStartPath: 'jp',
                resolvePath: '/jp/',
                useTitleFromFrontmatter: true,
                useTitleFromFileHeading: true,
                useFolderTitleFromIndexFile: true,
                useFolderLinkFromIndexFile: true,
                sortMenusByFrontmatterOrder: true,
                hyphenToSpace: true,
                excludePattern: ['jp/index.md', 'jp/menu.md'],
                collapsed: false,
                capitalizeFirst: true,
            },
            {
                documentRootPath: 'docs',
                scanStartPath: 'tw',
                resolvePath: '/tw/',
                useTitleFromFrontmatter: true,
                useTitleFromFileHeading: true,
                useFolderTitleFromIndexFile: true,
                useFolderLinkFromIndexFile: true,
                sortMenusByFrontmatterOrder: true,
                hyphenToSpace: true,
                excludePattern: ['tw/index.md', 'tw/menu.md'],
                collapsed: false,
                capitalizeFirst: true,
            }
        ]),
        logo: 'https://testingcf.jsdelivr.net/gh/hoshiizumiya/images/Logo.ico',
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    },
                    tw: {
                        translations: {
                            button: {
                                buttonText: '搜尋文檔',
                                buttonAriaLabel: '搜尋文檔'
                            },
                            modal: {
                                noResultsText: '無法找到相關結果',
                                resetButtonTitle: '清除查詢條件',
                                footer: {
                                    selectText: '選擇',
                                    navigateText: '切換'
                                }
                            }
                        }
                    }
                }
            }
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka' },
        ],
        footer: {
            message: '使用 <a href="https://vitepress.dev/" target="_blank">VitePress</a> 构建 | 以开源社区力量为原神 PC 端玩家提供极致的游戏体验',
            copyright: `版权所有 © 2023-${new Date().getFullYear()} DGP-Studio with 2025-${new Date().getFullYear()} Millennium-Science-Technology-R-D-Institute`,
        },
        editLink: {
            pattern: 'https://github.com/hoshiizumiya/Snap.Hutao-Manjusaka.Docs/edit/dev/docs/:path',
            text: 'Edit this page on GitHub'
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag: string) => tag === 'ms-store-badge',
            },
        },
    },
    vite: {
        plugins: [
            tailwindcss(),
            {
                name: 'base-redirect',
                configureServer(server: any) {
                    server.middlewares.use((req: any, res: any, next: any) => {
                        if (req.url === '/Snap.Hutao-Manjusaka.Docs') {
                            res.writeHead(301, { Location: '/Snap.Hutao-Manjusaka.Docs/' })
                            res.end()
                        } else {
                            next()
                        }
                    })
                },
                transformIndexHtml(html: string, ctx: any) {
                    // Add redirect script to every page — insert immediately after <head> so it runs before other head scripts
                    const script = `
<script>
(function() {
    try {
        var path = window.location.pathname;
        var base = '/Snap.Hutao-Manjusaka.Docs/';

        // Remove base from path
        var cleanPath = path;
        if (cleanPath.indexOf(base) === 0) {
            cleanPath = cleanPath.substring(base.length);
        }

        // If path is empty or index, do nothing
        if (!cleanPath || cleanPath === '/' || cleanPath === 'index.html') {
            return;
        }

        // If path already starts with a language code, do nothing
        var langCodes = ['zh', 'en', 'ru', 'id', 'jp', 'tw'];
        var pathParts = cleanPath.split('/');
        if (langCodes.indexOf(pathParts[0]) !== -1) {
            return;
        }

        // Detect browser language
        var lang = (navigator.language || navigator.userLanguage || 'zh').split('-')[0];
        var supportedLangs = ['zh', 'en', 'ru', 'id', 'jp', 'tw'];
        var targetLang = supportedLangs.indexOf(lang) !== -1 ? lang : 'zh';

        // Redirect to the language-specific path (preserve search/hash)
        var newPath = base + targetLang + '/' + cleanPath + window.location.search + window.location.hash;
        window.location.replace(newPath);
    } catch (e) {
        // swallow errors to avoid breaking the page
    }
})();
</script>
                                                `;
                    return html.replace('<head>', '<head>' + script);
                }
            }
        ],
        build: {
            chunkSizeWarningLimit: 1500,
        },
    },
})
