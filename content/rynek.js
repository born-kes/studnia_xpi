///wysy�anie surowc�w mi�dzy wioskami
function gid_kes(id){return document.getElementById(id);}
function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}
function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
 return s;}
var all, table, e,nev;  function gN(a,b) { return a.getElementsByTagName(b);}
e='<img src="/graphic/holz.png?1" title="Drewno" alt="">/<img src="/graphic/lehm.png?1" title="Glina" alt="">/<img src="/graphic/eisen.png?1" title="�elazo" alt="">';
//*                  //boczne menu
all = document.evaluate('//table[@class="vis modemenu"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0); var url = gN(table,'a')[0].href; var s = url.lastIndexOf('screen='); url = url.substring(0,s);
var left = GET('village',window.location.search);
var right= 1;
 if(GET('t',window.location.search)){var t='&t='+GET('t',window.location.search);}else{var t='&mode=prod';}
table.innerHTML +='<tr><td><a href="/game.php?village='+left+'&screen=overview_villages&boby=tak'+t+'" target="_blank">Boczne Menu</a></td></tr>';
 /*
table = all.snapshotItem(2);        max
 var ua,ub,uc;
 var urll = gN(table,'a');
ua = dels(urll[0].innerHTML);
ub = dels(urll[1].innerHTML);
uc = dels(urll[2].innerHTML);
//*/
all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);
 var td = gN(table,'td');
 table.innerHTML += '<tr><td><table class="vis "><tr><th>'+e+'</th><th>moje</th></tr>'+
 '<tr><td rowspan="3" width="90"  >'+
 '<a href="javascript:pis(gid_kes(\'rynek\').value, gid_kes(\'rynek\').value, gid_kes(\'rynek\').value)" accesskey="5">&nbsp;&nbsp;moje x 3&nbsp;&nbsp;</a> <br />'+
 '<a href="javascript:pis(10000,10000,10000)" accesskey="6">10/ 10/ 10</a> <br />'+
 '<a href="javascript:pis(28000,30000,25000)" accesskey="7">28/ 30/ 25</a> <br />'+
 '<a href="javascript:pis(30000,30000,30000)" accesskey="8">30/ 30/ 30</a> <br />'+
 '<a href="javascript:pis(78000,78000,78000)" accesskey="9">78/ 78/ 78</a> <br />'+
// '<a href="javascript:pis('+ua+','+ub+','+uc+')" accesskey="0"> max / max</a></td>'+
 '<td><input type="text" id="rynek" value="" size="5" /><br />'+
 '<button onclick="zapisz_cokisa(\'rynek\',gid_kes(\'rynek\').value);" style="font-size: 8pt;">Zapisz</button> '+
 '</td></tr></table></td></tr>';
function dane(s)
{var s1,s2;     s = s.innerHTML;
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;
}
if(GET('norff',window.location.search))
{
  var trade  = new Array('wood','stone','iron');
  var storage = Math.floor(gid_kes('storage').innerHTML/1000);
var wood =  Math.floor(gid_kes(trade[0]).innerHTML/1000);
var stone =  Math.floor(gid_kes(trade[1]).innerHTML/1000);
var iron =  Math.floor(gid_kes(trade[2]).innerHTML/1000);
  var norf = GET('norff',window.location.search).split("/");
 if(norf[0]>wood){norf[0]=wood;}
 if(norf[1]>stone){norf[1]=stone;}
 if(norf[2]>iron){norf[2]=iron;}
var sck=document.createElement('script');
sck.innerHTML += 'pis('+(norf[0]*1000)+','+(norf[1]*1000)+','+(norf[2]*1000)+');';
document.getElementsByTagName('head')[0].appendChild(sck);

}
 xy_dom = dane(gN(document,'b')[0]);

 var sc=document.createElement('script');
sc.innerHTML += "checkCookie('rynek'); ";
sc.innerHTML += " top.xy_dom = '"+xy_dom+"'; ";
document.getElementsByTagName('head')[0].appendChild(sc);

