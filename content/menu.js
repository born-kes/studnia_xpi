
if(typeof(unsafeWindow) != 'undefined') {	gameData = unsafeWindow.game_data; $= unsafeWindow.$;}
else{ gameData = window.game_data; $= window.$; }
	 var d_='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
 gameData.studnia={'versja':'1.8d','d_':d_};

$.get("http://www.bornkes.w.szu.pl/json.php", function(response) { 
    alert(response) 
});

function xmlGET(url_) {
return;

	if(typeof(GM_xmlhttpRequest) == 'undefined') {		return;	}

	GM_xmlhttpRequest({
		method: 'GET',
		url: 	'http://pl5.plemiona.pl/game.php?village=39221&screen=map#635;651',
	//	headers: {},
		onload: function(responseDetails) {
			var doc = responseDetails.responseText;
			return 'ggg';
			var currentVersion = doc.match(/Aktuelle\s*Version:\s*(\d+\.\d+\.\d+)/);
			if(currentVersion !== null && currentVersion[1] != UserScript.version) {
				window.alert(UserScript.name + " meldet: \n\nEs ist eine neue Version (" + currentVersion[1] + ") verfügbar! \nDen Link zum aktuellen Script findest du hier: \n\n" + UserScript.threadLink + "&postcount=1");
			}
		},
		onerror: function(responseDetails) {
			GM_log('Fehler: ' + responseDetails.statustext + ' (' + responseDetails.status + '): ' + responseDetails.responseText);
		}
	});

}
	
	
function GET(s,str){
	   var get=Explode(str);
	     for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } 
}
function Explode(str){
	  var tablica = new Array(); var ex,url,u=0; url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)


