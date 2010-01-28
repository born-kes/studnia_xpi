heddde =document.getElementsByTagName('head')[0].innerHTML += '<style type="text/css"><!-- .main { background-color:#F1EBDD; background-image:url(http://pl2.plemiona.pl/graphic/background/content.jpg); border:1px solid #804000;}--></style>';

var heddde =document.getElementsByTagName('body')[0].innerHTML += ''+
'<img style="position: absolute;"  src="http://www.bornkes.w.szu.pl/img/tw/t1.gif" id="kes1" alt="" />'+
'<img style="position: absolute;"  src="http://www.bornkes.w.szu.pl/img/tw/t2.gif" id="kes2" alt="" />'+
'<img style="position: absolute;"  src="http://www.bornkes.w.szu.pl/img/tw/t3.gif" id="kes3" alt="" />'+
'<img style="position: absolute;"  src="http://www.bornkes.w.szu.pl/img/tw/t4.gif" id="kes4" alt="" />'+
'<img style="position: absolute;"  src="http://www.bornkes.w.szu.pl/img/tw/t5.gif" id="kes5" alt="" />'+
'<img style="position: absolute;"  src="http://www.bornkes.w.szu.pl/img/tw/t6.gif" id="kes6" alt="" />'+
'<img style="position: absolute;"  src="http://www.bornkes.w.szu.pl/img/tw/t7.gif" id="kes7" alt="" />'+
'<img style="position: absolute;"  src="http://www.bornkes.w.szu.pl/img/tw/t8.gif" id="kes8" alt="" />'+
'<div class="main" style="position: fixed; top: 20px; right: 5px;"><p align="right"><b><a href="javascript:ukryj();">[ UKRYJ / ODKRYJ ]</a></b></p>'+
'<div  style="display: none;" id="inline_popup">'+ "\n"+
'<table><tr><td><form name="form" action="http://www.bornkes.w.szu.pl/test/operacje/lista_map_tw.php" method="post" target="KEStw">'+
'<table class="main"><tr><td colspan="2"><b>Dodaj ta mape do wlasnych</b></td></tr>'+
'<tr><td>adres:</td><td><input type="text" name="KESadres" id="KESadres" value="" /></td></tr>'+
'<tr><td>Nazwa:</td><td><input type="text" name="KESname" value="" /></td></tr>'+
'<tr><td colspan="2"><input type="hidden" name="KESzoom" id="KESzoom" value="" />'+
'<input type="hidden" name="KESx" id="KESx" value="" />'+
'<input type="hidden" name="KESy" id="KESy" value="" /><input type="submit" value="Zapisz" /></td></tr>'+
'<tr><td colspan="2"><iframe height="100" width="250" style="border:1pt;" id="KEStw" name="KEStw" src="http://www.bornkes.w.szu.pl/test/operacje/lista_map_tw.php"></iframe></td></tr>'+
'</table></form><br>'+"\n"+
'<table class="main"><tr><td><b>Zasieg Graficznie</b></td></tr>'+ "\n"+
' <tr><td>Czas marszu </td></tr><tr><td><input type="text" id="time" value="0:00" size="6">(hh : mm)</td></tr>'+"\n"+
' <tr><td>Wybierz jednostke </td></tr><tr><td> <select name="plem_op" OnChange="selecturl(this)">'+
'<OPTION VALUE="0">Nic nie wybrane </option>'+
'<OPTION VALUE="9">zwiad </option>'+
'<OPTION VALUE="10">lk / kl</option>'+
'<OPTION VALUE="11">ck</option>'+
'<OPTION VALUE="18">pik/axe/luk</option>'+
'<OPTION VALUE="22">miecze</option>'+
'<OPTION VALUE="30">tar/kat</option>'+
'<OPTION VALUE="35">szl(max 40:50)</option>'+
'  </select></td></tr></table>'+"\n"+
'</td></tr></table></div>'+
'</div>';


var scv=document.createElement('script');
scv.src = 'http://www.bornkes.w.szu.pl/js/sgfa.js';
document.getElementsByTagName('head')[0].appendChild(scv);


