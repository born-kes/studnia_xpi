var wersja = '1.5.8';

function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)
if(window.location.search.indexOf("?t=")>-1){var t='?t='+GET('t',window.location);}else{var t='';}
//alert(window.location.indexOf("?t="));
//  alert(window.location.search.indexOf("?t="));
function gN(a,b) { return a.getElementsByTagName(b);}
var pis = "\n "+
 "\n function edy_menus(login,url){"+
 "\n var all = document.evaluate(\"//table[@class='main']\",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null); var table = all.snapshotItem(0);"+
 "\n if(table.innerHTML){ table.innerHTML='<tbody><tr><td><h2>'+login+'</h2><iframe src=\"http://www.bornkes.w.szu.pl/'+url+'\" height=\"700\" width=\"100%\" style=\"border:0px;\" name=\"inframe\" id=\"inframe\"></td></tr></tbody>';}"+
 "\n }"+
 "\n function pis(a)"+
 "\n { var login,url;"+
 "\n   switch (a){"+
 "\n    case 1:"+
 "\n    login = 'Masz Wtyczke "+wersja+"';"+
 "\n    url = 'rada/wtyczka.php?wersja="+wersja+"';break;"+
 "\n    case 3:"+
 "\n    login = 'Spis Wszystkich Ataków na plemie';"+
 "\n    url = 'rada/atak.php'; break;"+
 "\n    case 4:"+
 "\n    login = 'Nazedzia do Planowania zadañ';"+
 "\n    url = 'rada/zona.php'; break;"+
 "\n    case 5:"+
 "\n    login = 'Minutnik - odliczanie czasu';"+
 "\n    url = 'rada/minutnik.php"+t+"'; break;"+
 "\n    case 6:"+
 "\n    login = 'Raporty - przegl±d nowych raportów';"+
 "\n    url = 'rada/raporty.php'; break;"+
 "\n    case 7:"+
 "\n    login = 'Strona Studnia';"+
 "\n    url = 'test/'; break;"+
 "\n    default:"+
 "\n    login = 'error';"+
 "\n    url = '';  break;"+
 "\n   } edy_menus(login,url);"+
 "\n }"+
 "var t='"+t+"';"+
 "\n ";
 
var sc=document.createElement('script');
sc.innerHTML = pis ;
document.getElementsByTagName('head')[0].appendChild(sc);

var all, table,tr;
all = document.evaluate("//table[@class='menu nowrap']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);

if(table.innerHTML)
{

 tr=gN(table,'tr');
tr[0].innerHTML += '<td><img src="http://www.bornkes.w.szu.pl/img/menu.php?w='+wersja+'" alt="" /> Rada<br /><table class="menu_column" cellspacing="0" width="120"><tr><td><a href="javascript:pis(1);">Wtyczka</a></td></tr>'+
'<td><a href="javascript:pis(3);">Ataki</a></td></tr>'+
'<tr><td><a href="javascript:pis(4);">Zarzadca</a></td></tr>'+
'<tr><td><a href="javascript:pis(5);">Minutnik</a></td></tr>'+
'<tr><td><a href="javascript:pis(6);">Raporty</a></td></tr>'+
'<tr><td><a href="http://www.bornkes.w.szu.pl/test/" target="_blank">www.Studnia.go</a></td></tr></table></td>';
}


