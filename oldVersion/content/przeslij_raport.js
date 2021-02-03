 //http://pl5.plemiona.pl/game.php?village=104080&screen=report&type=all&mode=forward&id=62927699
 //
 // przeslij raport
 // id="to"
 
var all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(1);
     table.innerHTML ='<tr><td colspan="2">Ulubieni odbiorcy : '+
                   '<button onclick="zapisz_cokisa(\'raport\',gid(\'to\').value);" style="font-size: 8pt;">Zapisz</button> | '+
                   '<button onclick="usunCookie(\'raport\');" style="font-size: 8pt;">Usun</button> </td></tr>'+" \n "+table.innerHTML;

var sc=document.createElement('script');
sc.innerHTML += "checkCookie('raport');";
document.getElementsByTagName('head')[0].appendChild(sc);

var all = document.getElementsByTagName("table");
for (var i = all.length-7; i < all.length ; i++)
{
  all[i].style.width = '';
}
