var wersja = '1.8';   var d_='&nbsp;&nbsp;&nbsp;&nbsp;';

 function gid(id) {	return document.getElementById(id);}
if(typeof(unsafeWindow) != 'undefined') {	data = unsafeWindow.game_data; }else{ data = window.game_data }

var village_KES = data.village.id;

function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function urls(a){var u = gN(a,'a')[0].href; return u;}

function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)
     if(window.location.search.indexOf("?t=")>-1){var t='?t='+GET('t',window.location.search);}
else if(window.location.search.indexOf("&t=")>-1){var t='&t='+GET('t',window.location.search);}else{var t='';}
function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
 return s;}
 

var all, table,td;
all = document.evaluate("//table[@class='menu nowrap']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);

if(table.innerHTML)
{
 td=gN(table,'td'); var locationKES = gN(td[0],'a')[0].href;
 
 gN(td[td.length-1],'a')[0].innerHTML += d_ +' z Gry';
 
td[td.length-1].innerHTML = '<a href="#"><img src="http://www.bornkes.w.szu.pl/img/menu.php?w='+wersja+'" alt="" />Panel Radnego<br /></a>'+
'<table class="menu_column" cellspacing="0" width="120">'+
'<tr><td class="menu-column-item"><a href="javascript:manu(1);">Wtyczka</a></td></tr>'+
'<tr><td class="menu-column-item"><a href="javascript:manu(3);">Ataki</a></td></tr>'+
'<tr><td class="menu-column-item"><a href="javascript:manu(4);">Zarzadca</a></td></tr>'+
'<tr><td class="menu-column-item"><a href="javascript:manu(5);">Minutnik</a></td></tr>'+
'<tr><td class="menu-column-item"><a href="javascript:manu(6);">Raporty</a></td></tr>'+
'<tr><td class="menu-column-item"><a href="javascript:manu(8);">Dane Serwera</a></td></tr>'+
'<tr><td class="menu-column-item"><a href="http://www.bornkes.w.szu.pl/kalkul/zlozony.php" target="_blank">Kalulator Zlozony</a></td></tr>'+
'<tr><td class="menu-column-item"><a href="http://www.bornkes.w.szu.pl/test/" target="_blank">www.Studnia.go</a></td></tr>'+
'<tr><td class="menu-column-item" nowrap="tak">'+td[td.length-1].innerHTML+'</td></tr>'+
'<tr><td class="bottom"><div class="corner"></div><div class="decoration"></div></td></tr>'+
'</table>';

       for (var i=1; i< td.length-1 ; i++ )
       {
         if(td[i].textContent.lastIndexOf("Budynki")>-1 ){var url_a = urls(td[i]); td[i].innerHTML += '<a href="'+url_a+'&order=points&dir=asc">'+d_+d_+'* pkt</a><a href="'+url_a+'&order=wall&dir=asc">'+d_+d_+'* mur</a>';}
         if(td[i].textContent.lastIndexOf("Wojska")>-1 ){ var url_a = urls(td[i]); td[i].innerHTML += '<a href="'+url_a+'&type=support_detail&filter_villages=1">'+d_+d_+'* obrona</a><a href="'+url_a+'&type=away_detail&filter_villages=1">'+d_+d_+'* pomoc</a>';}
    //     if(td[i].textContent.lastIndexOf("Budynki")>-1 ){var url_a = urls(td[i]); td[i].innerHTML + '<a href="'+url_a+'&order=points&dir=asc">pkt</a><a href="'+url_a+'&order=wall&dir=asc">mur</a>'}
       }

}
var pis = "var wersja = '"+wersja+"'; \n var t=''; var village_KES = game_data.village.id;";


var sc=document.createElement('script');
sc.innerHTML = pis ;
document.getElementsByTagName('head')[0].appendChild(sc);


var vs = document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css"><!--.green { color:#009900;} .red { color:#990000;}--></style>';

  var table_vis;    // alert('start');
var  all = document.evaluate('//table[@class="box smallPadding"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(0);
var td = gN(table,'td');
         var max = gid('storage').innerHTML/100;
        td[0].innerHTML += '<span class="green header-border">['+Math.floor(gid('wood').innerHTML/max) +'%]</span>';
        td[2].innerHTML += '<span class="green header-border">['+Math.floor(gid('stone').innerHTML/max)+'%]</span>';
        td[4].innerHTML += '<span class="green header-border">['+Math.floor(gid('iron').innerHTML/max) +'%]</span>';

var table = all.snapshotItem(1);
var td = gN(table,'td');             // td= td.innerHTML.split('/');
               var ludzie = gid('pop_max_label').innerHTML - gid('pop_current_label').innerHTML;// td[1]-td[0];     //
                td[0].innerHTML+= '<span id="ludzie" class="green header-border">'+ludzie +'</span>';


