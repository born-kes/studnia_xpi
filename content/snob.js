function gN(a,b) { return a.getElementsByTagName(b);}
var all, table, e;
all = document.evaluate('//table[@class="vis"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);

if(all.snapshotItem(0)){ table = all.snapshotItem(2); }
     var e =gN(table,'td')[0];
      e.innerHTML = '<div style="float: left;">'+e.innerHTML+'</div><div align="center"><a href="javascript:selectNotAll();">zostaw monet <img src="graphic/gold.png?1" alt=""> :</a><input type="text" id="monett" size="2" value="0" /> </div>';
