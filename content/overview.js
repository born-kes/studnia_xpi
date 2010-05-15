function alert_(s){/* alert(s);/**/}
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
 function gids(s) {  alert_(gid(s).textContent.split(" "));
     if(!gid(s).textContent.split(" ")[1]){return gid(s).textContent.split(" ");}
     return gid(s).textContent.split(" ")[1];
     }

function plaut(s) {
  s =  gN(s,'a')[0].innerHTML;
  s= s.split('>');

s = s[1].replace(new RegExp("[^\\a-zA-Z]+","g"),"");
//s = s.replace(new RegExp(",","g"),"");
 return s;}
function dane(s)
{var s1,s2;  if(s.textContent){s = s.textContent;} //  if(s.innerHTML){s = s.innerHTML;}
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}   s2= s.lastIndexOf(')');
         // alert(s2);
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
        s=s.split(' ')[1];
 if(s.lastIndexOf('+')){ s= s.split('+')[0]; }

      s= dels(s);
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
{
    var str = '';
    for (var i=0; i< s.length ; i++ ){  str += s[i]+", ";   }
    return str;
}
 function gid(id) {	return document.getElementById(id);}                                                           alert_('wczytanie funkcji');
  var data;
if(typeof(unsafeWindow) != 'undefined') {	data = unsafeWindow.game_data; }else{ data = window.game_data }

var mur = data.village.buildings.wall;


               var ludzie = gid('ludzie').innerHTML;                                     // alert(ludzie);      //
all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);             alert_('wykrycie tablic');
 //   for (var w = 0; w<6; w++)
//{table_vis = all.snapshotItem(w);

for (var w=0;table_vis = all.snapshotItem(w);w++)
{
 if( table_vis.innerHTML.indexOf("Jednostki")>-1)
  {                                                             alert_('jednostki');
    //alert(table_vis.innerHTML);
   var units = gN(table_vis,'td');
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
   }                                                                                          alert_('analiza jednostek');
  var str='?mur='+mur+'&pik='+pik+'&mie='+mie+'&axe='+axe+'&luk='+luk+'&zw='+zw+'&lk='+lk+'&kl='+kl+'&ck='+ck+'&tar='+tar+'&kat='+kat+'&ry='+ry+'&sz='+sz+'&id='+dels(GET('village'));
    table_vis.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/proxi/w.php'+str+'" height="0" width="0" style="border:0pt;"></iframe></td></tr>'; alert_('podlaczenie jednostek');
 }
     if(table_vis.innerHTML.indexOf("Wojska przybywaj")>-1||dels(table_vis.innerHTML).indexOf("Wychodzcewojska")>-1)
 {                                                                    alert_('wojsko przybywajace');

   var rows=gN(table_vis,'tr');
      var attCounter = 0;
      var supCounter = 0;

   for (var i = 1; i < rows.length-1; i++)
   {
	if ( gN(rows[i],'img')[0].src.match(/attack.png/)){ attCounter++;}
	else if  (gN(rows[i],'img')[0].src.match(/support.png/)){supCounter++;}
   }      alert_('zliczenie atakow');
        gN(rows[0],'th')[0].innerHTML += "&nbsp&nbsp("+attCounter+"&nbsp<img src='/graphic/command/attack.png?1' />, "+supCounter + "&nbsp<img src='/graphic/command/support.png?1' />)";   alert_('suma atakow przybywaj±cych');
 }

}
//  var b=new Array();
 // b[0]=b[1]=b[2]=b[3]=b[4]=b[5]=b[6]=b[7]=b[8]=b[9]=b[10]=b[11]=b[12]=b[13]=b[14]=b[15]=0;
   alert_('zakonczono analize ciagu, pruba podlaczenia strony');
          //    var scj= "?people="+ludzie+"&budy="+string_get(b)+"&id="+dels(GET('village'));                                                  //alert(scj);
          //  table_vis.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/pl/budy_.php'+scj+'" height="0" width="0" style="border:0pt;"></iframe></td></tr>';

