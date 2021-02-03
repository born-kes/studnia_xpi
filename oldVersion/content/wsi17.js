function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^A-Za-z]+","g"),"");
 return s;}
var all,table_all, table, e,rows;
all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table_all = all.snapshotItem(0);
 table=gN(table_all,'table');

   var as =gN(table[0],'tr');
  if (as[0].innerHTML) as[1].innerHTML += '<th id="tyt_KES">Radar - Znajduje wojsko w najblirzszej wiosce</th>';
  if (as[1].innerHTML) as[2].innerHTML += '<td rowspan="12" valign="top"><iframe src="http://www.bornkes.w.szu.pl/pl17/start.php'+window.location.search+'" style="border:1pt;" width="450" height="260" id="iframe_KES" name="iframe_KES"></iframe></td>';

for(var t=table.length-1 ; t>0 ; t--)
   {
   var tr=gN(table[t],'tr');
  if(tr[0].innerHTML.indexOf("Wojska przybywaj")>-1||dels(tr[0].innerHTML).indexOf("Wychodzcewojska")>-1)
     {   rows = tr;
      var attCounter = 0;
      var supCounter = 0;

for (var i = 1; i < rows.length; i++)
{
	if ( gN(rows[i],'img')[0].src.match(/attack.png/)){ attCounter++;}
	else if  (gN(rows[i],'img')[0].src.match(/support.png/)){supCounter++;}
}
        gN(rows[0],'th')[0].innerHTML += "<br />&nbsp&nbsp("+attCounter+"&nbsp<img src='/graphic/command/attack.png?1' />, "+supCounter + "&nbsp<img src='/graphic/command/support.png?1' />)";
    }
  }
