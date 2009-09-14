var all, table;
var xy=document.getElementById('inputx').value+'|'+document.getElementById('inputy').value;
all = document.evaluate('//td[@valign="top"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(1);
if (table.innerHTML) table.innerHTML += '<tr><td><iframe src="http://www.bornkes.w.szu.pl/pl/mt.php?_xy='+xy+'&_oko=18&t_w=on&r_w=on&obrona=on&sz_w=on" width="260" height="260" frameborder="0" name="ramka" id="ramka" style="z-index:1;">Twoja przegl1darka nie akceptuje p3ywaj1cych ramek!</iframe></td></tr>';
