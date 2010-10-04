function GET(s,str){   var get=Explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} } }
function Explode(str)
{  var tablica = new Array(); var u=0; var ex; var url=str.split("?"); url=url[1].split("&");
   for (var i=0; i< url.length ; i++ ){ ex=url[i].split("=");  tablica[u++]=ex[0];  tablica[u++]=ex[1]; }
   return tablica;
}      //url=GET('village',url.href)
function gN(a,b) { return a.getElementsByTagName(b);}
var all, table,d,n,i;n=" \n ";

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
         var url_fin=GET('id',window.location.search);

var tabeleczka = '<tr><td colspan="2"><table><tr><td>Punkty <br><img height="90" width="236" src="http://pl.twstats.com/image.php?type=playergraph&amp;graph=points&amp;id='+url_fin+'&amp;s=pl5" alt="Punkty"></td>'+n+
                 '<td>Wioski <br><img height="90" width="236" src="http://pl.twstats.com/image.php?type=playergraph&graph=villages&id='+url_fin+'&s=pl5" alt="Wioski"></td></tr>'+n+
                 '<tr><td colspan="2" align="center">Pokonani <br><img height="90" width="236" src="http://pl.twstats.com/image.php?type=playergraph&graph=od&id='+url_fin+'&s=pl5" alt="Pokonani"></td></tr>'+n+
                 '<tr><td>Pokonani atakujacy <br><img height="90" width="236" src="http://pl.twstats.com/image.php?type=playergraph&graph=oda&id='+url_fin+'&s=pl5" alt="Pokonani atakujacy"></td>'+n+
                 '<td>Pokonani obroncy <br><img height="90" width="236" src="http://pl.twstats.com/image.php?type=playergraph&graph=odd&id='+url_fin+'&s=pl5" alt="Pokonani obroncy"></td></tr></table></td></tr>'+n;
    table.innerHTML+=tabeleczka;
