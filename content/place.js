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
{var s1,s2;     s = s.innerHTML;
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;
}
function typ_w(a1,a2,a3,a4,a5,a6,a7,a8){
var fin;
if(a5>4000){fin=3;}
else if((a3+(a6*4)+(a7*4))>2300){fin=1;}
else if((a1+a2+a4+(a8*4))>2300){fin=2;}
else {fin=0;}
 return fin;}
var all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(0);
var all_href = gN(table,'a');
 var unit  = new Array();
 var units = new Array('spear', 'sword', 'axe', 'archer','spy','light','marcher','heavy','ram','catapult','knight','snob'); var l=0;  var j=0;

    for (var i=0; i< all_href.length ; i++ )
    {                      //zawiera http://pl5.plemiona.pl/javascript
        if(all_href[i].href.indexOf("javascript:insertUnit")>-1)
        {
  //alert(f);
        unit[j++]= dels(all_href[i].innerHTML);
        }
    }


  var str='typ=22&pik='+unit[0]+'&mie='+unit[1]+'&axe='+unit[2]+'&luk='+unit[3]+'&zw='+unit[4]+'&lk='+unit[5]+'&kl='+unit[6]+'&ck='+unit[7]+'&tar='+unit[8]+'&kat='+unit[9]+'&ry='+unit[10]+'&sz='+unit[11]+'&id='+GET('village');

  e=gN(table,'table')[0];
     e.innerHTML +='<tr><td colspan="13"><iframe src="http://www.bornkes.w.szu.pl/proxi/w.php?'+str+'" height="0" width="0" style="border:0pt;"></iframe></td></tr>';
