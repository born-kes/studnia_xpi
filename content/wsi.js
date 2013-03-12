  var data;
if(typeof(unsafeWindow) != 'undefined') {	data = unsafeWindow.game_data; }else{ data = window.game_data }

var t_z = '&g='+data.player.id;
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


function gid_kes(id){return document.getElementById(id);}     // textContent
function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^A-Za-z]+","g"),"");
 return s;}
var all,table_all, table, e,rows;
table_all =gid_kes("content_value");
 table=gN(table_all,'table');
  if(gN(table[0],'th').length<2){
    var ele =gN(table[0],'td');
    var eL = ele.length-1;
    ele[eL].parentNode.removeChild(ele[eL]);

gN(table[0],'tr')[0].innerHTML+='<th></th>';
}                                                    if(window.location.search.indexOf("t=")>-1)t_z='';
/*
gN(table[1],'tbody')[0].innerHTML+= ''+
							'<tr><td colspan="2">'+
                      '<a target="_blank" href="http://pl.twstats.com/pl5/index.php?page=village&' + window.location.search + '">» Akta wioski</a> (strona zewnêtrzna)';
                                    '</td></tr>';
*/

   var th =gN(table[0],'th');
  if (th[0].innerHTML) th[1].innerHTML =  '<table align="center">'+
                                           '<tr>'+
                                            '<th class="center">'+
                                            '<div><a onclick="UI.AjaxPopup(event, \'snob_existing\', \'/game.php?village='+GET('id')+'&amp;ajax=existing_popup&amp;screen=snob\', \'Zamknac\', null, null, 400, 400); return false;" href="#">Szlachta w sasiedztwie</a></div>'+
                                             '<div id="tyt_KES">Raport ze Studni</div>'+
                                             '<a href="http://www.bornkes.w.szu.pl/da/raport2.php'+window.location.search+t_z+'" onclick="gid_kes(\'tyt_KES\').innerHTML=\'Raport ze Studni\'" target="iframe_KES" style="float:left;"> Raport ze Studni</a> '+
                                             '<a href="http://www.bornkes.w.szu.pl/kalkul/start.php'+window.location.search+t_z+'" onclick="gid_kes(\'tyt_KES\').innerHTML=\'Radar - Znajduje wojsko w najblizszej wiosce\'" target="iframe_KES"> Radar </a> '+
                                             '<a href="javascript:pops(gid_kes(\'iframe_KES\').src,30);" style="float:right;">Do Nowego okna</a>'+
                                            '</th>'+
                                           '</tr>'+
                                           '<tr>'+
                                            '<td valign="top">'+
                                              '<iframe src="http://www.bornkes.w.szu.pl/da/raport2.php'+window.location.search+'" style="border:1pt;" width="450" height="310" id="iframe_KES" name="iframe_KES"></iframe>'+
                                            '</td>'+
                                           '</tr>'+
                                          '</table>'+th[1].innerHTML;
