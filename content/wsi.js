  var data;
if(typeof(unsafeWindow) != 'undefined') {	data = unsafeWindow.game_data; }else{ data = window.game_data }

var t_z = '&g='+data.player.id;

function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^A-Za-z]+","g"),"");
 return s;}
var all,table_all, table, e,rows;
all = document.evaluate('//table[@class="main"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
table_all = all.snapshotItem(0);
 table=gN(table_all,'table');
                                                    if(window.location.search.indexOf("t=")>-1)t_z='';
   var as =gN(table[0],'tr');
  if (as[0].innerHTML) as[1].innerHTML += '<th><div id="tyt_KES">Raport w Bazie</div><a href="javascript:radar(\''+window.location.search+t_z+'\');"> Raport / Radar / Tancerz Wojny </a> <iframe style="border:0pt;" width="40" height="0" id="se_KES" name="se_KES"></iframe> <a href="javascript:pops(gid_kes(\'iframe_KES\').src,30);">Do Nowego okna</a></th>';
  if (as[1].innerHTML) as[2].innerHTML += '<td rowspan="12" valign="top"><iframe src="http://www.bornkes.w.szu.pl/pl/raport2.php'+window.location.search+'" style="border:1pt;" width="450" height="260" id="iframe_KES" name="iframe_KES"></iframe></td>';

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
