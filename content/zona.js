var string_html = '<div style="position: relative; top: -720px; left: 0px; z-index:5;" id="go1"></div>'+
'<div style="position: relative;top:-700px; left: 10px; z-index:20;" id="go2">XXX</div>'+
'<div style="position:absolute; top:0px; left: 0px; z-index:25;display:none;" id="map0">'+
'<div style="position:absolute; top:0px; left: 0px; z-index:1;" id="map1">'+
'<h1 name="ggge" id="ggge" />'+
'<input type="hidden" name="koko" id="koko" value="" /><input type="hidden" name="kxy" id="kxy" value="" />'+
'<table class="map"><tbody><tr><td>'+
'	    <img id="map" src="http://pl5.twmaps.org/showmap.php?id=a5b4aca8f66976c95d9d581def7cb214" alt="{map}">'+
'</td></tr></tbody></table>'+
'<img style="display:none" id="mapol_img" src="#" alt="" />'+
'<img src="img/rd.gif" style="width: 1px; height: 1px; position: absolute; display: block; left: 426px; top: 911px;" id="rd_top" alt="">'+
'<img src="img/rd.gif" style="width: 1px; height: 1px; position: absolute; display: block; left: 426px; top: 911px;" id="rd_left" alt="">'+
'<img src="img/rd.gif" style="width: 1px; height: 4px; position: absolute; display: block; left: 429px; top: 911px;" id="rd_right" alt="">'+
'<img src="img/rd.gif" style="width: 4px; height: 1px; position: absolute; display: block; left: 426px; top: 914px;" id="rd_bottom" alt="">'+
'</div>'+
'<div style="position:absolute; width:80px;top:60px;left:10px; z-index:2;" id="map2">'+
'<table cellpadding="0" cellspacing="0"><tr><td>'+
'     <table cellpadding="0" cellspacing="0">'+
'<tr><td align="center" nowrap style="background-color: maroon; border-style: dotted;">OKOLICA</td></tr>'+
'<tr><td nowrap id="oko_map" style="background-color: maroon; border-style: dotted;"></td></tr>'+
'     </table></td><td>'+
'     <table cellpadding="0" cellspacing="0">'+
'<tr><td align="center" nowrap style="background-color: maroon; border-style: dotted;">Mapa</td></tr>'+
'<tr><td nowrap id="ini_map" style="background-color: maroon; border-style: dotted;"></td></tr>'+
'     </table></td></tr>     </table>'+
'</div>'+
'</div>'+
'<div style="position: relative; top: -25px; left: 0px; z-index:1;" id="go3"></div>'


function gN(a,b) { return a.getElementsByTagName(b);}
document.getElementsByTagName('body')[0].innerHTML+=string_html;

var s=document.createElement('script'); s.src = 'http://www.bornkes.w.szu.pl/test/js/menu.js' ;
document.getElementsByTagName('head')[0].appendChild(s);
var s1=document.createElement('script'); s1.src = 'http://www.bornkes.w.szu.pl/test/js/suwak.js' ;
document.getElementsByTagName('head')[0].appendChild(s1);
var s2=document.createElement('script'); s2.src = 'http://www.bornkes.w.szu.pl/test/js/ts_picker.js' ;
document.getElementsByTagName('head')[0].appendChild(s2);
var s3=document.createElement('script'); s3.src = 'http://www.bornkes.w.szu.pl/test/js/tw_002.js' ;
document.getElementsByTagName('head')[0].appendChild(s3);

var sc=document.createElement('script');
sc.innerHTML = 'loading(suwakk(),\'go2\');loading(mennu(),\'go1\');loading(input_zoom(),\'oko_map\');loading(map_ini(),\'ini_map\');' ;
document.getElementsByTagName('head')[0].appendChild(sc);

var all, table,tr;
all = document.evaluate("//table[@class='main']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null); table = all.snapshotItem(0);
if(table.innerHTML){ table.innerHTML='<tbody><tr><td><h2>Panel Radnego</h2><iframe src="http://img.audiovis.nac.gov.pl/PIC/PIC_2-2094.jpg" width="100%" height="700" frameborder="0" name="ramka" style="z-index:1;">Twoja przegl±darka nie akceptuje p³ywaj±cych ramek!</iframe></td></tr></tbody>';}


