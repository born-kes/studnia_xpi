var all, table,heddde;

function url_explode(str){ url=str.split("?"); url=url[1].split("&");   return url;}
function url_get(str){ url=str.split("=");  return url;}


heddde =document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css"><!--table.map div.lay4 { position: relative; bottom:38px; margin-bottom :-38}--></style>';
all = document.evaluate('//table[@class="map"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
var anchorTags = table.getElementsByTagName("a");
for (var i=0; i< anchorTags.length ; i++ )
{
//alert(anchorTags[i].innerHTML);
   var url =  anchorTags[i].href.split("?");
   anchorTags[i++].innerHTML += '<div class="lay4" style="index:0;"><img src="http://www.bornkes.w.szu.pl/img/img.php?'+url[1]+'" /></div>';

 //if(i==10){i=100;}
 }
   var url_id = url[1].split("&");
    url_id=url_get(url_id[0]);

all = document.evaluate('//td[@valign="top"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var xy=document.getElementById('inputx').value+'|'+document.getElementById('inputy').value;
table = all.snapshotItem(1);                                http://pl5.plemiona.pl/game.php?village=63344&screen=main
if (table.innerHTML) table.innerHTML +=  '<tr><td><a href="/game.php?village='+url_id[1]+'&screen=main&Taktk=&xy='+xy+'">Mapa Tatyczna</a></td></tr>';
// '<tr><td><iframe src="http://www.bornkes.w.szu.pl/pl/mt.php?_xy='+xy+'&_oko=18&t_w=on&r_w=on&obrona=on&sz_w=on" width="260" height="260" frameborder="0" name="ramka" id="ramka" style="z-index:1;">Twoja przegl1darka nie akceptuje p3ywaj1cych ramek!</iframe></td></tr>';
