var all, table, e,nev;
all = document.evaluate('//table[@class="vis left"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
   var as =table.getElementsByTagName('tr');
if (as[0].innerHTML) as[0].innerHTML += '<th>Raport w Bazie</th><th>Radar - Znajduje wojsko w najblirzszej wiosce</th>';
if (as[1].innerHTML) as[1].innerHTML += '<td rowspan="10" valign="top"><iframe src="http://www.bornkes.w.szu.pl/pl/raport2.php'+window.location.search+'" style="border:0pt;" width="180" height="333"></iframe></td>';
if (as[1].innerHTML) as[1].innerHTML += '<td rowspan="10" valign="top"><iframe src="http://www.bornkes.w.szu.pl/kalkul/radar.php'+window.location.search+'" width="400" height="333" frameborder="0" style="z-index:1;"></iframe></td>';


