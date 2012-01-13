function selection2qr() {
d=""+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text);
d=d.replace(/\r\n|\r|\n/g," ,");
if(!d)d=prompt("Enter the words:", "");
if(d!=null)location="http://www.google.com/search?q=define:"+escape(d).replace(/ /g,"+");
}

function selection2define() {
d=""+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text);
d=d.replace(/\r\n|\r|\n/g," ,");
if(!d)d=prompt("Enter the words:", "");
if(d!=null)location="http://chart.apis.google.com/chart?cht=qr&chs=200x200&chl="+escape(d).replace(/ /g,"+");
}