try{
     if(window.location.search.indexOf("?t=") > -1){ var t='?t='+GET('t',window.location.search); }
else if(window.location.search.indexOf("&t=") > -1){var t='&t='+GET('t',window.location.search);}
else{var t='';}
}catch(evt){alert(evt)}
try{
$("#menu_row td").html(function(index,value){ if(index==0)return;
	if(value.lastIndexOf("Wojska")>-1 ){
         return value+
         '<a href="'+gameData.link_base+'overview_villages&mode=units&type=support_detail&filter_villages=1">'+d_+d_+'* obrona</a>'+
         '<a href="'+gameData.link_base+'overview_villages&mode=units&type=away_detail&filter_villages=1">'+d_+d_+'* pomoc</a>';
         }
   if(value.lastIndexOf("Budynki")>-1 ){
         return value+
         '<a href="'+gameData.link_base+'overview_villages&mode=buildings&order=points&dir=asc&group=0&page=0&order=points&building_mode=build">'+d_+d_+'* pkt</a>'+
         '<a href="'+gameData.link_base+'overview_villages&mode=buildings&order=wall&dir=asc&group=0&page=0&order=points&building_mode=build">'+d_+d_+'* mur</a>';
         }
   if(value.lastIndexOf("Wyloguj")>-1 ){
  // if(wersjaff<10){return 'v'+wersjaff+value;}
         return '<a href="#"><img src="http://www.bornkes.w.szu.pl/img/menu.php?w='+gameData.studnia.versja+'" alt="" />Panel Radnego<br /></a>'+
         '<table class="menu_column" cellspacing="0" width="120">'+
			'<tr><td class="menu-column-item"><a href="javascript:manu(1);">Wtyczka</a></td></tr>'+
         '<tr><td class="menu-column-item"><a href="javascript:manu(3);">Ataki</a></td></tr>'+
         '<tr><td class="menu-column-item"><a href="javascript:manu(4);">Zarzadca</a></td></tr>'+
         '<tr><td class="menu-column-item"><a href="javascript:manu(5);">Minutnik</a></td></tr>'+
         '<tr><td class="menu-column-item"><a href="javascript:manu(6);">Raporty</a></td></tr>'+
         '<tr><td class="menu-column-item"><a href="javascript:manu(8);">Dane Serwera</a></td></tr>'+
         '<tr><td class="menu-column-item"><a href="http://www.bornkes.w.szu.pl/kalkul/zlozony.php" target="_blank">Kalulator Zlozony</a></td></tr>'+
         '<tr><td class="menu-column-item"><a href="http://www.bornkes.w.szu.pl/test/" target="_blank">www.Studnia.go</a></td></tr>'+
         '<tr><td class="menu-column-item" nowrap="tak">'+value+d_+' z GRY</td></tr>'+
         '<tr><td class="bottom"><div class="corner"></div><div class="decoration"></div></td></tr>'+
         '</table>';
			}	
	});
}catch(evt){alert(evt)}
try{

var max_spich = $('#storage').text()/100;
$("#wood") .parent().html(function(index,value){var wood  = $("#wood").html() /max_spich; return value+'<span class="green"><span class="header wood" >__</span>_['+Math.floor(wood)  +'%]</span>'; });
$("#stone").parent().html(function(index,value){var stone = $("#stone").html()/max_spich; return value+'<span class="green"><span class="header stone">__</span>_['+Math.floor(stone) +'%]</span>'; });
$("#iron") .parent().html(function(index,value){var iron  = $("#iron").html() /max_spich; return value+'<span class="green"><span class="header iron" >__</span>_['+Math.floor(iron)  +'%]</span>'; });

$("#pop_max_label") .parent().html(function(nr,val){
	var ludzie  = $("#pop_max_label").html() - $("#pop_current_label").html(); 
	return val+'<div style="position:absolute;"><span id="ludzie" class="green header-border" title="ile wolnego w zagrodzie"> ='+ludzie +'</span></div>';
});
}catch(evt){alert(evt)}
try{

var img ='http://cdn.tribalwars.net/graphic/';
var plNazwy = new Array('Koszary' ,
								'Stajnia',
								'Warsztat',
                        'Wyslij surowce',
                        'Wlasne propozycje',
                        'Obce oferty',
                        'Wszystkie twoje oferty',
                        'Wezwij',                      //7
                        'Wojska',
                        'Symulator',
                        'Wioski w sasiedztwie',
                        'Wezwij wlasna pomoc',                     //11
                        'Rekrutowanie Masowe',
                        'Info Wioska'
                        );
var enNazwy = new Array('barracks',
								'stable' ,
								'garage'  ,
                        'market&mode=send',
                        'market&mode=own_offer',
                        'market&mode=other_offer',
                        'market&mode=all_own_offer',
                        'market&mode=call',              //7
                        'place&mode=units',
                        'place&mode=sim',
                        'place&mode=neighbor',
                        'place&mode=call',                //11
                        'train&mode=mass',
                        'info_village&id='+gameData.village.id
                        );
function ul(str){
    return '<li>'+str+'</li><br>';
}
function bud(nr){
    return ul('<a href="'+gameData.link_base + enNazwy[nr]+'"><img alt="" title="'+plNazwy[nr]+'" src="'+img+'buildings/'+enNazwy[nr]+'.png?1"> '+plNazwy[nr]+'</a>');
}
function ryn(nr){
    return ul('<a href="'+gameData.link_base + enNazwy[nr]+'">'+plNazwy[nr]+'</a>');
}
$("#quickbar_inner li").html(function(index,value){
       if(value.lastIndexOf("Ratusz")>-1 ){     return value+'<ul class="menu_column">'+ul(d_)+ryn(13)+ul(d_)+'</ul>';}
       if(value.lastIndexOf("Rekrutacja")>-1 ){ return value+'<ul class="menu_column">'+ul(d_)+ryn(12)+bud(0)+bud(1)+bud(2)+ul(d_)+'</ul>';}
       if(value.lastIndexOf("Rynek")>-1 ){      return value+'<ul class="menu_column">'+ul(d_)+ryn(3)+ryn(4)+ryn(5)+ryn(6)+ryn(7)+ul(d_)+'</ul>';}
       if(value.lastIndexOf("Plac")>-1 ){       return value+'<ul class="menu_column">'+ul(d_)+ryn(8)+ryn(9)+ryn(10)+ryn(11)+ul(d_)+'</ul>';}

	});
}catch(evt){alert(evt)}
try{
$(".overview_table .res,.overview_table .warn").html(function(index,value){return '<span class="right_">'+value+'</span>'; })
}catch(evt){alert(evt)}
