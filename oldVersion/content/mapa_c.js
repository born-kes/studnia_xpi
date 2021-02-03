if(typeof(unsafeWindow) != 'undefined') {	gameData = unsafeWindow.game_data; $= unsafeWindow.$;}
else{ gameData = window.game_data; $= window.$; }      // ==UserScript==
// @name					DSmakeBBCoordListOnMap
// @author					Heinzel
// @version: 				2.0.0
// @namespace				http://userscripts.org
// @description				Mit diesem Script kann man nach dem Drücken der 'b'-Taste einen BB-Code-Liste von Dörfern auf der Karte erstellen, indem man sie einfach anklickt.
// @include					http://pl*.plemiona.pl/game.php*screen=map*
// ==/UserScript==


// version: 		2.0.0
// author: 			Heinzel
// with help of: 		Hypix
// changelog:
// 1.0.0			- Fertigstellung
// 2.0.0			- Anpassung an DS-v7.x


const UserScript = {
	'name': 		'DSmakeBBCoordListOnMap',
	'version': 		'2.0.0',
	'threadLink': 	'http://pl5.plemiona.pl/game.php?village='+gameData.village.id+'&mode=units&screen=place'
};
var efekt_TU = document.getElementById("units_form").parentNode;
function checkForUpdate() {
	if(typeof(GM_xmlhttpRequest) == 'undefined') {
		return;
	}
	// return;
	GM_xmlhttpRequest({
		method: 'GET',
		url: 	UserScript.threadLink ,//+ '&postcount=1',
		headers: {},
		onload: function(responseDetails) {
			var doc = responseDetails.responseText;
			
			efekt_TU.innerHTML += '<table id="delete">' + wykop(doc) + '</table>'; //ds_body
			//document.getElementById("delete").innerHTML =document.getElementById("units_away").innerHTML;
			var currentVersion = doc.match(/.*units_away.\s*(\d+\.\d+\.\d+)/);
			if(currentVersion !== null && currentVersion[1] != UserScript.version) {
			alert('he');				
			//	alert(currentVersion);
			//alert('he');

				window.alert(UserScript.name + " meldet: \n\nEs ist eine neue Version (" + currentVersion + ") verfügbar! \nDen Link zum aktuellen Script findest du hier: \n\n" + UserScript.threadLink + "&postcount=1");
			}
		},
		onerror: function(responseDetails) {
			GM_log('Fehler: ' + responseDetails.statustext + ' (' + responseDetails.status + '): ' + responseDetails.responseText);
		}
	});

}
if(G_wersjaff>10){
$.ajax({
		type: 'GET',
		url: 	UserScript.threadLink ,//+ '&postcount=1',
		success: function(doc) {

			efekt_TU.innerHTML += '<table id="delete">' + wykop(doc) + '</table>';

		}
});
}


function wykop(a){

a= a.split('table>');//id="units_away"
for(var i=1;a.length>i;i++){
	if(a[i].lastIndexOf('id="units_away"')>-1) return(a[i]);
	}

return '<tr><th>W innych wojskach: Brak</th></tr>';
	
}


(function __construct() {
	// nachschauen, ob ein neues Update verfügbar ist
	checkForUpdate();
	
	// window-Objekt von außerhalb der GM-Sandbox ermitteln
//	win = (typeof(unsafeWindow) != 'undefined') ? unsafeWindow : window;
	
	// Aktivierungs-Display erzeugen
//	display = new CActivationDisplay();
//	display.create();
	
	// Coordliste laden
//	coordList = new CCoordlist();
// coordList.init();
})();
