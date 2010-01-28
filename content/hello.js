var all = document.evaluate('//div[@class="info-block"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(0);
   table.innerHTML = '<iframe src="http://www.bornkes.w.szu.pl/" height="200" width="300" style="border:0pt;"></iframe>';
