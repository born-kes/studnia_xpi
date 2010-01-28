function gN(a,b) { return a.getElementsByTagName(b);}
function dels(s) {
s = s.replace(new RegExp("[^\\d]+","g"),"");
 return s;}
var tables = gN(document,'table');
var rows;
for (i = tables.length-1; i >= 0; i--)
{
  if (gN(tables[i],'tr').length == 0) continue;
  var tr = gN(tables[i],'tr')[0];
  if (gN(tr,'th').length == 0) continue;
  if (gN(tr,'th')[0].textContent != "Wioska" ) continue;
  rows = gN(tables[i],'tr');
  break;
}
var str=" var input_id = new Array; \n";
gN(rows[0],'th')[0].innerHTML +=' <input id="nazwa_allwsi" size="" value=""> <a href="javascript:edyt_all_wsi()"><img src="/graphic/rename.png?1" alt="zmien wszystkie nazwy" title="zmien wszystkie nazwy"></a>';

for (i = 1; i < rows.length; i++)
{    //kes
var input= gN(rows[i],'input')[0].id;
var input_id = dels(input);
    str+= " input_id["+i+"] = "+input_id+";\n ";
//alert(input);

     //kes exit
	var text = gN(rows[i],'td')[4].textContent;
	var occupied = text.substr(0, text.indexOf("/"));
	var capacity = text.substr( text.indexOf("/") + 1, text.length - text.indexOf("/") - 1 );  
	var zapelnienie = occupied / capacity
	
	if (zapelnienie < 0.40 )
	{
		gN(rows[i],'td')[4].style.color = "grey";
	}
	if (zapelnienie > 0.3999999999 )
	{ if (zapelnienie < 0.70 )
	 {
		gN(rows[i],'td')[4].style.color = "#6DE377";
	 }
	}
	if (zapelnienie > 0.6999999999 )
	{ if (zapelnienie < 0.90 )
	 {
		gN(rows[i],'td')[4].style.color = "#A67A42";
	 }
	}
	if (zapelnienie > 0.8999999999 )
	{ if (zapelnienie < 0.9999999999 )
	 {
		gN(rows[i],'td')[4].style.color = "orange";
	 }
	}
	if (zapelnienie == 1.00 )
	{
		gN(rows[i],'td')[4].style.color = "red";
	}
}
/*   str += "\n\n "+       */

var sc=document.createElement('script');
sc.innerHTML = str;
document.getElementsByTagName('head')[0].appendChild(sc);

