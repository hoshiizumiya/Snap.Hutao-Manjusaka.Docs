---
headerDepth: 2
comment: false
index: false
---

**Warning: The following content may contain outdated information. Please visit [GitHub](https://github.com/DGP-Studio/Snap.Hutao) for the latest information.**

# Second Developer Symposium

Copied from [GitHub Discussion Post](https://github.com/DGP-Studio/Snap.Hutao/discussions/280), summarized from group discussions

## Is the JSON format for achievement export also UIGF?

A: UIAF

## Can it adapt to importing UEFI old version data from the wish system, just like SG?

A: First, it's called UIGF format, second, it has always been adapted, but SG's import and export rules are more lenient. If you have only used and correctly used our products from beginning to end, there will be no import and export anomalies.

## When will there be automatic update checking and downloading like SG?

A: Automatic updates cannot be implemented on MSIX packages, update checking will be introduced in subsequent versions.

## If I log in to SG and Hutao on the same device at the same time, will it count as one device or two?

A: Two devices, theoretically each time Hutao restarts it is equivalent to switching devices.

## I feel that some pages in Hutao take a long time to load, affecting the user experience, and the interface feels a bit laggy.

A: The Abyss statistics page did have loading issues before version 1.2.6, which has been resolved in the new version. If there are lag issues on other pages, it is usually because your graphics card is not powerful enough, or Hutao is rendering through your integrated graphics.

## Attribute statistics often fail to load.

A: Legacy issue, can be resolved by backing up data and deleting `userdata.db`.

## Is there any planning for custom webpage functionality?

A: Don't rush.

::: tip Microsoft-related issues, we cannot solve

- Sometimes starting with administrator does not obtain administrator permissions, need to close and start again.
- Can the icon size of Hutao be changed to small size like other icons?
- The written registry files encounter installation issues during updates, all fixes attempted without success. Will uninstalling and reinstalling during the repair process be affected by uninstallation residues?

:::