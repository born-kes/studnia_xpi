function gid(id) { return document.getElementById(id); }
function dels(s) { s = s.replace(new RegExp("[^\\d:]+","g"),""); return s; }
var t = gid('date_arrival');
  var get_time = t.textContent.split(" ");//dels(t.innerHTML);
     for (var i=0; i< get_time.length ; i++ )
     {
         if(get_time[i].lastIndexOf(':')>-1)
         {
           var drop_time = get_time[i].split(":");
            if(drop_time[2]==undefined){drop_time[2]='00';}
               drop_time = drop_time[0]*1 +":"+drop_time[1] +":"+dels(drop_time[2]);
              get_time[i]= '<span id="DATime" class="green">'+drop_time+'</span>';
            // break;
         }
         if(get_time[i].lastIndexOf('nocny')>-1){
           get_time[i]='<br><span class="warn">Bonus nocny';
           get_time[get_time.length-1]+='</span>';
         }

     }
//gid('date_arrival').innerHTML = t.innerHTML.replace(get_time , "<span id=\"DATime\" class=\"warn\">"+drop_time+"</span>");
t.innerHTML = get_time.join(" ");

var sc=document.createElement('script');
sc.innerHTML = "\n"+
'function tickTime_kes() { '+
'	var serverTime = gid_kes(\'DATime\');'+
'	if(serverTime != null) {'+
'		var time = getTime_kes(gid_kes(\'DATime\'));'+
'		formatTime_kes(serverTime, time, true);'+
'	}'+
'}'+
'window.setInterval("tickTime_kes()", 1000);';
document.getElementsByTagName('head')[0].appendChild(sc);
