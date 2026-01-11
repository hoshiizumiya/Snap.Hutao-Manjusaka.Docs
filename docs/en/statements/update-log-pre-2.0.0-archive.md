---
category: [Announcement]
icon: iconfont icon-update
index: false
order: 1
comment: false
externalLinkIcon: false
description: Snap Hutao strives to provide users with the best user experience by continuously updating and fixing known issues and releasing new features. We will always publish update logs to track the changes made to the program.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
---

# Update Logs Older than Version 2.0.0

## 1.17.1

- **[Optimization]** Changed the user protocol prompt text content for the injection feature
- **[Optimization]** Injection feature's partial functionality is restricted from being effective in Spiral Abyss/Fantastic Theater/Endless Form
- **[Fix]** Fixed the issue where metadata/injection component initialization could not synchronize correctly after remote updates
- **[Fix]** Fixed the operation of changing the data folder not completing
- **[Fix]** Fixed the frame rate adjustment in the game launch floating window being able to exceed the current prescribed upper limit

## 1.17.0

- **[Optimization]** Reset the status of all settings and options
- **[Optimization]** Changed the way metadata initialization/injection configuration acquisition
- **[Optimization]** Game launch injection function no longer requires administrator mode
- **[Optimization]** For security reasons, some important changes are not listed here
- **[Optimization]** Removed the time display of game announcements on the homepage [#3234](https://github.com/DGP-Studio/Snap.Hutao/issues/3234)
- **[Fix]** Fixed the issue where WebView2 could not create a user profile folder when starting with administrator mode for the first time [#3248](https://github.com/DGP-Studio/Snap.Hutao/issues/3248)
- **[Fix]** Fixed the issue where selecting a subfolder of the current data folder as the new data folder when changing the data folder [#3255](https://github.com/DGP-Studio/Snap.Hutao/issues/3255)
- **[Fix]** Fixed the incorrect display of star ratings when adjusting in the Fantastic Theater page [#3286](https://github.com/DGP-Studio/Snap.Hutao/issues/3286)
- **[Fix]** Fixed the issue where hyperlinks in some characters' skills in the character profile page would cause an infinite loop when clicked [#3322](https://github.com/DGP-Studio/Snap.Hutao/issues/3322)

## 1.16.5

- **[New]** Added touch input detection switch in the settings interface, which detects touch input when enabled and forcibly enables/disables touch input in game launch-injection [#3186](https://github.com/DGP-Studio/Snap.Hutao/issues/3186)
- **[New]** Merged October's newly added internationalization translations
- **[Optimization]** Real-time notes now display the time when resin is full, rather than the time until resin is full [#3216](https://github.com/DGP-Studio/Snap.Hutao/issues/3216)
- **[Fix]** Fixed the issue where the game would crash when entering the Thousand Stars Challenge level after enabling the injection function [#3194](https://github.com/DGP-Studio/Snap.Hutao/issues/3194)
- **[Fix]** Fixed the issue where Embedded Yae could not import or report errors in achievement management and cultivation plans [#3196](https://github.com/DGP-Studio/Snap.Hutao/issues/3196)
- **[Fix]** Fixed the crash issue when refreshing odd/even characters in the My Characters interface [#3199](https://github.com/DGP-Studio/Snap.Hutao/issues/3199)
- **[Fix]** Fixed the crash issue when refreshing odd/even characters in the Spiral Abyss interface [#3205](https://github.com/DGP-Studio/Snap.Hutao/issues/3205)
- **[Fix]** Fixed the issue where installing the game would prompt an error

## 1.16.4

- **[New]** Guide window language setting interface revamped
- **[Fix]** Fixed the issue where the metadata file download would unexpectedly prompt download failure after completion
- **[Fix]** Fixed the issue where enabling the injection option would prevent entering the game

## 1.16.3

- **[Fix]** Fixed the issue where batch adding to cultivation plans in the My Characters page would cause crashes [#3172](https://github.com/DGP-Studio/Snap.Hutao/issues/3172)
- **[Fix]** Fixed the issue where switching background image types in the settings page would not refresh immediately
- **[Fix]** [Internal] Fixed the issue where user feedback would not be associated with Sentry events when crashing

## 1.16.2

- **[New]** Added resin collection reward consumption control in game launch injection, allowing selection of whether to consume Original Resin, Condensed Resin, Fragile Resin, and Primogems to claim rewards [#3147](https://github.com/DGP-Studio/Snap.Hutao/issues/3147)
- **[Optimization]** Fantastic Theater supports recognition of Moonlight Mode and its Holy Emblem Challenge [#3165](https://github.com/DGP-Studio/Snap.Hutao/issues/3165)
- **[Optimization]** Game launch account detection function added account information prompts, account expiration prompts
- **[Optimization]** Cultivation calculation supports calculating character level upper limits for breakthroughs
- **[Optimization]** Redesigned the main window title bar style [#3167](https://github.com/DGP-Studio/Snap.Hutao/issues/3167)
- **[Fix]** Fixed the issue where the pre-live stream redemption code had not been prepared yet and would display empty redemption code entries

## 1.16.1

- **[Fix]** Fixed the issue where signing in for the first time in the month might cause a crash when switching to the main page
- **[Fix]** Fixed the issue where the switch list in the injection settings tab of the game launch page could not scroll
- **[Fix]** Fixed the issue where the cultivation item tab in the cultivation plan page would load slowly or crash when there were many items [#3137](https://github.com/DGP-Studio/Snap.Hutao/issues/3137)

## 1.16.0

- **[New]** Real-time notes card on the homepage added a mouse hover prompt for resin icons [#2699](https://github.com/DGP-Studio/Snap.Hutao/issues/2699)
- **[Optimization]** Refactored the game launch module
  - **[New]** Game launch added reward claiming consumption control, allowing selection of whether to consume Original Resin, Condensed Resin, Fragile Resin, and Primogems to claim rewards
  - **[New]** Game launch added server conversion only function, allowing file replacement without actual game launch [#2177](https://github.com/DGP-Studio/Snap.Hutao/issues/2177)
  - **[Optimization]** Injection options added multiple prompts [#2961](https://github.com/DGP-Studio/Snap.Hutao/issues/2961)
  - **[Optimization]** When MiHoYo/HoYoLAB login is enabled, the game launch card on the homepage will display the in-game character after launching the game [#2969](https://github.com/DGP-Studio/Snap.Hutao/issues/2969)
  - **[Optimization]** Injection options added prompts for connecting to the game to determine if the settings will take effect [#3006](https://github.com/DGP-Studio/Snap.Hutao/issues/3006)
  - **[Optimization]** Attempting to import data with Embedded Yae after launching the game will prompt [#3071](https://github.com/DGP-Studio/Snap.Hutao/issues/3071)
  - **[Optimization]** When MiHoYo/HoYoLAB login is enabled and does not match the selected server, it will prevent launching when switching accounts in the user panel [#3109](https://github.com/DGP-Studio/Snap.Hutao/issues/3109)
- **[Optimization]** Compact web window videos played after startup will no longer be muted by default
- **[Optimization]** Changed the way administrator permissions are determined, now it will not consider promoted users' non-promoted launches as promoted
- **[Optimization]** Removed the refresh time button from the My Characters page [#2984](https://github.com/DGP-Studio/Snap.Hutao/issues/2984)
- **[Fix]** Fixed the abnormal display of dots on the real-time notes card on the homepage [#2964](https://github.com/DGP-Studio/Snap.Hutao/issues/2964)
- **[Fix]** Fixed the issue where exporting character data to clipboard in the My Characters page lacked additive attribute values [#2966](https://github.com/DGP-Studio/Snap.Hutao/issues/2966)
- **[Fix]** Fixed the issue where real-time notes sometimes could not refresh the quest progress correctly [#2975](https://github.com/DGP-Studio/Snap.Hutao/issues/2975)

## 1.15.17

- **[New]** Endless Form added support for international servers (HoYoLAB), thanks to [@DSakura207](https://github.com/DSakura207) for the implementation [#3093](https://github.com/DGP-Studio/Snap.Hutao/issues/3093)
- **[Optimization]** Completed localization translations

## 1.15.16

- **[New]** Homepage calendar card added materials for characters/weapons on Tuesdays in the Natlan region [#3090](https://github.com/DGP-Studio/Snap.Hutao/issues/3090)
- **[Optimization]** Removed condensed resin estimates in cultivation plan resin estimates [#3091](https://github.com/DGP-Studio/Snap.Hutao/issues/3091)
- **[Fix]** Fixed multiple game launch related deadlocks [#3099](https://github.com/DGP-Studio/Snap.Hutao/issues/3099)

## 1.15.15

- **[Optimization]** Character profile page supports viewing base attributes of characters at levels 91-100
- **[Optimization]** Achievement page search for achievements now ignores punctuation in titles and descriptions [#3059](https://github.com/DGP-Studio/Snap.Hutao/issues/3059)
- **[Fix]** Fixed the issue of abnormal injection configuration acquisition in non-administrator mode
- **[Fix]** Fixed the incorrect layout in the wish record history page
- **[Fix]** Fixed the issue where the wish record timing page did not exclude Dream Eater Mousse
- **[Fix]** Fixed the issue where Starward/BetterGI could not be launched after launching the game [#3041](https://github.com/DGP-Studio/Snap.Hutao/issues/3041)
- **[Fix]** Fixed the issue where real-time notes could not be refreshed [#3065](https://github.com/DGP-Studio/Snap.Hutao/issues/3065)

## 1.15.14

- **[Optimization]** In the character profile page, characters with five uses of the Heart of God are now forced to display the Heart of God as their element source
- **[Fix]** Fixed the issue where wish records could not be imported/exported in the settings page [#3014](https://github.com/DGP-Studio/Snap.Hutao/issues/3014)
- **[Fix]** Fixed the issue where the language option in the settings page was not selected after re-entering the page [#3016](https://github.com/DGP-Studio/Snap.Hutao/issues/3016)
- **[Fix]** Fixed the invalid hot switch for viewing in the game launch page injection function [#3017](https://github.com/DGP-Studio/Snap.Hutao/issues/3017)
- **[Fix]** Fixed the issue where the process board selection display function in the game launch page could not display pending options correctly [#3017](https://github.com/DGP-Studio/Snap.Hutao/issues/3017)
- **[Fix]** Fixed the issue where quick adjustment resolution in the game launch page could not display pending options correctly [#3034](https://github.com/DGP-Studio/Snap.Hutao/issues/3034)

## 1.15.13

- **[New]** Added super mysterious function in game launch
- **[New]** Achievement page achievement entries right-click added menu to search on MiHoYo/HoYoLAB [#2957](https://github.com/DGP-Studio/Snap.Hutao/issues/2957)
- **[Optimization]** My Characters page now remembers sorting rules [#2953](https://github.com/DGP-Studio/Snap.Hutao/issues/2953)
- **[Optimization]** Game launch process end button disabled in non-administrator mode [#2968](https://github.com/DGP-Studio/Snap.Hutao/issues/2968)
- **[Optimization]** Changed the color of the next button in the initial guide window
- **[Fix]** Fixed the issue where auto-click/auto-press would not restart after stopping with hotkey [#2941](https://github.com/DGP-Studio/Snap.Hutao/issues/2941)
- **[Fix]** Fixed the issue where using Embedded Yae to import achievements after launching the game would not terminate the game process [#2998](https://github.com/DGP-Studio/Snap.Hutao/issues/2998)
- **[Fix]** Fixed the issue where 6.0 pre-live stream redemption codes could not be displayed normally

## 1.15.12

- **[Fix]** Fixed the issue where the game launch server conversion function could not be used normally [#2941](https://github.com/DGP-Studio/Snap.Hutao/issues/2941)

## 1.15.11

- **[New]** Support UIGF 4.1
- **[New]** Cultivation plans can now add characters that are not yet released in character profiles
- **[New]** Character profile page added character skin illustrations [#2875](https://github.com/DGP-Studio/Snap.Hutao/issues/2875)
- **[Optimization]** Optimized the performance of cultivation plan material calculations
- **[Optimization]** Optimized the performance of some functions
- **[Fix]** Fixed the issue where some servers could not be correctly identified in certain situations
- **[Fix]** Fixed the issue where Embedded Yae could not be used normally in version 5.8 [#2916](https://github.com/DGP-Studio/Snap.Hutao/issues/2916)
- **[Fix]** Fixed the crash issue when viewing some new character profiles
- **[Fix]** Fixed the incorrect display of administrator prompts in some pages [#2920](https://github.com/DGP-Studio/Snap.Hutao/issues/2920)

## 1.15.10

- **[Fix]** Fixed the issue where using injection function after launching the game in version 5.8 would cause the game to crash [#2885](https://github.com/DGP-Studio/Snap.Hutao/issues/2885)

## 1.15.9

- **[Fix]** Fixed the issue where triggering captcha when logging in with HoYoLAB account would cause crash [#2880](https://github.com/DGP-Studio/Snap.Hutao/issues/2880)
- **[Fix]** Fixed the issue where using injection function after launching the game would cause program and game to crash [#2881](https://github.com/DGP-Studio/Snap.Hutao/issues/2881)

## 1.15.8

- **[New]** Character profile/weapon profile cultivation calculation calculation function supports characters not yet officially released
- **[Optimization]** Optimized the connection stability when downloading in game launch page game management
- **[Fix]** Fixed the issue where the current period statistics (People of the Depths) in the Endless Form page could not be displayed normally [#2845](https://github.com/DGP-Studio/Snap.Hutao/issues/2845)
- **[Fix]** Fixed the issue where HoYoLAB accounts could not log in normally [#2849](https://github.com/DGP-Studio/Snap.Hutao/issues/2849)
- **[Fix]** Fixed the issue where game launch page game management could not update pre-download correctly
- **[Fix]** Fixed the issue where game launch page game management would not display completion marks when pre-download completed
- **[Fix]** Fixed the issue where some achievements in achievement management displayed version abnormalities
- **[Fix]** Other known issues

## 1.15.7

- **[Fix]** Fixed the issue where entering the main interface with international server users would cause crash

## 1.15.6

- **[Fix]** Fixed the device name being non-English causing inability to use normally

## 1.15.5

- **[New]** Homepage launch game card added MiHoYo/HoYoLAB account login mode user prompts
- **[New]** Homepage added pre-live stream redemption code viewing function
- **[New]** Game launch interface added end process button, which can be operated conveniently when game processes have residues
- **[New]** Game launch interface some injection functions added tutorial prompts
- **[New]** Cultivation plan page resin estimates added fragile resin consumption estimates
- **[New]** Added Endless Form page, can view and save related challenge records
- **[New]** Settings interface added check update function
- **[New]** My Characters page grid view added affection display [#1283](https://github.com/DGP-Studio/Snap.Hutao/issues/1283)
- **[New]** My Characters page cultivation calculation added custom range batch calculation [#2831](https://github.com/DGP-Studio/Snap.Hutao/issues/2831)
- **[New]** Achievement page now allows right-click to copy achievement ID [#2832](https://github.com/DGP-Studio/Snap.Hutao/issues/2832)
- **[Optimization]** UI interface revamped
- **[Optimization]** Hu Tao Passport now uses safer V2 API
- **[Fix]** Fixed the issue where clicking the copyright information in the settings page could not jump to the browser normally when the background was online background

## 1.15.4

- **[Fix]** Fixed the issue where the Fantastic Theater page would crash when some records had incomplete data [#2822](https://github.com/DGP-Studio/Snap.Hutao/issues/2822)

## 1.15.3

- **[Fix]** Fixed the issue where the filter box in the cultivation plan page would provide incorrect prompts

## 1.15.2

- **[Fix]** Fixed the issue where switching to the Fantastic Theater page would still cause crash [#2816](https://github.com/DGP-Studio/Snap.Hutao/issues/2816)
- **[Fix]** Fixed the issue where restarting with administrator would not exit the current process
- **[Fix]** Other known issues

## 1.15.1

- **[Fix]** Fixed the issue where switching to the Fantastic Theater page would cause crash [#2799](https://github.com/DGP-Studio/Snap.Hutao/issues/2799)
- **[Fix]** Fixed the issue where the hotkey enable prompt in the floating window would not update correctly [#2809](https://github.com/DGP-Studio/Snap.Hutao/issues/2809)
- **[Fix]** Fixed the issue where closing the window after opening the wish/achievement/cultivation page would cancel the selected archive/plan [#2813](https://github.com/DGP-Studio/Snap.Hutao/issues/2813)
- **[Fix]** Other known issues

## 1.15.0

- **[New]** Added new navigation animation for homepage cards jumping to corresponding pages
- **[New]** Game launch page added Ldiff pre-download/update game support
- **[Optimization]** Supported MiHoYo/HoYoLAB dynamic avatars
- **[Fix]** Fixed the issue where hotkey registration failure had no prompt
- **[Fix]** Fixed the issue where notification icon creation failure had no prompt
- **[Fix]** Fixed the issue where special circumstances caused Hu Tao process not to exit normally, preventing re-launch [#2794](https://github.com/DGP-Studio/Snap.Hutao/issues/2794)
- **[Fix]** Fixed the issue where unlocking to excessively high frame rates would cause game crash or 10612-4001 popup prompt. Please do not use injection function to gain unfair advantages in some challenges, we reserve the right to disable this function [#2794](https://github.com/DGP-Studio/Snap.Hutao/issues/2794)
- **[Fix]** Fixed the issue where notification area icon would not be recreated after restarting resource manager [#2737](https://github.com/DGP-Studio/Snap.Hutao/issues/2737)
- **[Fix]** Fixed the issue where using Embedded Yae to import achievements would cause crash [#2754](https://github.com/DGP-Studio/Snap.Hutao/issues/2754)
- **[Fix]** Fixed the issue where the first startup after update would incorrectly prompt Bilibili channel server does not support account function notification [#2754](https://github.com/DGP-Studio/Snap.Hutao/issues/2754)
- **[Fix]** Fixed the issue where viewing some characters' some talents or skills would cause infinite loop [#2789](https://github.com/DGP-Studio/Snap.Hutao/issues/2789)
- **[Fix]** Other known issues

## 1.14.9

- **[New]** Character profile page now correctly displays hyperlinks in some character skills/talents.
- **[Optimization]** Guide window can now display in-app notifications.
- **[New]** Homepage cards can now be reordered by dragging in settings page.
- **[Fix]** Fixed multiple issues that could cause the program to crash.

## 1.14.8

- **[Fix]** Fixed multiple issues that could cause the program to crash

## 1.14.7

- **[New]** Added new redirect synthesis function to injection feature on game launch page. Clicking item details in-game will now open synthesis page instead of map tracking.
- **[Optimization]** Removed "Resource Download" tab from game launch page. [#2681](https://github.com/DGP-Studio/Snap.Hutao/issues/2681)
- **[Optimization]** Adjusted width of main window navigation bar. [#2681](https://github.com/DGP-Studio/Snap.Hutao/issues/2681)
- **[Optimization]** Migrated some underlying components from C# to C++ for better performance and memory usage.
- **[Fix]** Fixed crash issue when switching pages before homepage sign-in card finishes loading. [#2694](https://github.com/DGP-Studio/Snap.Hutao/issues/2694)
- **[Fix]** Fixed issue where improperly formatted UIGF files could be imported. [#2704](https://github.com/DGP-Studio/Snap.Hutao/issues/2704)

## 1.14.6

- **[New]** Added double-click operation on notification icon to directly open main window.
- **[Optimization]** Removed ScatteredFiles server conversion mode. [#2682](https://github.com/DGP-Studio/Snap.Hutao/issues/2682)
- **[Fix]** Fixed issue where auto-click/auto-press could not restart after being stopped with hotkey. [#2673](https://github.com/DGP-Studio/Snap.Hutao/issues/2673)
- **[Fix]** Fixed issue where Embedded Yae could not be used normally. [#2678](https://github.com/DGP-Studio/Snap.Hutao/issues/2678)
- **[Fix]** Fixed issue where metadata might not initialize correctly on first startup after update.

## 1.14.5

- **[Fix]** Fixed issue where MiHoYo account would not automatically switch after launching game from Real-time Notes page. [#2623](https://github.com/DGP-Studio/Snap.Hutao/issues/2623)
- **[Fix]** Fixed issue where using Embedded Yae to import achievements after launching game would not terminate game process. [#2630](https://github.com/DGP-Studio/Snap.Hutao/issues/2630)
- **[Fix]** Fixed issue where Dev Plan on My Characters page would not check if characters were ascended when calculating all characters and weapons. [#2658](https://github.com/DGP-Studio/Snap.Hutao/issues/2658)
- **[Fix]** Fixed issue where deleting wish record archive would not attempt to reselect first archive. [#2659](https://github.com/DGP-Studio/Snap.Hutao/issues/2659)
- **[Fix]** Fixed crash issue when attempting pre-download. [#2660](https://github.com/DGP-Studio/Snap.Hutao/issues/2660)
- **[Fix]** Fixed crash issue that could occur when failing to download image files under specific conditions.
- **[Optimization]** Optimized startup experience
  - Startup migration database failure will pop up prompt
  - Close or restart will wait for startup initialization to complete

## 1.14.4

- **[New]** Cultivation plan resin estimates now calculate synthesizable materials
- **[New]** Hotkeys added option to take effect only after game starts [#2606](https://github.com/DGP-Studio/Snap.Hutao/issues/2606)
- **[Optimization]** Game file operation prompts required space and available space before starting operation
- **[Fix]** Fixed issue where UI might freeze abnormally in some cases [#2617](https://github.com/DGP-Studio/Snap.Hutao/issues/2617)
- **[Fix]** Fixed issue where closing window might cause crash in some cases
- **[Fix]** Fixed issue where notification area icon was always created [#2590](https://github.com/DGP-Studio/Snap.Hutao/issues/2590)
- **[Fix]** Fixed issue where updater could not start normally in some systems [#2597](https://github.com/DGP-Studio/Snap.Hutao/issues/2597)
- **[Fix]** Fixed issue where exiting game might cause crash
- **[Fix]** Fixed issue where frame rate setting and view switch were bound in game launch injection options [#2596](https://github.com/DGP-Studio/Snap.Hutao/issues/2596)
- **[Fix]** Fixed issue where Spiral Abyss page would jump to login when uploading data [#2607](https://github.com/DGP-Studio/Snap.Hutao/issues/2607)

## 1.14.3 <Badge text="hotfix" type="warning" />

- **[Optimization]** Floating window added independent switch, callback injection switch panel [#2582](https://github.com/DGP-Studio/Snap.Hutao/issues/2582)
- **[Fix]** Fixed application redirection failure issue [#2576](https://github.com/DGP-Studio/Snap.Hutao/issues/2576)
- **[Fix]** Fixed compact webpage window non-first startup causing crash issue [#2586](https://github.com/DGP-Studio/Snap.Hutao/issues/2586)
- **[Fix]** Fixed issue where some devices could not bind hotkeys [#2570](https://github.com/DGP-Studio/Snap.Hutao/issues/2570) [#2585](https://github.com/DGP-Studio/Snap.Hutao/issues/2585)

## 1.14.2 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed issue where floating window window would reappear because of window switching after hiding with hotkey

## 1.14.1 <Badge text="hotfix" type="warning" />

- **[New]** Game launch page added custom hotkey control floating window display hide [#2562](https://github.com/DGP-Studio/Snap.Hutao/issues/2562)

## 1.14.0

- **[New]** Compact webpage window added switch window display / hide hotkey [#2382](https://github.com/DGP-Studio/Snap.Hutao/issues/2382)
- **[New]** Homepage added sign-in card [#1322](https://github.com/DGP-Studio/Snap.Hutao/issues/1322)
- **[New]** Added in-game translucent floating window [#2506](https://github.com/DGP-Studio/Snap.Hutao/issues/2506)
  - Floating window replaces title bar's hotkey prompts
  - Floating window replaces original game launch page injection related options
- **[New]** Injection added remove elemental burst camera close-up
- **[New]** Injection added remove combat damage jump numbers
- **[New]** Injection added use touch input [#2535](https://github.com/DGP-Studio/Snap.Hutao/issues/2535)
- **[New]** Game launch startup parameters added platform type [#2521](https://github.com/DGP-Studio/Snap.Hutao/issues/2521)
- **[New]** My Characters page added sorting [#2512](https://github.com/DGP-Studio/Snap.Hutao/issues/2512)
- **[New]** My Characters page added display character and weapon ascension levels
- **[New]** Cultivation plan added filtering
- **[Optimization]** Introduced new updater [#2456](https://github.com/DGP-Studio/Snap.Hutao/issues/2456)
- **[Optimization]** Guide page download static resources now inherits existing download progress
- **[Optimization]** Community login now correctly prompts when no available game characters
- **[Optimization]** Simplified injection function related logic [#2531](https://github.com/DGP-Studio/Snap.Hutao/issues/2531)
- **[Optimization]** My Characters page now auto-scrolls to top after switching characters [#1731](https://github.com/DGP-Studio/Snap.Hutao/issues/1731)
- **[Optimization]** Character cultivation now recognizes ascension [#2403](https://github.com/DGP-Studio/Snap.Hutao/issues/2403)
- **[Optimization]** Data folder change now performs availability check first
- **[Optimization]** Some settings added related prompt text
- **[Optimization]** Optimized some page lag issues
- **[Optimization]** Optimized a lot of memory leaks
- **[Optimization]** Optimized hotkey prompt display text
- **[Fix]** Fixed main window close after real-time notes auto refresh might cause crash issue
- **[Fix]** Fixed notification area icon pop-up menu press Alt + F4 would not reappear issue [#2532](https://github.com/DGP-Studio/Snap.Hutao/issues/2532)
- **[Fix]** Fixed Hu Tao Passport page click modify email / modify password / logout account might be unresponsive issue
- **[Fix]** Fixed game directory unset might pop up error prompt issue
- **[Fix]** Fixed attempting to take over game process might cause game crash issue [#2540](https://github.com/DGP-Studio/Snap.Hutao/issues/2540)
- **[Fix]** Fixed channel server update game might get stuck issue [#2327](https://github.com/DGP-Studio/Snap.Hutao/issues/2327)
- **[Fix]** Fixed wish record timing error counting some constant characters
- **[Fix]** Fixed achievement management page remove one achievement archive would not automatically switch to next achievement archive issue [#2519](https://github.com/DGP-Studio/Snap.Hutao/issues/2519)
- **[Fix]** Fixed achievement management page some achievement version display abnormal issue
- **[Fix]** Fixed Embedded Yae unable to use normally in 5.5 version
- **[Fix]** Fixed some monsters display error in Spiral Abyss
- **[Fix]** Fixed cultivation plan resin estimate data might error issue
- **[Fix]** Fixed some scaling UI drawing might trigger crash issue
- **[Fix]** Fixed some cases WebView2 unable to load normally issue
- **[Fix]** Fixed WebView2 load complete before close window cause stuck issue [#2544](https://github.com/DGP-Studio/Snap.Hutao/issues/2544)
- **[Fix]** Fixed some devices unable to set language correctly issue
- **[Fix]** Fixed some pictures unable to display normally issue

## 1.13.7

- **[Fix]** Fixed specific circumstances startup game close game process might cause program crash issue
- **[Fix]** Fixed set data directory to disk partition root directory open settings page might cause program crash issue
- **[Fix]** Fixed when wallpaper source is non-local wallpaper, download wallpaper failure might cause program crash issue
- **[Fix]** Fixed get game announcement failure might cause program crash issue
- **[Fix]** Fixed WebView2 not loaded complete close webpage window might cause program crash issue
- **[Fix]** Fixed when wallpaper source is local wallpaper, timed wallpaper switch might cause program crash issue
- **[Fix]** Fixed prompt information about to display or disappear close main window might cause program crash issue
- **[Fix]** Fixed loading My Characters page information switch/delete user might cause data unsynchronized issue
- **[Fix]** Fixed auto click function enable time close auto click function switch no stop auto click issue
- **[Fix]** Fixed WebView2 not loaded complete, refresh/back operation might cause program crash issue
- **[Fix]** Fixed game file management choose some non-fixed SSD devices might cause crash issue, now defaults to HDD for subsequent operations
- **[Fix]** Fixed program exit try open task area icon menu again cause crash issue
- **[Optimization]** Added WebView2 load failure prompt for webpage window
- **[Optimization]** Compact webpage window now can adjust to any size
- **[Optimization]** Startup game now checks running game processes and attempts takeover

## 1.13.6

- **[New]** Cultivation plan added time zone setting
  - Time zone will be set when creating plan
  - Time zone cannot be modified after creating plan
  - Existing cultivation plans will default to Hu Tao calendar server corresponding time zone
- **[Fix]** Fixed other applications pull up import achievement not display import popup issue
- **[Fix]** Fixed real-time notes background auto refresh crash issue [#2491](https://github.com/SnapHutao/Snap.Hutao/issues/2491)
- **[Optimization]** Changed telemetry method, now uses Sentry to better collect and process exceptions
- **[Optimization]** After first login user panel, now prioritizes selecting MiHoYo configured default character [#2391](https://github.com/SnapHutao/Snap.Hutao/issues/2391)
- **[Optimization]** Changed compact webpage window translucent logic
  - Now window presents opaque effect when having focus
  - Presents translucent effect when losing focus

## 1.13.5

- **[New]** Character profile page character strategy added Bilibili Wiki (Simplified Chinese only) [#2435](https://github.com/DGP-Studio/Snap.Hutao/issues/2435)
- **[New]** Character profile page now can view character skins illustrations
- **[Fix]** Fixed some international server functions invalid issue
- **[Fix]** Fixed from tray menu exit Hu Tao might crash issue
- **[Fix]** Fixed calendar card time zone not effective issue [#2467](https://github.com/DGP-Studio/Snap.Hutao/issues/2467)
- **[Fix]** Fixed game config file missing might restore to wrong server issue
- **[Fix]** Fixed game file management not support USB solid state mobile hard disk issue [#2469](https://github.com/DGP-Studio/Snap.Hutao/issues/2469)
- **[Fix]** Fixed cultivation plan page resin estimate UI display misaligned issue [#2443](https://github.com/DGP-Studio/Snap.Hutao/issues/2443)
- **[Optimization]** Optimized some scaling UI layout

## 1.13.4 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed startup game page use game management function cause crash issue again [#2457](https://github.com/DGP-Studio/Snap.Hutao/issues/2457)
- **[Fix]** Fixed achievement management unable through Embedded Yae sync issue [#2458](https://github.com/DGP-Studio/Snap.Hutao/issues/2458)
- **[Fix]** Fixed cultivation plan unable through Embedded Yae sync backpack items issue [#2461](https://github.com/DGP-Studio/Snap.Hutao/issues/2461)

## 1.13.3 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed startup game page use game management function cause crash issue

## 1.13.2

- **[Fix]** Fixed wish record page cache refresh unable normal effective issue [#2413](https://github.com/DGP-Studio/Snap.Hutao/issues/2413)
- **[Fix]** Fixed homepage enable card number not full one row unable normal display issue [#2416](https://github.com/DGP-Studio/Snap.Hutao/issues/2416)
- **[Fix]** Fixed 5.2 after high fate characters unable add to cultivation plan issue [#2422](https://github.com/DGP-Studio/Snap.Hutao/issues/2422)
- **[Fix]** Fixed target folder not exist unable change data folder issue [#2425](https://github.com/DGP-Studio/Snap.Hutao/issues/2425)
- **[Fix]** Fixed some users due file encryption unable change data folder issue [#2433](https://github.com/DGP-Studio/Snap.Hutao/issues/2433)
- **[Fix]** Fixed popup dialog time unable open task bar icon menu issue [#2434](https://github.com/DGP-Studio/Snap.Hutao/issues/2434)
- **[Optimization]** Now need administrator permission to unloopback
- **[Optimization]** Optimized Embedded Yae data import experience
  * Changed related UI, need administrator permission to use
  * Now need open injection function switch in startup game page to use related functions
  * Now will use account login configured in startup game page

## 1.13.1

- **[New]** Added German/Spanish/Italian/Thai/Turkish
- **[New]** Achievements and backpack items now can get from game through Embedded Yae
- **[New]** Cultivation plan added clear backpack items [#2332](https://github.com/DGP-Studio/Snap.Hutao/issues/2332)
- **[New]** Character profile page added character strategy [#1526](https://github.com/DGP-Studio/Snap.Hutao/issues/1526)
- **[Fix]** Fixed unable add multiple Hu Tao instances issue [#2368](https://github.com/DGP-Studio/Snap.Hutao/issues/2368)
- **[Fix]** Fixed some devices unable correct enumerate container application cause crash issue
- **[Fix]** Fixed user service not initialize complete startup game unable normal use MiHoYo account login issue
- **[Fix]** Fixed unable get wish record through webpage cache issue [#2363](https://github.com/DGP-Studio/Snap.Hutao/issues/2363)
- **[Fix]** Fixed real-time notes notification UID might display Unknown issue
- **[Fix]** Fixed Spiral Abyss not display upper half effect issue
- **[Fix]** Fixed cultivation plan resin estimate might cause crash issue
- **[Fix]** Fixed cultivation plan resin estimate data might overflow issue [#2361](https://github.com/DGP-Studio/Snap.Hutao/issues/2361)
- **[Optimization]** Guide page now display localization source
- **[Optimization]** Optimized Hu Tao Passport related dialog operation logic
- **[Optimization]** Real-time notes now auto refresh after Hu Tao startup
- **[Optimization]** Data folder now default store in container, will delete with uninstall
- **[Optimization]** Change data folder now auto copy data to new directory [#1835](https://github.com/DGP-Studio/Snap.Hutao/issues/1835)

## 1.13.0

- **[New]** Changed program icon - Crimson Walnut Red
- **[New]** Added calendar server time zone setting, can adjust homepage calendar card used time zone
- **[New]** Title bar added metadata load indicator
- **[New]** Added Hu Tao Passport page, removed Hu Tao Passport part in settings page
  * Added reset email function
  * Added refresh user info function
  * Integrated redeem code redeem function
- **[New]** Guide interface added static picture file download prompt
- **[New]** User panel added MiHoYo scan code login method [#870](https://github.com/DGP-Studio/Snap.Hutao/issues/870)
- **[Optimization]** Hu Tao Passport modify password/logout account now default to current login account
- **[Optimization]** Hu Tao Passport wish record cloud service and CDN cloud service no longer display as 1970 year when no duration obtained
- **[Optimization]** Adjusted Hu Tao notification display method, now unable manually close serious (red)/important (yellow) type notifications
- **[Optimization]** Compact webpage window added load indicator/refresh button
- **[Optimization]** Optimized frequent change window size might cause application content flicker issue
- **[Optimization]** Startup game function now correct prompt empty path
- **[Optimization]** Startup game function now correct disable select game path button
- **[Optimization]** Now when using unsupported custom background picture, will produce better crash popup [#2335](https://github.com/DGP-Studio/Snap.Hutao/issues/2335)
- **[Optimization]** Startup game function game file management popup new window now keep same theme style with main window
- **[Optimization]** Startup game function game file management now support interrupt resume install
- **[Optimization]** Startup game function game file management now extra calculate 1 GB install cache
- **[Optimization]** Startup game function game file management now dynamic clean no need file during install
- **[Optimization]** Startup game function game file management now correct skip already complete update file
- **[Optimization]** Guide interface now no longer auto go next step after select language
- **[Optimization]** Application inner error prompt now can copy text
- **[Optimization]** Optimized part text punctuation and expression
- **[Optimization]** Optimized part page display effect
- **[Optimization]** Optimized program overall frame rate performance
- **[Optimization]** Optimized multi-thread scheduling memory occupation
- **[Optimization]** Optimized item icon load speed
- **[Optimization]** Adjusted database read write method, optimize memory occupation and response speed
- **[Optimization]** Adjusted -100 and -10001 return code text prompt, help user better understand its meaning
- **[Fix]** Fixed part page switch after might produce unnecessary exception issue
- **[Fix]** Fixed part exception unable normal capture issue
- **[Fix]** Fixed Hu Tao Passport page modify email / modify password / logout account after logout still display success issue
- **[Fix]** Fixed logout Hu Tao Passport fail still exit login issue

## 1.12.8

- **[New]** Added keyboard F key auto press function, can enable and configure hotkey in settings page
- **[Fix]** Fixed startup game interface load time no any game path might cause crash issue

## 1.12.7

- **[Fix]** Fixed no set game path enter startup game page crash issue

## 1.12.6

- **[New]** Startup game now auto detect game path
- **[Optimization]** Remove team config progress bar function only effective when allow switch team
- **[Fix]** Fixed no login Hu Tao Passport unable normal check update issue
- **[Fix]** Fixed homepage calendar card background color might error issue
- **[Fix]** Fixed download game time modify limit speed might cause memory leak issue
- **[Fix]** Fixed download game time cancel might cause program crash issue
- **[Fix]** Fixed game resource pre-download might stuck issue [#2272](https://github.com/DGP-Studio/Snap.Hutao/issues/2272)

## 1.12.5

- **[New]** Startup game added quick select resolution drop down box [#2261](https://github.com/DGP-Studio/Snap.Hutao/issues/2261)
- **[New]** Wish record card pool timing added card pool history record
- **[New]** Cultivation plan added resin estimate [#323](https://github.com/DGP-Studio/Snap.Hutao/issues/323) [#1540](https://github.com/DGP-Studio/Snap.Hutao/issues/1540)
- **[Fix]** Fixed switch theme time might not trigger background change issue
- **[Fix]** Fixed part element theme color display error in deep color mode issue
- **[Fix]** Fixed possible inject metadata initialization vulnerability [#2240](https://github.com/DGP-Studio/Snap.Hutao/issues/2240)
- **[Fix]** Fixed part situation unable read local game version issue [#2251](https://github.com/DGP-Studio/Snap.Hutao/issues/2251)
- **[Fix]** Fixed international server unable refresh wish record issue [#2252](https://github.com/DGP-Studio/Snap.Hutao/issues/2252)
- **[Fix]** Fixed cultivation plan material calculate might error issue
- **[Fix]** Fixed compact webpage window transparency setting not effective issue [#2258](https://github.com/DGP-Studio/Snap.Hutao/issues/2258)
- **[Fix]** Fixed part system down from tray menu exit Hu Tao time exist buffer overflow issue
- **[Optimization]** Startup game page save same name account now will replace instead new
- **[Optimization]** Cultivation plan now try get more accurate backpack material quantity
- **[Optimization]** Optimized Hu Tao volume

## 1.12.4

- **[Fix]** Fixed startup game set resolution after unable save issue [#2229](https://github.com/DGP-Studio/Snap.Hutao/issues/2229)
- **[Fix]** Fixed achievement complete time display error issue [#2184](https://github.com/DGP-Studio/Snap.Hutao/issues/2184)
- **[Fix]** Fixed cultivation plan backpack unable refresh issue [#2212](https://github.com/DGP-Studio/Snap.Hutao/issues/2212)
- **[Fix]** Fixed compact webpage window video fast forward/backward hotkey invalid issue
- **[Fix]** Fixed part system select file window trigger crash issue
- **[Fix]** Fixed update Hu Tao time select download source not effective issue
- **[Optimization]** Now will check network proxy and Loopback status at startup, guide user unloopback limit when unable normal network
- **[Optimization]** Compact webpage window now remember last close time page

## 1.12.3 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed tray icon not synchronize cause program crash issue [#2198](https://github.com/DGP-Studio/Snap.Hutao/issues/2198)
- **[Fix]** Fixed tray icon initialize fail cause metadata not initialize, cause program unusable issue [#2202](https://github.com/DGP-Studio/Snap.Hutao/issues/2202)

## 1.12.2

- **[New]** Added compact webpage window video fast forward/backward hotkey
- **[Fix]** Fixed cultivation plan select status abnormal cause unable startup Hu Tao issue [#2174](https://github.com/DGP-Studio/Snap.Hutao/issues/2174)
- **[Fix]** Fixed tray icon after administrator restart might not correct create issue
- **[Fix]** Fixed game version update front announcement time display error issue [#2175](https://github.com/DGP-Studio/Snap.Hutao/issues/2175)
- **[Fix]** Fixed startup game re select game path might crash issue
- **[Fix]** Fixed game file management repair game time might stuck issue
- **[Fix]** Fixed window too small unable use mouse switch achievement archive issue [#2181](https://github.com/DGP-Studio/Snap.Hutao/issues/2181)
- **[Fix]** Fixed no login Hu Tao cloud upload Spiral Abyss record jump login crash issue [#2169](https://github.com/DGP-Studio/Snap.Hutao/issues/2169)
- **[Fix]** Fixed international server unable normal refresh Fantastic Theater issue [#2170](https://github.com/DGP-Studio/Snap.Hutao/issues/2170)
- **[Fix]** Fixed weapon add to cultivation plan time might crash issue [#2168](https://github.com/DGP-Studio/Snap.Hutao/issues/2168)
- **[Optimization]** Optimized game file management pre-download prompt icon display effect
- **[Optimization]** Real-time notes page add startup game button for each game character, jump to startup game page and auto switch MiHoYo/HoYoLAB user to notes corresponding user [#1318](https://github.com/DGP-Studio/Snap.Hutao/issues/1318)
- **[Optimization]** Optimized character and weapon icon load speed

## 1.12.1 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed database migration fail cause unable startup issue [#2159](https://github.com/DGP-Studio/Snap.Hutao/issues/2159)

## 1.12.0

- **[New]** Upgrade to .NET 9
- **[New]** Notification icon right click menu added execute compact webpage window command
  - Compact webpage window is a window placed on top, no interaction time can present translucent webpage window
  - Can set webpage video play/pause hotkey in settings page
  - Use compact webpage window need administrator identity startup
- **[New]** Added Fantastic Theater page [#1671](https://github.com/DGP-Studio/Snap.Hutao/issues/1671)
- **[Fix]** Fixed use SophonChunk mode switch game server might crash issue
- **[Fix]** Fixed startup game injection option part specific situation logic error issue
- **[Fix]** Fixed startup game injection fail force end game after injection option switch unable interact issue
- **[Fix]** Fixed international server unable get wish record URL issue [#2141](https://github.com/DGP-Studio/Snap.Hutao/issues/2141)
- **[Fix]** Fixed Spiral Abyss page in non-Chinese situation part monster detail might unable complete expand issue [#2152](https://github.com/DGP-Studio/Snap.Hutao/issues/2152)
- **[Fix]** Fixed special situation auto click hotkey initialize fail cause crash issue
- **[Optimization]** Now startup game page detect account after if already exist corresponding account will auto select

## 1.11.9 <Badge text="hotfix" type="warning" />

- **[New]** Wish record page Hu Tao cloud service added service expire time and developer prompt
- **[Fix]** Fixed startup game injection option with actual situation not match issue [#2134](https://github.com/DGP-Studio/Snap.Hutao/issues/2134)
- **[Fix]** Fixed enable adjust view time in team and part character elemental burst scene might appear lag issue [#2137](https://github.com/DGP-Studio/Snap.Hutao/issues/2137)
- **[Fix]** Fixed WebView popup unable normal operation might crash issue

## 1.11.8 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed international server injection function invalid issue [#2121](https://github.com/DGP-Studio/Snap.Hutao/issues/2121)
- **[Fix]** Fixed get wish record through webpage cache invalid issue [#2124](https://github.com/DGP-Studio/Snap.Hutao/issues/2124)
- **[Optimization]** Optimized startup game injection option switch inter logic [#2122](https://github.com/DGP-Studio/Snap.Hutao/issues/2122)

## 1.11.7

- **[New]** / **[Optimization]** Adjusted startup game interface UI
  - **[New]** Removed team config interface progress bar
  - **[New]** Let me in! MiChiMaoMao function (yes correct)
- **[New]** Startup game switch server added chunk mode
- **[New]** Character profile add character card [#1424](https://github.com/DGP-Studio/Snap.Hutao/issues/1424)
- **[Fix]** Fixed daily first startup Hu Tao might crash issue [#2101](https://github.com/DGP-Studio/Snap.Hutao/issues/2101)
- **[Fix]** Fixed error report window might not correct display issue
- **[Fix]** Fixed homepage announcement continuous time display error issue
- **[Fix]** Fixed game file management in part type disk might crash issue [#2077](https://github.com/DGP-Studio/Snap.Hutao/issues/2077)
- **[Fix]** Fixed get wish record through webpage cache might crash issue [#2083](https://github.com/DGP-Studio/Snap.Hutao/issues/2083)
- **[Fix]** Fixed window size after cross display restart size might not correct issue
- **[Optimization]** Calendar card now highlight current cultivation plan today can brush material [#2045](https://github.com/DGP-Studio/Snap.Hutao/issues/2045)
- **[Optimization]** My character and character profile now not display 1 star ~ 3 star filter option [#2110](https://github.com/DGP-Studio/Snap.Hutao/issues/2110)
- **[Optimization]** Add MiHoYo/HoYoLAB account now will display dialog prevent user operation when not complete add

## 1.11.6 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed need verification function complete verification after crash issue [#2074](https://github.com/DGP-Studio/Snap.Hutao/issues/2074)
- **[Fix]** Fixed need download resource function might stuck issue

## 1.11.5

- **[New]** Startup game added MiHoYo / HoYoLAB account login
- **[New]** My character page added filter [#1786](https://github.com/DGP-Studio/Snap.Hutao/issues/1786)
- **[New]** In settings added webpage activity share picture save method option [#1804](https://github.com/DGP-Studio/Snap.Hutao/issues/1804)
- **[New]** International server added account password login and third party login [#1966](https://github.com/DGP-Studio/Snap.Hutao/issues/1966)
- **[Fix]** Fixed refresh background picture time might crash issue
- **[Fix]** Fixed multi-display scale display issue
- **[Fix]** Fixed error report window might not correct display issue
- **[Fix]** Fixed part language real-time notes setting display incomplete issue [#2040](https://github.com/DGP-Studio/Snap.Hutao/issues/2040)
- **[Fix]** Fixed update cultivation plan time part list not normal process issue [#2022](https://github.com/DGP-Studio/Snap.Hutao/issues/2022)
- **[Fix]** Fixed cultivation plan sync backpack item might unresponsive issue [#2044](https://github.com/DGP-Studio/Snap.Hutao/issues/2044)
- **[Fix]** Fixed cultivation plan sync backpack item quantity might not correct issue [#2061](https://github.com/DGP-Studio/Snap.Hutao/issues/2061)
- **[Fix]** Fixed MiHoYo mobile verification code login not click get directly input verification code crash issue [#2058](https://github.com/DGP-Studio/Snap.Hutao/issues/2058)
- **[Optimization]** Optimized update game button enable logic
- **[Optimization]** Monster level upper limit raise to 110 level [#1988](https://github.com/DGP-Studio/Snap.Hutao/issues/1988)
- **[Optimization]** Now encounter verification auto popup verification window [#1616](https://github.com/DGP-Studio/Snap.Hutao/issues/1616)

## 1.11.4

- **[New]** Now program crash time will popup error report window
- **[Fix]** Fixed install/update Hu Tao after first startup might crash issue
- **[Fix]** Fixed simultaneously set multiple Discord status issue [#2024](https://github.com/DGP-Studio/Snap.Hutao/issues/2024)
- **[Fix]** Fixed game announcement first line might not respond click issue
- **[Fix]** Fixed international server announcement unable get issue [#2030](https://github.com/DGP-Studio/Snap.Hutao/issues/2030)
- **[Fix]** Fixed 5.1 version update after unlock frame rate might not effective issue
- **[Fix]** Fixed update game unable normal complete issue
- **[Fix]** Fixed update game window install progress might exceed 100% issue
- **[Fix]** Fixed game resource pre-download complete time already complete mark might not display issue
- **[Fix]** Fixed cultivation calculate page material statistics might unresponsive issue [#2014](https://github.com/DGP-Studio/Snap.Hutao/issues/2014)
- **[Fix]** Fixed MiHoYo mobile verification code login might fail issue
- **[Optimization]** In cultivation calculate page material statistics added not collected priority
- **[Optimization]** In cultivation calculate page material statistics now display today can get material

## 1.11.3

- **[New]** Added calendar card in homepage [#1923](https://github.com/DGP-Studio/Snap.Hutao/issues/1923)
- **[New]** Added artifact attribute recommendation in my character page
- **[Fix]** Fixed Spiral Abyss page part monster unable correct display issue
- **[Fix]** Fixed character profile/weapon profile page might stuck issue [#1999](https://github.com/DGP-Studio/Snap.Hutao/issues/1999)
- **[Fix]** Fixed switch game server crash issue
- **[Optimization]** Prohibited game file operation not complete time direct close operation window behavior [#2002](https://github.com/DGP-Studio/Snap.Hutao/issues/2002)
- **[Optimization]** In Spiral Abyss record interface added monster wave data (data source [@妮可少女](https://space.bilibili.com/3537104994831140))

## 1.11.2

- **[New]** Achievement management page added filter only commission achievement function [#897](https://github.com/DGP-Studio/Snap.Hutao/issues/897)
- **[New]** In settings page added startup game download game function limit speed function
- **[New]** Settings page wish record import export added UIGF version upgrade webpage tool link
- **[Fix]** Fixed part device copy application inner file prompt unable encrypt specified file issue
  - This issue previously caused
    - Unable normal create desktop shortcut
    - Unable normal unlock game frame rate
- **[Fix]** Fixed startup game page download game time CPU occupy abnormal issue [#1964](https://github.com/DGP-Studio/Snap.Hutao/issues/1964)
- **[Fix]** Fixed update game not effective issue
- **[Fix]** Fixed my character page grid view switch to no artifact character cause program crash issue [#1954](https://github.com/DGP-Studio/Snap.Hutao/issues/1954)
- **[Fix]** Fixed real-time notes request fail code -1 issue
- **[Fix]** Fixed part device achievement management page unable normal switch archive issue [#1987](https://github.com/DGP-Studio/Snap.Hutao/issues/1987)
- **[Optimization]** Achievement management page achievement title and prompt now allow select and copy [#1726](https://github.com/DGP-Studio/Snap.Hutao/issues/1726)
- **[Optimization]** Achievement management search achievement now simultaneously filter achievement category [#1907](https://github.com/DGP-Studio/Snap.Hutao/issues/1907)
- **[Optimization]** Enhanced client stability

## 1.11.1

- **[New]** Notification icon right click menu added execute debug script command
- **[New]** Notification icon right click menu added administrator mode restart command [#1825](https://github.com/DGP-Studio/Snap.Hutao/issues/1825)
- **[Fix]** Update after first startup update log window now correct identify Hu Tao language option [#1900](https://github.com/DGP-Studio/Snap.Hutao/issues/1900)
- **[Fix]** Fixed startup game page game management function unable normal use issue
- **[Fix]** Fixed background option launcher background unable normal work issue [#1908](https://github.com/DGP-Studio/Snap.Hutao/issues/1908)
- **[Fix]** Fixed import UIGF v2.2 file time language not correct cause prompt `invalid item` issue [#1941](https://github.com/DGP-Studio/Snap.Hutao/issues/1941)
- **[Fix]** Fixed import UIGF v2.2 file dialog layout not correct issue
- **[Fix]** Fixed achievement management select achievement category time tick or untick achievement cause achievement category cancel select issue [#1946](https://github.com/DGP-Studio/Snap.Hutao/issues/1946)
- **[Optimization]** User button mouse hover at HoYoLAB user time hide HoYoLAB word [#1824](https://github.com/DGP-Studio/Snap.Hutao/issues/1824)
- **[Optimization]** Cultivation plan now correct identify Sumeru talent and weapon breakthrough material
- **[Optimization]** Adjusted unlock frame rate view range
- **[Optimization]** Optimized switch server time multi-thread download logic
- **[Optimization]** Optimized startup game page download and repair game function popup window UI

## 1.11.0

- **[New]** Real-time notes page added enduring expedition point display [#1841](https://github.com/DGP-Studio/Snap.Hutao/issues/1841)
- **[New]** [BETA] Startup game added game download/repair/update function
- **[Fix]** Fixed unable scan code login MiHoYo issue, removed scan code login entry, added mobile verification code login method [#1819](https://github.com/DGP-Studio/Snap.Hutao/issues/1819)
- **[Fix]** Fixed my character page character skill level cause display inconsistent due constellation add issue [#1838](https://github.com/DGP-Studio/Snap.Hutao/issues/1838)
- **[Fix]** Fixed homepage announcement not complete load time switch to other page cause crash issue [#1845](https://github.com/DGP-Studio/Snap.Hutao/issues/1845)
- **[Fix]** Fixed convert game server time read local package version info fail cause crash issue [#1851](https://github.com/DGP-Studio/Snap.Hutao/issues/1851)
- **[Fix]** Fixed international server get wish record display `verification key expired` issue [#1873](https://github.com/DGP-Studio/Snap.Hutao/issues/1873)
- **[Fix]** Fixed no login MiHoYo or HoYoLAB time navigate to my character/Spiral Abyss page unable continue operation issue [#1877](https://github.com/DGP-Studio/Snap.Hutao/issues/1877)
- **[Fix]** Fixed part device refresh real-time notes cause crash issue [#1893](https://github.com/DGP-Studio/Snap.Hutao/issues/1893)
- **[Fix]** Fixed homepage announcement not display, homepage announcement detail in dark mode part text color not correct issue
- **[Fix]** Fixed application inner background unable correct timing switch issue
- **[Optimization]** Adjusted application inner notification display position [#1832](https://github.com/DGP-Studio/Snap.Hutao/issues/1832)
- **[Optimization]** Optimized network request error application inner prompt information
- **[Optimization]** Optimized software update flow, now prompt user whether download update
- **[Optimization]** Optimized download update time experience, now can choose mirror download
- **[Optimization]** Optimized Hu Tao software update announcement display logic, no longer display low version update notification [#1015](https://github.com/DGP-Studio/Snap.Hutao/issues/1015)
- **[Optimization]** User button option in full client range will auto memory [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
- **[Optimization]** Enhanced client stability

## 1.10.7

- **[New]** My character page added export current character text info to clipboard function [#1497](https://github.com/DGP-Studio/Snap.Hutao/issues/1497)
- **[New]** Settings interface added UIGF 4 import export support, wish record removed UIGF 2 and UIGF 3 import export support
- **[Fix]** Fixed wish record page delete archive time not refresh view issue
- **[Fix]** Fixed real-time notes auto refresh default enable issue
- **[Fix]** Fixed webpage title not normal display when webpage width too narrow issue
- **[Fix]** Fixed HoYoLAB account unable add character and weapon in cultivation plan issue [#1810](https://github.com/DGP-Studio/Snap.Hutao/issues/1810)
- **[Fix]** Fixed unlock frame rate fail issue [#1820](https://github.com/DGP-Studio/Snap.Hutao/issues/1820)
- **[Optimization]** Optimized main window navigation interaction, now page not load complete time unable navigate to other page, now will display update log window in update after first startup
- **[Optimization]** Optimized application inner notification display method
- **[Optimization]** Optimized add to cultivation plan flow, now able choose save mode
- **[Optimization]** Optimized HTTP request information prompt [#1720](https://github.com/DGP-Studio/Snap.Hutao/issues/1720)

## 1.10.6

- **[Fix]** Fixed game path change cause unable startup Hu Tao issue [#1792](https://github.com/DGP-Studio/Snap.Hutao/issues/1792)
- **[Fix]** Fixed wish record refresh after page content not update issue [#1791](https://github.com/DGP-Studio/Snap.Hutao/issues/1791)
- **[Fix]** Fixed wish record refresh after if different from current UID cause crash issue [#1794](https://github.com/DGP-Studio/Snap.Hutao/issues/1794)
- **[Fix]** Fixed webpage window size not correct in scale not 100% display issue [#1795](https://github.com/DGP-Studio/Snap.Hutao/issues/1795)
- **[Fix]** Fixed startup game bind real-time notes UID cause crash issue
- **[Optimization]** Adjusted real-time notes expedition time display format [#1796](https://github.com/DGP-Studio/Snap.Hutao/issues/1796)

## 1.10.5

- Added injection unlock mode, classic mode invalid time can try this mode
- Webpage now display in separate window
- Fixed international server to official server conversion appear issue [#1750](https://github.com/DGP-Studio/Snap.Hutao/issues/1750)
- Fixed part screen record software may capture error window issue [#1771](https://github.com/DGP-Studio/Snap.Hutao/issues/1771)
- Fixed specific condition add HoYoLAB account cause program crash issue [#1774](https://github.com/DGP-Studio/Snap.Hutao/issues/1774)
- Fixed part control in deep color mode display error issue [#1633](https://github.com/DGP-Studio/Snap.Hutao/issues/1633)
- Fixed from Url protocol import achievement time unable normal display interface issue [#1763](https://github.com/DGP-Studio/Snap.Hutao/issues/1763)
- Fixed part situation unable normal display skill icon issue [#1784](https://github.com/DGP-Studio/Snap.Hutao/issues/1784)
- Fixed part activity announcement time error issue
- Fixed multiple element alignment issue
- Optimized part page display effect
- Refactored underlying code
- Other small changes

## 1.10.4

- **[New]** Spiral Abyss - Current Statistics / Character Profile / Weapon Profile Hu Tao database part added previous data comparison
- **[New]** Cultivation plan added get backpack material function [#1651](https://github.com/DGP-Studio/Snap.Hutao/issues/1651)
- **[New]** Added right click copy support for all pictures
- **[New]** User panel added display game character avatar function
- **[Fix]** Fixed unlock frame rate after file occupy cause unable convert game server issue [#1703](https://github.com/DGP-Studio/Snap.Hutao/issues/1703)
- **[Fix]** Fixed game startup after re open program unable correct match current game inner character issue [#865](https://github.com/DGP-Studio/Snap.Hutao/issues/865)
- **[Fix]** Fixed achievement page achievement statistics text too long be cut issue [#956](https://github.com/DGP-Studio/Snap.Hutao/issues/956)
- **[Fix]** Fixed part application start pull import achievement not display import popup issue
- **[Fix]** Fixed Spiral Abyss data upload after unable get Hu Tao cloud reward issue
- **[Fix]** Fixed real-time notes sometimes unable correct refresh quest progress issue
- **[Optimization]** Optimized part control display effect
- **[Optimization]** Changed window activation/close logic, now no longer hide already open window but direct close
- **[Optimization]** Adjusted startup game - game resource package list display UI
- **[Optimization]** Weapon profile page use game inner sort
- **[Optimization]** Optimized part text display effect
- **[Optimization]** Optimized part page load speed
- **[Optimization]** Other performance improvement and QA test issue fix

## 1.10.3

- **[New]** Notification area icon now support left click open menu [#1656](https://github.com/DGP-Studio/Snap.Hutao/issues/1656)
- **[Fix]** Fixed game launcher frame rate unlock function invalid in game 4.7 version issue [#1675](https://github.com/DGP-Studio/Snap.Hutao/issues/1675)
- **[Fix]** Fixed Windows 10 system close main window not correct popup tray icon notification issue
- **[Fix]** Fixed Windows 10 system sometimes unable correct get tray icon position cause crash issue
- **[Fix]** Fixed adjust window to smaller than initial size not be memory issue [#1657](https://github.com/DGP-Studio/Snap.Hutao/issues/1657)
- **[Fix]** Fixed part scene application redirection fail issue
- **[Fix]** Fixed part scene startup game window data expire issue
- **[Fix]** Fixed cultivation plan all material in Sunday highlight issue
- **[Fix]** Fixed guide window can maximize issue
- **[Fix]** Fixed game screenshot folder not exist unable open issue
- **[Fix]** Fixed development version and official version use same notification identifier cause repeat activation issue <Badge text="Developer Function" type="tip" />
- **[Optimization]** Temporarily disabled user panel MiHoYo webpage login entry
- **[Optimization]** Removed task bar and start menu Hu Tao icon right click menu task list
- **[Optimization]** Optimized application inner notification style [#1650](https://github.com/DGP-Studio/Snap.Hutao/issues/1650)
- **[Optimization]** Optimized my character numerical panel style
- **[Optimization]** Optimized real-time notes setting style
- **[Optimization]** Optimized homepage game announcement picture brightness in deep color mode
- **[Optimization]** Optimized wish record global wish statistics picture brightness in deep color mode
- **[Optimization]** Optimized part text display effect
- **[Optimization]** Optimized part page load speed
- **[Optimization]** Other performance improvement
- **[🌏 Localization]** Client added Vietnamese

## 1.10.2

- **[New]** Added retry mechanism for static resource download
- **[New]** Real-time notes added divine task progress view [#1203](https://github.com/DGP-Studio/Snap.Hutao/issues/1203)
- **[New]** Cultivation plan in Sunday time will highlight all related material [#1607](https://github.com/DGP-Studio/Snap.Hutao/issues/1607)
- **[New]** Added option to display icon in system notification area (background tray)
  - Settings page added notification area icon switch
  - Enable notification area icon after application behavior will change
  - **[Optimization]** After close all window will not exit, only exit when click exit in icon right click menu will end process
  - **[Optimization]** When close window if icon in fold area will trigger prompt
  - **[Optimization/Important Change]** Real-time notes timing refresh now no longer support no background run time trigger (Windows timing task refresh method will be deleted)
  - **[Optimization]** Real-time notes refresh switch/refresh time setting no longer require administrator mode
- **[Fix]** Fixed character profile/weapon profile/monster profile/achievement management interface in default view not list time, switch to list view time picture may not load issue
- **[Fix]** Fixed due check system proxy setting cause occasional unable normal exit program issue
- **[Fix]** Fixed backpack item switch cultivation plan time not follow switch issue [#1609](https://github.com/DGP-Studio/Snap.Hutao/issues/1609)
- **[Fix]** Fixed modify single achievement complete status time error cancel select achievement category issue [#1631](https://github.com/DGP-Studio/Snap.Hutao/issues/1631)
- **[Fix]** Fixed hotkey setting near title bar time open auxiliary button panel be title bar block issue [#1632](https://github.com/DGP-Studio/Snap.Hutao/issues/1632)
- **[Fix]** Fixed part new announcement start/end time not correct match issue [#1613](https://github.com/DGP-Studio/Snap.Hutao/issues/1613)
- **[Fix]** Fixed wish record page statistics page sign wish data proportion display as NaN issue [#1588](https://github.com/DGP-Studio/Snap.Hutao/issues/1588)
- **[Optimization]** Removed task bar icon right click menu task list
- **[Optimization]** Added cultivation plan delete secondary confirm dialog [#1608](https://github.com/DGP-Studio/Snap.Hutao/issues/1608)
- **[Optimization]** Added prompt for HoYoLAB 2001 error code [#1542](https://github.com/DGP-Studio/Snap.Hutao/issues/1542)
- **[Optimization]** In guide interface draw quality choose page sign added draw quality comparison [#1595](https://github.com/DGP-Studio/Snap.Hutao/issues/1595)
- **[Optimization]** Non-administrator mode disable auto click hotkey setting
- **[Optimization]** Other performance improvement
- **[🌏 Localization]** Client added French

## 1.10.1 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed when Discord client not start time, Hu Tao crash issue [#1134](https://github.com/DGP-Studio/Snap.Hutao/issues/1134)
- **[Fix]** Fixed wish record time not correct issue [#1138](https://github.com/DGP-Studio/Snap.Hutao/issues/1138)
- **[Optimization]** Updated Hu Tao cloud service related text
- **[Optimization]** Optimized game startup and end Discord Activity track performance
- **[Optimization]** Adjusted character/weapon profile/my character page, zoom window time content no longer high frequency flicker
- **[Optimization]** Optimized startup game page switch server time performance, now use multi-thread slice download resource file
- **[Optimization]** Optimized startup game page switch server time logic, now advance check corresponding directory have needed file permission

## 1.10.0

- **[New]** Added picture quality option, user now can choose occupy storage space obvious smaller and close lossless picture quality [#1430](https://github.com/DGP-Studio/Snap.Hutao/issues/1430)
- **[New]** Adjusted check update flow, now prompt user whether download update, added update log quick entry in update prompt [#1550](https://github.com/DGP-Studio/Snap.Hutao/issues/1550)
- **[New]** In wish record character and weapon tab, display never draw item [#1355](https://github.com/DGP-Studio/Snap.Hutao/issues/1355)
- **[New]** Added full new software update handle logic
- **[New]** Added achievement record page achievement correspond version number data
- **[New]** Spiral Abyss interface added monster wave data (data source [@妮可少女](https://space.bilibili.com/3537104994831140))
- **[New]** In settings page added Microsoft Store evaluation button [#876](https://github.com/DGP-Studio/Snap.Hutao/issues/876)
- **[New]** In user button upper added new document button, user click will jump to current interface correspond function document [#875](https://github.com/DGP-Studio/Snap.Hutao/issues/875)
- **[Fix]** Fixed homepage launch game card account blank situation [#924](https://github.com/DGP-Studio/Snap.Hutao/issues/924)
- **[Fix]** Fixed achievement management unable save manual cancel record issue [#880](https://github.com/DGP-Studio/Snap.Hutao/issues/880)
- **[Fix]** Fixed real-time notes interface switch account after unable switch pending verification account issue
- **[Fix]** Fixed Spiral Abyss sometimes unable correct refresh detailed data issue
- **[Optimization]** Optimized part error statement, added solve prompt [#930](https://github.com/DGP-Studio/Snap.Hutao/issues/930)
- **[Optimization]** Homepage Hu Tao push notification now allow user copy [#929](https://github.com/DGP-Studio/Snap.Hutao/issues/929)
- **[Optimization]** **Spiral Abyss statistics page merge move to Spiral Abyss record page under**
- **[Optimization]** Adjusted multiple time display format

## 1.9.9

- **[New]** Wish record page global statistics page sign added chronicle wish column
- **[Fix]** Fixed wish record page cache refresh invalid issue
- **[Fix]** Fixed Chinese Traditional unable correct load metadata issue

## 1.9.8

- **[New]** Added UIGF v2.3 data format export wish record
- **[Fix]** Fixed frame rate unlock invalid issue [#733](https://github.com/DGP-Studio/Snap.Hutao/issues/733)
- **[Optimization]** In non-administrator mode run program time, administrator mode have require function will have text prompt
- **[Optimization]** HoYoLAB support
- **[Optimization]** Internationalization support

## 1.9.7

- **[New]** In advanced launcher added with [Better Genshin Impact](https://bgi.huiyadan.com/) program linkage startup function, user now can through Snap Hutao startup game time, auto startup BGI [#1388](https://github.com/DGP-Studio/Snap.Hutao/issues/1388)
- **[New]** Added multiple client background picture source option, include:
  - No background picture (default option)
  - Local random picture
  - Bing daily picture
  - Hu Tao daily picture
  - Official launcher background picture
- **[Fix]** Fixed when Discord with administrator permission run, use ordinary permission startup Hu Tao time, Hu Tao crash issue [#1400](https://github.com/DGP-Studio/Snap.Hutao/issues/1400)
- **[Fix]** Fixed administrator mode drag sort cause client crash issue [#1379](https://github.com/DGP-Studio/Snap.Hutao/issues/1379)
- **[Fix]** Fixed homepage game announcement slide to bottom cause announcement disappear issue [#1365](https://github.com/DGP-Studio/Snap.Hutao/issues/1365)
- **[Fix]** Fixed character profile part text display abnormal issue again [#1316](https://github.com/DGP-Studio/Snap.Hutao/issues/1316)
- **[Fix]** Fixed feedback center search result not perform HTML decode issue [#1391](https://github.com/DGP-Studio/Snap.Hutao/issues/1391)
- **[Optimization]** Optimized WIKI search interface [#1475](https://github.com/DGP-Studio/Snap.Hutao/pull/1475)
- **[Optimization]** Optimized WIKI function search result empty time interface [#1479](https://github.com/DGP-Studio/Snap.Hutao/pull/1479)
- **[Optimization]** Optimized cultivation plan collected complete item display [#1513](https://github.com/DGP-Studio/Snap.Hutao/pull/1513)
- **[Optimization]** Optimized cultivation plan page waterfall layout fluency and stability
- **[Optimization]** Optimized cultivation plan page backpack material and material statistics page default sort, now for quantity enough item will display complete mark [#1510](https://github.com/DGP-Studio/Snap.Hutao/pull/1510)
- **[Optimization]** Optimized wish record page statistics page bottom scroll bar alignment
- **[Optimization]** Optimized wish record page global statistics page item display logic

## 1.9.6

- **[New]** Homepage dashboard, include Hu Tao cloud account, game launcher, wish record, achievement statistics and real-time notes
- **[New]** Enable new information bar function will auto hide application inner notification
- **[New]** Hide official TapTap account login server version
- **[Fix]** Fixed channel server real-time notes unable get data issue
- **[Fix]** Fixed HoYoLAB account login issue
- **[Fix]** Fixed get draw record process value empty time produce issue
- **[Optimization]** **Project refactor, software performance improve 20%**
- **[Optimization]** Added support WIKI function localization translation
- **[Optimization]** Added support international server payment channel switch
    - Include HoYoverse default, Epic and Google Pay
  - Enable frame rate unlock after, can modify frame rate upper limit in game startup time and immediate effective

## 1.9.5

- **[New]** Game launcher resource download added resource link copy button [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
- **[New]** List/grid view switch status global memory [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
- **[Fix]** Fixed static resource download page download static resource package unable normal all complete issue [#1242](https://github.com/DGP-Studio/Snap.Hutao/issues/1242)
- **[Optimization]** Optimized game launcher resource download navigation button change to link copy button [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
- **[Optimization]** Optimized Hu Tao software update announcement display logic, no longer display low version update notification [#1015](https://github.com/DGP-Studio/Snap.Hutao/issues/1015)
- **[Optimization]** User button option in full client range will auto memory [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
- **[Optimization]** Enhanced client stability

## 1.9.4 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed Bilibili server user enter main interface crash issue

## 1.9.3

- **[Fix]** Fixed new install user initial enter main interface crash issue

## 1.9.2

- **[New]** Wish record page Hu Tao cloud service added service expire time and developer prompt
- **[New]** Wish record page added statistics page, can view wish data statistics from Hu Tao cloud
- **[Fix]** Fixed wish record page cache refresh invalid issue
- **[Fix]** Fixed HoYoLAB account login issue
- **[Optimization]** Redesigned static file get flow

## 1.9.0

::: important Important Change
Snap Hutao in recent obtained SignPath foundation sponsor code signature certificate. From 1.9.0 version start, we will use full new certificate for Snap Hutao installation package signature.

Have new signature program will incompatible with old version, user in from 1.8.4 and older version update to 1.9.0 and newer version time, need first uninstall old version then full new install new version client. Due Hu Tao data directory design, user will not lose any important data.

You can read [1.9.0 version important change detail](../blog/version-1-9-0-breaking-changes.md) article to more deep understand this version update signature change on Snap Hutao project change.
:::

- **[New]** Game launcher now support multiple game path [#525](https://github.com/DGP-Studio/Snap.Hutao/issues/526)
- **[New]** In user panel added MiHoYo scan code login method [#870](https://github.com/DGP-Studio/Snap.Hutao/issues/870)
- **[New]** Client added auto detect network status, and display result in settings page [#1116](https://github.com/DGP-Studio/Snap.Hutao/pull/1161)
- **[New]** In game launcher added touch screen mode startup original god option [#1173](https://github.com/DGP-Studio/Snap.Hutao/issues/1173)
- **[New]** In settings added modify game announcement source option, now user can choose international server announcement and according client language display correspond language announcement [#1112](https://github.com/DGP-Studio/Snap.Hutao/issues/1112)
    - Only when Crowdin translation library have correspond language regular expression time can correct display announcement (currently confirmed support Simplified Chinese, Traditional Chinese and English)
  - In settings added enable console option, user now can through enable this option in troubleshoot problem time get more error prompt
  - Added full new software update handle logic
- **[Fix]** Fixed MiHoYo interface get character info produce `5003` error issue [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
- **[Fix]** Fixed game launcher frame rate unlock function invalid in game 4.3 version issue [#1190](https://github.com/DGP-Studio/Snap.Hutao/issues/1190)
- **[Fix]** Fixed specific situation MiHoYo announcement countdown data error issue
- **[Fix]** Fixed wrong PowerShell statement
- **[Optimization]** Optimized cultivation calculate error prompt statement, make error prompt more clear [#1163](https://github.com/DGP-Studio/Snap.Hutao/issues/1163)
- **[Optimization]** Optimized cultivation calculate interface, now will display each specific target [#1016](https://github.com/DGP-Studio/Snap.Hutao/issues/1016)
- **[Optimization]** Optimized main interface Hu Tao account info display, no longer display user email [#1160](https://github.com/DGP-Studio/Snap.Hutao/issues/1160)
- **[Optimization]** Updated Hu Tao API error prompt
- **[Optimization]** Optimized settings page layout, user now can view Snap Hutao produce data and cache directory size in settings
- **[Optimization]** Removed Microsoft Store related button
- **[Optimization]** Other large underlying refactor

## 1.8.5 <Badge text="Test Version" type="info" />

- Tested signature replace bring change

## 1.8.4 <Badge text="Latest Version" type="tip" />

- **[Fix]** Fixed daily sign prompt activity expired issue
- **[Fix]** Fixed unable select `pwsh.exe` as PowerShell host issue [#1145](https://github.com/DGP-Studio/Snap.Hutao/issues/1145) [#1153](https://github.com/DGP-Studio/Snap.Hutao/issues/1153)
- **[Fix]** Fixed specific situation other program pull up Hu Tao appear text language not correct issue [#1147](https://github.com/DGP-Studio/Snap.Hutao/issues/1147)
- **[Fix]** Fixed created desktop shortcut unable find PowerShell issue [#1151](https://github.com/DGP-Studio/Snap.Hutao/issues/1151) [#1154](https://github.com/DGP-Studio/Snap.Hutao/issues/1154)
- **[Optimization]** Optimized startup time experience
  - Startup time migration database failure will popup prompt
  - Close or restart time will wait startup initialization complete

## 1.8.3 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed HoYoverse login page not correct issue [#1007](https://github.com/DGP-Studio/Snap.Hutao/issues/1007)
- **[Fix]** Fixed wish record time not correct issue [#1138](https://github.com/DGP-Studio/Snap.Hutao/issues/1138)
- **[Optimization]** Updated Hu Tao cloud service related text
- **[Optimization]** Optimized game startup and end Discord Activity track performance
- **[Optimization]** Adjusted character/weapon profile/my character page, zoom window time content no longer high frequency flicker
- **[Optimization]** Optimized startup game page switch server time performance, now use multi-thread slice download resource file
- **[Optimization]** Optimized startup game page switch server time logic, now advance check corresponding directory have needed file permission

## 1.8.1

- **[New]** Startup game added Discord Activity sync function, enable after in play time will auto sync status [#1082](https://github.com/DGP-Studio/Snap.Hutao/issues/1082)
- **[Fix]** Fixed from wish record page Hu Tao cloud panel navigate to Spiral Abyss record page not sync navigation bar option issue [#1116](https://github.com/DGP-Studio/Snap.Hutao/issues/1116)
- **[Fix]** Fixed auto click function unable bind Alt key issue [#1119](https://github.com/DGP-Studio/Snap.Hutao/issues/1119)
- **[Fix]** Fixed cultivation plan switch plan after part item unable refresh issue [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
- **[Fix]** Fixed achievement management only can import name empty json file issue [#1124](https://github.com/DGP-Studio/Snap.Hutao/issues/1124)
- **[Fix]** Fixed startup game page resource download page sign complete package link invalid, now replace to segment file link [#1126](https://github.com/DGP-Studio/Snap.Hutao/issues/1126)
- **[Fix]** Fixed real-time notes notification prompt content not correct, notification will repeat popup, and notification will ignore user set silent prompt issue [#1123](https://github.com/DGP-Studio/Snap.Hutao/issues/1123)
- **[Optimization]** For device fingerprint/CookieToken introduced timeout refresh mechanism, now no need often in user panel click refresh [#1121](https://github.com/DGP-Studio/Snap.Hutao/issues/1121)
- **[Optimization]** Redesigned character profile page UI
- **[Optimization]** Now in no login or no Hu Tao cloud service duration time enter wish record page will report error
- **[Optimization]** Now auto find game path time will judge executable file exist
- **[Optimization]** Cultivation plan page material statistics page sign resin estimate function now will memory select world level
- **[Optimization]** Cultivation plan page material item now will line display talent level
- **[Fix]** Fixed real-time notes not correct send notification issue
- **[Fix]** Fixed part scale real-time notes role exploration part may layout abnormal issue
- **[Fix]** Fixed part situation WebView unable normal load issue
- **[Fix]** Fixed WebView load complete before close window cause stuck issue [#2544](https://github.com/DGP-Studio/Snap.Hutao/issues/2544)
- **[Fix]** Fixed part device unable correct set language issue
- **[Fix]** Fixed part picture unable normal display issue

## 1.8.0

- **[New]** Upgrade .NET version to 8 [#1103](https://github.com/DGP-Studio/Snap.Hutao/issues/1103)
- **[Fix]** Fixed Hu Tao Passport register/logout/reset password prompt not translate issue [#1087](https://github.com/DGP-Studio/Snap.Hutao/issues/1087) by @Tangweirui2021
- **[Fix]** Fixed cultivation plan page material item list first item switch plan after unable refresh issue [#1079](https://github.com/DGP-Studio/Snap.Hutao/issues/1079)
- **[Fix]** Fixed unable get international server wish record URL issue [#1081](https://github.com/DGP-Studio/Snap.Hutao/issues/1081)
- **[Fix]** Fixed specific condition error log unable normal get and upload issue
- **[Fix]** Fixed export wish record time not correct issue
- **[Fix]** Fixed MiHoYo webpage popup data abnormal issue
- **[Optimization]** Optimized metadata initialization add more detailed failure info

## 1.7.18 <Badge text="Test Version" type="info" />

- Tested .NET 8 in WindowsApp application install flow

## 1.7.17

- **[Fix]** Fixed cultivation plan item inner item list unable scroll issue [#1068](https://github.com/DGP-Studio/Snap.Hutao/issues/1068)
- **[Fix]** Fixed get user MiHoYo data time return `5003` error issue [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
- **[Fix]** Fixed wish record page cache refresh unable normal effective issue [#2413](https://github.com/DGP-Studio/Snap.Hutao/issues/2413)
- **[Fix]** Fixed homepage enable card number not full one row unable normal display issue [#2416](https://github.com/DGP-Studio/Snap.Hutao/issues/2416)
- **[Fix]** Fixed 5.2 after high fate characters unable add to cultivation plan issue [#2422](https://github.com/DGP-Studio/Snap.Hutao/issues/2422)
- **[Fix]** Fixed target folder not exist unable change data folder issue [#2425](https://github.com/DGP-Studio/Snap.Hutao/issues/2425)
- **[Fix]** Fixed some users due file encryption unable change data folder issue [#2433](https://github.com/DGP-Studio/Snap.Hutao/issues/2433)
- **[Fix]** Fixed popup dialog time unable open task bar icon menu issue [#2434](https://github.com/DGP-Studio/Snap.Hutao/issues/2434)
- **[Optimization]** Now need administrator permission to unloopback
- **[Optimization]** Optimized Embedded Yae data import experience
  * Changed related UI, need administrator permission to use
  * Now need open injection function switch in startup game page to use related functions
  * Now will use account login configured in startup game page

## 1.7.16

- **[New]** Startup game page for startup parameter added total switch [#1065](https://github.com/DGP-Studio/Snap.Hutao/issues/1065)
- **[New]** Startup game page added quick select resolution drop down box [#1062](https://github.com/DGP-Studio/Snap.Hutao/issues/1062)
- **[New]** Added support [Starward](https://github.com/Scighost/Starward) client, allow user achieve game time statistics [#1071](https://github.com/DGP-Studio/Snap.Hutao/issues/1071)
- **[New]** Game launcher resource download added resource link copy button [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
- **[New]** List/grid view switch status global memory [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
- **[Fix]** Fixed MiHoYo small tool page unable normal jump issue
- **[Fix]** Fixed my character function unable normal display character level skill issue [#1069](https://github.com/DGP-Studio/Snap.Hutao/issues/1069)
- **[Fix]** Fixed unable correct locate to game cache directory issue
- **[Fix]** Fixed wish record page history/role/weapon page sign item number mask radius not correct issue
- **[Fix]** Fixed non UTC+08 time zone homepage announcement time may not correct issue
- **[Optimization]** Startup game page resource download navigation button change to link copy button [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
- **[Optimization]** Optimized Hu Tao software update announcement display logic, no longer display low version update notification [#1015](https://github.com/DGP-Studio/Snap.Hutao/issues/1015)
- **[Optimization]** User button option in full client range will auto memory [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
- **[Optimization]** Enhanced client stability

## 1.7.15

- **[New]** Added from Hu Tao cloud restore draw record to local new archive option [#886](https://github.com/DGP-Studio/Snap.Hutao/issues/886)
- **[Fix]** Fixed game startup item can fill illegal value issue, added switch for part startup parameter [#1061](https://github.com/DGP-Studio/Snap.Hutao/issues/1052)
- **[Fix]** Fixed unable in client register Hu Tao cloud account issue [#1059](https://github.com/DGP-Studio/Snap.Hutao/issues/1059)
- **[Fix]** Fixed set real-time notes Webhook Url after may cause notification function not normal issue
- **[Optimization]** Optimized Hu Tao cloud service prompt text added internationalization support
- **[Optimization]** Redesigned Hu Tao Passport page UI, now integrate in settings page [#911](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
- **[Optimization]** Redesigned startup game page UI
- **[Optimization]** Now user can choose game startup parameter in advanced launcher

## 1.7.14 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed part function open dialog time crash issue [#1052](https://github.com/DGP-Studio/Snap.Hutao/issues/1052) [#1054](https://github.com/DGP-Studio/Snap.Hutao/issues/1054)

## 1.7.13

- **[New]** Added real-time notes data forward Webhook option [#431](https://github.com/DGP-Studio/Snap.Hutao/issues/431)
- **[New]** Display wish record range time in wish record page [#899](https://github.com/DGP-Studio/Snap.Hutao/issues/899)
- **[New]** Introduced enduring expedition point detail view for real-time notes page, can view current expedition point get situation [#1021](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
- **[Fix]** Fixed quick startup window startup game throw `parameter error` issue [#925](https://github.com/DGP-Studio/Snap.Hutao/issues/925)
- **[Fix]** Fixed advanced launcher interface flash issue [#1035](https://github.com/DGP-Studio/Snap.Hutao/issues/1035)
- **[Fix]** Fixed embed webpage in MiHoYo page unable return issue [#1023](https://github.com/DGP-Studio/Snap.Hutao/issues/1023)
- **[Fix]** Fixed B server convert server appear issue [#1041](https://github.com/DGP-Studio/Snap.Hutao/issues/1041)
- **[Fix]** Fixed unable correct detect game running issue
- **[Fix]** Fixed switch Hu Tao Passport after wish record Hu Tao cloud integration unable correct reflect issue [#903](https://github.com/DGP-Studio/Snap.Hutao/issues/903)
- **[Optimization]** For Spiral Abyss record/ upload data introduced verification retry mechanism
  - No use no sense verification user can open my character webpage view in character panel manual verify after retry

## 1.7.11 <Badge text="hotfix" type="warning" />

- **[Fix]** Fixed game launcher window setting error (hotfix)

## 1.7.10

- **[New]** Added administrator mode F8 mouse click function
  - In upcoming original god 4.1 and 4.2 version, this function can help skip plot part you not like
- **[Fix]** Fixed wish record page global statistics page sign chronicle wish data proportion display as NaN issue [#1588](https://github.com/DGP-Studio/Snap.Hutao/issues/1588)
- **[Fix]** Fixed part device copy application inner file prompt unable encrypt specified file issue
  - This issue previously caused
    - Unable normal create desktop shortcut
    - Unable normal unlock game frame rate
- **[Fix]** Fixed startup game page download game time CPU occupy abnormal issue [#1964](https://github.com/DGP-Studio/Snap.Hutao/issues/1964)
- **[Fix]** Fixed update game not effective issue
- **[Fix]** Fixed my character page grid view switch to no artifact character cause program crash issue [#1954](https://github.com/DGP-Studio/Snap.Hutao/issues/1954)
- **[Fix]** Fixed real-time notes request fail code -1 issue
- **[Fix]** Fixed part device achievement management page unable normal switch archive issue [#1987](https://github.com/DGP-Studio/Snap.Hutao/issues/1987)
- **[Optimization]** Achievement management page achievement title and prompt now allow select and copy [#1726](https://github.com/DGP-Studio/Snap.Hutao/issues/1726)
- **[Optimization]** Achievement management search achievement now simultaneously filter achievement category [#1907](https://github.com/DGP-Studio/Snap.Hutao/issues/1907)
- **[Optimization]** Enhanced client stability

## 1.7.9

- **[Fix]** Fixed exit program after display resolution change after unable with correct window size startup issue
- **[Fix]** Fixed MiHoYo Passport page unable correct login issue [#1005](https://github.com/DGP-Studio/Snap.Hutao/issues/1005)
- **[Fix]** Fixed HoYoverse login page not correct issue [#1007](https://github.com/DGP-Studio/Snap.Hutao/issues/1007)
- **[Fix]** Fixed 1.7.7 version unable correct upload crash log issue
- **[Fix]** Fixed Spiral Abyss page current page sign upper field page sign list middle upper field times too long may unable normal display issue [#1008](https://github.com/DGP-Studio/Snap.Hutao/issues/1008)

## 1.7.7

- Added card shadow in following location to optimize visual effect
  - Dashboard and activity announcement
  - Advanced launcher resource download page sign
  - Wish record overview page sign
  - Wish record history page sign detail
  - Wish record statistics page sign
  - Real-time notes card
  - My character list view detail
  - Character WIKI illustration frame
  - Weapon WIKI illustration frame
- **[Fix]** Fixed grid view top margin not correct issue
- **[Fix]** Fixed multiple cause crash issue
- **[Fix]** Fixed unable normal convert official/Bilibili server issue
- **[Optimization]** Optimized part control display effect
- **[Optimization]** Changed window activation/close logic, now no longer hide already open window but direct close
- **[Optimization]** Adjusted startup game - game resource package list display UI
- **[Optimization]** Weapon profile page use game inner sort
- **[Optimization]** Optimized part text display effect
- **[Optimization]** Optimized part page load speed
- **[Optimization]** Other performance improvement and QA test issue fix

## 1.7.6

- **[New]** Added keyboard F key auto press function, can enable and configure hotkey in settings page
- **[Fix]** Fixed startup game interface load time no any game path might cause crash issue

## 1.7.5

- **[New]** Achievement record page added achievement correspond version number data
- **[New]** Spiral Abyss interface added monster wave data (data source [@妮可少女](https://space.bilibili.com/3537104994831140))
- **[New]** In settings page added Microsoft Store evaluation button [#876](https://github.com/DGP-Studio/Snap.Hutao/issues/876)
- **[New]** In user button upper added new document button, user click will jump to current interface correspond function document [#875](https://github.com/DGP-Studio/Snap.Hutao/issues/875)
- **[Fix]** Fixed homepage launch game card account blank situation [#924](https://github.com/DGP-Studio/Snap.Hutao/issues/924)
- **[Fix]** Fixed achievement management unable save manual cancel record issue [#880](https://github.com/DGP-Studio/Snap.Hutao/issues/880)
- **[Fix]** Fixed real-time notes interface switch account after unable switch pending verification account issue
- **[Fix]** Fixed Spiral Abyss sometimes unable correct refresh detailed data issue
- **[Optimization]** Optimized part error statement, added solve prompt [#930](https://github.com/DGP-Studio/Snap.Hutao/issues/930)
- **[Optimization]** Homepage Hu Tao push notification now allow user copy [#929](https://github.com/DGP-Studio/Snap.Hutao/issues/929)
- **[Optimization]** **Spiral Abyss statistics page merge move to Spiral Abyss record page under**
- **[Optimization]** Adjusted multiple time display format

## 1.7.4

- **[New]** Startup game added custom quick switch resolution
- **[New]** Wish record card pool timing added card pool history record
- **[New]** Cultivation plan added resin estimate [#323](https://github.com/DGP-Studio/Snap.Hutao/issues/323) [#1540](https://github.com/DGP-Studio/Snap.Hutao/issues/1540)
- **[Fix]** Fixed switch theme time might not trigger background change issue
- **[Fix]** Fixed part element theme color display error in deep color mode issue
- **[Fix]** Fixed possible inject metadata initialization vulnerability [#2240](https://github.com/DGP-Studio/Snap.Hutao/issues/2240)
- **[Fix]** Fixed part situation unable read local game version issue [#2251](https://github.com/DGP-Studio/Snap.Hutao/issues/2251)
- **[Fix]** Fixed international server unable refresh wish record issue [#2252](https://github.com/DGP-Studio/Snap.Hutao/issues/2252)
- **[Fix]** Fixed cultivation plan material calculate might error issue
- **[Fix]** Fixed compact webpage window transparency setting not effective issue [#2258](https://github.com/DGP-Studio/Snap.Hutao/issues/2258)
- **[Fix]** Fixed part system down from tray menu exit Hu Tao time exist buffer overflow issue
- **[Optimization]** Startup game page save same name account now will replace instead new
- **[Optimization]** Cultivation plan now try get more accurate backpack material quantity
- **[Optimization]** Optimized Hu Tao volume

## 1.7.3

- **[Fix]** Fixed HoYoverse webpage login invalid issue
- **[Fix]** Fixed wish record time not correct issue [#1138](https://github.com/DGP-Studio/Snap.Hutao/issues/1138)
- **[Optimization]** Updated Hu Tao cloud service related text
- **[Optimization]** Optimized game startup and end Discord Activity track performance
- **[Optimization]** Adjusted character/weapon profile/my character page, zoom window time content no longer high frequency flicker
- **[Optimization]** Optimized startup game page switch server time performance, now use multi-thread slice download resource file
- **[Optimization]** Optimized startup game page switch server time logic, now advance check corresponding directory have needed file permission

## 1.7.2

- **[Fix]** Fixed wish record page cache refresh invalid issue
- **[Fix]** Fixed HoYoLAB account login issue
- **[Optimization]** Redesigned static file get flow

## 1.7.0

- Added guide page, in first startup Hu Tao time will guide user use Hu Tao
  - Guide user select language
  - Guide user confirm terms
  - Guide user install Segoe Fluent Icons font and WebView2 runtime
  - Guide user download static resource
- Hu Tao main interface
  - Adjusted navigation bar icon style
  - Fixed adjust window size time, may cause unexpected crash issue
- User panel
  - Adjusted user panel style
  - Added button to claim sign reward for current user
  - Fixed part situation startup time unable correct select current user and role issue
- Homepage dashboard
  - Added Hu Tao software announcement
  - Real-time notes card added refresh time prompt
  - Fixed real-time notes card sometimes unable correct load and cause stuck/crash issue
  - Part activity announcement start/end time correct
  - Fixed part announcement in view detail time unable correct display some paragraph issue
- Startup game (advanced launcher)
  - Command bar added game status indication text
  - Fixed unable convert server issue
  - Adjusted convert server logic, allow retry after download resource fail
  - Adjusted unlock frame rate logic, will auto end game process after unlock fail
  - Removed multi-client function
  - Fixed resource download complete package file no name and unable jump download issue
- Wish record
  - Adjusted overview page card style, item become larger, folded multiple text
  - Fixed no login or no Hu Tao cloud service duration time enter wish record page report error issue
  - Fixed overview page card list view item draw number progress bar progress and color display not correct issue
  - Fixed Hu Tao cloud no duration upload reward text error issue
  - Fixed able import contain not correct item UIGF format data issue
  - Fixed unable correct locate to game cache directory issue
  - Optimized when item quantity many time page load slow issue
- Achievement record
  - Fixed list/grid view select achievement category after switch to opposite view selected item may not correct display issue
  - Optimized page load speed
- Real-time notes
  - Adjusted verification current user and role button style
  - Adjusted notification setting view style
  - Added close real-time notes auto refresh entry (only non-administrator mode can switch, users who entered real-time notes in administrator mode may unable correct switch this option)
  - Adjusted real-time notes style
  - Adjusted not unlock cave sky and not own param quant variation instrument text prompt
  - Real-time notes card added refresh time prompt
- My character
  - Adjusted list view left character list width
  - Command bar added refresh time display switch button
  - Added each refresh method refresh time for character
  - Character detail artifact added substat reinforcement times display
- Cultivation plan
  - Fixed from cultivation plan page switch to other page may cause selected status save abnormal issue
- Character profile
  - Fixed list/grid view select character after switch to opposite view selected item may not correct display issue
- Weapon profile
  - Fixed list/grid view select weapon after switch to opposite view selected item may not correct display issue
  - Added weapon cultivation material quick check chapter
- Monster profile
  - Fixed list/grid view select monster after switch to opposite view selected item may not correct display issue
- Settings
  - Fixed unable delete game cache directory issue
  - Added Geetest verification interface config function, through correct config this option to no sense verification MiHoYo request
- Optimized program frame rate performance
- Optimized multi-thread scheduling memory occupation
- Optimized item icon load speed
- Adjusted database read write method, optimize memory occupation and response speed
- Adjusted -100 and -10001 return code text prompt, help user better understand its meaning
- Other small changes

## 1.6.6

- **[New]** Wish record page Hu Tao cloud service added service expire time and developer prompt
- **[Fix]** Fixed wish record page cache refresh invalid issue
- **[Fix]** Fixed Chinese Traditional unable correct load metadata issue

## 1.6.5

- **[New]** Japanese option; community user now can contribute Japanese translation in [translate.hut.ao](https://translate.hut.ao/)
- **[Fix]** Fixed unable add weapon cultivation plan issue [Issue #745](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
- **[Fix]** Fixed frame rate unlock invalid in some users issue [Issue #747](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
- **[Optimization]** Optimized cultivation plan material statistics sort [Issue #749](https://github.com/DGP-Studio/Snap.Hutao/issues/749)

## 1.6.4

- **[New]** Export wish record with [UIGF v2.3](https://uigf.org/zh/standards/UIGF.html) data format
- **[Fix]** Fixed frame rate unlock invalid issue [#733](https://github.com/DGP-Studio/Snap.Hutao/issues/733)
- **[Optimization]** In non-administrator mode run program time, administrator mode have require function will have text prompt
- **[Optimization]** HoYoLAB support
- **[Optimization]** Internationalization support

## 1.6.3

- **[New]** Homepage dashboard, include Hu Tao cloud account, game launcher, wish record, achievement statistics and real-time notes
- **[New]** Enable new information bar function will auto hide application inner notification
- **[New]** Hide official TapTap account login server version
- **[Fix]** Fixed upload Spiral Abyss data after unable get Hu Tao cloud reward issue
- **[Fix]** Fixed HoYoLAB account sign issue
- **[Fix]** Fixed get draw record process value empty time produce issue
- **[Optimization]** **Project refactor, software performance improve 20%**
- **[Optimization]** Added support WIKI function localization translation
- **[Optimization]** Added support international server payment channel switch
    - Include HoYoverse default, Epic and Google Pay
  - Enable frame rate unlock after, can modify frame rate upper limit in game startup time and immediate effective

## 1.6.2

- **[New]** Wish record cloud sync based Hu Tao account system
  - Current in Afdian sponsor user and test user will get correspond duration cloud sync permission
  - This function will continue optimize in next several 1.6 version
- **[Fix]** Fixed channel server real-time notes unable get data issue
- **[Fix]** Fixed HoYoLAB account login issue
- **[Optimization]** Redesigned static file get flow

## 1.6.0

- **[New]** Hu Tao account register and login basic function
- **[New]** HoYoLAB account login and add its support in following function
    - Webpage login and SToken Cookie login
    - Spiral Abyss record
    - Daily sign
    - My character
    - Real-time notes
- **[Optimization]** Frame rate unlock function performance
- **[Optimization]** Multi-client function
- **[Optimization]** Frame rate unlock and game multi-open function now need user manual unlock advanced function in settings
- **[Optimization]** Settings page layout
- **[Optimization]** Windows 10 tile icon

## 1.5.4

- **[New]** Game launcher
    - Game resource download
    - Original god game process multi-open
    - Allow user in multi-display situation choose specify display startup game
  - Used full new icon (more cute Hu Tao)
- **[Fix]** Fixed game client convert infinite write issue
- **[Optimization]** Default language select method
- **[Optimization]** Allow direct copy device ID
- **[Optimization]** Settings page beautify

## 1.5.1

- **[Optimization]** Change `JumpList` menu to `JumpTask`, even if user close recent file function can use quick startup menu
- **[Optimization]** Added higher priority than system setting language setting option
- **[Optimization]** Added contribute translation entry
- **[Optimization]** Added reset picture resource setting option
- **[Optimization]** Added weapon WIKI
- **[Optimization]** Added Korean translation
- **[Optimization]** Added internationalization metadata

## 1.4.15

- **[New]** Added reset picture resource entry
- **[New]** Added refresh Cookie method
- **[Fix]** Fixed [#2 server switch cause 31-4302 error](/advanced/known-issue.html#_2-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%87%E6%8D%A2%E5%AF%BC%E8%87%B431-4302%E6%8A%A5%E9%94%99)
- **[Fix]** Fixed part situation program inner clear timing task plan fail situation
- **[Optimization]** Optimized cultivation plan interface [#486](https://github.com/DGP-Studio/Snap.Hutao/issues/486)
- **[Optimization]** Perfect English and Traditional Chinese translation
- **[Optimization]** In trigger Windows long path limit time add prompt
- **[Optimization]** Optimized timing task wake method

## 1.4.14

- **[Fix]** Fixed cultivation plan unable add issue
- **[Optimization]** Support English interface
- **[Optimization]** Other issue fix

## 1.4.11

- **[New]** Store initial version