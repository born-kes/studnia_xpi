if(typeof(unsafeWindow) != 'undefined'){var data = unsafeWindow.game_data; }else{ var data = window.game_data }
//var valliage = data.village.id ;
var xy_ = data.village.coord.split("|");

function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}
function potega(podstawa){   return podstawa*podstawa;}
 function dels(s) {
s = s.replace(new RegExp("[^\\d|]+","g"),"");
 return s;}
function dane(s)
{var s1,s2;     s = s.innerHTML;
  if(s1= s.lastIndexOf('(')){}else if(s1= s.lastIndexOf('>')){}
     s2= s.lastIndexOf(')');
  if(s2>-1){s= s.substring(s1,s2);}else{s= s.substring(s1);}
      s= dels(s);
      return s;
}
function table(id){
    if(!gid_kes(id))return false;
  var table = gid_kes(id);
  var tr = gN(table,'tr');
  tr[0].innerHTML +='<td>Odleglosc</td>';
   for (var i=1; i< tr.length ; i++ ){
        if(!gN(tr[i],'a')[0]){tr[i].innerHTML +='<td />';continue;}

      var xy_b = dane(gN(tr[i],'a')[0]).split("|");
      var odleglosc=Math.floor(Math.sqrt(potega(xy_[0]-xy_b[0])+potega(xy_[1]-xy_b[1])),1);

   tr[i].innerHTML +='<th>'+(odleglosc)+'</th>';

    }
return true;
}
table("units_away");

table("units_home");

