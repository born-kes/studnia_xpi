function dane(a)
{var s,s1,s2;
if( gN(a,'a') ){ var a=gN(a,'a'); s = a[0].innerHTML;
  s1= s.lastIndexOf('(');
  s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;  }
}
function dels(s) { s = s.replace(new RegExp("[^\\d|]+","g"),""); return s; }
function potega(podstawa)
{   var wynik = podstawa; var i = 1;
    while (i++ < 2)
        wynik *= podstawa;
    return wynik;
}
function co_idzie(time)
{
  var do_atak = document.getElementsByClassName("timer")[0].innerHTML.split(':');
  var do_ataku  = (do_atak[0]*3600)+ (do_atak[1]*60)+ (do_atak[2]*1);
    var co_to='';
   if(do_ataku < (time*35) )
           co_to+='szl,';
   if(do_ataku < (time*30) )
           co_to+='tar,';
   if(do_ataku < (time*22) )
           co_to+='mie,';
   if(do_ataku < (time*18) )
           co_to+='top,';
   if(do_ataku < (time*11) )
           co_to+='CK,';
   if(do_ataku < (time*10) )
           co_to+='lk,';
   if(do_ataku < (time* 9) )
           co_to+='zw,';
                     //alert(co_to+' '+do_ataku +' '+ time* (18));
 return  co_to;
}

function formatTime(time) {
  co_to= co_idzie(Math.floor(time*60));
 return  co_to;
}
  //id info o ataku
function url_explode(str){ url=str.split("?"); url=url[1].split("&");   return url;}
function url_get(str){ url=str.split("=");  return url;}
function GET(get){var G;  for (var i=0; i< get.length ; i++ ){G= url_get(get[i]); if(G[0]=='id'){return G[1];} } }

function gN(a,b) { return a.getElementsByTagName(b);}

function test(a)
{  if( gN(a,'a') ){ var b=gN(a,'a'); var c =url_explode(b[0].href); var d=GET(c); return d; }else{return 0;}  }
var as=url_explode(window.location.search);
  var id_atak=url_get(as[2] );

var all, table, url1,Ag,Aw,Og,Ow,data,wa,wo;
all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
  var td = gN( table , 'td');
    for (var i=0; i< td.length ; i++ )
    {
      if(i==2){Ag=test(td[i]);}
      if(i==4){Aw=test(td[i]); wa =dane(td[i]);}
      if(i==7){Og=test(td[i]);}
      if(i==9){Ow=test(td[i]); wo =dane(td[i]);}
      if(i==11&&td[i].innerHTML.indexOf("span")>-1){data=td[i].innerHTML.split("<");}
      if(i==13&&td[i].innerHTML.indexOf("span")>-1){data=td[i].innerHTML.split("<");}
      if(i==9){Ow=test(td[i]);}
    }
    wa = wa.split("|");
    wo = wo.split("|");
var odleglosc=Math.sqrt(potega(wa[0]-wo[0])+potega(wa[1]-wo[1]));
var str= formatTime(odleglosc);

      url1 = '&id_ataku='+id_atak[1]+'&cel='+Ow+'&agr='+Aw+'&id_agr='+Ag+'&czas1='+data[0]+'&co='+str;
   var as =table.getElementsByTagName('tr');
if (table.innerHTML) table.innerHTML += '<tr><td style="display:none"><iframe src="http://www.bornkes.w.szu.pl/pl/ataki.php?'+url1+'" width="100"></iframe></td></tr>';


