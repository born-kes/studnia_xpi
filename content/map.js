var all, table,heddde;

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
 
all = document.evaluate('//td[@valign="top"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var xy=document.getElementById('inputx').value+'|'+document.getElementById('inputy').value;
table = all.snapshotItem(1);
if (table.innerHTML) table.innerHTML += '<tr><td><iframe src="http://www.bornkes.w.szu.pl/pl/mt.php?_xy='+xy+'&_oko=18&t_w=on&r_w=on&obrona=on&sz_w=on" width="260" height="260" frameborder="0" name="ramka" id="ramka" style="z-index:1;">Twoja przegl1darka nie akceptuje p3ywaj1cych ramek!</iframe></td></tr>';
