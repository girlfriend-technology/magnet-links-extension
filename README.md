# Magnet Links extension

_Open Magnet Links in Put.io and more_

![icon][icon]

Tired of seeing "Safari cannot open the page because the address is invalid." alerts when you try to open a magnet link? This Safari extension helps by adjusting the links to go through Put.io, to your clipboard, or to any URL you want.

You know how urls start with http:// or https://? Well, some start with `magnet:` and by default most devices do not know how to handle this. Magnet Links lets you choose how you want these urls handled.

This app is not affiliated with Put.io


## Download

- [Safari for iOS and Mac](https://apps.apple.com/us/app/magnet-links/id1598258908)
- [Firefox for Desktop and Android](https://addons.mozilla.org/addon/magnet-links/)
- [Chrome](https://chrome.google.com/webstore/detail/fkioalmkhgkhojppkapnidbnaecnnkfo)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/bmdmgkgpnjgmgcpmgnphgihlekjgnapf)


## Folder Structure

- `'Magnet Links'` - the Xcode project for iOS and Mac
- `content-script` - javascript bundle for the extension's content script that replaces the text and links on webpages
- `popup-ui` - javascript bundle for the extension's user interface that loads when the toolbar icon is tapped
- `firefox` - The Firefox build
- `chrome` - The Edge and Chrome build


[icon]: https://github.com/girlfriend-technology/magnet-links-extension/raw/main/Magnet%20Links/Shared%20(Extension)/Resources/images/icon-128.png "App Icon"
