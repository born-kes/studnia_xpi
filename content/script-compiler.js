var konwerterraportw_gmCompiler={

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

contentLoad: function(e)
{
	var unsafeWin=e.target.defaultView;
	if (unsafeWin.wrappedJSObject) unsafeWin=unsafeWin.wrappedJSObject;

	var unsafeLoc=new XPCNativeWrapper(unsafeWin, "location").location;
	var href=new XPCNativeWrapper(unsafeLoc, "href").href;
        var chrome = 'chrome://konwerterraportw/content/'
//####
// if (		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
//		&& ( /http:\/\/.*pl5.*\/game\.php.*/.test(href) ) && true
//	) {     var script=konwerterraportw_gmCompiler.getUrlContents('chrome://konwerterraportw/content/test_graf.js');
//		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
//	}
 // do testowania skryptów
//####
if(  konwerterraportw_gmCompiler.isGreasemonkeyable(href) && ( /http:\/\/.*plemiona.pl.*/.test(href) ) && !( /.*\/game\.php.*/.test(href))  )
   {	var script_menu=konwerterraportw_gmCompiler.getUrlContents( chrome+ 'hello.js');	
		konwerterraportw_gmCompiler.injectScript(script_menu, href, unsafeWin);
   }
   if(  konwerterraportw_gmCompiler.isGreasemonkeyable(href) && ( /http:\/\/.*plemiona.pl.*\/game\.php.*/.test(href) )   )
   {	var script_menu=konwerterraportw_gmCompiler.getUrlContents( chrome+ 'och.js');	
		konwerterraportw_gmCompiler.injectScript(script_menu, href, unsafeWin);
   }
if(  konwerterraportw_gmCompiler.isGreasemonkeyable(href) && ( /http:\/\/.*pl5.*\/game\.php.*/.test(href) )   )
   {       // instalacja Menu
	var script_menu=konwerterraportw_gmCompiler.getUrlContents( chrome+ 'menu.js');	
		konwerterraportw_gmCompiler.injectScript(script_menu, href, unsafeWin);
        if (
		konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /.*ukryjmenu=tak.*/.test(href) )
	) {
		var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'ukryjmenu.js');
		konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
	}
		// Konwerter Raportów
	if ( /.*screen=report.*/.test(href))
		{
		if ( /.*view=.*/.test(href))
			{ var script=konwerterraportw_gmCompiler.getUrlContents( chrome+    'konwerterraportw.js' );}
	   else if ( /.*mode=forward.*/.test(href))
			{ var script=konwerterraportw_gmCompiler.getUrlContents( chrome+    'przeslij_raport.js' );}
	   else 	{ var script=konwerterraportw_gmCompiler.getUrlContents( chrome+    'kolorowacz.user.js' );}
                }                   	
	else	// Plac spis wojsk    action=all_back&h=08e0&unit_id=26532793
	if ( /.*screen=place.*/.test(href) )
	{
          if( !( /.*try=confirm.*/.test(href) )&& !( /.*unit_id.*/.test(href) )
          &&  ( /.*mode=command.*/.test(href) || /.*mode=units.*/.test(href) ||  /.*mode=neighbor.*/.test(href) || !(/.*mode=.*/.test(href)) ) )
          { var script=konwerterraportw_gmCompiler.getUrlContents( chrome + 'place.js');}
	  else
	  if ( /.*try=confirm.*/.test(href) )
	 	{ var script=konwerterraportw_gmCompiler.getUrlContents( chrome+'try_confirm.js' ); }
        }	
	else // wioska && nie spis wiosek
	if (
		( /.*screen=overview.*/.test(href) )
		&& !( /.*screen=overview_villages.*/.test(href) )
	   )
		{ var script=konwerterraportw_gmCompiler.getUrlContents( chrome+'overview.js' ); }
	else	// Przegl±dy
	if( /.*screen=overview_villages.*/.test(href) )
	{	// Kombinowany
	  if ( /.*mode=combined.*/.test(href) )
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'combined.js'); }
	  else  // Produkcja + Handel menu boczne
	  if ( /.*mode=prod.*&boby=tak.*/.test(href) || /.*&boby=tak.*/.test(href))
	  	{ var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'menu_boczne.js' ); }
	  else  // Produkcja
	  if ( /.*mode=prod.*/.test(href) )
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'produkcja.js' );}
	  else	// wojska
	  if ( ( /.*mode=units.*/.test(href) ) && ( /.*type=complete.*/.test(href) || !( /.*type=.*/.test(href) )) )
		{var script=konwerterraportw_gmCompiler.getUrlContents( chrome + 'units.js');}
	  else	//kombinowany
	  if ( /.*mode=commands.*/.test(href) )
		{	var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'kolorowacz.user.js');
		}
	  else  // wojska / pomoc
	  if ( /.*mode=units.*type=away_detail.*/.test(href) || /.*mode=units.*type=support_detail.*/.test(href) )
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'pomoc.js');}
	  else	// Przybywaj±ce
	  if (  /.*mode=incomings.*/.test(href) )
		{	 var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'kolorowacz.user.js');
			konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
			 var script=konwerterraportw_gmCompiler.getUrlContents( chrome+'incomings.js');}
	  else	// budynki
	  if ( /.*mode=buildings.*/.test(href) )
		{ var script=konwerterraportw_gmCompiler.getUrlContents( chrome+'buildings.js'); }
        }
	else	// mapa
	if ( /.*screen=map.*/.test(href) )
	{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'map.js');}
	else	// info o wiosce
	if ( /.*screen=info_village.*/.test(href) )
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'wsi.js');}
	else	// info o graczu
	if ( /.*screen=info_player.*/.test(href) ){
	      if(!/.*boby=tak.*/.test(href)){var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'info_player.js');}
         else {var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'menu_boczne.js');}
         }
	else	// info o graczu
	if ( /.*screen=memo.*/.test(href)){
              if(/.*boby=tak.*/.test(href)){var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'menu_boczne.js');}
           else{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'memo.js');}
         }
	else   //  info o ataku
	if ( /.*screen=info_command.*&type=other.*/.test(href) )
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'ataki.js');}
	else      // Pa³ac
	if ( /.*screen=snob.*/.test(href) && /.*mode=coin.*/.test(href))
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'snob.js'   );}
        else // Rynek
	if ( /.*screen=market.*/.test(href) )
	{    // Wy¶lij surowce
		if( !( /.*mode=.*/.test(href)) || ( /.*mode=send.*/.test(href)) )
			{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'rynek.js'   );}
		else // W³asne propozycje
		if ( /.*screen=market&mode=own_offer.*/.test(href) )
			{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'rynek2.js'   );}
	}


	//instalacja wybranego skryptu
	konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
        // ukrycie menu
   }// koniec if swiat 5
