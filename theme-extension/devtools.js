var xhr = new XMLHttpRequest(),
	stylesheet = 'canary.css';

xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);



var txt = [];
for(var nm in chrome.devtools.panels){
	//txt.push(nm+'='+chrome.devtools.panels[nm]);
	txt.push(nm);
}
function load(){
var bkg = chrome.extension.getBackgroundPage();
bkg.console.log('it finally works');
	chrome.devtools.inspectedWindow.eval(
		"window",
		function(result, isException) {
			if (isException){
				console.log("the page is not using jQuery");
				poll();
			}
			else{
				alert('LOADED');
				console.log("The page is using jQuery v" + result);
			}
		}
	);
}
function poll(){
	setTimeout(load, 1000);
}

console = chrome.extension.getBackgroundPage().console;
console.log('test bg console');
//alert('tools\n' + txt.join('\n\t'));