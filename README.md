# Confirmbox

A plugin for Framwork7 to show little black confirmation boxes iOS-style

## Screenshot

![Confirmbox screenshot](https://raw.githubusercontent.com/valnub/Confirmbox-Framwork7-plugin/master/screenshots/confirmbox-screenshot.jpg)

## Video

https://www.youtube.com/watch?v=1qCRmpyQCuw&feature=youtu.be

## Live demo

http://www.timo-ernst.net/misc/confirmboxdemo/

## How to use

1) Add the script to your project (after Framework7 script!)
```html
<script src="confirmbox.js"></script>
```

2) Create a new box

```javascript
var confirmbox = myapp.confirmbox('Marked star', '<div>☆</div>', {})
```

As first parameter you set the message which gets displayed at the bottom of the box. As 2nd parameter you have to set the icon. You can use free HTML here so set what ever you want (ASCii, Font-Icon, Images, SVG...). Third is reserved for options.

3) Now you can show or hide the box

```javascript
// show
confirmbox.showBox(true);
```

or

```javascript
// hide
confirmbox.showBox(false);
```

You're done :D

Made with <3 by www.timo-ernst.net

## License

MIT - Do what ever you want ;-)
