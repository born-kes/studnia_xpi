function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function GET(s){var to_get; if(s=='village'){ to_get=getr; }else{ to_get =get; }
   for (var i=0; i< to_get.length ; i++ ){if(s==to_get[i]){return to_get[i+1];} }  }     // return false;
function Explode(str)
{  var tablica = new Array(); var u=0;
 var url=str.split("?");
  url=url[1].split("&");
   for (var i=0; i< url.length ; i++ )
   {var  ex=url[i].split("=");
         tablica[u++]=ex[0];
         tablica[u++]=ex[1];
   } return tablica;
}
var getr= Explode(gN(document,"a")[0].href);
var get= Explode(window.location.search);

 function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
//s = s.replace(new RegExp(",","g"),"");
 return s;}
function plaut(s) {
  s =  gN(s,'a')[0].innerHTML;
  s= s.split('>');

s = s[1].replace(new RegExp("[^\\a-zA-Z]+","g"),"");
//s = s.replace(new RegExp(",","g"),"");
 return s;}
function dane(s)
{var s1,s2;     s = s.innerHTML;
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;
}
function villages_raws(row)
{    var fin;
    if( GET('type')=='away_detail'){ return row.getElementsByTagName('span')[0].textContent; }
    if( GET('type')=='support_detail')
    {
      if(gN(gN(row,'span')[0],'a')[1])
        { fin= gN(gN(row,'span')[0],'a')[1].textContent;
          if(gN(gN(row,'span')[0],'a')[2])
          {fin += ' ['+gN(gN(row,'span')[0],'a')[2].textContent+']';}
        }else
        {
          fin= 'Twoj def';
        }
    return fin;
    }
}
// ==UserScript==
// @name           Podsumowanie wsparÄ?
// @author         Szatdafakap
// @namespace      http://aturime.ncse.pl
// @description    ...
// @include        http://pl*.plemiona.pl/game.php?*screen=overview_villages*mode=units*units_type=away_detail*
// ==/UserScript==

function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}




var villages = new Array(0);
var defence = new Array(0);
var links = new Array(0);
var licz = new Array(0);

var villagesTable;
   var all = document.evaluate('//table[@class="vis overview_table"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
   var table = all.snapshotItem(0);
//   	if (tables.getElementsByTagName('tr').length > 0)
//		if (tables.getElementsByTagName('tr')[0].textContent.substring(0,6) == "Wioska")
			villagesTable = table;

/*var tables = document.getElementsByTagName('table');
for (var i = 0; i < tables.length; i++) {
	if (tables[i].getElementsByTagName('tr').length > 0)
		if (tables[i].getElementsByTagName('tr')[0].textContent.substring(0,6) == "Wioska")
			villagesTable = tables[i];
}//*/

function summarize() {


	var rows = villagesTable.getElementsByTagName('tr');
	for (var i = 0; i < rows.length-1; i++) {
		if (rows[i].getElementsByTagName("input").length > 0) {
                    if(rows[i].getElementsByTagName("input")[0].type=='checkbox'){
			village = villages_raws(rows[i]);
			var j = 0;
			for (j = 0; j < villages.length;j++) {
				if (villages[j] == village){licz[j]++; break;}
			}
			if (j == villages.length) {licz[j]=1;
				villages[j] = village;
				defence[j] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				links[j] = rows[i].getElementsByTagName('a')[0];
			}
			var curDef = defence[j];
			cells = rows[i].getElementsByTagName('td');
			for (var k = 0 ; k < defence[j].length; k++) {
				defence[j][k] += parseInt(cells[k+1].textContent);
			}                                                    }
		}
	}
}

function display() {
	var div = document.getElementById("paged_view_content");
	var newTable = document.createElement('table');
	newTable.className = "vis";
	
	var tables = table;//document.getElementsByTagName('table');
	var headerRow;
				headerRow = tables.getElementsByTagName('tr')[0].cloneNode(true);
                                headerRow.getElementsByTagName('th')[0].innerHTML = 'Suma Wojska w Wioskach';
                                headerRow.getElementsByTagName('th')[headerRow.getElementsByTagName('th').length-1].innerHTML = '';
/*	for (var i = 0; i < tables.length; i++) {
		if (tables[i].getElementsByTagName('tr').length > 0)
			if (tables[i].getElementsByTagName('tr')[0].textContent.substring(0,6) == "Wioska")
				headerRow = tables[i].getElementsByTagName('tr')[0].cloneNode(true);
	}*/
	newTable.appendChild(headerRow);
	
	for (var i = 0; i < villages.length; i++){
		var newRow = document.createElement('tr');
		var newCell = document.createElement('td');
		var checkBox = document.createElement('input');
		checkBox.type = "checkbox";
		checkBox.id = links[i];//villages[i];
    if( GET('type')=='away_detail'){
    		newCell.appendChild(checkBox);
		newCell.innerHTML += "<a href=" + links[i] + ">" + villages[i] + "</a>";}
    else{
    		newCell.innerHTML +=  villages[i] ;}

		newRow.appendChild(newCell);
		newCell = document.createElement('th');
		newCell.innerHTML += 'x'+licz[i];		
		newRow.appendChild(newCell);
		for (var j = 0; j < defence[i].length; j++){
			var troopCell = document.createElement('td');
			if (defence[i][j] == 0) troopCell.className = "hidden";
			troopCell.innerHTML = defence[i][j];
			newRow.appendChild(troopCell);
		}
		newTable.appendChild(newRow);
	}
	div.insertBefore(newTable, document.forms[document.forms.length-2]);
    if( GET('type')=='away_detail'){

	window.addEventListener("click", function(event) {
		if (event.target.type == "checkbox")  {
			var rows = villagesTable.getElementsByTagName('tr');			
			for (var i = 1; i < rows.length-1; i++) {
				if (rows[i].getElementsByTagName("input").length > 0 && rows[i].getElementsByTagName("input")[0].type=='checkbox' && rows[i].getElementsByTagName('a')[0] == event.target.id) {
					rows[i].getElementsByTagName("input")[0].checked = event.target.checked;
				}
			}
		}
	}, true);          }
}

summarize();
display();
/*if(GET('type')=='away_detail')
gid_kes('units_table').parentNode.innerHTML='<input type="submit" value="cofnij" name="submit_units_back">'+gid_kes('units_table').parentNode.innerHTML;
else if(GET('type')=='support_detail')
gid_kes('units_table').parentNode.innerHTML='<input type="submit" value="odeslij" name="submit_units_back">'+gid_kes('units_table').parentNode.innerHTML;
//*/
