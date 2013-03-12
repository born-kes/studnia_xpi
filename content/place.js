if(typeof(unsafeWindow) != 'undefined'){var data = unsafeWindow.game_data; }else{ var data = window.game_data }

var valliage = data.village.id ;
var xy_dom = data.village.coord;
var topCzas="''";

function gid_kes(id){return document.getElementById(id);}     // textContent
function gN(a,b){ return a.getElementsByTagName(b);}

function GET(s){var to_get; if(s=='village'){ to_get=getr; }else{ to_get =get; }
   for (var i=0; i< to_get.length ; i++ ){if(s==to_get[i]){return to_get[i+1];} }  
}     // return false;

var getr= G_explode(gN(document,"a")[0].href);
var get= G_explode(window.location.search);

function typ_w(a1,a2,a3,a4,a5,a6,a7,a8){
var fin;
if(a5>4000){fin=3;}
else if((a3+(a6*4)+(a7*4))>2300){fin=1;}
else if((a1+a2+a4+(a8*4))>2300){fin=2;}
else {fin=0;}
 return fin;
}
// koniec deklaracji pora do pracy ;p
 if(!GET('ukryjmenu')){

var all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(0);
var all_href = gN(table,'a');
 var unit  = new Array();unit[0]=0;
 var units = new Array('spear', 'sword', 'axe', 'archer','spy','light','marcher','heavy','ram','catapult','knight','snob'); var l=0;  var j=1;

    for (var i=0; i< all_href.length ; i++ ){    //zawiera http://pl5.plemiona.pl/javascript

    	  if(all_href[i].href.indexOf("javascript:insertUnit")>-1){  //alert(f);
        unit[j++]= G_dels(all_href[i].innerHTML);
        }
    }
// topCzas= G_TempoMarszu(unit);
   var time = new Date();
   var data= time.getDate()   +'.'+
          (1+time.getMonth()) +'.'+
           time.getFullYear() +' '+
             time.getHours()  +':'+
             time.getMinutes()+':'+
             time.getSeconds();

    e=gN(table,'td')[2];
     e.innerHTML ='<table>'+
     						'<tr><td>'+
     						  '<iframe src="'+G_bornkes+'/dw/raport.php?'+
                                           '&o0=0'+     // raport_w_wiosce
                                           '&data='+data+
                                           '&w='+unit+
                                           '&id='+valliage+
							  	'" height="0" width="0" style="border:0pt;">'+
								'</iframe>'+
                   	'<button onclick="Klonowanie(\''+valliage+'\',\''+GET('target')+'\');" style="font-size: 8pt;">Klonowanie Placu</button> <br /> '+
                   '<td>'+e.innerHTML+'</td>'+
                    '</tr></table>';
         
 gid_kes('target_support').parentNode.parentNode.innerHTML += '<td> <button onclick="zapisz_cook();return false;" style="font-size: 8pt;">Zapisz stan wojsk</button>'+
 																					'<br /><button onclick="checkCookie(\'place\');return false;" style="font-size: 8pt;" title="klawisz q">Load wojsk (key q)</button> </td>';
 gid_kes('selectAllUnits').parentNode.colSpan = "4";
 gid_kes('selectAllUnits').textContent += ' (key w)';
 gid_kes('selectAllUnits').title += 'klawisz w';
// gid_kes('selectAllUnits').href = 'javascript:selectAllUnits(true)';

}


var sc=document.createElement('script');
sc.innerHTML += "top.xy_dom = '"+xy_dom+"';\n"+
" top.czas=new Array("+unit+"); \n "+
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
document.getElementsByTagName('head')[0].appendChild(sc); //*/
