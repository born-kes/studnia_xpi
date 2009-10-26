var all, table;
all = document.evaluate("//table[@class='main']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null); table = all.snapshotItem(0);
if(table.innerHTML)
{ var text = '<h2>Masz Wtyczke 1.5.1</h2>';

  table.innerHTML ='<tbody><tr><td>'+text+'<table  width="100%"><tbody><tr><td><iframe src="http://www.bornkes.w.szu.pl/rada/wtyczka.php" height="309" width="100%" style="border:0px;" name="atakii" id="atakii"></iframe></td></tr></tbody></table></td></tr></tbody>';

}

