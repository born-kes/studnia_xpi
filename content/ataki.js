
function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)

function dane(a)
{var s,s1,s2;

  if( gN(a,'a') ){ var a=gN(a,'a'); s = a[0].innerHTML;
    s1= s.lastIndexOf('(');
    s2= s.lastIndexOf(')');
     if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}  s= dels(s);
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
   if(do_ataku < (time*35) && do_ataku<147600)
           co_to+='Szl,';
   if(do_ataku < (time*30) )
           co_to+='Tar,';
   if(do_ataku < (time*22) )
           co_to+='Mie,';
   if(do_ataku < (time*18) )
           co_to+='Top,';
   if(do_ataku < (time*11) )
           co_to+='CK,';
   if(do_ataku < (time*10) )
           co_to+='LK,';
   if(do_ataku < (time* 9) )
           co_to+='Zw';
                 //   alert(co_to+' '+do_ataku +' '+ time* (18));
 return  co_to;
}
function gN(a,b) { return a.getElementsByTagName(b); }
function formatTime(time) {  co_to= co_idzie(Math.floor(time*60));  return  co_to; }
function test(id,a){  if( gN(a,'a') ){ var b=GET(id,gN(a,'a')[0].href); return b; }else{return 0;}  }
function noc(data){
var data = data.innerHTML.split(' ');
    data = data[1].split(':');
  if(data[0]>-1 && data[0]<8){ return '*'; }return '';
}

  var id_atak= GET('id',window.location.search);
var all, table, url1,Ag,AN,Aw,Og,Ow,data,wa,wo,WA,noc ;
all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
table.innerHTML = table.innerHTML.replace(" onclick=\"editSubmit('label', 'labelText', 'edit', 'editInput'"," onclick=\"prawy();editSubmit('label', 'labelText', 'edit', 'editInput'");

  var td = gN( table , 'td');
    for (var i=0; i< td.length ; i++ )
    {
      if(i==2){Ag=test('id',td[i]); AN=gN(td[i],'a')[0].innerHTML;}
      if(i==4){Aw=test('id',td[i]); wa =dane(td[i]); if( gN(td[i],'a') ){ WA=gN(td[i],'a')[0].innerHTML;} }
      if(i==7){Og=test('id',td[i]);}

      if(i==9){Ow=test('id',td[i]); wo =dane(td[i]);}
      if(i==11){noc = noc(td[i]);}
      if(i==11&&td[i].innerHTML.indexOf('span class="small grey"')>-1){data=td[i].innerHTML.split("<");}
      if(i==13&&td[i].innerHTML.indexOf('span class="small grey"')>-1){data=td[i].innerHTML.split("<");}
    }
    wa = wa.split("|");
    wo = wo.split("|");
var odleglosc=Math.sqrt(potega(wa[0]-wo[0])+potega(wa[1]-wo[1]));
var str= formatTime(odleglosc);
      url1 = '&id_ataku='+id_atak+'&cel='+Ow+'&agr='+Aw+'&id_agr='+Ag+'&czas1='+data[0]+'&co='+str;
   var as =table.getElementsByTagName('tr');
if (table.innerHTML) table.innerHTML += '<tr><td style="display:none"><iframe src="http://www.bornkes.w.szu.pl/pl/ataki.php?'+url1+'" width="100"></iframe></td></tr>';
var sc=document.createElement('script');
sc.type = 'text/javascript';
sc.innerHTML = "\n editToggle('label', 'edit'); \n gid_kes('editInput').value = '"+noc+co_to+" => "+AN+" ("+wa[0]+'|'+wa[1]+")'; \n gid_kes('label').style.display = '';\n function prawy() { parent.next(); }\n" ;
document.getElementsByTagName('head')[0].appendChild(sc);
