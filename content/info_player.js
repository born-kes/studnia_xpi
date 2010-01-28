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

    // alert(url_fin);
all = document.evaluate("//table[@class='vis ']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0); var url = gN(table,'a')[0].href; var s = url.lastIndexOf('screen='); url = url.substring(0,s);
var left = GET('village',window.location.search);
var right= GET('info_player',window.location.search);


table.innerHTML +='<tr><td colspan="2"><a href="'+window.location.search+'&boby=tak" target="_blank">Boczne Menu</a> (Element Studni)</td></tr>';
      /*
table = all.snapshotItem(1);

 i=gN(table,'tr').length;
    d=gN(table,'tr');
       if ( d[0].innerHTML)
            d[0].innerHTML  = '<td />'+d[0].innerHTML;
		for (var i = 1; i < d.length; i++)
		{
		var url = gN(d[i],'a')[0].href.split("?");	
                        d[i].innerHTML  = '<th><a href="javascript: popup(\'http://www.bornkes.w.szu.pl/pl/raport2.php?'+url[1]+'\', 450, 250);"><img src="http://www.bornkes.w.szu.pl/img/r_img.php?'+url[1]+'" title="Nowy raport" alt=""></th>'+d[i].innerHTML;
		}
//*/