else if(  konwerterraportw_gmCompiler.isGreasemonkeyable(href) && ( /http:\/\/.*pl17.*\/game\.php.*/.test(href) )   )
   {
       	// Pa³ac
	if ( /.*screen=snob.*/.test(href) && /.*mode=coin.*/.test(href))
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'snob.js'   );}
        else	// info o wiosce
	if ( /.*screen=info_village.*/.test(href) )
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'wsi17.js');}
        else  // wojska / pomoc
	if ( /.*mode=units.*units_type=away_detail.*/.test(href) )
		{var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'pomoc.js');}
        else	// wojska
        if ( ( /.*mode=units.*/.test(href) ) && !( /.*units_type=away_detail.*/.test(href) ) )
		{var script=konwerterraportw_gmCompiler.getUrlContents( chrome + 'units17.js');}
	konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
   }
	 /*rekrutacja Masowa*/
	if( /http:\/\/.*plemiona.*\/game\.php.*screen=train.*mode=mass.*/.test(href) )
	 {
         var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'rekrutant.js');
	konwerterraportw_gmCompiler.injectScript(script, href, unsafeWin);
         }
	else /*TW Maps //http://pl.*twmaps.org/*/
	if (    konwerterraportw_gmCompiler.isGreasemonkeyable(href)
		&& ( /http:\/\/.*pl.*twmaps.org*/.test(href) )
	   ) {
		var script=konwerterraportw_gmCompiler.getUrlContents(chrome+'twmaps.js'   );
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
