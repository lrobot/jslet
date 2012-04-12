/* example of a bookmarket 
javascript:(function(){d=document;w=window;w.bmleta='wikiframe';if(w.bmlet!==undefined){bmlet(w.bmleta);}else{d.body.appendChild(d.createElement('script')).src='https://raw.github.com/lrobot/jslet/master/js/bookmark.js';}})();
*/

/* other extend usage 
javascript:(function(){d=document;w=window;w.bmleta='wikiframe';if(w.bmlet!==undefined){bmlet(w.bmleta);}else{d.body.appendChild(d.createElement('script')).src='https://raw.github.com/lrobot/jslet/master/js/bookmark.js?'+new Date().getTime();}})();
*/
w = window;
d = document;

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

function getSelText() {
	var s = '';
	if (w.getSelection) {
		s = w.getSelection();
	} else if (d.getSelection) {
		s = d.getSelection();
	} else if (d.selection) {
		s = d.selection.createRange().text;
	}
	return s;
}

function bookmark_main(app) {
			if ($("#wikiframe").length == 0) {
				var s = "";
				s = getSelText();
				if (s == "") {
					var s = prompt("Forget something?");
				}
				if ((s != "") && (s != null)) {
					$("body").append("\
					<div id='wikiframe'>\
						<div id='wikiframe_veil' style=''>\
							<p>Loading...</p>\
						</div>\
						<iframe src='http://en.wikipedia.org/w/index.php?&search="+s+"' onload=\"$('#wikiframe iframe').slideDown(500);\">Enable iFrames.</iframe>\
						<style type='text/css'>\
							#wikiframe_veil { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255,.25); cursor: pointer; z-index: 900; }\
							#wikiframe_veil p { color: black; font: normal normal bold 20px/20px Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; width: 10em; margin: -10px auto 0 -5em; text-align: center; }\
							#wikiframe iframe { display: none; position: fixed; top: 10%; left: 10%; width: 80%; height: 80%; z-index: 999; border: 10px solid rgba(0,0,0,.5); margin: -5px 0 0 -5px; }\
						</style>\
					</div>");
					$("#wikiframe_veil").fadeIn(750);
				}
			} else {
				$("#wikiframe_veil").fadeOut(750);
				$("#wikiframe iframe").slideUp(500);
				setTimeout("$('#wikiframe').remove()", 750);
			}
			$("#wikiframe_veil").click(function(event){
				$("#wikiframe_veil").fadeOut(750);
				$("#wikiframe iframe").slideUp(500);
				setTimeout("$('#wikiframe').remove()", 750);
			});
		}

(function(){
	// the minimum version of jQuery we want
	var v = "1.3.2";
	// check for jQuery. if it exists, verify it's not too old.
	if (w.jQuery === undefined || w.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	function initMyBookmarklet() {
		(w.bmlet = bookmark_main)(window.bmleta);
	}
})();

