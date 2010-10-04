// ==UserScript==
// @name           DS - Berichte und Angriffe markieren
// @version        v2.7
// @author         bodhiBrute
// @przerobił 	   Domanoid
// @description    Hebt zusammengehoerende Berichte,Angriffe und Nachrichten farbig hervor
// @descriptionpl  Koloruje pasujące do siebie raporty, rozkazy oraz wiadomości
// @include        http://pl*.plemiona.pl/*screen=report*
// @include        http://pl*.plemiona.pl/*screen=overview_villages&mode=commands*
// @include        http://pl*.plemiona.pl/*screen=overview_villages&mode=incomings*
// @include        http://pl*.plemiona.pl/*screen=mail
// @include        http://pl*.plemiona.pl/*screen=mail&action=*
// ==/UserScript==

//Czy kolory mają być przydzielane automatycznie czy przed dwuklik na raporcie? (true/false)
var autoMarkierung=true;

//Ile razy musi sie powtórzyć dany raport aby skrypt zaczął kolorować raporty tego typu?
var mindestHaufigkeit=3;

//Czy przeszukiwanie ma sie odbywac po koordynatach? (najlepiej true)
var koordinatenSuchen=true;

//Czy wszystkie surowce z ryku mają być połączone?
lieferungenZusammenfassen=true;

//Czy mają być rozróżniane różne typy raportów?
//Gdy false, wiadomosci typu "ktoś wspiera WioskeA", "WioskaA jest wspierana przez kogoś",
//"ktoś dostarcza do WioskiA", "twoja pomoc w WiosceA została zaatakowana", "wycofujesz swoją pomoc z WioskiA" oraz
//"WioskaA odsyła pomoc" posiadają ten sam kolor.
berichttypenUnterscheiden=true;

var farben = new Array(
	"#FFEFAE", "#FFD7AE", "#FECDD7", "#F9CDFE", "#E3CDFE", "#D3D7FE", "#D3ECFE", "#D3FEFA", "#CFFED0", "#ECFEAF",
	"#FFE064", "#FFB66C", "#FD829A", "#F28EFD", "#C699FD", "#8B97FC", "#83C9FC", "#74FCEE", "#69FC6C", "#DEFD73",
	"#F4C400", "#F47A00", "#FB1C48", "#E311FB",            "#1D33FA", "#0581DC", "#04C6B3", "#03A707", "#9CC903",
	"#AD966B", "#9E7A8B", "#AE6AA9", "#6B6398", "#6F8BAA", "#6DABAB", "#6BAD71",
	"#B79300", "#4F03AB", "#020F7D", "#034A7E", "#026258", "#014503", "#DFD9CE");

try{
	var css=document.styleSheets[2];
	for(var i=0;i<css.cssRules.length;i++)
	{
		if(css.cssRules[i].selectorText=="table.vis td"){
			css.cssRules[i].style.backgroundImage = 'none';
		}
	}
} catch(evt){}

for(var farbNummer=0;farbNummer<farben.length;farbNummer++){
	GM_addStyle("table.vis td.color"+farbNummer+" { background-color:"+farben[farbNummer]+"}");
	GM_addStyle("table.vis tr.row_a td.color"+farbNummer+" { background-color:"+farben[farbNummer]+"}");
	GM_addStyle("table.vis tr.row_b td.color"+farbNummer+" { background-color:"+farben[farbNummer]+"}");
}

var pattern1=new RegExp("\\(\\d{1,3}\\|\\d{1,3}\\)","g");
var pattern2=new RegExp("\\(\\d{1,2}:\\d{1,2}:\\d{1,2}\\)","g");

var vistabellen,tabellenNummer,datenOrt,datenOrtStelle,offsetVonHinten,laengeVonHinten;
var gruppenArray=new Array();
var zeilenArray = new Array();
var ersterDurchlauf=true;
var neustart=false;
var hakenSetzenFunktion=false;
var PA=false;


/*dla przyszłego wsparcia dla Opery (by poncho)
 *if(typeof GM_addStyle!="function"){
 *	function GM_setValue(name, value) {
 *		document.cookie = name + '=' + escape(value) + '; expires=' + (new Date(2036, 1, 1)).toGMTString() + ';';
 *	}
 *	function GM_getValue(name) {
 *		var value = document.cookie.match('/'+name+'=(.*?)(?:;|$)/');
 *		if(value)
 *		return unescape(value[1]);
 *		return false;
 *	}
 *	function GM_addStyle(style) {
 *		var styleel = document.createElement('style');
 *		styleel.setAttribute('type', 'text/css');
 *		styleel.innerHTML = style;
 *		document.getElementsByTagName('head')[0].appendChild(styleel);
 *	}
 *}                   i => i
 */

