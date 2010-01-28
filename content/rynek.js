function dels(s) {
s = s.replace(new RegExp("[^\\d]+","g"),"");
 return s;}
var all, table, e,nev;  function gN(a,b) { return a.getElementsByTagName(b);}
e=' <img src="/graphic/holz.png?1" title="Drewno" alt=""> / <img src="/graphic/lehm.png?1" title="Glina" alt=""> / <img src="/graphic/eisen.png?1" title="¯elazo" alt="">';
var pis ="function pis(a,b,c)\n"+
 "{ insertNumber(document.forms[0].wood, a);\n"+
 "  insertNumber(document.forms[0].stone, b);\n"+
 "  insertNumber(document.forms[0].iron, c); \n"+
 "}\n";

var sc=document.createElement('script');
sc.innerHTML = pis ;
document.getElementsByTagName('head')[0].appendChild(sc);

all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0); var url = gN(table,'a')[0].href; var s = url.lastIndexOf('screen='); url = url.substring(0,s);
table.innerHTML +='<tr><td><a href="'+url+'screen=overview_villages&mode=prod&rynek=rynek">Bob Budowniczy</a></td></tr>';

table = all.snapshotItem(2);
 var ua,ub,uc;
 var urll = gN(table,'a');
ua = dels(urll[0].innerHTML);
ub = dels(urll[1].innerHTML);
uc = dels(urll[2].innerHTML);

 var tr = gN(table,'tr');
 tr[0].innerHTML += '<th>'+e+'</th>';
 tr[1].innerHTML +=  '<td rowspan="3" ><a href="javascript:pis(5000, 5000, 5000)">_5 / _5 / _5</a> <br />'+
 '<a href="javascript:pis(10000,10000,10000)">10 / 10 / 10</a> <br />'+
 '<a href="javascript:pis(28000,30000,25000)">28 / 30 / 25</a> <br />'+
 '<a href="javascript:pis(30000,30000,30000)">30 / 30 / 30</a> <br />'+
 '<a href="javascript:pis(78000,78000,78000)">78 / 78 / 78</a> <br />'+
 '<a href="javascript:pis('+ua+','+ub+','+uc+')"> max / max</a>';
