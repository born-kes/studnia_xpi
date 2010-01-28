function gN(a,b) { return a.getElementsByTagName(b);}
var pis = "function pis(a)\n"+
 "{ var all, table,login,url;\n"+
 "  switch (a){\n"+
 "   case 1:\n"+
 "   login = 'Masz Wtyczke 1.5.ZOMOX';\n"+
 "   url = 'rada/wtyczka.php?wersja=Hello_Studnia1.5.6b';break;\n"+
 "   case 3:\n"+
 "   login = 'Spis Wszystkich Ataków na plemie';\n"+
 "   url = 'rada/atak.php'; break;\n"+
 "   case 4:\n"+
 "   login = 'Nazedzia do Planowania zadañ';\n"+
 "   url = 'rada/zona.php'; break;\n"+
 "   case 5:\n"+
 "   login = 'Minutnik - odliczanie czasu';\n"+
 "   url = 'rada/minutnik.php'; break;\n"+
 "   case 6:\n"+
 "   login = 'Raporty - przegl±d nowych raportów';\n"+
 "   url = 'rada/raporty.php'; break;\n"+
 "   case 7:\n"+
 "   login = 'Strona Studnia';\n"+
 "   url = 'test/'; break;\n"+
 "   default:\n"+
 "   login = 'error';\n"+
 "   url = '';  break;\n"+
 "  }\n"+
 "all = document.evaluate(\"//table[@class='main']\",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null); table = all.snapshotItem(0);"+
 "if(table.innerHTML){ table.innerHTML='<tbody><tr><td><h2>'+login+'</h2><iframe src=\"http://www.bornkes.w.szu.pl/'+url+'\" height=\"700\" width=\"100%\" style=\"border:0px;\" name=\"inframe\" id=\"inframe\"></td></tr></tbody>';}"+
 "}";
 
var sc=document.createElement('script');
sc.innerHTML = pis ;
document.getElementsByTagName('head')[0].appendChild(sc);

var all, table,tr;
all = document.evaluate("//table[@class='menu nowrap']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
 table = all.snapshotItem(0);

if(table.innerHTML)
{
 tr=gN(table,'tr');
tr[0].innerHTML += '<td>Rada<br /><table class="menu_column" cellspacing="0" width="120"><tr><td><a href="javascript:pis(1);">Wtyczka</a></td></tr>'+
//'<tr><td><a href="javascript:pis(2);">Proxi</a></td></tr><tr>'
'<td><a href="javascript:pis(3);">Ataki</a></td></tr><tr><td><a href="javascript:pis(4);">Zarzadca</a></td></tr><tr><td><a href="javascript:pis(5);">Minutnik</a></td></tr><tr><td><a href="javascript:pis(6);">Raporty</a></td></tr><tr><td><a href="javascript:pis(7);">www.Studnia</a></td></tr></table></td>';
}


