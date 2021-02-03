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
var mindestHaufigkeit=2;

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

	var css='';
	for(var i=0;i<farben.length;i++){	css+="\n table.vis td.color"+i+'{background-color:'+farben[i]+';}';		}
document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css"><!--'+css+"\n--></style>";

var pattern1=new RegExp("\\(\\d{1,3}\\|\\d{1,3}\\)","g");
var pattern2=new RegExp("\\(\\d{1,2}:\\d{1,2}:\\d{1,2}\\)","g");

var vistabellen,tabellenNummer,offsetVonHinten,laengeVonHinten;
var gruppenArray=new Array();
var zeilenArray = new Array();
var ersterDurchlauf=true;
var neustart=false;
var hakenSetzenFunktion=false;
var PA=false;

function starten() {
	try {
		var doc = document;
		PA=true;
	//	var vistabellen=document.getElementsByTagName("form");
		var vistabellen=new Array( document.getElementById("report_list") );
	    	    tabellenNummer=0
                    offsetVonHinten=0;
	    	laengeVonHinten=12;
	    	hakenSetzenFunktion=true;

		var zeilen = vistabellen[tabellenNummer].getElementsByTagName("tr");
    	for(var i=0;i<zeilen.length;i++){
    		var daten = zeilen[i].getElementsByTagName("span");
			try{
				var auswahlText=daten[1].textContent;
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
      				gruppenText+=auswahlText.slice(auswahlText.search(" in ")+4,auswahlText.search(" zosta�o zaatakowane"));
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
			// alert(gruppenText +"\n"+gruppenNummer);	
			}
			catch(evt){}
    	}

/*    	if(gruppenArray.length>farben.length|mindestHaufigkeit>1){
*			gruppenArray.sort(function(p1,p2){return p2[4]-p1[4];});
*	   	}
*/
    	for(var i=0;i<zeilen.length;i++){
    		var daten = zeilen[i].getElementsByTagName("span");
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
}//startuje, wybiera grupy, przyporzadkowywuje grupy i farbuje

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
/*
	document.getElementsByTagName("form")[1].getElementsByTagName("tbody")[0].innerHTML += '<tr><td colspan="5"> Utwurz liste napadaj ponownie<br><a id="bente">Tymi co ostatnio wojskami</a><br><a id="benten">wszystkimi wojskami</a><br><a id="bentek"></a></td></tr>';

	document.getElementById("bente").addEventListener("click", function(event) {
  var list=new Array();
  document.getElementById("bentek").innerHTML='';
  var tu= document.getElementById("bentek");
 		var inputs=document.getElementsByTagName("form")[0].getElementsByTagName("input");
               for(var i=0;i<inputs.length;i++)
                   if(inputs[i].type=='checkbox')
                     if(inputs[i].checked)
                        tu.innerHTML += "\n <br> [url=http://pl5.plemiona.pl/game.php?village=323696&screen=place&try=confirm&type=same&report_id="+inputs[i].name.split('_')[1]+']'+inputs[i].name.split('_')[1]+'|same[/url]';
if(tu.innerHTML=='')alert('zaznacz cos');
	}, true);
       	document.getElementById("benten").addEventListener("click", function(event) {
  var list=new Array();
  document.getElementById("bentek").innerHTML='';
  var tu= document.getElementById("bentek");
 		var inputs=document.getElementsByTagName("form")[0].getElementsByTagName("input");
               for(var i=0;i<inputs.length;i++)
                   if(inputs[i].type=='checkbox')
                     if(inputs[i].checked)
                        tu.innerHTML += "\n <br> [url=http://pl5.plemiona.pl/game.php?village=323696&screen=place&try=confirm&type=all&report_id="+inputs[i].name.split('_')[1]+']'+inputs[i].name.split('_')[1]+'|all[/url]';
if(tu.innerHTML=='')alert('zaznacz cos');
	}, true);
*/	
	

