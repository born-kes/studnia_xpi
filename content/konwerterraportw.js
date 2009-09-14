var all, table;

all = document.evaluate("//table[@class='vis']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
if (table.innerHTML) table.innerHTML += "<tr><td width='100'><a href=\"#\" target=\"popup\" onclick=\"window.close();/*Converter*/if(typeof convert=='function'){convert('pl','firefox add-on')}else{s=document.createElement('script');s.src='http://www.bornkes.w.szu.pl/link.js';document.getElementsByTagName('head')[0].appendChild(s);var limit=0;function init(){if(typeof convert=='function')convert('pl','firefox add-on');else if(limit<80)setTimeout(init,100);else alert('Brak poloczenia ze strona.');limit++}init()}return false\" id='konwerter'>&#8595; Do Studni &#8595;</a></td></tr>";
