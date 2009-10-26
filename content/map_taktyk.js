var all, table;
// alert('go');
all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
 var url = window.location.search.split("=");
                 // alert(url[4]);
 // var ur = url[4] ; alert(url);
 if(url[4].indexOf("|") != -1){var xy=url[4].split("|"); }
table.innerHTML = '<table><tr><td> <img id="map" src="http://www.bornkes.w.szu.pl/img/00a.php?s=111&xy='+xy[0]+'|'+xy[1]+'" alt="{map}"></td></tr><tr style="display:none"><td><img src="http://www.bornkes.w.szu.pl/img/rd.gif" style="width: 1px; height: 1px; position: absolute; display: block; left: 426px; top: 911px;" id="rd_top" alt=""><img src="http://www.bornkes.w.szu.pl/img/rd.gif" style="width: 1px; height: 1px; position: absolute; display: block; left: 426px; top: 911px;" id="rd_left" alt=""><img src="http://www.bornkes.w.szu.pl/img/rd.gif" style="width: 1px; height: 4px; position: absolute; display: block; left: 429px; top: 911px;" id="rd_right" alt=""><img src="http://www.bornkes.w.szu.pl/img/rd.gif" style="width: 4px; height: 1px; position: absolute; display: block; left: 426px; top: 914px;" id="rd_bottom" alt=""></td></tr></table>';
table.innerHTML +='<div style="position:fixed; top:150px; right:10px;"><iframe id="rapo" style="border:0pt;" width="250" height="350"></iframe></div>';

var sc=document.createElement('script');
sc.src='http://www.bornkes.w.szu.pl/js/tw_002.js';
document.getElementsByTagName('head')[0].appendChild(sc);

 if(url[4].indexOf("|") != -1)                             {
var scv=document.createElement('script');
scv.innerHTML = '           var center_x='+xy[0]+'; var center_y='+xy[1]+'; registerEvents();';
document.getElementsByTagName('head')[0].appendChild(scv); }
