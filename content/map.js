function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      var url_id=GET('village',window.location.search);
function gid(id) {
	return document.getElementById(id);
}
function gN(a,b) { return a.getElementsByTagName(b);}

var all, table,heddde,id_wsi,img_src,adres_src;

 //Zamieniæ w map.php 2px 2px na 11px 11px
 var center_x=gid('inputx').value;
 var center_y=gid('inputy').value;

//*                                    >

//all = document.evaluate('//h2',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = gN(document,'h2')[0];                             //http://pl5.plemiona.pl/game.php?village=63344&screen=main
if (table.innerHTML) table.innerHTML +=  '<div onmouseout="offKES(\'tw_maps\');" onmouseover="on_KES(\'tw_maps\');">'+
 '<a href="javascript:map_kesi();" title="Podglad Mapy Taktycznej"><img src="http://www.bornkes.w.szu.pl/img/kordy.gif" width="15" height="15"  /></a>'+
 '<a href="http://www.bornkes.w.szu.pl/map.php?_xy='+center_x+'|'+center_y+'" target="_blank" title="Mapa Tatyczna"><img src="http://static.gehirnpfirsich.de/images/archive.16.png" width="15" height="15" /></a>'+
 '<a href="javascript:map_kesi_legenda();" title="TwMaps"><img src="http://static.twmaps.org/favicon.ico" width="15" height="15" /><div style="display: none;" id="tw_maps"><iframe src="http://www.bornkes.w.szu.pl/test/operacje/legenda.symulator.php" style="border: 1pt none ;" id="iframe_KES" width="300" height="150"></iframe></div></a></div>';
  /*/
//map_wrap    worldmap
       //map_chooser_select - id rozmiaru mapy
       //worldmap_settings  - id menu mapy swiata
       //worldmap_body      - id mapy swiata
       //worldmap_footer    - id tabelki pod map± siata
  //*/
var pis = "\n"+
 'window.setTimeout("map_kesi_1s()",1000);'+
"\n\n";

var sc=document.createElement('script');
sc.innerHTML = pis;
document.getElementsByTagName('head')[0].appendChild(sc);
/*
var all = document.evaluate('//div[@class="containerBorder"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
if(table = all.snapshotItem(0))
{ table = all.snapshotItem(0);        // alert('Legenda mapy');
  table.innerHTML += ' ';
}   */

