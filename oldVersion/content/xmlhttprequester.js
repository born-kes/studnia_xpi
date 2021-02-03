function konwerterraportw_xmlhttpRequester(unsafeContentWin, chromeWindow) {
	this.unsafeContentWin = unsafeContentWin;
	this.chromeWindow = chromeWindow;
}

// Ta funkcja otrzymuje (dostaje; rozumie) zawo�any (nazwany) przez scenariusze u�ytkownika w zadowolonym zakresie zastosowania (w zakresie) bezpieczno�ci
// rozpoczynaj� wzajemn� dziedzin� *xmlhttp* prosi� o (pro�ba; zapotrzebowanie).
//
// szczeg�y mia� wygl�da� jak:
// {metoda,*url*,*onload*,*onerror*,*onreadystatechange*,zbiorniki,dane }
// zbiorniki mia� jest w kszta�cie (formularz) {imi� (nazwa; wyznacza�; nazywa�; w imieniu):warto��,imi� (nazwa; w imieniu):warto��,i tak dalej }
// nie mo�e popiera� *mimetype* dlatego �e obmy�lam to tylko jest u�ywane dla zmuszenia
// tekst (tekstowy) /*xml* i my nie mo�e popiera� �eby
konwerterraportw_xmlhttpRequester.prototype.contentStartRequest = function(details) {
	// Istotny przechowywa� (przygotowywa� na zapas) ten (to) lokalnie tak (wi�c) co (�eby; kt�ry) zawarto�� mo�e nie *trick* my (USA; ameryka�ski) z
        // wyobra�nia (dziwaczny) *getter* kt�ry sprawdza liczb� (ilo��) czas�w to by�o zwracano si�,
        // zwracaj�cy niebezpiecznemu *URL* czas co (�eby; kt�ry) my faktycznie u�ywaj� to.
	var url = details.url;

	// make sure that we have an actual string so that we can't be fooled with
	// tricky toString() implementations.
	if (typeof url != "string") {
		throw new Error("Invalid url: url must be of type string");
	}

	var ioService=Components.classes["@mozilla.org/network/io-service;1"]
		.getService(Components.interfaces.nsIIOService);
	var scheme = ioService.extractScheme(url);

	// jest istotny - bez tego, *GM*_*xmlhttpRequest* mo�e by� u�ywany �eby otrzymywa� (dostawa�; rozumie�)
        // dost�p (zwraca� si� do) do rzeczy lubi� (jak; podobny do; podobnie do tego; upodobanie do) faj�y i chrom (chromowy). Uwa�ny.

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

// Ta funkcja jest przeznaczana by� zawo�any (nazwany) w kontekscie bezpieczno�ci chromu, tak (wi�c)
// co (�eby; kt�ry) to mo�e zwraca� si� do innych dziedzin bez bezpieczno�ci ostrzegaj�cy
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

// Porz�dkuje (umawia si�) dla nominalnego 'wydarzenia (wypadek) na *xmlhttprequest* 're�wier& (kr�lowa) wo�a� (dzwoni� do)
// metoda przez to same imi� (nazwa; w imieniu) kt�ry jest posiadanie (maj�tek) 'szczeg�y w zadowolony (zawarto��)
// kontekst bezpieczno�ci okna.
konwerterraportw_xmlhttpRequester.prototype.setupRequestEvent =
function(unsafeContentWin, req, event, details) {
	if (details[event]) {
		req[event] = function() {
			var responseState = {
				// Nie mo�e popiera� *responseXML* dlatego �e bezpieczno�� b�dzie (wola) nie
                                // pozwala� posiadaniom dzwonka programu przegl�du na tym
				responseText:req.responseText,
				readyState:req.readyState,
				responseHeaders:(req.readyState==4?req.getAllResponseHeaders():''),
				status:(req.readyState==4?req.status:0),
				statusText:(req.readyState==4?req.statusText:'')
			}

			// Trzaska� (trza�ni�cie; gwa�townie) popieraj� na program przegl�du nitki i wydarzenie (wypadek) dzwonka *handler*.
                        // Ma do u�ycia wstawi� (wstawiony) funkcjonuj� tutaj zamiast *GM*_*hitch* dlatego �e
                        // inaczej wyszczeg�lnia [wydarzenie (wypadek) ].Stosuj� (zwraca� si�) mo�e wskazywa� na *window.setTimeout*, kt�ry
                        // mo�e by� nadu�ywany otrzymywa� (dostawa�; rozumie�) powi�kszany *priveledges*.
			new XPCNativeWrapper(unsafeContentWin, "setTimeout()")
				.setTimeout(function(){details[event](responseState);}, 0);
		}
	}
}
