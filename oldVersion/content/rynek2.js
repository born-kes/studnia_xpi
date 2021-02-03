function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^\\d/]+","g"),"");
 return s;}
function tos(a)
{a =Math.floor(a/10000); return a;}
var M='abc';
function myk(a)
{    //usuwanie pierdu³
 var string = a.innerHTML.split(">");
 var str = string[1].split("<")[0]+string[3];
 return str;

    }
  var trades = new Array('Drewno','Glina','Zelazo');
  var trade  = new Array('wood','stone','iron');
function oferty(a,b,d)
{    var w = spichlerz-tos(surowce[b]);
    var w1= Math.floor( (gid_kes(trade[a]).innerHTML*1)/100)-1;   // surowce na wymiane
       if(d==0){w1 = Math.floor( (gid_kes(trade[a]).innerHTML*1)/10000)-1;}
/*
ile mogê kupiæ
- miejsce w spichlerzach   w
- surowce na wymiane       w1
- kupcy
 */
var rynek =  '<tr><td>'+"\n";
  if(w>5){w-=6;}    // zostawia 50k miejsca w spichlerzu
  if(w>w1){w=w1;}   // sprawdza czy surowców na wymiane starczy
  if(w>kupc){w=kupc;} //sprawdza czy kupców starczy
//alert(" potrzebuje "+trades[a]+' x '+ w +"\n mam "+trades[b]+" na "+w1 +" ofert \n i kupcow "+kupc);
 if(w>5)
 {
   rynek +=  '<a href="javascript:trade('+a+','+b+','+w+');" >'+trades[b]+'<br /> <span class="small hidden">oferuje '+trades[a]+'</span></a>'+"\n";
   rynek +=  '</td><td>'+"\n";
   rynek +=  '|<a href="javascript:trade('+a+','+b+','+w+');document.forms[0].submit();" accesskey="'+d+'">Utworz</a>'+"\n";
if(M=='abc'){ M='trade('+a+','+b+','+w+');'; }

 }else {
 
   rynek +=  '<a href="javascript:trade('+a+','+b+','+w+');" >'+trades[b]+'<br />  <span class="small hidden">oferuje '+trades[a]+'</span></a>'+"\n";
   rynek +=  '</td><td>'+"\n";
   rynek +=  '|Limit '+"\n";
 }
   rynek +=  '</td></tr>'+"\n";
return rynek;
}
var all, table, e,nev;
var surowce = new Array();
    surowce[0]= gid_kes('wood') .innerHTML*1;
    surowce[1]= gid_kes('stone').innerHTML*1;
    surowce[2]= gid_kes('iron') .innerHTML*1;
 var spichlerz=tos(gid_kes('storage').innerHTML);
e=' <img src="/graphic/holz.png?1" title="Drewno" alt=""> / <img src="/graphic/lehm.png?1" title="Glina" alt=""> / <img src="/graphic/eisen.png?1" title="¯elazo" alt="">';

all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);

if(all.snapshotItem(0))
{ table = all.snapshotItem(0);
       var kupc = dels(gN(table,'th')[0].innerHTML).split("/")[0];
}
if(all.snapshotItem(2))
{ table = all.snapshotItem(2);
       var tr = gN(table,'tr');
       for (var i=1; i< tr.length-1 ; i++ )
        {  var td = gN(tr[i],'td');
                  if(td[2].innerHTML.lastIndexOf('Drewno')>-1){surowce[0]+=myk(td[2])*1*td[3].innerHTML;}
             else if(td[2].innerHTML.lastIndexOf('Glina')>-1) {surowce[1]+=myk(td[2])*1*td[3].innerHTML;}
             else if(td[2].innerHTML.lastIndexOf('graphic/eisen.png')>-1){surowce[2]+=myk(td[2])*1*td[3].innerHTML;}
        }
}
all = document.evaluate('//table[@class="content-border"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
 var td = gN(table,'td');
 var rynek =  '<table><tr><th>Co Potrzeba </th><th><a href="javascript:alert(info);" >Pomoc</a></th>'+
 '<td rowspan="4" valign="top">'+td[3].innerHTML+'</td>'+
 '</tr>'+"\n"+
               oferty(2,0,7)+
               oferty(2,1,8)+
               oferty(0,2,9)+
               oferty(1,2,0)+
              '</table>';
  td[3].innerHTML = rynek;
 td[1].innerHTML +='<table><tr><th><img src="/graphic/buildings/market.png" alt=""></th>'+
 '<td><img src="/graphic/holz.png?1" alt=""></th>'+ '<th id="KES_d">'+ surowce[0] +'</td>'+
 '<td><img src="/graphic/lehm.png?1" alt=""></th>'+ '<th id="KES_g">'+ surowce[1]+'</td>'+
 '<td><img src="/graphic/eisen.png?1" alt=""></th>'+ '<th id="KES_z">'+ surowce[2] +'</td>'+
 '</tr></table>';

var pis = "\n"+
          " gid_kes('KES_d').innerHTML = ThousandSeparator(gid_kes('KES_d').innerHTML);"+
          " gid_kes('KES_g').innerHTML = ThousandSeparator(gid_kes('KES_g').innerHTML);"+
          " gid_kes('KES_z').innerHTML = ThousandSeparator(gid_kes('KES_z').innerHTML);"+"\n\n"+
          ' var info = "Skroty klawiszowe:\\n lewy shift + lewy alt+ key \\n\\n key:\\n a = zmiana wioski (cofa)\\n d = zmiana wioski (next)\\n\\n  Tworzenie ofert:\\n 7 = drewno\\n 8 = Glina \\n9 = Zelazo \\n 0 = Zelazo (za gline)";'+ "\n\n "+
          " checkCookie('ryne2'); checkCookie('ryne2a'); \n\n";

var sc=document.createElement('script');
sc.innerHTML = pis;
sc.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(sc);
//document.addEventListener("DOMContentLoaded", , false);
//document.addEventListener("DOMContentLoaded", , false);
    //*/
