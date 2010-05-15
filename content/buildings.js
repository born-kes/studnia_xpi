function gid_kes(id){return document.getElementById(id);}
function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)
function gN(a,b) { return a.getElementsByTagName(b);}
 function dels(s) { s = s.replace(new RegExp("[^\\d]+","g"),""); return s;}

 var all, table,d,e;


all = document.evaluate("//td[@class='selected']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML) table.innerHTML += '<form action="http://www.bornkes.w.szu.pl/pl/mur.php" method="POST" target="rapo" name="rapo_form" id="rapo_form"></form><input type="submit" value="&#8595; Do Studni &#8595;" onclick="buildings();"  />';
table.innerHTML +='<div><iframe id="rapo" name="rapo" style="position: fixed; bottom: 30px; right: 10px; z-index: 5; display: none;" width="364" height="100"></iframe></div>';

gid_kes('edit_group_href').innerHTML = '» &nbsp; Edytuj KES Budowniczy <span id="Kes_edyt" class="hidden">Nieaktywny</span>';

 var jss ='function alert(){} ';



all = document.evaluate("//table[@class='vis overview_table']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);  var tr= gN(table,'tr');

     var im_x ='http://www.corporis.pl/images/zamknij.gif';
      var tr= gN(table,'tr'); th= gN(tr[0],'th');
       var str='<td colspan="3">maxymalny poziom rozbudowy</td>'+
   '<td><input size="3" id="k_pkt" value="9000" type="text" /></td>'+
   '<td><input size="3" id="k_ratusz" value="20" type="text" /></td>'+
   '<td><input size="3" id="k_koszary" value="25" type="text" /></td>'+
   '<td><input size="3" id="k_stajnie" value="20" type="text" /></td>'+
   '<td><input size="3" id="k_warsztat" value="2" type="text" /></td>'+
   '<td><input size="3" id="k_palac" value="1" type="text" /></td>'+
   '<td><input size="3" id="k_kuznia" value="20" type="text" /></td>'+
   '<td><input size="3" id="k_plac" value="1" type="text" /></td>'+
   '<td><input size="3" id="k_piedestal" value="0" type="text" /></td>'+
   '<td><input size="3" id="k_rynek" value="20" type="text" /></td>'+
   '<td><input size="3" id="k_tartak" value="30" type="text" /></td>'+
   '<td><input size="3" id="k_glina" value="30" type="text" /></td>'+
   '<td><input size="3" id="k_huta" value="30" type="text" /></td>'+
   '<td><input size="3" id="k_zagrody" value="30" type="text" /></td>'+
   '<td><input size="3" id="k_spichlerz" value="30" type="text" /></td>'+
   '<td><input size="3" id="k_schowek" value="0" type="text" /></td>'+
   '<td><input size="3" id="k_mur" value="20" type="text" /></td>'+
   '<td><input  value="zapisz" type="submit" onclick="zapisz_cook_budy();return false;" /></td>';
//    for (var i=3; i< th.length ; i++ ){str += ' <td><img src="'+im_x+'" onclick="del('+i+'); return false;"></td>';}

var a_href,td,as;       var im_r ='http://s11.kingsage.pl/img/buildings/market.png';
    for (var i=1; i< tr.length ; i++ )
{
 td= gN(tr[i],'td')[2]; a_href= gN(td,'a')[0].href;
  a_href = a_href.split("&");
  a_href[0]+='&screen=place&mode=neighbor';
 as='<a href="'+a_href[0]+'" target="_blank"><img src="'+im_r+'"></a>';
  td.innerHTML = as+  td.innerHTML;
}


gid_kes('group_config').innerHTML ='<table class="vis overview_table kes"><tr>'+tr[0].innerHTML+'</tr><tr>'+str+'</tr></table>';

function upload_budy(values)         //     spear sword axe archer spy light marcher heavy ram catapult knight snob
{   var valuer = values.split(":");

if(valuer.length>1)
  {
	 gid_kes('k_pkt').value      	=valuer[0];
	 gid_kes('k_ratusz').value     	=valuer[1];
	 gid_kes('k_koszary').value	=valuer[2];
	 gid_kes('k_stajnie').value	=valuer[3];
	 gid_kes('k_warsztat').value	=valuer[4];
	 gid_kes('k_palac').value	=valuer[5];
	 gid_kes('k_kuznia').value	=valuer[6];
	 gid_kes('k_plac').value	=valuer[7];
	 gid_kes('k_piedestal').value	=valuer[8];
	 gid_kes('k_rynek').value	=valuer[9];
	 gid_kes('k_tartak').value	=valuer[10];
	 gid_kes('k_glina').value	=valuer[11];
	 gid_kes('k_huta').value	=valuer[12];
	 gid_kes('k_zagrody').value	=valuer[13];
	 gid_kes('k_spichlerz').value	=valuer[14];
	 gid_kes('k_schowek').value	=valuer[15];
	 gid_kes('k_mur').value		=valuer[16];
if(valuer[17]=='true'){ gid_kes('Kes_edyt').innerHTML = ' Aktywny';
 jss +='window.setTimeout(\"kolors()\",5300);';
}
else gid_kes('Kes_edyt').innerHTML = ' NieAktywny';
  }
}
function getCookie(c_name)
{
if (document.cookie.length>0)
  { var c_start;
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    {
    c_start=c_start + c_name.length+1;
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    }
  }
return "";
}
upload_budy( getCookie('budy') );

var sc=document.createElement('script');
sc.innerHTML = jss;
document.getElementsByTagName('head')[0].appendChild(sc);

