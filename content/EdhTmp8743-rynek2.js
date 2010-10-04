function dels(s) {
s = s.replace(new RegExp("[^\\d]+","g"),"");
 return s;}
var all, table, e,nev;  function gN(a,b) { return a.getElementsByTagName(b);}
e=' <img src="/graphic/holz.png?1" title="Drewno" alt=""> / <img src="/graphic/lehm.png?1" title="Glina" alt=""> / <img src="/graphic/eisen.png?1" title="¯elazo" alt="">';
var pis ="function pis(a,b,c)\n"+
 "{ document.forms[0].max_time.value= 96;\n"+
 "  document.forms[0].multi.value= c;\n"+
 "  document.forms[0].sell.value= 100; \n"+
 "  document.forms[0].buy.value= 10000; \n"+
 "document.forms[0].res_sell[a].checked = true;"+
 "document.forms[0].res_buy[b].checked = true;"+
 "}\n";
 
var sc=document.createElement('script');
sc.innerHTML = pis ;
document.getElementsByTagName('head')[0].appendChild(sc);

function corector(s) {
/*s = s.replace('name="sell"','name="sell" id="sell"');
s = s.replace('name="buy"' ,'name="buy"  id="buy"');
s = s.replace('name="max_time"','name="max_time" id="max_time"');
s = s.replace('name="multi"','name="multi" id="multi"');
  */ return s;}

all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(2);


 table.innerHTML =  '<tr><td rowspan="3" >'+
 '<a href="javascript:pis(2,0,28)">Zelazo => Drewno</a> <br />'+
 '<a href="javascript:pis(2,1,30)">Zelazo => Glina </a> <br />'+
 '<a href="javascript:pis(0,2,)">Drewno => Zelazo</a> <br />'+
 '</td></tr>'+corector(table.innerHTML);
