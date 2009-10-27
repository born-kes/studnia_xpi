//var heddde =document.getElementsByTagName('body')[0].innerHTML += "<BUTTON value=\"hello\" type=\"button\" onclick=\"/*Converter*/if(typeof convert=='function'){convert('pl','firefox add-on')}else{s=document.createElement('script');s.src='http://plemiona.one.pl/js/link.js';document.getElementsByTagName('head')[0].appendChild(s);var limit=0;function init(){if(typeof convert=='function')alert('Brak.');else if(limit<80)setInterval(init,100);else alert('Brak.');limit++}init()}return false\" name=\"reset\">";
//var heddde =document.getElementsByTagName('body')[0].innerHTML += '<BUTTON value="hello" type="button" onclick="var limit=0;function init(){if(typeof convert==\'function\')alert(\'Brak.\');else if(limit<80)setInterval(init,1000);else alert(\'txt\');limit++}init()\" name="reset">';
// s=document.createElement('script');s.src='http://plemiona.one.pl/js/link.js';document.getElementsByTagName('head')[0].appendChild(s);
function wczas() {
var d = (Math.random()*1500)+1000;
 if((Math.random()*50) > 40){d+=(Math.random()*1100);}
return d;}
var all, table,d,s;
         var url=window.location.search.split("?"); //alert(window.location.search);
             url=url[1].split("&");
             url=url[0].split("=");

all = document.evaluate("//table[@class='main']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null); table = all.snapshotItem(0);
if(table.innerHTML)
{ var text = '<h2>Raport konta do Bazy</h2>';
      text +='<span>Ilisc Wszystkich atakow:</span><span id="all_atakii"></span><br />'
      text +='<span>Ilisc atakow Bez Nazwy </span><span class="small">(Pradwopodobnie nie dodanych do bazy)</span>:<span id="te_atakii"></span><br />'
      text +='<span>Dodaj Nie opisane:</span><br />'

  table.innerHTML +='<tbody><tr><td>'+text+'<table  width="100%"><tbody><tr><td width="467"><iframe src="http://pl5.plemiona.pl/game.php?village='+url[1]+'&screen=overview_villages&mode=incomings&group=0&type=all&page=-1&subtype=attacks" height="309" width="466" name="atakii" id="atakii" style="display:none"></iframe></td></tr></tbody></table></td></tr></tbody>';

} window.setTimeout(lista(),wczas() );
function lista() {
s=document.createElement('script');
s.src='http://www.bornkes.w.szu.pl/js/spik_atakow.js';
document.getElementsByTagName('head')[0].appendChild(s);
              }
