var konwerterprox_gmCompiler={

// *getUrlContents* przystosowa³ (przystosowany) od *Greasemonkey* *Compiler*
// *http*://*www.letitblog.com*/szyfrowaæ (szyfr) /*python*/*greasemonkey.py.txt*
// u¿y³ (u¿yty; przyzwyczai³ siê) pod *GPL* zezwolenie //
// najwiêcej (najbardziej; najwiêksza czê¶æ) wszystek jeszcze poni¿ej osadzany ciê¿ko od *Greasemonkey*
// *http*://*greasemonkey.mozdev.org*/ // u¿ywa³ pod *GPL* zezwolenie
 //alert(e2);
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

if (                    /*Proxi */
		konwerterprox_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*aHR0cDovL3BsNS5wbGVtaW9uYS5wbC9nYW1lLnBoc.*/.test(href) )
		&& true       // stona => http://pl5.plemiona.pl/game.php
		
	) { 	
        var script=konwerterprox_gmCompiler.getUrlContents(
			'chrome://konwerterprox/content/dotrze.js'	
                );
		konwerterprox_gmCompiler.injectScript(script, href, unsafeWin);
	}
else 	if (                    /*Proxi */
		konwerterprox_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*aHR0cDovL2Jvcm5rZXMudy5zenUucGwvcHJveGk.*/.test(href) )
		&& true         //http://bornkes.w.szu.pl/proxi
		
	) { 	var script=konwerterprox_gmCompiler.getUrlContents(
			'chrome://konwerterprox/content/mama.js'
                );
		konwerterprox_gmCompiler.injectScript(script, href, unsafeWin);
	}
else 	if (                    /*Proxi */
		konwerterprox_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*http%3A%2F%2Fpl5.plemiona.pl%2Fgame.php.*/.test(href) )
		&& true         //http://pl5.plemiona.pl/game.php
	) { 	var script=konwerterprox_gmCompiler.getUrlContents(
	//		'chrome://konwerterprox/content/dotrze.js'
                );
		konwerterprox_gmCompiler.injectScript(script, href, unsafeWin);
	}
        },

injectScript: function(script, url, unsafeContentWin) {
	var sandbox, script, logger, storage, xmlhttpRequester;
	var safeWin=new XPCNativeWrapper(unsafeContentWin);

	sandbox=new Components.utils.Sandbox(safeWin);

	var storage=new konwerterprox_ScriptStorage();
	xmlhttpRequester=new konwerterprox_xmlhttpRequester(
		unsafeContentWin, window//appSvc.hiddenDOMWindow
	);

	sandbox.window=safeWin;
	sandbox.document=sandbox.window.document;
	sandbox.unsafeWindow=unsafeContentWin;

	// patch missing properties on xpcnw
	sandbox.XPathResult=Components.interfaces.nsIDOMXPathResult;

	// add our own APIs
	sandbox.GM_addStyle=function(css) { konwerterprox_gmCompiler.addStyle(sandbox.document, css) };
	sandbox.GM_setValue=konwerterprox_gmCompiler.hitch(storage, "setValue");
	sandbox.GM_getValue=konwerterprox_gmCompiler.hitch(storage, "getValue");
	sandbox.GM_openInTab=konwerterprox_gmCompiler.hitch(this, "openInTab", unsafeContentWin);
	sandbox.GM_xmlhttpRequest=konwerterprox_gmCompiler.hitch(
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
		if (konwerterprox_gmCompiler.apiLeakCheck(hitchCaller)) {
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
	if (appcontent && !appcontent.greased_konwerterprox_gmCompiler) {
		appcontent.greased_konwerterprox_gmCompiler=true;
		appcontent.addEventListener("DOMContentLoaded", konwerterprox_gmCompiler.contentLoad, false);
	}
},

onUnLoad: function() {
	//remove now unnecessary listeners
	window.removeEventListener('load', konwerterprox_gmCompiler.onLoad, false);
	window.removeEventListener('unload', konwerterprox_gmCompiler.onUnLoad, false);
	window.document.getElementById("appcontent")
		.removeEventListener("DOMContentLoaded", konwerterprox_gmCompiler.contentLoad, false);
},

}; //object konwerterprox_gmCompiler


function konwerterprox_ScriptStorage() {
	this.prefMan=new konwerterprox_PrefManager();
}
konwerterprox_ScriptStorage.prototype.setValue = function(name, val) {
	this.prefMan.setValue(name, val);
}
konwerterprox_ScriptStorage.prototype.getValue = function(name, defVal) {
	return this.prefMan.getValue(name, defVal);
}


window.addEventListener('load', konwerterprox_gmCompiler.onLoad, false);
window.addEventListener('unload', konwerterprox_gmCompiler.onUnLoad, false);
