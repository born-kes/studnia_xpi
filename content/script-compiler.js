var konwerterraportw_gmCompiler={

// *getUrlContents* przystosowa³ (przystosowany) od *Greasemonkey* *Compiler*
// *http*://*www.letitblog.com*/szyfrowaæ (szyfr) /*python*/*greasemonkey.py.txt*
// u¿y³ (u¿yty; przyzwyczai³ siê) pod *GPL* zezwolenie //
// najwiêcej (najbardziej; najwiêksza czê¶æ) wszystek jeszcze poni¿ej osadzany ciê¿ko od *Greasemonkey*
// *http*://*greasemonkey.mozdev.org*/ // u¿ywa³ pod *GPL* zezwolenie

getUrlContents: function(aUrl){
	var	ioService=Components.classes["@mozilla.org/network/io-service;1"]
		.getService(Components.interfaces.nsIIOService);
	var	scriptableStream=Components
		.classes["@mozilla.org/scriptableinputstream;1"]
		.getService(Components.interfaces.nsIScriptableInputStream);

	var	channel=ioService.newChannel(aUrl, null, null);
	var	input=channel.open();
	scriptableStream.init(input);
	var	str=scriptableStream.read(input.available());
	scriptableStream.close();
	input.close();

	return str;
},

isGreasemonkeyable: function(url) {
	var scheme=Components.classes["@mozilla.org/network/io-service;1"]
		.getService(Components.interfaces.nsIIOService)
		.extractScheme(url);
	return (
		(scheme == "http" || scheme == "https" || scheme == "file") &&
		!/hiddenWindow\.html$/.test(url)
	);
},

contentLoad: function(e) {
	var unsafeWin=e.target.defaultView;
	if (unsafeWin.wrappedJSObject) unsafeWin=unsafeWin.wrappedJSObject;

	var unsafeLoc=new XPCNativeWrapper(unsafeWin, "location").location;
	var href=new XPCNativeWrapper(unsafeLoc, "href").href;
if (
		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*\/game\.php.*screen=place&try=confirm.*/.test(href) )
		&& true
	) {     var script=konwerterraportw_gmCompiler.getUrlContents(
			'chrome://konwerterraportw/content/dotrze.js'
		);
		
		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
	}
	if (
		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*\/game\.php.*screen=report.*view=.*/.test(href) )
		&& true
	) {
		var script=konwerterraportw_gmCompiler.getUrlContents(
			'chrome://konwerterraportw/content/konwerterraportw.js'
		);
		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
	}
  else 	if (
		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*\/game\.php.*screen=overview_villages.*mode=commands.*/.test(href) )
		&& true
	) {
		/*var script=konwerterraportw_gmCompiler.getUrlContents(
			'chrome://konwerterraportw/content/konwerterraportw.js'
		);
		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin); */
	}
else if (
		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*\/game\.php.*screen=overview_villages.*mode=incomings.*/.test(href) )
		&& true
	) {
		/*var script=konwerterraportw_gmCompiler.getUrlContents(
			'chrome://konwerterraportw/content/konwerterraportw.js'
		);
		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);*/
	}
else 	if (
		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*\/game\.php.*screen=map.*/.test(href) )
		&& true
	) {
		var script=konwerterraportw_gmCompiler.getUrlContents(
			'chrome://konwerterraportw/content/map.js'
		);
		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
	}
else 	if (                    /*http://pl5.plemiona.pl/game.php?village=63344&screen=info_village&id=66460*/
		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*\/game\.php.*screen=info_village.*/.test(href) )
		&& true
	) {
		var script=konwerterraportw_gmCompiler.getUrlContents(
			'chrome://konwerterraportw/content/wsi.js'
		);
		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
	}
else 	if (                    /*http://pl5.plemiona.pl/game.php?village=63344&screen=train&mode=mass&group=8152*/
		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*\/game\.php.*screen=train&mode=mass.*/.test(href) )
		&& true
	) {
		var script=konwerterraportw_gmCompiler.getUrlContents(
			'chrome://konwerterraportw/content/rekrutant.js'
		);
		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
	}
},

injectScript: function(script, url, unsafeContentWin) {
	var sandbox, script, logger, storage, xmlhttpRequester;
	var safeWin=new XPCNativeWrapper(unsafeContentWin);

	sandbox=new Components.utils.Sandbox(safeWin);

	var storage=new konwerterraportw_ScriptStorage();
	xmlhttpRequester=new konwerterraportw_xmlhttpRequester(
		unsafeContentWin, window//appSvc.hiddenDOMWindow
	);

	sandbox.window=safeWin;
	sandbox.document=sandbox.window.document;
	sandbox.unsafeWindow=unsafeContentWin;

	// patch missing properties on xpcnw
	sandbox.XPathResult=Components.interfaces.nsIDOMXPathResult;

	// add our own APIs
	sandbox.GM_addStyle=function(css) { konwerterraportw_gmCompiler.addStyle(sandbox.document, css) };
	sandbox.GM_setValue=konwerterraportw_gmCompiler.hitch(storage, "setValue");
	sandbox.GM_getValue=konwerterraportw_gmCompiler.hitch(storage, "getValue");
	sandbox.GM_openInTab=konwerterraportw_gmCompiler.hitch(this, "openInTab", unsafeContentWin);
	sandbox.GM_xmlhttpRequest=konwerterraportw_gmCompiler.hitch(
		xmlhttpRequester, "contentStartRequest"
	);
	//unsupported
	sandbox.GM_registerMenuCommand=function(){};
	sandbox.GM_log=function(){};
	sandbox.GM_getResourceURL=function(){};
	sandbox.GM_getResourceText=function(){};

	sandbox.__proto__=sandbox.window;

	try {
		this.evalInSandbox(
			"(function(){"+script+"})()",
			url,
			sandbox);
	} catch (e) {
		var e2=new Error(typeof e=="string" ? e : e.message);
		e2.fileName=script.filename;
		e2.lineNumber=0;
		//GM_logError(e2);
		//alert(e2);
	}
},

