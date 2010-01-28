function gid(id) { return document.getElementById(id); }
function dels(s) { s = s.replace(new RegExp("[^\\d:]+","g"),""); return s; }
var t = gid('date_arrival');
  var get_time = dels(t.innerHTML);
  var drop_time = get_time.split(":");
      drop_time = drop_time[0]*1 +":"+drop_time[1] +":"+drop_time[2];
gid('date_arrival').innerHTML = t.innerHTML.replace(get_time , "<span id=\"DATime\" class=\"warn\">"+drop_time+"</span>");

var string = 'var s =getTime(document.getElementById("DATime"))-getTime(document.getElementById("serverTime"));'+
'function tickTimeKES() {'+
'	var serverTime = document.getElementById("DATime");'+
'	if(serverTime != null) {'+
'		var time = getLocalTime()+(timeDiff+s);'+
'		formatTime(serverTime, time, true);'+
'	}'+
'}'+
'window.setInterval("tickTimeKES()", 1000);';


var sc=document.createElement('script');
sc.innerHTML = string;
document.getElementsByTagName('head')[0].appendChild(sc);


