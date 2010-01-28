var all, table,d,n,i;n="";

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);
         var url=window.location.search.split("&");
             url=url[2].split("=");
var url_fin=url[1];

var tabeleczka = 'Punkty <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&amp;graph=points&amp;id='+url_fin+'&amp;s=pl5" alt="Punkty"><br ><br >'+n+
                 'Wioski <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&graph=villages&id='+url_fin+'&s=pl5" alt="Wioski"><br ><br >'+n+
                 'Pokonani <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&graph=od&id='+url_fin+'&s=pl5" alt="Pokonani"><br ><br >'+n+
                 'Pokonani atakujacy <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&graph=oda&id='+url_fin+'&s=pl5" alt="Pokonani atakujacy"><br ><br >'+n+
                 'Pokonani obroncy <br><img src="http://pl.twstats.com/image.php?type=playerssgraph&graph=odd&id='+url_fin+'&s=pl5" alt="Pokonani obroncy"><br ><br >'+n;

    // alert(url_fin);
 i=table.getElementsByTagName('tr').length;
    d=table.getElementsByTagName('tr')[1];   if ( d.innerHTML) d.innerHTML +='<td rowspan="'+i+'" valign="top">'+tabeleczka+'</td>';

