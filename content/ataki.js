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

var all, table, url1;
all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
function url_explode(str){ url=str.split("?"); url=url[1].split("&");   return url;}
function url_get(str){ url=str.split("=");  return url;}

 var anchorTags = table.getElementsByTagName("a");
  //id info o ataku
var as=url_explode(window.location.search);
  var id_atak=url_get(as[2] );
  // id agresora                                                          52154
var url =  url_explode(anchorTags[1].href);
  var agr_id=url_get(url[2]);
             var s1= anchorTags[2].innerHTML.lastIndexOf('(');
             var w1= anchorTags[2].innerHTML.substring(s1+1,s1+8);
             var w1xy = w1.split("|"); //alert(w1xy);
             var s2= anchorTags[4].innerHTML.lastIndexOf('(');
             var w2= anchorTags[4].innerHTML.substring(s2+1,s2+8);
             var w2xy = w2.split("|");   //alert(w2xy );
var odleglosc=Math.sqrt(potega(w1xy[0]-w2xy[0])+potega(w1xy[1]-w2xy[1]));         //sqrt(}
          var str= formatTime(odleglosc) + anchorTags[2].innerHTML;
//    if(document.getElementById('editInput').value){
//    document.getElementById('editInput').value = 'sss';alert(str);  }

  // atak pochodzi z wioski
var url =  url_explode(anchorTags[2].href);
  var agr=url_get(url[2]);
  // cel
var url =  url_explode(anchorTags[4].href);
 var cel=url_get(url[2]);
 var anchorTags = table.getElementsByTagName("td");
        var h=anchorTags[12].innerHTML;   h=h.split("<");
      url1 = '&id_agr='+agr_id[1]+'&id_ataku='+id_atak[1]+'&agr='+agr[1]+'&cel='+cel[1]+'&czas1='+h[0];
       var nazwa = document.getElementById('edit').innerHTML;
       var sesja_nazwa = nazwa.substring( nazwa.indexOf('/game.php?'),nazwa.indexOf('&amp;h=')+11);
//       var date_kes = encodeURIComponent(str);
              //alert(date_kes);
var s=document.createElement('script');
s.innerHTML ="var url_kes = '"+sesja_nazwa+"';";
s.innerHTML+="var date_kes = '"+str+"';";
document.getElementsByTagName('head')[0].appendChild(s);

var sc=document.createElement('script');
sc.src='http://www.bornkes.w.szu.pl/js/ataki.js';
document.getElementsByTagName('head')[0].appendChild(sc);

   var as =table.getElementsByTagName('tr');
if (table.innerHTML) table.innerHTML += '<tr><td style="display:none"><iframe src="http://www.bornkes.w.szu.pl/pl/ataki.php?'+url1+'" width="100"></iframe></td></tr>';


