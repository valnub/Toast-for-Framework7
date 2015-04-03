# Confirmbox

A plugin for Framwork7 to show little black toasts iOS-style

## Screenshot

![Confirmbox screenshot](https://raw.githubusercontent.com/valnub/Confirmbox-Framwork7-plugin/master/screenshots/confirmbox-screenshot.jpg)

## Video

https://www.youtube.com/watch?v=1qCRmpyQCuw&feature=youtu.be

## Live demo

http://www.timo-ernst.net/misc/confirmboxdemo/

## How to use

1) Add the script to your project (after Framework7 script!) and also add CSS reference:
```html
<link rel="stylesheet" href="toast.css">
<script src="toast.js"></script>
```

2) Create a new toast

```javascript
var toast = myapp.toast('Marked star', '<div>☆</div>', {})
```

As first parameter you set the message which gets displayed at the bottom of the toast. As 2nd parameter you have to set the icon. You can use free HTML here so set what ever you want (ASCii, Font-Icon, Images, SVG...). Third is reserved for options.

3) Now you can show or hide the box

```javascript
// show
toast.show(true);
```

or

```javascript
// hide
toast.show(false);
```

You're done :D

Made with <3 by www.timo-ernst.net

## License

MIT - Do what ever you want ;-)
