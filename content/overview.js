if(typeof(unsafeWindow) != 'undefined'){var data = unsafeWindow.game_data; }else{ var data = window.game_data }

var mur = data.village.buildings.wall;
var valliage = data.village.id ;

function alert_(s){/* alert(s);/**/}
function gid(id) { return document.getElementById(id);}   alert_('wczytanie funkcji');
function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
//s = s.replace(new RegExp(",","g"),"");
 return s;
}
                                                             alert_('jednostki');
   var units = gN(gid('show_units'),'td');
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
   }                    //15.12.11 18:17:18
   var time = new Date();
   var data= time.getDate()   +'.'+
          (1+time.getMonth()) +'.'+
           time.getFullYear() +' '+
             time.getHours()  +':'+
             time.getMinutes()+':'+
             time.getSeconds();
                                                                                              alert_('analiza jednostek');
    gid('show_units').innerHTML +='<iframe src="http://www.bornkes.w.szu.pl/dw/raport.php?'+
                                           '&o0=1'+     // raport_w_wiosce
                                           '&data='+data+
                                           'mur='+mur+
  '&w='+pik+','+mie+','+axe+','+luk+','+zw+','+lk+','+kl+','+ck+','+tar+','+kat+','+ry+','+sz+
                                           '&id='+valliage+
                            '" height="0" width="0" style="border:0pt;"></iframe>';           alert_('podlaczenie jednostek');

if(gid('show_incoming_units')){
   var ataki = gN(gid('show_incoming_units'),'tr');
   for (var i=0; i< ataki.length ; i++ )
   {  var span = gN(ataki[i],'span');
    if(span.length<4){continue;}
    if(gN(ataki[i],'img')[0].src.lastIndexOf("attack")==-1){continue;}
    span[0].parentNode.innerHTML+='<br>przyslij Pomoc z : '+
    '<a href="game.php?village='+valliage+'&screen=place&mode=call&time='+span[span.length-1].innerHTML+'">'+
    'wlasnych wiosek <img alt="" src="http://cdn.tribalwars.net/graphic/command/support.png?1">'+
    '</a>';
   }
}
