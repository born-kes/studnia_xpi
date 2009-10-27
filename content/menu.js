    function gN(a,b) { return a.getElementsByTagName(b);}
var all, table;
all = document.evaluate("//table[@class='menu nowrap']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
 table = all.snapshotItem(0);

if(table.innerHTML)
{
 var td=gN(table,'td');
td[td.length-2].innerHTML = '<img src="/graphic/unit/unit_snob.png?1" title="Panel Radnego" alt="Panel Radnego">Panel Radnego<br /><table class="menu_column" cellspacing="0" width="120"><tr><td><a href="/game.php?village=40591&screen=memo&studnia=proxi">Proxi</a></td></tr><tr><td><a href="/game.php?village=40591&screen=memo&studnia=ataki">Ataki</a></td></tr><tr><td><a href="/game.php?village=40591&screen=memo&studnia=wtyczka">Wtyczka</a></td></tr><tr><td><a href="/game.php?village=40591&screen=memo&studnia=zona">zarzadca</a></td></tr><tr><td><a href="/game.php?village=40591&screen=memo&studnia=notes">Notatnik</a></td></tr>';
}