function starten() {
	try {
		var doc = getGameDoc();
		try{if(doc.getElementsByTagName("ul")[0].className=="menu nowrap quickbar"){PA=true;}}
		catch(evt){}
		var tabellen=doc.getElementsByTagName("table");
		vistabellen=new Array();
		for(var i=0;i<tabellen.length;i++){
			if(tabellen[i].className=="vis"){vistabellen.push(tabellen[i]);}
		}

    	if(doc.URL.match("screen=report")){	
			tabellenNummer=2;
			if(!PA){
				var seitenAuswahlZeile=vistabellen[1].getElementsByTagName("td")[0].getElementsByTagName("a")[0].textContent;
				if(seitenAuswahlZeile.search("&gt;[0-9]+&lt;")<0){
					tabellenNummer=1;
				}
			}
	    	datenOrt="span";
	    	datenOrtStelle=1;
	    	offsetVonHinten=0;
	    	laengeVonHinten=12;
	    	hakenSetzenFunktion=true;
	    }

		var zeilen = vistabellen[tabellenNummer].getElementsByTagName("tr");
    	for(var i=0;i<zeilen.length;i++){
    		var daten = zeilen[i].getElementsByTagName(datenOrt);
			try{
				var auswahlText=daten[datenOrtStelle].textContent;
				var gruppenText="";
				if(koordinatenSuchen&&pattern1.test(auswahlText)){
					pattern1.lastIndex=0;
      				while(pattern1.exec(auswahlText)){}
      				gruppenText=RegExp.lastMatch;
				}else if(koordinatenSuchen&&pattern2.test(auswahlText)){
					pattern2.lastIndex=0;
      				while(pattern2.exec(auswahlText)){}
      				gruppenText=RegExp.lastMatch;
				} else if(auswahlText.split(", ").length==3){
      				gruppenText=auswahlText.split(", ")[1];
				} else if(auswahlText.search(" greift ")>=0&auswahlText.lastIndexOf(" (")>auswahlText.search(" greift ")){
      				if(berichttypenUnterscheiden){gruppenText+="Angriff ";}
      				gruppenText+=auswahlText.slice(auswahlText.search(" greift ")+8,auswahlText.lastIndexOf(" ("));
				} else if(auswahlText.match(" wurde angegriffen")){
      				if(berichttypenUnterscheiden){gruppenText+="AngriffAufUnterstützung ";}
      				gruppenText+=auswahlText.slice(auswahlText.search(" in ")+4,auswahlText.search(" wurde angegriffen"));
				} else if(auswahlText.match(" zieht seine Unterstützung von ")){
      				if(berichttypenUnterscheiden){gruppenText+="Abzug ";}
      				gruppenText+=auswahlText.slice(auswahlText.search(" zieht seine Unterstützung von ")+31,auswahlText.search(" ab"));
				} else if(auswahlText.match(" schickt die Unterstützung von ")){
      				if(berichttypenUnterscheiden){gruppenText+="Zurückgeschickt ";}
      				gruppenText+=auswahlText.substring(0,auswahlText.search(" schickt die Unterstützung von "));
      				gruppenText=gruppenText.substring(gruppenText.lastIndexOf(">")+1);
      			} else if(auswahlText.match(" unterstützt ")){
      				if(berichttypenUnterscheiden){gruppenText+="Unterstützung ";}
      				gruppenText+=auswahlText.substr(auswahlText.search(" unterstützt ")+13);
				} else if(auswahlText.match("Angebot")){
      				if(lieferungenZusammenfassen){gruppenText+="Lieferung";}
      				else{
      					if(berichttypenUnterscheiden){gruppenText+="Lieferung ";}
      					gruppenText+=auswahlText.slice(auswahlText.search("Angebot von ")+12,auswahlText.search(" angenommen"));
      				}
				} else if(auswahlText.match(" beliefert ")){
      				if(lieferungenZusammenfassen){gruppenText+="Lieferung";}
      				else{
      					if(berichttypenUnterscheiden){gruppenText+="Lieferung ";}
      					gruppenText+=auswahlText.substr(auswahlText.search(" beliefert ")+11);
      				}
      			} else if(auswahlText.match("Urlaubsvertretung")){
      				gruppenText="Urlaubsvertretung";
      			} else if(auswahlText.match(" hat dich in den Stamm ")){
      				gruppenText="Einladung";
      			} else if(auswahlText.match("Die Einladung des Stammes ")){
      				gruppenText="Einladung";
      			} else{
					gruppenText=auswahlText.substring(0,auswahlText.length-offsetVonHinten);
					if(laengeVonHinten>0) gruppenText=gruppenText.substring(gruppenText.length-laengeVonHinten,gruppenText.length);
					gruppenText=gruppenText.substring(gruppenText.lastIndexOf(">")+1);
				}
			    //alert(gruppenText);
				var gruppenNummer=0;
				while(gruppenArray[gruppenNummer]!=null&&gruppenArray[gruppenNummer][1]!=gruppenText){
					gruppenNummer++;
				}
				try{gruppenArray[gruppenNummer]=[gruppenNummer,gruppenText,gruppenArray[gruppenNummer][2],gruppenArray[gruppenNummer][3],gruppenArray[gruppenNummer][4]=gruppenArray[gruppenNummer][4]+1];}
				catch(evt){gruppenArray[gruppenNummer]=[gruppenNummer,gruppenText,autoMarkierung,false,1];}
														//gruppennummer,gruppentext,markierung,checkbox,haeufigkeit
				if(ersterDurchlauf|neustart){zeilenArray[i]=[gruppenNummer,function(){}];}
			}
			catch(evt){}
    	}

    	if(gruppenArray.length>farben.length|mindestHaufigkeit>1){
			gruppenArray.sort(function(p1,p2){return p2[4]-p1[4];});
	   	}

    	for(var i=0;i<zeilen.length;i++){
    		var daten = zeilen[i].getElementsByTagName(datenOrt);
			try{
				var platzNummer=0;
				while(gruppenArray[platzNummer]!=null&&gruppenArray[platzNummer][0]!=zeilenArray[i][0]){
					platzNummer++;
				}

				if(ersterDurchlauf|neustart){
					if(gruppenArray[platzNummer][4]<mindestHaufigkeit) gruppenArray[platzNummer][2]=false;
					
					zeilenArray[i][1]=(function(e) {return function() {gruppenArray[e][2]=!gruppenArray[e][2];starten();}})(platzNummer);
					zeilen[i].addEventListener('dblclick', zeilenArray[i][1], false);
					if(hakenSetzenFunktion){
						zeilenArray[i][2]=(function(e) {return function() {gruppenArray[e][2]=!gruppenArray[e][2];gruppenArray[e][3]=!gruppenArray[e][3];starten();}})(platzNummer);
						zeilen[i].getElementsByTagName("input")[0].addEventListener('dblclick',zeilenArray[i][2], false);
					}
				}

				var tabledata=zeilen[i].getElementsByTagName("td");
				for(var l=0;l<tabledata.length;l++){
					if(gruppenArray[platzNummer][2]){tabledata[l].className="color"+platzNummer;}
					else tabledata[l].className="";
				}
				if(hakenSetzenFunktion){zeilen[i].getElementsByTagName("input")[0].checked=gruppenArray[platzNummer][3];}
			}
			catch(evt){}
    	}
    	ersterDurchlauf=false;
    	neustart=false;
  } catch(evt) {
   
  }
}//startuje, wybiera grupy, przyporządkowywuje grupy i farbuje

function neustarten(){
	gruppenArray=new Array();
	var zeilen = vistabellen[tabellenNummer].getElementsByTagName("tr");
   	for(var i=0;i<zeilen.length;i++){
   		try{zeilen[i].removeEventListener('dblclick', zeilenArray[i][1],false);}catch(evt){}
   		try{zeilen[i].getElementsByTagName("input")[0].removeEventListener('dblclick',zeilenArray[i][2], false);}catch(evt){}
   	}
   	zeilenArray=new Array();
    neustart=true;
	starten();
}//restart przy zmianie grup

function getGameDoc(){
	getdoc=window.document;
	if(!getdoc.URL.match("game.php")){
		for(i=0;i<window.frames.length;i++){
			if(window.frames[i].document.URL.match("game.php")){
				getdoc = window.frames[i].document;
			}
		}
	}
	return getdoc;
}//getGameDoc

starten();
