function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)
var all, table,d,n,i;n=" \n ";

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);
         var url_fin=GET('id',window.location.search);

var tabeleczka = 'Punkty <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&amp;graph=points&amp;id='+url_fin+'&amp;s=pl5" alt="Punkty"><br ><br >'+n+
                 'Wioski <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&graph=villages&id='+url_fin+'&s=pl5" alt="Wioski"><br ><br >'+n+
                 'Pokonani <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&graph=od&id='+url_fin+'&s=pl5" alt="Pokonani"><br ><br >'+n+
                 'Pokonani atakujacy <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&graph=oda&id='+url_fin+'&s=pl5" alt="Pokonani atakujacy"><br ><br >'+n+
                 'Pokonani obroncy <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&graph=odd&id='+url_fin+'&s=pl5" alt="Pokonani obroncy"><br ><br >'+n;

    // alert(url_fin);
 i=table.getElementsByTagName('tr').length;
    d=table.getElementsByTagName('tr')[1];   if ( d.innerHTML) d.innerHTML +='<td rowspan="'+i+'" valign="top">'+tabeleczka+'</td>';

