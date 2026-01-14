---
comment: false
externalLinkIcon: false
index: false
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
sidebar: false
navbar: false
footer: false
copyright: false
editLink: false
breadcrumbExclude: true
breadcrumb: false
lastUpdated: false
contributors: false
backToTop: false
pageInfo: false
---

# 🎉 Successfully Updated to Version 2.1.0

- New:
  - ✨ Optimized the layout of the settings page
  - ✨ Optimized the program name retrieval logic and display
  - ✨ Enhanced the UI prompt effects of the download dialog
  - ✨ Improved the language in some interfaces
  - ✨ Refactored the auto-check-in logic; it now supports multi-account auto-check-in and cross-day check-in after manually switching accounts
  - ✨ Auto-check-in should no longer duplicate check-ins or become out of sync with the UI
  - ✨ Refactored the auto-start logic; auto-start will now always remain synchronized with the "Run as Administrator" state
  - ✨ Optimized the shortcut creation logic, removed version information attached to shortcuts, and added corresponding icons for options
  - ✨ Changed the left-click logic for the taskbar icon; left-click will always open the main window
  - ✨ Added a "Close window to hide" button for the taskbar window
  - ✨ Synchronized with v1.18.1 to add third-party tool functionality and optimize the game launch interface speed
  - ✨ Added open-source information
  - ✨ Some announcements can now be dismissed/closed.
- Fixes:
  - 🛠️ Fixed the download dialog test path
  - 🛠️ Fixed the issue where the game launch operation on the homepage failed to trigger delayed startup
  - 🛠️ Fixed the crash caused by dragging DataTable columns in the custom launch-delayed startup feature
  - 🛠️ Fixed occasional restart failures
  - 🛠️ Fixed decompression errors for LZMA/LZMA2 formats
- Known Issues:
  - ❔ IP detection service is not yet live
  - ❔ Web help links may cannot correctly redirect to the corresponding language pages
  - ❔ Misaligned styling on the injection page
  - ❔ Some image resources have not been updated yet