evalInSandbox: function(code, codebase, sandbox) {
	if (Components.utils && Components.utils.Sandbox) {
		// DP beta+
		Components.utils.evalInSandbox(code, sandbox);
	} else if (Components.utils && Components.utils.evalInSandbox) {
		// DP alphas
		Components.utils.evalInSandbox(code, codebase, sandbox);
	} else if (Sandbox) {
		// 1.0.x
		evalInSandbox(code, sandbox, codebase);
	} else {
		throw new Error("Could not create sandbox.");
	}
},

openInTab: function(unsafeContentWin, url) {
	var tabBrowser = getBrowser(), browser, isMyWindow = false;
	for (var i = 0; browser = tabBrowser.browsers[i]; i++)
		if (browser.contentWindow == unsafeContentWin) {
			isMyWindow = true;
			break;
		}
	if (!isMyWindow) return;
 
	var loadInBackground, sendReferrer, referrer = null;
	loadInBackground = tabBrowser.mPrefs.getBoolPref("browser.tabs.loadInBackground");
	sendReferrer = tabBrowser.mPrefs.getIntPref("network.http.sendRefererHeader");
	if (sendReferrer) {
		var ios = Components.classes["@mozilla.org/network/io-service;1"]
							.getService(Components.interfaces.nsIIOService);
		referrer = ios.newURI(content.document.location.href, null, null);
	 }
	 tabBrowser.loadOneTab(url, referrer, null, null, loadInBackground);
 },
 
 hitch: function(obj, meth) {
	var unsafeTop = new XPCNativeWrapper(unsafeContentWin, "top").top;

	for (var i = 0; i < this.browserWindows.length; i++) {
		this.browserWindows[i].openInTab(unsafeTop, url);
	}
},

apiLeakCheck: function(allowedCaller) {
	var stack=Components.stack;

	var leaked=false;
	do {
		if (2==stack.language) {
			if ('chrome'!=stack.filename.substr(0, 6) &&
				allowedCaller!=stack.filename 
			) {
				leaked=true;
				break;
			}
		}

		stack=stack.caller;
	} while (stack);

	return leaked;
},

hitch: function(obj, meth) {
	if (!obj[meth]) {
		throw "method '" + meth + "' does not exist on object '" + obj + "'";
	}

	var hitchCaller=Components.stack.caller.filename;
	var staticArgs = Array.prototype.splice.call(arguments, 2, arguments.length);

	return function() {
		if (konwerterraportw_gmCompiler.apiLeakCheck(hitchCaller)) {
			return;
		}
		
		// Wyrabiaj± kopiê *staticArgs* (nie odmienia to dlatego ¿e to otrzymuje (dostaje; rozumie) u¿ywany wielokrotnie dla
                // ka¿de wezwanie ).
		var args = staticArgs.concat();

		// Dodaj± ca³y nowe argumenty
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}

		// Przywo³uj± pierwotny (orygina³) funkcja z poprawnym tym (to) *obj* i po³±czony
                // wymieniaæ kolejno (lista) statycznych i dynamicznych argumentów.
		return obj[meth].apply(obj, args);
	};
},

addStyle:function(doc, css) {
	var head, style;
	head = doc.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = doc.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
},

onLoad: function() {
	var	appcontent=window.document.getElementById("appcontent");
	if (appcontent && !appcontent.greased_konwerterraportw_gmCompiler) {
		appcontent.greased_konwerterraportw_gmCompiler=true;
		appcontent.addEventListener("DOMContentLoaded", konwerterraportw_gmCompiler.contentLoad, false);
	}
},

onUnLoad: function() {
	//remove now unnecessary listeners
	window.removeEventListener('load', konwerterraportw_gmCompiler.onLoad, false);
	window.removeEventListener('unload', konwerterraportw_gmCompiler.onUnLoad, false);
	window.document.getElementById("appcontent")
		.removeEventListener("DOMContentLoaded", konwerterraportw_gmCompiler.contentLoad, false);
},

}; //object konwerterraportw_gmCompiler


function konwerterraportw_ScriptStorage() {
	this.prefMan=new konwerterraportw_PrefManager();
}
konwerterraportw_ScriptStorage.prototype.setValue = function(name, val) {
	this.prefMan.setValue(name, val);
}
konwerterraportw_ScriptStorage.prototype.getValue = function(name, defVal) {
	return this.prefMan.getValue(name, defVal);
}


window.addEventListener('load', konwerterraportw_gmCompiler.onLoad, false);
window.addEventListener('unload', konwerterraportw_gmCompiler.onUnLoad, false);
