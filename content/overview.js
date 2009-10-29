function gN(a,b) { return a.getElementsByTagName(b);}
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
{var s1,s2;     if(s.innerHTML){s = s.innerHTML;}
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');      // alert(s2);
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
                              //alert('2 '+s);
      s= dels(s);            //alert('3 '+s);
      return s;
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
function string_get(s,c)
{             s= budyneczki(s,c);
    var str = '';
    for (var i=0; i< s.length ; i++ ){  str += s[i]+", ";   }
    return str;
}
var  all = document.evaluate('//table[@class="box"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(1);
 var td = gN(table,'td')[1];              td= td.innerHTML.split('/');
                                                  var ludzie = td[1]-td[0];
                                                       // alert( ludzie );


all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
 var e=gN(table,'table')[0];
 var table_vis = gN(table,'table');
 var budynki = gN(table_vis[1],'tr');  var budy='';
                                                             var budynki_co= new Array();
                                                             var budynki_lv= new Array();
                                                             for (var i=1; i< budynki.length ; i++ )
                                                             { budy = gN(budynki[i],'td');
                                                              budynki_co[i]=plaut(budy[0]);
                                                              budynki_lv[i]=dane(budy[0]);
                                                             }
                                                 var scj= "?people="+ludzie+"&budy="+string_get(budynki_lv,budynki_co)+"&id="+dels(GET('village'));
                                                                                                          //alert(scj);
            e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/pl/budy_.php'+scj+'" height="0" width="0" style="border:0pt;"></iframe></td></tr>';

  if(table_vis[3].innerHTML.indexOf("Jednostki")>-1)
  {
   // alert(table_vis[3].innerHTML);
   var units = gN(table_vis[3],'td');
   var pik,mie,axe,luk,zw,lk,kl,ck,tar,kat,ry,sz,fin;
       pik=mie=axe=luk=zw=lk=kl=ck=tar=kat=ry=sz=0;
   for (var i=0; i< units.length ; i++ )
   {if(units[i].innerHTML.indexOf("strong")==-1){break;}
       fin = gN(units[i],'strong')[0].innerHTML;
    if(units[i].innerHTML.indexOf("unit_spear.png")>-1){pik=fin;}
    if(units[i].innerHTML.indexOf("unit_sword.png")>-1){mie=fin;}
    if(units[i].innerHTML.indexOf("unit_axe.png")>-1){axe=fin;}
    if(units[i].innerHTML.indexOf("unit_archer.png")>-1){luk=fin;}
    if(units[i].innerHTML.indexOf("unit_spy.png")>-1){zw=fin;}
    if(units[i].innerHTML.indexOf("unit_light.png")>-1){lk=fin;}
    if(units[i].innerHTML.indexOf("unit_marcher.png")>-1){kl=fin;}
    if(units[i].innerHTML.indexOf("unit_heavy.png")>-1){ck=fin;}
    if(units[i].innerHTML.indexOf("unit_ram.png")>-1){tar=fin;}
    if(units[i].innerHTML.indexOf("unit_catapult.png")>-1){kat=fin;}
    if(units[i].innerHTML.indexOf("unit_knight.png")>-1){ry=fin;}
    if(units[i].innerHTML.indexOf("unit_snob.png")>-1){sz=fin;}
     //*//*
   }
  var str='?mur=22&pik='+pik+'&mie='+mie+'&axe='+axe+'&luk='+luk+'&zw='+zw+'&lk='+lk+'&kl='+kl+'&ck='+ck+'&tar='+tar+'&kat='+kat+'&ry='+ry+'&sz='+sz+'&id='+dels(GET('village'));
    e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/proxi/w.php'+str+'" height="0" width="0" style="border:0pt;"></iframe></td></tr>';
 } /* */
