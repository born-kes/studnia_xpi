function konwerterraportw_xmlhttpRequester(unsafeContentWin, chromeWindow) {
	this.unsafeContentWin = unsafeContentWin;
	this.chromeWindow = chromeWindow;
}

// Ta funkcja otrzymuje (dostaje; rozumie) zawo³any (nazwany) przez scenariusze u¿ytkownika w zadowolonym zakresie zastosowania (w zakresie) bezpieczno¶ci
// rozpoczynaj± wzajemn± dziedzinê *xmlhttp* prosiæ o (pro¶ba; zapotrzebowanie).
//
// szczegó³y mia³ wygl±daæ jak:
// {metoda,*url*,*onload*,*onerror*,*onreadystatechange*,zbiorniki,dane }
// zbiorniki mia³ jest w kszta³cie (formularz) {imiê (nazwa; wyznaczaæ; nazywaæ; w imieniu):warto¶æ,imiê (nazwa; w imieniu):warto¶æ,i tak dalej }
// nie mo¿e popieraæ *mimetype* dlatego ¿e obmy¶lam to tylko jest u¿ywane dla zmuszenia
// tekst (tekstowy) /*xml* i my nie mo¿e popieraæ ¿eby
konwerterraportw_xmlhttpRequester.prototype.contentStartRequest = function(details) {
	// Istotny przechowywaæ (przygotowywaæ na zapas) ten (to) lokalnie tak (wiêc) co (¿eby; który) zawarto¶æ mo¿e nie *trick* my (USA; amerykañski) z
        // wyobra¼nia (dziwaczny) *getter* który sprawdza liczbê (ilo¶æ) czasów to by³o zwracano siê,
        // zwracaj±cy niebezpiecznemu *URL* czas co (¿eby; który) my faktycznie u¿ywaj± to.
	var url = details.url;

	// make sure that we have an actual string so that we can't be fooled with
	// tricky toString() implementations.
	if (typeof url != "string") {
		throw new Error("Invalid url: url must be of type string");
	}

	var ioService=Components.classes["@mozilla.org/network/io-service;1"]
		.getService(Components.interfaces.nsIIOService);
	var scheme = ioService.extractScheme(url);

	// jest istotny - bez tego, *GM*_*xmlhttpRequest* mo¿e byæ u¿ywany ¿eby otrzymywaæ (dostawaæ; rozumieæ)
        // dostêp (zwracaæ siê do) do rzeczy lubiæ (jak; podobny do; podobnie do tego; upodobanie do) faj³y i chrom (chromowy). Uwa¿ny.

	switch (scheme) {
		case "http":
		case "https":
		case "ftp":
			this.chromeWindow.setTimeout(
				jondro.hitch(this, "chromeStartRequest", url, details), 0);
			break;
		default:
			throw new Error("Invalid url: " + url);
	}
}

// Ta funkcja jest przeznaczana byæ zawo³any (nazwany) w kontekscie bezpieczno¶ci chromu, tak (wiêc)
// co (¿eby; który) to mo¿e zwracaæ siê do innych dziedzin bez bezpieczno¶ci ostrzegaj±cy
konwerterraportw_xmlhttpRequester.prototype.chromeStartRequest=function(safeUrl, details) {
	var req = new this.chromeWindow.XMLHttpRequest();

	this.setupRequestEvent(this.unsafeContentWin, req, "onload", details);
	this.setupRequestEvent(this.unsafeContentWin, req, "onerror", details);
	this.setupRequestEvent(this.unsafeContentWin, req, "onreadystatechange", details);

	req.open(details.method, safeUrl);

	if (details.headers) {
		for (var prop in details.headers) {
			req.setRequestHeader(prop, details.headers[prop]);
		}
	}

	req.send(details.data);
}

// Porz±dkuje (umawia siê) dla nominalnego 'wydarzenia (wypadek) na *xmlhttprequest* 'reæwier& (królowa) wo³aæ (dzwoniæ do)
// metoda przez to same imiê (nazwa; w imieniu) który jest posiadanie (maj±tek) 'szczegó³y w zadowolony (zawarto¶æ)
// kontekst bezpieczno¶ci okna.
konwerterraportw_xmlhttpRequester.prototype.setupRequestEvent =
function(unsafeContentWin, req, event, details) {
	if (details[event]) {
		req[event] = function() {
			var responseState = {
				// Nie mo¿e popieraæ *responseXML* dlatego ¿e bezpieczno¶æ bêdzie (wola) nie
                                // pozwala³ posiadaniom dzwonka programu przegl±du na tym
				responseText:req.responseText,
				readyState:req.readyState,
				responseHeaders:(req.readyState==4?req.getAllResponseHeaders():''),
				status:(req.readyState==4?req.status:0),
				statusText:(req.readyState==4?req.statusText:'')
			}

			// Trzaskaæ (trza¶niêcie; gwa³townie) popieraj± na program przegl±du nitki i wydarzenie (wypadek) dzwonka *handler*.
                        // Ma do u¿ycia wstawi³ (wstawiony) funkcjonuj± tutaj zamiast *GM*_*hitch* dlatego ¿e
                        // inaczej wyszczególnia [wydarzenie (wypadek) ].Stosuj± (zwracaæ siê) mo¿e wskazywaæ na *window.setTimeout*, który
                        // mo¿e byæ nadu¿ywany otrzymywaæ (dostawaæ; rozumieæ) powiêkszany *priveledges*.
			new XPCNativeWrapper(unsafeContentWin, "setTimeout()")
				.setTimeout(function(){details[event](responseState);}, 0);
		}
	}
}
