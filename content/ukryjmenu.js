if(typeof(unsafeWindow) != 'undefined'){var data = unsafeWindow.game_data; var $=unsafeWindow.$; }else{ var data = window.game_data;  var $=window.$;}

function gid_kes(id){return $('#'+id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function show(name) {
 var style = gid_kes(name).style;
 style.display = (style.display == 'none' ? '' : 'none');
}
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


if(GET('screen')=='place' ){
                  // all = gN(gN(document,'form')[0],'table');  for (var i = 0; i < all.length ; i++){  all[i].style = '';}
      var form_elenent = gN(document,'form')[0];
          form_elenent.innerHTML = '<table class="header-border manu box nowrap"><tbody><tr>'+document.getElementById('menu_row2').innerHTML+'</tr></tbody></table>'+
          '<input class="attack" name="attack" value="Napad" style="font-size: 10pt;" type="submit">  <button onclick="checkCookie(\'place\');return false;" style="font-size: 8pt;">Load wojsk</button> <br>'+form_elenent.innerHTML
gN(document,'body')[0].innerHTML= '<table class="main"><tr><td>'+form_elenent.parentNode.innerHTML+'</td><td style="display:none;">'+document.getElementsByTagName('body')[0].innerHTML+'</td></tr></table>';
exit();
}else if(GET('screen')=='info_command' ){

$(document).ready(function (){ $('#topContainer,#quickbar_outer,#quickbar_inner,#header_info,#label').hide(); });
$('#edit').show();

exit();
}
$('hr').css('width','380px');
//var all = gN(document,"hr");
//  all[0].style.width = '380' + 'px';

var all = gN(document,"table");
for (var i = 0; i < all.length-7 ; i++)
{
 if(all[i].innerHTML.lastIndexOf('class="server_info"')>-1 && GET('screen')!='place'){break;}
  all[i].style.display = 'none';
}
 var is=0;
for (var i = 0; i < all.length ; i++)
{
    if(is==1){break;} if(all[i].innerHTML.lastIndexOf('class="server_info"')>-1){is=1;}
  all[i].style.width = '400' + 'px';
}
 var sc=document.createElement('script');
sc.innerHTML = '  startTimer();';
document.getElementsByTagName('head')[0].appendChild(sc);

