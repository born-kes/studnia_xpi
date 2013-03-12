if(typeof(unsafeWindow) != 'undefined'){var data = unsafeWindow.game_data; }else{ var data = window.game_data }
var valliage = data.village.id ;
var xy_dom = data.village.coord;
var topCzas="''";
function gid_kes(id){return document.getElementById(id);}     // textContent
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

function potega(podstawa){ return podstawa*podstawa;}
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
function czas_marszu(pik, mie, axe, luk, zw, lk, kl, ck, tar, kat, ry, sz)
{       var t;
     if(sz>0) t=35;
else if(tar>0||kat>0)t=30;
else if(mie>0)t=22;
else if(pik>0||axe>0||luk>0)t=18;
else if(ck>0)t=11;
else if(lk>0||kl>0)t=10;
else if(zw>0)t=9;
else t=0;
return t;
}

// koniec deklaracji pora do pracy ;p

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
 topCzas= czas_marszu(unit[0],unit[1],unit[2],unit[3],unit[4],unit[5],unit[6],unit[7],unit[8],unit[9],unit[10],unit[11]);

   var time = new Date();
   var data= time.getDate()   +'.'+
          (1+time.getMonth()) +'.'+
           time.getFullYear() +' '+
             time.getHours()  +':'+
             time.getMinutes()+':'+
             time.getSeconds();

  e=gN(table,'td')[2];
     e.innerHTML ='<table><tr><td><iframe src="http://www.bornkes.w.szu.pl/dw/raport.php?'+
                                           '&o0=0'+     // raport_w_wiosce
                                           '&data='+data+
                                           '&w='+unit+
                                           '&id='+valliage+
'" height="0" width="0" style="border:0pt;"></iframe>'+
                   '<button onclick="Klonowanie(\''+valliage+'\',\''+GET('target')+'\');" style="font-size: 8pt;">Klonowanie Placu</button> <br /> '+
                   '<td>'+e.innerHTML+'</td>'+
                    '</tr></table>';
 gid_kes('selectAllUnits').parentNode.innerHTML += ' <button onclick="zapisz_cook();return false;" style="font-size: 8pt;">Zapisz stan wojsk</button> <button onclick="checkCookie(\'place\');return false;" style="font-size: 8pt;" title="klawisz q">Load wojsk (key q)</button> ';
 gid_kes('selectAllUnits').parentNode.colSpan = "4";
 gid_kes('selectAllUnits').textContent += ' (key w)'
 gid_kes('selectAllUnits').title += 'klawisz w'
 gid_kes('selectAllUnits').href = 'javascript:selectAllUnits(true)'
}

// xy_dom = dane(gN(document,'b')[0]);
var sc=document.createElement('script');
sc.innerHTML += "top.xy_dom = '"+xy_dom+"';\n"+
" top.czas="+topCzas+"; \n "+
"$(document).keypress(function(e) { \n";
if(gid_kes('village_switch_right') )
sc.innerHTML += "  if ( e.which == 100 ) { \n"+
"       window.location=$('#village_switch_right').attr('href');\n"+
"  }else ";

if(gid_kes('village_switch_left') )
sc.innerHTML += "if( e.which == 97 ){                                   \n"+
"       window.location=$('#village_switch_left').attr('href'); \n"+
"  }else ";

sc.innerHTML +=  "if( e.which == 119 ){                                  \n"+
"      selectAllUnits(true);                                    \n"+
"  }else if( e.which == 113 ){ checkCookie('place');            \n"+
"      }                                                        \n"+
"});\n\n $('#village_switch_right').attr('title','klawisz d'); \n $('#village_switch_left').attr('title','klawisz a');";
document.getElementsByTagName('head')[0].appendChild(sc);
