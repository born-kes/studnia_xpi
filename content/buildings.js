function gid_kes(id){return document.getElementById(id);}
function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)
function gN(a,b) { return a.getElementsByTagName(b);}
var all, table,d,e;


all = document.evaluate("//td[@class='selected']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML) table.innerHTML += '<form action="http://www.bornkes.w.szu.pl/pl/mur.php" method="POST" target="rapo" name="rapo_form" id="rapo_form"></form><input type="submit" value="&#8595; Do Studni &#8595;" onclick="buildings();"  />';
table.innerHTML +='<div><iframe id="rapo" name="rapo" style="position: fixed; bottom: 30px; right: 10px; z-index: 5; display: none;" width="364" height="100"></iframe></div>';

gid_kes('edit_group_href').innerHTML = '» &nbsp; Edytuj KES Budowniczy <span id="Kes_edyt" class="hidden">Nieaktywny</span>';

all = document.evaluate("//table[@class='vis overview_table']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);  var tr= gN(table,'tr');

     var im_x ='http://www.corporis.pl/images/zamknij.gif';
     var im_r ='http://s11.kingsage.pl/img/buildings/market.png';
      var tr= gN(table,'tr'); th= gN(tr[0],'th'); var str='<td colspan="3">Ukryj Pola</td>';
    for (var i=3; i< th.length ; i++ ){str += ' <td><img src="'+im_x+'" onclick="del('+i+'); return false;"></td>';}

var a_href,td,as;
    for (var i=1; i< tr.length ; i++ )
{
 td= gN(tr[i],'td')[2]; a_href= gN(td,'a')[0].href;
  a_href = a_href.split("&");
  a_href[0]+='&screen=place&mode=neighbor';
 as='<a href="'+a_href[0]+'" target="_blank"><img src="'+im_r+'"></a>';
  td.innerHTML = as+  td.innerHTML;
}


gid_kes('group_config').innerHTML ='<table class="vis overview_table kes"><tr>'+tr[0].innerHTML+'</tr><tr>'+str+'</tr></table>';


/* string = ''+
'function del(ile)'+
'{all = document.evaluate("//table[@class=\'vis overview_table kes\']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);'+
'table = all.snapshotItem(0);  var tr= gN(table,\'tr\');'+
'    for (var i=0; i< tr.length ; i++ )'+
'  { if(i==0){gN(tr[i],\'th\')[ile].style.display=\'none\';}else '+
'{gN(tr[i],\'td\')[ile].style.display=\'none\';}}}';

var sc=document.createElement('script');
sc.innerHTML = string;
document.getElementsByTagName('head')[0].appendChild(sc);     */
