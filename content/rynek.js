var all, table, e,nev;  function gN(a,b) { return a.getElementsByTagName(b);}
e=' <img src="/graphic/holz.png?1" title="Drewno" alt=""><img src="/graphic/lehm.png?1" title="Glina" alt=""><img src="/graphic/eisen.png?1" title="¯elazo" alt="">';
var pis ="function pis(a)\n"+
 "{ insertNumber(document.forms[0].wood, a);\n"+
 "  insertNumber(document.forms[0].stone, a);\n"+
 "  insertNumber(document.forms[0].iron, a); \n"+
 "}\n";

var sc=document.createElement('script');
sc.innerHTML = pis ;
document.getElementsByTagName('head')[0].appendChild(sc);

all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0); var url = gN(table,'a')[0].href; var s = url.lastIndexOf('screen='); url = url.substring(0,s);
table.innerHTML +='<tr><td><a href="'+url+'screen=overview_villages&mode=prod&rynek=rynek">Bob Budowniczy</a></td></tr>';

table = all.snapshotItem(2);
 table.innerHTML += '<tr><td><a href="javascript:pis(5000)">'+e+' 3 x 5k </a></td></tr>'
 table.innerHTML += '<tr><td><a href="javascript:pis(78000)">'+e+' 3 x 78k </a></td></tr>'



