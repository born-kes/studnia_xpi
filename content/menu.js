function dels(s) { s = s.replace(new RegExp("[^\\d|]+","g"),""); return s; }
function gN(a,b) { return a.getElementsByTagName(b);}
function GET(s){   for (var i=0; i< get.length ; i++ ){if(s==get[i]){return dels(get[i+1]);} } }
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
var all, table;
all = document.evaluate("//table[@class='menu nowrap']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
 table = all.snapshotItem(0);

if(table.innerHTML)
{
 var tr=gN(table,'tr');
tr[0].innerHTML += '<td><img src="/graphic/unit/unit_snob.png?1" width="10" height="10"  title="Panel Radnego" alt="Panel Radnego">Panel Radnego<br /><table class="menu_column" cellspacing="0" width="120"><tr><td><a href="/game.php?village='+GET('village')+'&screen=buddies&studnia=proxi">Proxi</a></td></tr><tr><td><a href="/game.php?village='+GET('village')+'&screen=buddies&studnia=ataki">Ataki</a></td></tr><tr><td><a href="/game.php?village='+GET('village')+'&screen=buddies&studnia=wtyczka">Wtyczka</a></td></tr><tr><td><a href="/game.php?village='+GET('village')+'&screen=buddies&studnia=zona">zarzadca</a></td></tr></table></td>';
}

