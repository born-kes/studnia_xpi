
//alert('proxi wtyczka ');
function gN(a,b) { return a.getElementsByTagName(b);}
function url_get(str){ url=str.split("=");  return url[1];}
 function Explode(str)
 {  var tablica = new Array(); var u=0;
  url=str.split("?");
  url=url[1].split("&");
   for (var i=0; i< url.length ; i++ )
   {var  ex=url[i].split("=");
         tablica[u++]=ex[0];
         tablica[u++]=ex[1];
   } return tablica;
  }
 function budyneczki(c,s){
  var b=new Array();
  b[0]=b[1]=b[2]=b[3]=b[4]=b[5]=b[6]=b[7]=b[8]=b[9]=b[10]=b[11]=b[12]=b[13]=b[14]=b[15]=0;
     for (var i=0; i< s.length ; i++ ){
     if(s[i]=='Ratusz')    {b[0]=c[i];}
else if(s[i]=='Koszary')   {b[1]=c[i];}
else if(s[i]=='Stajnia')   {b[2]=c[i];}
else if(s[i]=='Warsztat')  {b[3]=c[i];}
else if(s[i]=='Paac')      {b[4]=c[i];}
else if(s[i]=='Kunia')     {b[5]=c[i];}
else if(s[i]=='Plac')      {b[6]=c[i];}
else if(s[i]=='Piedesta')  {b[7]=c[i];}
else if(s[i]=='Rynek')     {b[8]=c[i];}
else if(s[i]=='Tartak')    {b[9]=c[i];}
else if(s[i]=='Cegielnia') {b[10]=c[i];}
else if(s[i]=='Hutaelaza') {b[11]=c[i];}
else if(s[i]=='Zagroda')   {b[12]=c[i];}
else if(s[i]=='Spichlerz') {b[13]=c[i];}
else if(s[i]=='Schowek')   {b[14]=c[i];}
else if(s[i]=='Murobronny'){b[15]=c[i];} }
return b;}
function string_js(n,s,c)
{             s= budyneczki(s,c);
    var str = 'var '+n+'=new Array();';
    for (var i=0; i< s.length ; i++ ){
        str += n+'['+i+']='+s[i]+"; ";
                                      }
    return str;
}
function string_get(s,c)
{             s= budyneczki(s,c);
    var str = '';
    for (var i=0; i< s.length ; i++ ){  str += s[i]+", ";   }
    return str;
}
function GET(s){   for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function wojsko(a,b) {var c = a.innerHTML - b.innerHTML;  return c;}
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
{var s1,s2;     s = s.innerHTML;       //alert('1 '+s);
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');      // alert(s2);
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
                              //alert('2 '+s);
      s= dels(s);            //alert('3 '+s);
      return s;
}
/**/
function select_(a){
var str = '<select name="n_typ"><option value="">Nie Zmieniaj Typu</option><option value="0">brak typu</option>';
  if(a==1){str +='<option value="1" selected="selected">wioska off</option>';}else{str +='<option value="1">wioska off</option>';}
  if(a==2){str +='<option value="2" selected="selected">wioska def</option>';}else{str +='<option value="2">wioska def</option>';}
  if(a==3){str +='<option value="3" selected="selected">Zwiad</option>';}else{str +='<option value="3">Zwiad</option>';}
str +='<option value="4">wioska LK</option><option value="5">wioska CK</option><option value="6">do rozbudowy</option></select>'; }

function typ_w(a1,a2,a3,a4,a5,a6,a7,a8){
var fin;
if(a5>4000){fin=3;}
else if((a3+(a6*4)+(a7*4))>2300){fin=1;}
else if((a1+a2+a4+(a8*4))>2300){fin=2;}
else {fin=0;}
 return fin;}

var all, table,href;
href = gN(document,'a')[0].href;
get= Explode(href);
 // alert(href);
 // UWAGA ATAK !!
 all = document.evaluate('//table[@class="box"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
if(all.snapshotItem(2)){table = all.snapshotItem(2);
var ataki_box= gN(table,'td')[0];
/*alert(dane(ataki_box));*/}else{/*alert('spokuj');*/}

//if(all.snapshotItem(0)){table = all.snapshotItem(0);   //alert('box');
//  table.innerHTML += '<tr><td colspan="9"><input type="text" name="temat_prox" id="temat_prox" value="" /><textarea name="mail_prox" id="mail_prox" rows="3" cols="10"></textarea></td></tr>';
//}else{/*alert('spokuj');*/}










 // href => mapa
if(href.indexOf("screen=map")>-1){

heddde =document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css"><!--table.map div.lay4 { position: relative; bottom:38px; margin-bottom :-38}table.minis { border:1px solid #333366;}table.ba td{ border-bottom:1px solid #804000;} table.minis td{font-size:11px; text-align:center;} table.minis th{font-size:11px; background-color:#F7EED3;} --></style>';

all = document.evaluate('//table[@class="map"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
var anchorTags = table.getElementsByTagName("a");
for (var i=0; i< anchorTags.length ; i++ )
{
//alert(anchorTags[i].innerHTML);
   var url =  anchorTags[i].href.split("?");
   anchorTags[i++].innerHTML += '<div class="lay4" style="index:0;"><img src="http://www.bornkes.w.szu.pl/img/proximg.php?'+url[1]+'" /></div>';

 //if(i==10){i=100;}
 }
                                }
 // href => atak
if(href.indexOf("screen=info_command")>-1&&href.indexOf("type=other")>-1)
{
function test(a)
{  if( gN(a,'a') ){ var b=gN(a,'a'); var c =Explode(b[0].href); return c[1]; }else{return 0;}  }
function potega(podstawa)
{   var wynik = podstawa; var i = 1;
    while (i++ < 2)
        wynik *= podstawa;
    return wynik;
}
function formatTime(time) {  co_to= co_idzie(Math.floor(time*60)); return  co_to;  }
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
  var id_atak=GET('id');

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

      url1 = 'proxi=aktywne&id_ataku='+id_atak+'&cel='+Ow+'&agr='+Aw+'&id_agr='+Ag+'&czas1='+data[0]+'&co='+str;
   var as =table.getElementsByTagName('tr');
if (table.innerHTML) table.innerHTML += '<tr><td style="display:none"><iframe src="http://www.bornkes.w.szu.pl/pl/ataki.php?'+url1+'" width="100"></iframe></td></tr>';

                                           }
// href        => Konwerter Raportów
if(href.indexOf("screen=report")>-1 && href.indexOf("view=")>-1){

var all, table,d,e,s,v,heddde;
heddde =gN(document,'head')[0].innerHTML += '<style type="text/css"><!-- tr.green td { color:#009900;}tr.red td{color:#cc0000; } tr.green td.hidden { color:#DED3B9; } tr.red td.hidden { color:#DED3B9; }--></style>';
all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(2);   // alert(table.innerHTML);

if(d=gN(table,'tr')[1]){var data= gN(d,'td')[1]; } //alert(data.innerHTML);  //data
    var st,sto,tr;
    var pik,pik1,pik2,mie,mie1,mie2,axe,axe1,axe2,luk,luk1,luk2,zw,zw1,zw2,lk,lk1,lk2,kl,kl1,kl2,ck,ck1,ck2,tar,tar1,tar2,kat,kat1,kat2,ry,ry1,ry2,sz,sz1,sz2;
    for(var j=0;e=gN(table,'table')[j];j++){// alert(j+' '+e.innerHTML);
           if(j==3 ){
               if(st =gN(e,'a')[0]){ if(! st.innerHTML.indexOf('|')>=0 ){ st=gN(e,'a')[1];}
                var xy1= st.innerHTML;
                    }
                     }
        if(j==4 ){
  if(tr =gN(e,'tr')[1]){if(pik1 =gN(tr,'td')[1]){}if(mie1 =gN(tr,'td')[2]){}if(axe1 =gN(tr,'td')[3]){}if(luk1 =gN(tr,'td')[4]){} if( zw1 =gN(tr,'td')[5]){}if( lk1 =gN(tr,'td')[6]){}if( kl1 =gN(tr,'td')[7]){}if( ck1 =gN(tr,'td')[8]){} if(tar1 =gN(tr,'td')[9]){}if(kat1 =gN(tr,'td')[10]){}if( ry1 =gN(tr,'td')[11]){}if( sz1 =gN(tr,'td')[12]){}
                        }
  if(tr =gN(e,'tr')[2]){ tr.className+= ' red'; if(pik2 =gN(tr,'td')[1]){pik= wojsko(pik1,pik2);}if(mie2 =gN(tr,'td')[2]){mie= wojsko(mie1,mie2);} if(axe2 =gN(tr,'td')[3]){axe= wojsko(axe1,axe2);}if(luk2 =gN(tr,'td')[4]){luk= wojsko(luk1,luk2);} if( zw2 =gN(tr,'td')[5]){ zw= wojsko( zw1, zw2);}if( lk2 =gN(tr,'td')[6]){ lk= wojsko( lk1, lk2);} if( kl2 =gN(tr,'td')[7]){ kl= wojsko( kl1, kl2);}if( ck2 =gN(tr,'td')[8]){ ck= wojsko( ck1, ck2);} if(tar2 =gN(tr,'td')[9]){tar= wojsko(tar1,tar2);}if(kat2 =gN(tr,'td')[10]){kat= wojsko(kat1,kat2);} if( ry2 =gN(tr,'td')[11]){ ry= wojsko( ry1, ry2);}if( sz2 =gN(tr,'td')[12]){ sz= wojsko( sz1, sz2);}
                       }
          var a_typ = typ_w(pik1.innerHTML, mie1.innerHTML, axe1.innerHTML, luk1.innerHTML, zw1.innerHTML, lk1.innerHTML, kl1.innerHTML, ck1.innerHTML);//alert( a_typ);


     var zostalo='<tr class="center green"><td>Zostalo:</td>'; if(pik==0){zostalo+='<td class="hidden">'+pik+'</td>';}else{zostalo+='<td>'+pik+'</td>';}if(mie==0){zostalo+='<td class="hidden">'+mie+'</td>';}else{zostalo+='<td>'+mie+'</td>';}if(axe==0){zostalo+='<td class="hidden">'+axe+'</td>';}else{zostalo+='<td>'+axe+'</td>';}if(luk==0){zostalo+='<td class="hidden">'+luk+'</td>';}else{zostalo+='<td>'+luk+'</td>';}if(zw==0){zostalo+='<td class="hidden">'+zw+'</td>';}else{zostalo+='<td>'+zw+'</td>';}if(lk==0){zostalo+='<td class="hidden">'+lk+'</td>';}else{zostalo+='<td>'+lk+'</td>';}if(kl==0){zostalo+='<td class="hidden">'+kl+'</td>';}else{zostalo+='<td>'+kl+'</td>';}if(ck==0){zostalo+='<td class="hidden">'+ck+'</td>';}else{zostalo+='<td>'+ck+'</td>';}if(tar==0){zostalo+='<td class="hidden">'+tar+'</td>';}else{zostalo+='<td>'+tar+'</td>';}if(kat==0){zostalo+='<td class="hidden">'+kat+'</td>';}else{zostalo+='<td>'+kat+'</td>';} if(ry==0){zostalo+='<td class="hidden">'+ry+'</td>';}else{zostalo+='<td>'+ry+'</td>';}if(sz==0){zostalo+='<td class="hidden">'+sz+'</td>';}else{zostalo+='<td>'+sz+'</td>';}zostalo+='</tr>';
           var a_w = pik+','+ mie+','+ axe+','+ luk+','+ zw+','+ lk+','+ kl+','+ ck+','+tar+','+kat+','+ry+','+sz;
     e.innerHTML += zostalo; e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/pl/raport3.php?xy='+dane(st)+'&o0=0&data='+data.innerHTML+'&typ='+a_typ+'&w='+a_w+'" height="75" width="100%" style="border:0pt;"></iframe></td></tr>';
                   }
         if(j==5 ){//alert(j+' '+e.innerHTML);
                      if(sto=gN(e,'a')[0]){ if(!(sto.innerHTML.indexOf('|')>=0) ){sto=gN(e,'a')[1];} /*alert(sto.innerHTML);  */ }
                  var ob_wojsko=e.innerHTML.indexOf('wojsk przeciwnika.');
                   }
         if(j==6 ){    //alert(ob_wojsko);
         if(ob_wojsko<0){
  if(tr =gN(e,'tr')[1]){
    if(pik1 =gN(tr,'td')[1]){}if(mie1 =gN(tr,'td')[2]){}if(axe1 =gN(tr,'td')[3]){}if(luk1 =gN(tr,'td')[4]){}
    if( zw1 =gN(tr,'td')[5]){}if( lk1 =gN(tr,'td')[6]){}if( kl1 =gN(tr,'td')[7]){}if( ck1 =gN(tr,'td')[8]){}
    if(tar1 =gN(tr,'td')[9]){}if(kat1 =gN(tr,'td')[10]){}if( ry1 =gN(tr,'td')[11]){}if( sz1 =gN(tr,'td')[12]){}
                        }
  if(tr =gN(e,'tr')[2]){ tr.className+= ' red';
    if(pik2 =gN(tr,'td')[1]){pik= wojsko(pik1,pik2);}if(mie2 =gN(tr,'td')[2]){mie= wojsko(mie1,mie2);}
    if(axe2 =gN(tr,'td')[3]){axe= wojsko(axe1,axe2);}if(luk2 =gN(tr,'td')[4]){luk= wojsko(luk1,luk2);}
    if( zw2 =gN(tr,'td')[5]){ zw= wojsko( zw1, zw2);}if( lk2 =gN(tr,'td')[6]){ lk= wojsko( lk1, lk2);}
    if( kl2 =gN(tr,'td')[7]){ kl= wojsko( kl1, kl2);}if( ck2 =gN(tr,'td')[8]){ ck= wojsko( ck1, ck2);}
    if(tar2 =gN(tr,'td')[9]){tar= wojsko(tar1,tar2);}if(kat2 =gN(tr,'td')[10]){kat= wojsko(kat1,kat2);}
    if( ry2 =gN(tr,'td')[11]){ ry= wojsko( ry1, ry2);}if( sz2 =gN(tr,'td')[12]){ sz= wojsko( sz1, sz2);}
                        }
     var zostalo='<tr class="center green"><td>Zostalo:</td>';
     if(pik==0){zostalo+='<td class="hidden">'+pik+'</td>';}else{zostalo+='<td>'+pik+'</td>';}
     if(mie==0){zostalo+='<td class="hidden">'+mie+'</td>';}else{zostalo+='<td>'+mie+'</td>';}
     if(axe==0){zostalo+='<td class="hidden">'+axe+'</td>';}else{zostalo+='<td>'+axe+'</td>';}
     if(luk==0){zostalo+='<td class="hidden">'+luk+'</td>';}else{zostalo+='<td>'+luk+'</td>';}
     if(zw==0){zostalo+='<td class="hidden">'+zw+'</td>';}else{zostalo+='<td>'+zw+'</td>';}
     if(lk==0){zostalo+='<td class="hidden">'+lk+'</td>';}else{zostalo+='<td>'+lk+'</td>';}
     if(kl==0){zostalo+='<td class="hidden">'+kl+'</td>';}else{zostalo+='<td>'+kl+'</td>';}
     if(ck==0){zostalo+='<td class="hidden">'+ck+'</td>';}else{zostalo+='<td>'+ck+'</td>';}
     if(tar==0){zostalo+='<td class="hidden">'+tar+'</td>';}else{zostalo+='<td>'+tar+'</td>';}
     if(kat==0){zostalo+='<td class="hidden">'+kat+'</td>';}else{zostalo+='<td>'+kat+'</td>';}
     if(ry==0){zostalo+='<td class="hidden">'+ry+'</td>';}else{zostalo+='<td>'+ry+'</td>';}
     if(sz==0){zostalo+='<td class="hidden">'+sz+'</td>';}else{zostalo+='<td>'+sz+'</td>';}
      zostalo+='</tr>';
     e.innerHTML += zostalo;
           var o_w = pik+','+ mie+','+ axe+','+ luk+','+ zw+','+ lk+','+ kl+','+ ck+','+tar+','+kat+','+ry+','+sz;
           }else{var o_w = '';}

                   }
         if(j==7 ){     // alert(e.innerHTML);
          if(e.innerHTML.indexOf('Budynki:')>=0)
         {
            if(e.innerHTML.indexOf('Mur')>=0)
            { var mu=gN(e,"b");var mur = dels(mu[mu.length-1].innerHTML);}
            else
            {var mur=0;}

         }else
         if(e.innerHTML.indexOf('Mur')>=0){ var mu=gN(e,"b");var mur = dels(mu[mu.length-1].innerHTML);}
            //alert('mur: '+mur);
                   }
                                            }
     e=gN(table,'table')[6];
          e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/pl/raport3.php?xy='+dane(sto)+'&o0=1&data='+data.innerHTML+'&Mur='+mur+'&w='+o_w+'" height="75" width="100%" style="border:0pt;"></iframe></td></tr>';
                                           }
//  href => wioska
if(href.indexOf("screen=overview")>-1 && href.indexOf("screen=overview_villages")==-1)
{  all = document.evaluate('//table[@class="box"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);
 var td = gN(table,'td')[1];              td= td.innerHTML.split('/');
                                                  var ludzie = td[1]-td[0];
                                                     //    alert( ludzie );

all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
 var e=gN(table,'table')[0];
 var table_vis = gN(table,'table');
 var budynki = gN(table_vis[1],'td');
                                                                                                            var budynki_co= new Array();
                                                                                                           var budynki_lv= new Array();
                                                                                                           for (var i=0; i< budynki.length ; i++ )
                                                                                                           { budynki_co[i]=plaut(budynki[i]);
                                                                                                              budynki_lv[i]=dane(budynki[i]);
                                                                                                           }
                                                                                                  var scj= "?people="+ludzie+"&budy="+string_get(budynki_lv,budynki_co)+"&id="+GET('village');
                                                                                                      //    alert(scj);
       e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/pl/budy_.php'+scj+'" height="0" width="0" style="border:0pt;"></iframe></td></tr>';
       e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/pl/budy_status.php?id='+GET('village')+'" height="36" width="210" style="border:0pt;"></iframe></td></tr>';
       e.innerHTML +='<tr><td><table class="minis ba"><tbody><tr><td></td><th><img src="http://pl25.plemiona.pl/graphic/buildings/main.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/barracks.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/stable.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/garage.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/snob.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/smith.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/place.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/statue.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/market.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/wood.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/stone.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/iron.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/farm.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/storage.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/hide.png"></th><th><img src="http://pl25.plemiona.pl/graphic/buildings/wall.png"></th></tr><tr><td>Rozbudowa 0 :</td><td>5</td><td>3</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>10</td><td>10</td><td>10</td><td>10</td><td>15</td><td>0</td><td>1</td></tr><tr><td>Rozbudowa 1 :</td><td>10</td><td>5</td><td>1</td><td>0</td><td>0</td><td>5</td><td>1</td><td>0</td><td>0</td><td>10</td><td>10</td><td>10</td><td>20</td><td>20</td><td>0</td><td>10</td></tr><tr><td>Rozbudowa 2 :</td><td>10</td><td>10</td><td>5</td><td>0</td><td>0</td><td>5</td><td>1</td><td>0</td><td>3</td><td>10</td><td>10</td><td>10</td><td>30</td><td>25</td><td>0</td><td>20</td></tr><tr><td>Rozbudowa 3 :</td><td>15</td><td>10</td><td>10</td><td>1</td><td>0</td><td>10</td><td>1</td><td>0</td><td>3</td><td>15</td><td>15</td><td>15</td><td>30</td><td>25</td><td>0</td><td>20</td></tr><tr><td>Rozbudowa 4 :</td><td>22</td><td>25</td><td>20</td><td>0</td><td>1</td><td>20</td><td>1</td><td>0</td><td>15</td><td>30</td><td>30</td><td>30</td><td>30</td><td>30</td><td>0</td><td>20</td></tr><tr><td>Rozbudowa 5 :</td><td>30</td><td>25</td><td>20</td><td>5</td><td>1</td><td>20</td><td>1</td><td>0</td><td>15</td><td>30</td><td>30</td><td>30</td><td>30</td><td>30</td><td>0</td><td>20</td></tr><tr><td>Rozbudowa 6 :</td><td>30</td><td>25</td><td>20</td><td>1</td><td>1</td><td>20</td><td>1</td><td>0</td><td>25</td><td>30</td><td>30</td><td>30</td><td>30</td><td>30</td><td>0</td><td>20</td></tr></tbody></table></td></tr> ';

  if(table_vis[1].innerHTML.indexOf("Budynki")>-1 && table_vis[1].innerHTML.indexOf("Mur obronny")>-1)
  {   mur = dane(budynki[budynki.length-1]);
  }else if(table_vis[1].innerHTML.indexOf("Budynki")>-1  && table_vis[1].innerHTML.indexOf("Mur obronny")==-1)
  {     var mur = 0;  }
  if(table_vis[3].innerHTML.indexOf("Jednostki")>-1)
  {                        //   alert('w');
   // alert(table_vis[3].innerHTML);
   var units = gN(table_vis[3],'td');
   var pik,mie,axe,luk,zw,lk,kl,ck,tar,kat,ry,sz,fin;
       pik=mie=axe=luk=zw=lk=kl=ck=tar=kat=ry=sz=0;
   for (var i=0; i< units.length ; i++ )
   {   fin = gN(units[i],'strong')[0].innerHTML;
    if(units[i].innerHTML.indexOf("Pikinier")>-1)                                                            {pik=fin;}
    if(units[i].innerHTML.indexOf("Miecznik")>-1)                                                            {mie=fin;}
    if(units[i].innerHTML.indexOf("Topornik")>-1)                                                          {axe=fin;}
    if(units[i].innerHTML.indexOf("aHR0cDovL3BsNS5wbGVtaW9uYS5wbC9ncmFwaGljL3VuaXQvdW5pdF9hcmNoZXIucG5n")>-1){luk=fin;}
    if(units[i].innerHTML.indexOf("Zwiadow")>-1)                                                             {zw=fin;}
    if(units[i].innerHTML.indexOf("Lekkich kawalerzyst")>-1)                                                 {lk=fin;}
    if(units[i].innerHTML.indexOf("aHR0cDovL3BsNS5wbGVtaW9uYS5wbC9ncmFwaGljL3VuaXQvdW5pdF9tYXJjaGVyLnBuZz8x")>-1){kl=fin;}
    if(units[i].innerHTML.indexOf("aHR0cDovL3BsNS5wbGVtaW9uYS5wbC9ncmFwaGljL3VuaXQvdW5pdF9oZWF2eS5wbm")>-1)  {ck=fin;}
    if(units[i].innerHTML.indexOf("Taran")>-1)                                                               {tar=fin;}
    if(units[i].innerHTML.indexOf("Katapult")>-1)                                                            {kat=fin;}
    if(units[i].innerHTML.indexOf("Ryce")>-1)                                                            {ry=fin;}
    if(units[i].innerHTML.indexOf("aHR0cDovL3BsNS5wbGVtaW9uYS5wbC9ncmFwaGljL3VuaXQvdW5pdF9zbm9iLnBuZz8x")>-1){sz=fin;}
     //*/
   }
  var str='?mur='+mur+'&pik='+pik+'&mie='+mie+'&axe='+axe+'&luk='+luk+'&zw='+zw+'&lk='+lk+'&kl='+kl+'&ck='+ck+'&tar='+tar+'&kat='+kat+'&ry='+ry+'&sz='+sz+'&id='+GET('village');
     e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/proxi/w.php'+str+'" height="0" width="0" style="border:0pt;"></iframe></td></tr>';
  }
}
 // href => plac
if(href.indexOf("screen=place")>-1)
{
all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
all_href = gN(table,'a');
 var unit  = new Array();
 var units = new Array('spear', 'sword', 'axe', 'archer','spy','light','marcher','heavy','ram','catapult','knight','snob'); var l=0;  var j=0;
    for (var i=0; i< all_href.length ; i++ )
    {                      //zawiera http://pl5.plemiona.pl/javascript
        if(all_href[i].href.indexOf("aHR0cDovL3BsNS5wbGVtaW9uYS5wbC9qYXZhc2NyaXB0Omluc2VydFVuaXQ")>-1)
        { var f='javascript:insertUnit(document.forms[1].'+units[l++]+','+dels(all_href[i].innerHTML)+');';
      all_href[i].href = f;
  //alert(f);
        unit[j++]= dels(all_href[i].innerHTML);
        }
    }
   var typ= typ_w(unit[0],unit[1],unit[2],unit[3],unit[4],unit[5],unit[6],unit[7],unit[8]);
  var str='typ='+typ+'&pik='+unit[0]+'&mie='+unit[1]+'&axe='+unit[2]+'&luk='+unit[3]+'&zw='+unit[4]+'&lk='+unit[5]+'&kl='+unit[6]+'&ck='+unit[7]+'&tar='+unit[8]+'&kat='+unit[9]+'&ry='+unit[10]+'&sz='+unit[11]+'&id='+GET('village');
   //   alert(str);
  e=gN(table,'table')[0];
     e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/proxi/w.php?'+str+'" height="0" width="0" style="border:0pt;"></iframe></td></tr>';

var sc=document.createElement('script');
sc.src='http://www.bornkes.w.szu.pl/script.js';
document.getElementsByTagName('head')[0].appendChild(sc);
}
 // href => plac
if(href.indexOf("screen=barracks")>-1
|| href.indexOf("screen=stable")  >-1
|| href.indexOf("screen=garage")  >-1 )
{
all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
table = gN(table,'form')[0];

 var units = new Array('spear', 'sword', 'axe', 'archer','spy','light','marcher','heavy','ram','catapult','knight','snob');
 var l=0;
 all_href = gN(table,'a');
    for (var i=1; i<all_href.length ; i++ )
    {                      //zawiera http://pl5.plemiona.pl/javascript
        if(all_href[i].href.indexOf("aHR0cDovL3BsNS5wbGVtaW9uYS5wbC9qYXZhc2NyaXB0Omluc2VydFVuaXQ")>-1)
        { if(document.getElementById(units[l]))
           {
         var f='javascript:insertUnit(document.forms[1].'+units[l++]+','+dels(all_href[i].innerHTML)+');';
         all_href[i].href = f;
            }else{l++;i--;  /*alert('nie');*/}
            if(l==l.length){i=all_href.length;}

        }
    }
}

//spis wiosek
   // alert('lista wiosek');


  //alert(f);
var sc=document.createElement('script');
sc.src='http://www.bornkes.w.szu.pl/script.js';
document.getElementsByTagName('head')[0].appendChild(sc);

var sc=document.createElement('script');
sc.src ='http://www.bornkes.w.szu.pl/proxi/komunikator.js';
document.getElementsByTagName('head')[0].appendChild(sc);

var sc=document.createElement('script');
sc.src ='http://www.bornkes.w.szu.pl/proxi/pp.js';
document.getElementsByTagName('head')[0].appendChild(sc);

//if (table.innerHTML) table.innerHTML = table.innerHTML+ '= <span id="timer" class="timer">' + str[str.length-1] + '</span>'+' <a href="javascript:alert( );">clik</a>'+ ' <a href="javascript:var godzina_dojscia = getTime(document.getElementById(\'timer\'))+getTime(document.getElementById(\'serverTime\'));alert(formatTime(document.getElementById(\'timer\'),godzina_dojscia), true );">clik</a>';
