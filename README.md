# prompt

Android webview has a poor design of window.prompt().
This modules replace window.propmt() with a iOS style dialog, providing uniform UX across all platforms.

# Install

```npm install prompt-zepto```

# Prerequisite

Zepto or jQuery, $ symbol needs to be global.

# Usage

```javascript
prompt({
    title: 'Please input whatever you want:',
    negative: 'cancel',
    positive: 'ok',
    placeholder: 'pizza',
    callback: function(input) {
        // callback input{string}, or null if click negative button        
    }
});
```

# options

* title: title
* negative: text of negative button, optional, default to be 'cancel'
* positive: text of positive button, optional, default to be 'ok'
* placeholder: placeholder of input
* callback: callback function when button is clicked

no css is required! it's built-in by webpack
