var all, table,str;
all = document.evaluate("//td[@id='date_arrival']",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table = all.snapshotItem(0);
    str = table.innerHTML.split(" ");
//if (table.innerHTML) table.innerHTML = table.innerHTML+ '= <span id="timer" class="timer">' + str[str.length-1] + '</span>'+' <a href="javascript:alert( );">clik</a>'+ ' <a href="javascript:var godzina_dojscia = getTime(document.getElementById(\'timer\'))+getTime(document.getElementById(\'serverTime\'));alert(formatTime(document.getElementById(\'timer\'),godzina_dojscia), true );">clik</a>';
