function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function GET(s){var to_get; if(s=='village'){ to_get=getr; }else{ to_get =get; }
   for (var i=0; i< to_get.length ; i++ ){if(s==to_get[i]){return to_get[i+1];} }  }     // return false;
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
var getr= Explode(gN(document,"a")[0].href);
var get= Explode(window.location.search);

 function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
//s = s.replace(new RegExp(",","g"),"");
 return s;}
function plaut(s) {
  s =  gN(s,'a')[0].innerHTML;
  s= s.split('>');

s = s[1].replace(new RegExp("[^\\a-zA-Z]+","g"),"");
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
function potega(podstawa)
{   var wynik = podstawa; var i = 1;
    while (i++ < 2)
        wynik *= podstawa;
    return wynik;
}
function typ_w(a1,a2,a3,a4,a5,a6,a7,a8){
var fin;
if(a5>4000){fin=3;}
else if((a3+(a6*4)+(a7*4))>2300){fin=1;}
else if((a1+a2+a4+(a8*4))>2300){fin=2;}
else {fin=0;}
 return fin;}
// koniec deklaracji pora do pracy ;p
if( GET('mode')=='command' || !GET('mode') ){

var all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(0);
var all_href = gN(table,'a');
 var unit  = new Array();
 var units = new Array('spear', 'sword', 'axe', 'archer','spy','light','marcher','heavy','ram','catapult','knight','snob'); var l=0;  var j=0;

    for (var i=0; i< all_href.length ; i++ )    //zawiera http://pl5.plemiona.pl/javascript
    {   if(all_href[i].href.indexOf("javascript:insertUnit")>-1)
        {  //alert(f);
        unit[j++]= dels(all_href[i].innerHTML);
        }
    }
 if(!GET('ukryjmenu')){
  var str='typ=22&pik='+unit[0]+'&mie='+unit[1]+'&axe='+unit[2]+'&luk='+unit[3]+'&zw='+unit[4]+'&lk='+unit[5]+'&kl='+unit[6]+'&ck='+unit[7]+'&tar='+unit[8]+'&kat='+unit[9]+'&ry='+unit[10]+'&sz='+unit[11]+'&id='+GET('village');

  e=gN(table,'td')[2];
     e.innerHTML ='<table><tr><td><iframe src="http://www.bornkes.w.szu.pl/proxi/w.php?'+str+'" height="0" width="0" style="border:0pt;"></iframe>'+
                   '<button onclick="Klonowanie(\''+GET('village')+'\',\''+GET('target')+'\');" style="font-size: 8pt;">Klonowanie Placu</button> <br /> '+
                   '<td>'+e.innerHTML+'</td>'+
                    '</tr></table>';
 gid_kes('selectAllUnits').parentNode.innerHTML += ' <button onclick="zapisz_cook();return false;" style="font-size: 8pt;">Zapisz stan wojsk</button> <button onclick="checkCookie(\'place\');return false;" style="font-size: 8pt;">Load wojsk</button> ';
 gid_kes('selectAllUnits').parentNode.colSpan = "4";
}
                               }

          //####################
else if(GET('mode')=='units'){


  var xy_ = dane(gN(document,'b')[0]).split("|");
    //    alert(xy_);
 if(gid_kes("units_away") )
 {
  var table = gid_kes("units_away");

  var all_href = gN(table,'tr');
    if(all_href.length>2)
    {
     all_href[0].innerHTML ='<td>Odleglosc</td>'+all_href[0].innerHTML;

 //    all_href[all_href.length-2].innerHTML ='<td />'+all_href[all_href.length-2].innerHTML;

     for (var i=1; i< all_href.length-1 ; i++ )
     { if(!gN(all_href[i],'a')[0]){continue;}
       var xy_b = dane(gN(all_href[i],'a')[0]).split("|");
       var odleglosc=Math.floor(Math.sqrt(potega(xy_[0]-xy_b[0])+potega(xy_[1]-xy_b[1])),1);
       all_href[i].innerHTML ='<th>'+(odleglosc)+'</th>'+all_href[i].innerHTML;
      }
     all_href[all_href.length-1].innerHTML ='<td />'+all_href[all_href.length-1].innerHTML;
    }
 }
var all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
 if(all.snapshotItem(0))
 {
  var table = all.snapshotItem(0);

  var all_href = gN(table,'tr');
  all_href[0].innerHTML ='<td>Odleglosc</td>'+all_href[0].innerHTML;
  all_href[1].innerHTML ='<td />'+all_href[1].innerHTML;
  all_href[all_href.length-1].innerHTML ='<td />'+all_href[all_href.length-1].innerHTML;
 if(all_href.length>3)
  all_href[all_href.length-2].innerHTML ='<td />'+all_href[all_href.length-2].innerHTML;
   for (var i=2; i< all_href.length ; i++ )
    {
      var xy_b = dane(gN(all_href[i],'a')[0]).split("|");

      var odleglosc=Math.floor(Math.sqrt(potega(xy_[0]-xy_b[0])+potega(xy_[1]-xy_b[1])),1);

   all_href[i].innerHTML ='<th>'+(odleglosc)+'</th>'+all_href[i].innerHTML;

    }

 }
}
else if(GET('mode')=='neighbor')
{
  var trade  = new Array('wood','stone','iron');
  var storage = Math.floor(gid_kes('storage').innerHTML/1000)
var wood = storage - Math.floor(gid_kes(trade[0]).innerHTML/1000);
var stone = storage - Math.floor(gid_kes(trade[1]).innerHTML/1000);
var iron = storage - Math.floor(gid_kes(trade[2]).innerHTML/1000);
if (wood>78){wood = 78;} if (stone>78){stone = 78;} if (iron>78){iron = 78;}
var all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
  var table = all.snapshotItem(0);
  var tr = gN(table,'tr');
   for (var i=1; i< tr.length ; i++ )
     {
        var ah = gN(tr[i],'a')[2].href;
        tr[i].innerHTML += '<th><a href="'+ah+'&norff='+wood+'/'+stone+'/'+iron+'" >paczka</a></th>';
     }
}
 xy_dom = dane(gN(document,'b')[0]);
var sc=document.createElement('script');
sc.innerHTML += "top.xy_dom = '"+xy_dom+"';";
document.getElementsByTagName('head')[0].appendChild(sc);

