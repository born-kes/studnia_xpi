function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      var url_id=GET('village',window.location.search);
function gid(id) {
	return document.getElementById(id);
}var all, table,heddde;

heddde =document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css"><!--table.map .lay4 { position: relative; bottom:38px; margin-bottom :-38}--></style>';
all = document.evaluate('//table[@class="map"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
var anchorTags = table.getElementsByTagName("a");
for (var i=0; i< anchorTags.length ; i++ )
{
//alert(anchorTags[i].innerHTML);
   var url =  anchorTags[i].href.split("?");
   anchorTags[i].innerHTML += '<img class="lay4" src="http://www.bornkes.w.szu.pl/img/img.php?'+url[1]+'" />';

 //if(i==10){i=100;}
 }
 var center_x=gid('inputx').value;
 var center_y=gid('inputy').value;


all = document.evaluate('//td[@valign="top"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);                               //http://pl5.plemiona.pl/game.php?village=63344&screen=main
if (table.innerHTML) table.innerHTML +=  '<tr><td><a href="http://www.bornkes.w.szu.pl/map.php?_xy='+center_x+'|'+center_y+';" target="_blank">Mapa Tatyczna</a></td></tr>';
// '<tr><td><iframe src="http://www.bornkes.w.szu.pl/pl/mt.php?_xy='+xy+'&_oko=18&t_w=on&r_w=on&obrona=on&sz_w=on" width="260" height="260" frameborder="0" name="ramka" id="ramka" style="z-index:1;">Twoja przegl1darka nie akceptuje p3ywaj1cych ramek!</iframe></td></tr>';

