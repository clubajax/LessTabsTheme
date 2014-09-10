console.log("Hello, world!");
console.log('chrome', chrome);
//console.log('panels', chrome.devtools.panels);

console = chrome.extension.getBackgroundPage().console;
console.log('test bg2 console');