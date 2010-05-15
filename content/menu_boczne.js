/* Boczne menu dla Rynki
// 1. pobranie listy
// 2. przetworzenie
// 3. wyswietlenie      */
function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
//s = s.replace(new RegExp(",","g"),"");
 return s;}
function dane(s)
{var s1,s2;     s = s.innerHTML;
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;
}
function GET(s){   for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0;
 var url=str.split("?");
  url=url[1].split("&");
   for (var i=0; i< url.length ; i++ )
   {var  ex=url[i].split("=");
         tablica[u++]=ex[0];
         tablica[u++]=ex[1];
   } return tablica;
}
var get= Explode(window.location.search);


var all, table,d,e, name,xy,sur,spich,zagr;
var string='';
var a='a';

if(GET('mode')=='prod'||GET('screen')=='overview_villages')
{   all = document.evaluate("//table[@class='vis overview_table']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
if(GET('t')){ table = all.snapshotItem(0); }
else { table = all.snapshotItem(0);}

    e=gN(table,'tr');
            ;
 for(var i=1; i< e.length-1 ;i++)
  { if(a=='a'){a='b';}else{a='a';}
    d=gN(e[i],'td');  var href = gN(e[i],'a')[0].href;
    
    if(gN(d[0],'span')[0]){name = gN(d[0],'span')[0];
  sur=d[2].innerHTML;
  spich=d[3].innerHTML;

    }
  else{name = gN(d[1],'span')[0];
    sur=d[3].innerHTML;
  spich=d[4].innerHTML;
}

  xy = dane(name).split("|");
      string += '<tr id="lis_'+i+'" class="nowrap row_'+a+'"><td style="display:none;">odleglosc</td><td style="display:none;">'+name.innerHTML+'</td><td style="display:none;">'+xy[0]+'|'+xy[1]+'</td>'+
     '<th width="29"><a class="nowrap" href="javascript:export_xy_KES('+xy+','+i+')"><img  src="http://www.bornkes.w.szu.pl/img/kordy.gif" /></a></th>'+
     '<td colspan="2">'+name.innerHTML+ ' <a href="'+href+'" target="men2"><img src="/graphic/buildings/snob.png" alt="do wioski"></a><br>'+sur+' ('+spich+')</td><td><a class="nowrap" href="javascript:onKES(\''+i+'\')">Usun</a></td><td class="grey"></td></tr>'+ "\n";
  }
string=string;
}
 else if(GET('screen')=='info_player')
{

 all = document.evaluate("//table[@class='vis ']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);

 for(var i=1;d=gN(table,'tr')[i];i++)
 { if(a=='a'){a='b';}else{a='a';}

  e=gN(d,'td');
  name = e[0].innerHTML +" ("+e[1].innerHTML+")";
  xy = e[1].innerHTML.split("|");
  sur= '';
  spich=e[2].innerHTML;

     string += '<tr id="lis_'+i+'" class="nowrap row_'+a+'"><td style="display:none;">odleglosc</td><td style="display:none;">'+name+'</td><td style="display:none;">'+xy[0]+'|'+xy[1]+'</td>'+
     '<th width="29"><a class="nowrap" href="javascript:export_xy_KES('+xy+','+i+')" title="Przepisanie kordow na plac"><img  src="http://www.bornkes.w.szu.pl/img/kordy.gif" /></a></th>'+
     '<td colspan="2">'+name+'<br>'+sur+' ('+spich+' pkt.)</td><td><a class="nowrap" href="javascript:onKES(\''+i+'\')">Usun</a></td><td class="grey"></td></tr>'+ "\n";
 }
}
 else if(GET('screen')=='memo')
{                                            alert('memo');
   var td_id = gid_kes("content_value");         alert(i_nr);
      var i_nr = GET('nr');
   var tabl_ = gN(td_id, 'b')[i_nr].innerHTML.split("\n");    alert(tabl_);
   var table = tabl_ ; //gN(td_id, 'b')[i_nr].textContent.split("\n");  alert(table);
    //*
                                     alert(i_nr);
 for(var i=0;i<table.length;i++)
 {  if(table[i].lastIndexOf("|")== -1 )continue;

  if(a=='a'){a='b';}else{a='a';}  name =tabl_[i];
  var pola = table[i].split(" ");
   for(var j=0;j<pola.length;j++)
   {  if(pola[j].lastIndexOf("|")== -1 )continue;

     else
      xy = dels(pola[j]).split("|");
       break;

     }

     string += '<tr id="lis_'+i+'" class="nowrap row_'+a+'"><td style="display:none;">odleglosc</td><td style="display:none;">'+name+'</td><td style="display:none;">'+xy[0]+'|'+xy[1]+'</td>'+
     '<th width="29"><a class="nowrap" href="javascript:export_xy_KES('+xy+','+i+')" title="Przepisanie kordow na plac"><img  src="http://www.bornkes.w.szu.pl/img/kordy.gif" /></a></th>'+
     '<td colspan="2">'+name+'</td><td><a class="nowrap" href="javascript:onKES(\''+i+'\')">Usun</a></td><td class="grey"></td></tr>'+ "\n";
}
    alert(string);

}
var all = document.getElementsByTagName("hr");
  all[0].style.width = '280' + 'px';

var all = document.getElementsByTagName("table");
for (var i = 0; i < all.length ; i++)
{
    all[i].innerHTML = '';
}
     if(GET('t')){var t='&t='+GET('t');}else{var t='';}

 var sc=document.createElement('table');
 sc.width = '100%';
sc.innerHTML =  '<tr><td><br /><br /><br /> .. </td></tr><tr><td><div><table><thead><tr><td><table class="vis" style="width:280px;"><thead><tr><td colspan="5"><h3>Przelicz dla nowej wioski '+
  '<button onclick="odlicz();" style="font-size: 8pt;">policz</button></h3> '+
  '</td></tr><tr><td><input type="checkbox" id="auto_del" title="Auto usuwanie przy kliknieciu" />'+
  '<th onclick="sort(0,this);" style="cursor:pointer;">Odleglosc</th>'+
  '<th onclick="sort(1,this);" style="cursor:pointer;">Nazwy wsi</th>'+
  '<td colspan="2" >Pola</td></tr></thead>'+
  '<tbody>'+string+'</tbody></table></div></td><td valign="top" width="100%" height="100%">'+
  '<iframe src="/game.php?village='+GET('village')+'&screen=place'+t+'" style="border: 1pt none ;" name="men2" id="men2"width="100%" height="700"></iframe>'+
  '</td></tr></table></td></tr>';
document.getElementsByTagName('body')[0].appendChild(sc);

   var del = gid_kes("main_layout");
 while(del.hasChildNodes()) { del.removeChild(del.lastChild); }

