/**
 * @description VPBanner 组件 - 用于显示横幅信息
 */

import type { CSSProperties, FunctionalComponent } from "vue";
import { h } from "vue";
import { withBase } from "vitepress";

export interface Action {
    text: string;
    link?: string;
    type?: string;
}

export interface BannerProps {
    /**
     * Banner title
     */
    title: string;

    /**
     * Banner content (HTML)
     */
    content?: string;

    /**
     * Banner logo
     */
    logo?: string;

    /**
     * Banner actions
     */
    actions?: Action[];
}

const VPBanner: FunctionalComponent<BannerProps> = ({
    title,
    content = "",
    logo,
    actions = [],
}) => {
    const children = [
        logo
            ? h("img", {
                class: "vp-banner-logo",
                src: withBase(logo),
                loading: "lazy",
            })
            : null,
        h("div", { class: "vp-banner-content" }, [
            h("div", { class: "vp-banner-title", innerHTML: title }),
            content ? h("div", { class: "vp-banner-desc", innerHTML: content }) : null,
        ]),
    ];

    if (actions.length > 0) {
        const actionButtons = actions.map((action) =>
            h(
                action.link
                    ? "a"
                    : "button",
                {
                    class: `vp-banner-action ${action.type || 'primary'}`,
                    href: action.link,
                    target: action.link ? "_blank" : undefined,
                },
                action.text
            )
        );
        children.push(h("div", { class: "vp-banner-actions" }, actionButtons));
    }

    return h("div", { class: "vp-banner" }, children);
};

VPBanner.displayName = "VPBanner";

export default VPBanner;