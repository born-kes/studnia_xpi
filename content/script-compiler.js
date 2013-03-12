var jondro={

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
// if(		jondro.isGreasemonkeyable(href)
//		&& ( /http:\/\/.*pl5.*\/game\.php.*/.test(href) ) && true
//	) {     var script=jondro.getUrlContents('chrome://konwerterraportw/content/test_graf.js');
//		jondro.injectScript(script, href, unsafeWin);
//	}
 // do testowania skryptów
//####
  if(  jondro.isGreasemonkeyable(href)				// przed logowaniem
   &&  /http:\/\/.*plemiona.pl.*/.test(href) 
   && !( /.*\/game\.php.*/.test(href) )
  ){
						var script_menu=jondro.getUrlContents( chrome+ 'hello.js');	
							jondro.injectScript(script_menu, href, unsafeWin);
  }else
  if(  jondro.isGreasemonkeyable(href)
   && /http:\/\/.*plemiona.pl.*\/game\.php.*/.test(href)
  ){
	 if( /http:\/\/.*pl5.*\/game\.php.*/.test(href) ){       // instalacja Menu
						var script_menu=jondro.getUrlContents( chrome+ 'menu.js');	
							jondro.injectScript(script_menu, href, unsafeWin);
						var script_menu=jondro.getUrlContents( chrome+ 'css.js');	
							jondro.injectScript(script_menu, href, unsafeWin);
		if( /.*ukryjmenu=tak.*/.test(href) ){
						var script=jondro.getUrlContents(chrome+'ukryjmenu.js');
							jondro.injectScript(script, href, unsafeWin);
		}
		// Konwerter Raportów
		if( /.*screen=report.*/.test(href) ){
			if( /.*view=.*/.test(href) ){
						var script=jondro.getUrlContents( chrome+ 'konwerterraportw.js' );
         }else
         if( /.*mode=forward.*/.test(href) ){
						var script=jondro.getUrlContents( chrome+ 'przeslij_raport.js' );
			}else{
						var script=jondro.getUrlContents( chrome+    'kolorowacz.user.js' );
			}
		}else
		// Plac spis wojsk    action=all_back&h=08e0&unit_id=26532793
		if( /.*screen=place.*/.test(href) ){
			if( /.*mode=units.*/.test(href) ){
						var script=jondro.getUrlContents( chrome + 'place_units.js');
			}
			if( /.*mode=neighbor.*/.test(href) ){
						var script=jondro.getUrlContents( chrome + 'place_neighbor.js');
			}else
          if( !( /.*try=confirm.*/.test(href) )
          &&  !( /.*unit_id.*/.test(href) )
          &&  (  !(/.*mode=.*/.test(href)) || /.*mode=command.*/.test(href))  
          ){
						var script=jondro.getUrlContents( chrome + 'place.js');
							jondro.injectScript(script, href, unsafeWin);
						var script=jondro.getUrlContents(chrome+'mapa_c.js');
							jondro.injectScript(script, href, unsafeWin);
						var script=jondro.getUrlContents( chrome+'kalkulator.onek.js');
			}else
			if( /.*try=confirm.*/.test(href) ){
						var script=jondro.getUrlContents( chrome+'try_confirm.js' );
			}else
	  		if( /.*mode=call.*/.test(href) ){
						var script=jondro.getUrlContents( chrome+'plac_call.js' );
			}
		}else // wioska && nie spis wiosek
		if( ( /.*screen=overview.*/.test(href) )
		&& !( /.*screen=overview_villages.*/.test(href) )
	   ){
						var script=jondro.getUrlContents( chrome+'overview.js' ); 
		}else
// Przeglady
		if( /.*screen=overview_villages.*/.test(href) ){
		// Produkcja
			if( /.*mode=prod.*/.test(href) ){
						var script=jondro.getUrlContents(chrome+'produkcja.js' );
			}else
		// wojska
			if( /.*mode=units.*/.test(href) ){	  			
				if( /.*type=complete.*/.test(href) || !( /.*type=.*/.test(href) ) ){
						var script=jondro.getUrlContents( chrome + 'units.js'); 
	   		}else			   
		// wojska / pomoc
	  			if( /.*type=away_detail.*/.test(href)
	  			|| /.*type=support_detail.*/.test(href) ){
						var script=jondro.getUrlContents(chrome+'pomoc.js');
				}else
	  			if( /.*type=own_home.*/.test(href) ){
	  			 		var script=jondro.getUrlContents( chrome + 'kalkulator.onek.js');
				}
	 
	  		}else
		//kombinowany
	  		if( /.*mode=commands.*/.test(href) ){
						var script=jondro.getUrlContents(chrome+'kolorowacz.user.js');
							jondro.injectScript(script, href, unsafeWin);
						var script=jondro.getUrlContents( chrome+'commands.js');
			}else
		// Przybywajace
			if(  /.*mode=incomings.*/.test(href) ){
						var script=jondro.getUrlContents( chrome+'incomings.js');
							jondro.injectScript(script, href, unsafeWin);
						var script=jondro.getUrlContents( chrome+'commands.js');
					//	 var script=jondro.getUrlContents(chrome+'kolorowacz.user.js');
			}else
		// budynki
			if( /.*mode=buildings.*/.test(href) ){
						var script=jondro.getUrlContents( chrome+'buildings.js'); 
			}else	
		// technologie
			if( /.*mode=tech.*/.test(href) ){
						var script=jondro.getUrlContents( chrome+'tech.js');
			}
   	}else
		// mapa
		if( /.*screen=map.*/.test(href) ){
						var script=jondro.getUrlContents(chrome+'map.js');
        					jondro.injectScript(script, href, unsafeWin);
         			var script=jondro.getUrlContents( chrome+'mapa_b.js');
		}else	
		// info o wiosce
		if( /.*screen=info_village.*/.test(href) ){
						var script=jondro.getUrlContents( chrome+'kalkulator.onek.js');
							jondro.injectScript(script, href, unsafeWin);
						var script=jondro.getUrlContents(chrome+'wsi.js');
		}else	
		// info o graczu
		if( /.*screen=info_player.*/.test(href) ){
				      var script=jondro.getUrlContents(chrome+'info_player.js');
		}else
		// info o graczu
		if( /.*screen=memo.*/.test(href) ){
			if(/.*boby=tak.*/.test(href)){
						var script=jondro.getUrlContents(chrome+'menu_boczne.js');
			}else{
						var script=jondro.getUrlContents(chrome+'memo.js');
			}
		}else
		//  info o ataku
		if(/.*screen=info_command.*/.test(href)
		&& (/.*&type=other.*/.test(href)) 
		){
						var script=jondro.getUrlContents(chrome+'ataki.js');
		}else  
		// Pa³ac
		if( /.*screen=snob.*/.test(href) && /.*mode=coin.*/.test(href)){
						var script=jondro.getUrlContents(chrome+'snob.js');
		}else
		// Rynek
		if( /.*screen=market.*/.test(href) ){
		// Wy¶lij surowce
			if( !( /.*mode=.*/.test(href))
			 || ( /.*mode=send.*/.test(href)) 
			){
						var script=jondro.getUrlContents(chrome+'rynek.js'   );
			}else
		// W³asne propozycje
			if( /.*mode=own_offer.*/.test(href) ){
						var script=jondro.getUrlContents(chrome+'rynek2.js'   );
			}else
		// W³asne propozycje
			if( /.*mode=call.*/.test(href) ){
						var script=jondro.getUrlContents(chrome+'market_call.js'   );
			}
		}
		//instalacja wybranego skryptu
							jondro.injectScript(script, href, unsafeWin);

	 }	// koniec if swiat 5

	 /*rekrutacja Masowa*/
		if( (/.*screen=train.*/.test(href) )&&(/.*mode=mass.*/.test(href)) ){
						var script=jondro.getUrlContents(chrome+'rekrutant.js');
							jondro.injectScript(script, href, unsafeWin);

		}else /*TW Maps //http://pl.*twmaps.org/*/
		if( /http:\/\/.*pl.*twmaps.org*/.test(href) ){
						var script=jondro.getUrlContents(chrome+'twmaps.js'   );
							jondro.injectScript(script, href, unsafeWin);
		}
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
	sandbox.GM_addStyle=function(css) { jondro.addStyle(sandbox.document, css) };
	sandbox.GM_setValue=jondro.hitch(storage, "setValue");
	sandbox.GM_getValue=jondro.hitch(storage, "getValue");
	sandbox.GM_openInTab=jondro.hitch(this, "openInTab", unsafeContentWin);
	sandbox.GM_xmlhttpRequest=jondro.hitch(
		xmlhttpRequester, "contentStartRequest"
	);
	//unsupported
	sandbox.GM_registerMenuCommand=function(){};
	sandbox.GM_log=function(){};
	sandbox.GM_getResourceURL=function(){};
	sandbox.GM_getResourceText=function(){};
//###############################################################	
	sandbox.G_bornkes='http://www.bornkes.w.szu.pl/';
	sandbox.G_wersjaff=jondro.wersjaff();
	sandbox.G_alert=function(a){	/* alert(a); */ };
	sandbox.G_id=function(id){return	document.getElementById(id); };
	sandbox.G_n=function(a,s) { return a.getElementsByTagName(s);};  // gN
	sandbox.G_dels=function(s){	return s.replace(new RegExp("[^\\d|]+","g"),""); };
	sandbox.G_xy=function(s){		return s.match(/(:?\d{1,3})\|(:?\d{1,3})/); };
	sandbox.G_plaut=function(s){	return s.replace(new RegExp("[^\\a-zA-Z]+","g"),""); }
	sandbox.G_potenga=function(a){return (a*a);};
	sandbox.G_kwadrat=function(a){return (a*a);};
	sandbox.G_explode=function(str){
		var url=str.split("?");  url=url[1].split("&");
			for (var i=0,u=0,tablica = new Array(),ex=''; i< url.length ; i++ ){
				ex=url[i].split("=");
         	tablica[u++]=ex[0];
         	tablica[u++]=ex[1];
   		}
   	return tablica;
	};
	sandbox.G_green_red=function(a,b){return jondro.GreenRed(a, b);}



	sandbox.G_TempoMarszu=function(arra){// idzie zawsze tempem najwolniejszej jednostki
			 var t;//0 jest puste	//  1   2    3     4   5    6   7   8    9  10   11  12
											// pik, mie, axe, luk, zw, lk, kl, ck, tar, kat, ry, sz
   	     if(arra[12]>0 ) t=35;
		else if(arra[9]>0 
			  || arra[10]>0 ) t=30;
		else if(arra[2]>0  ) t=22;
		else if(arra[1]>0 
			  || arra[3]>0 
			  || arra[4]>0  ) t=18;
		else if(arra[8]>0  ) t=11;
		else if(arra[6]>0 
			  || arra[7]>0  ) t=10;
		else if(arra[5]>0  ) t=9;
		else t=0;
	return t;
	};	
	sandbox.G_time=function(t){
      if(t.lastIndexOf('.')>-1 && t.lastIndexOf(' ')>-1 && t.lastIndexOf(':')>-1){
       var t0=t.split(" ");
       var t1=t0[0].split(".");
       var t2=t0[1].split(":");
       var time = new Date(
                           2000+Math.floor(t1[2]),
                           Math.floor(t1[1])-1,
                           Math.floor(t1[0]),
                           Math.floor(t2[0]),
                           Math.floor(t2[1]),
                           Math.floor(t2[2])
                           ).getTime();
       var teraz= new Date().getTime();
       var zmienna= teraz-time;
      /* var dni,godz,t ='';
       dni =  Math.floor(zmienna/(1000*60*60*24));
       godz = Math.floor(zmienna/(1000*60*60)); // alert(zmienna+"/"+(1000*60*24));
        if(godz>0){
           if(dni==1)					t = '1 dzien ';             
          else if(dni>1)            t = dni + ' dni ';
          else if(godz==1)          t =  '1 godzine';
          else if(godz>1 && godz<5) t =  godz + ' godziny';
          else if(godz>4)           t =  (godz) + ' godzin';
        }else
              t = 'mniej niz godzine';
   	return t;*/
   	return (zmienna/1000);
       }
   	return '';
		};	
	sandbox.G_timeDrop=function(time){
		if(time=='')return;
	                 var timeString='';
        var dni =   Math.floor(time/86400);
		var hours = Math.floor(time/3600) % 24;
		var minutes = Math.floor(time/60) % 60;
		var sekund = Math.floor(time) % 60;
		if(dni==1) timeString = '1 dzien ';
        if(dni>1) timeString = dni +' dni ';

		timeString += hours + ":";
		if(minutes < 10)
			timeString += "0";		
		timeString += minutes+":";
		if(sekund < 10)
			timeString += "0";		
		timeString += sekund;
 	return timeString;
 	};	
	sandbox.G_timeDropNoc=function(i){
		var minut= 1000;
		var str='';
		var zm= new Date().getTime();
		var zmD=new Date();
			if(i!=Math.floor(i)){ i=Math.floor(Math.floor(i)*60 + (i-Math.floor(i))*60)*minut  ;
			}else{ i= i*minut; }

		var zmienna= new Date(zm+i);
			if(Math.floor(zmienna.getDate())==Math.floor(zmD.getDate())){
				str+='dzis o ';
			}else
			if(Math.floor(zmienna.getDate())+1 ==Math.floor(zmD.getDate())){
				str+='jutro o ';
			}else{ 
				str += zmienna.getDate()+"."+(zmienna.getMonth()+1)+' o ';
			}
				str +=    zmienna.getHours() + ':';
			if(Math.floor(zmienna.getMinutes())<10){
				str +='0';
			}
				str +=    zmienna.getMinutes();

				str=jondro.GreenRed(zmienna.getHours(),str);

		return str ;
	};

//###############################################################
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
	if(Components.utils && Components.utils.Sandbox) {
		// DP beta+
		Components.utils.evalInSandbox(code, sandbox);
	} else if(Components.utils && Components.utils.evalInSandbox) {
		// DP alphas
		Components.utils.evalInSandbox(code, codebase, sandbox);
	} else if(Sandbox) {
		// 1.0.x
		evalInSandbox(code, sandbox, codebase);
	} else {
		throw new Error("Could not create sandbox.");
	}
},

openInTab: function(unsafeContentWin, url) {
	var tabBrowser = getBrowser(), browser, isMyWindow = false;
	for (var i = 0; browser = tabBrowser.browsers[i]; i++)
		if(browser.contentWindow == unsafeContentWin) {
			isMyWindow = true;
			break;
		}
	if(!isMyWindow) return;
 
	var loadInBackground, sendReferrer, referrer = null;
	loadInBackground = tabBrowser.mPrefs.getBoolPref("browser.tabs.loadInBackground");
	sendReferrer = tabBrowser.mPrefs.getIntPref("network.http.sendRefererHeader");
	if(sendReferrer) {
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
		if (jondro.apiLeakCheck(hitchCaller)) {
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
	if (appcontent && !appcontent.greased_jondro) {
		appcontent.greased_jondro=true;
		appcontent.addEventListener("DOMContentLoaded", jondro.contentLoad, false);
	}
},

onUnLoad: function() {
	//remove now unnecessary listeners
	window.removeEventListener('load', jondro.onLoad, false);
	window.removeEventListener('unload', jondro.onUnLoad, false);
	window.document.getElementById("appcontent")
		.removeEventListener("DOMContentLoaded", jondro.contentLoad, false);
},
wersjaff: function() {
	// 3.6 =>1.0902
// 6.02=>6.0002
  if (navigator.product != 'Gecko')
  {
    return -1;
  }
  var rvValue = 0;
  var ua      = navigator.userAgent.toLowerCase();
  var rvStart = ua.indexOf('rv:');
  var rvEnd   = ua.indexOf(')', rvStart);
  var rv      = ua.substring(rvStart+3, rvEnd);
  var rvParts = rv.split('.');
  var exp     = 1;

  for (var i = 0; i < rvParts.length; i++)
  {
    var val = parseInt(rvParts[i]);
    rvValue += val / exp;
    exp *= 100;
  }

  return rvValue;

},
GreenRed: function(a, b){
		if(a>7 && a<24){	return '<b class="green">'+b+'</b>';
		}else{	return '<b class="red">'+b+'</b>'; }
},

/*
formatTimeDrop:function(time){

},//*/
}; //object jondro


function konwerterraportw_ScriptStorage() {
	this.prefMan=new konwerterraportw_PrefManager();
}
konwerterraportw_ScriptStorage.prototype.setValue = function(name, val) {
	this.prefMan.setValue(name, val);
}
konwerterraportw_ScriptStorage.prototype.getValue = function(name, defVal) {
	return this.prefMan.getValue(name, defVal);
}


window.addEventListener('load', jondro.onLoad, false);
window.addEventListener('unload', jondro.onUnLoad, false);
