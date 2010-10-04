function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}

   var td_id = gid_kes("content_value");
     // alert(td_id.innerHTML);
   var div = gN(td_id, 'b');
   
      for (var i=0; i< div.length ; i++ )
      {
       if(div[i].textContent.lastIndexOf('|')>-1){div[i].innerHTML='<a href="'+window.location+'&boby=tak&nr='+i+'"  ><span class="groupLeft icon" /></span> Boczne MENU </a><br />'+div[i].innerHTML;}
      }
   gid_kes("bb_bar").innerHTML += '<a onclick="BBCodes.insert(\'[quote][b]\', \'[/b][/quote]\');return false;" href="#" class="groupLeft icon" title="Mozliwosc przeslania listy wiosek do bocznego manu" > </a>'+
                                  '<a onclick="BBCodes.insert(\'[size=time]\', \'[/size]\');return false;" href="#" class="icon header arr_down" title="Mozliwosc wstawienia daty dd.mm.rrrr hh.min.ss" > </a>';


/* ZEGAR */
function time(t){
      if(t.lastIndexOf('.')>-1 && t.lastIndexOf(' ')>-1 && t.lastIndexOf(':')>-1){
       var t0=t.split(" ");
       var t1=t0[0].split(".");
       var t2=t0[1].split(":");
       var time = new Date(t1[2], t1[1]-1, t1[0], t2[0], t2[1], t2[2]).getTime();
       var zm= new Date().getTime();
       var zmienna= new Date(time-zm);
//if(Math.floor(zmienna.getDate())==Math.floor(zmD.getDate())) str+='';
//else if(Math.floor(zmienna.getDate())+1 ==Math.floor(zmD.getDate())) str+='jutro o ';
var w,t ='';
if(zmienna>0){
if(zmienna.getDate()>0)
t +=( zmienna.getDate()-1)+ ' ';

t +=  zmienna.getHours() + ':';
 if(Math.floor(zmienna.getMinutes())<10)
t  +='0';
t +=    zmienna.getMinutes()+ ':';
 if(Math.floor(zmienna.getSeconds())<10)
t  +='0';t +=    zmienna.getSeconds();
w=true;
}else{t='skonczone';w=false;}
      }else{w=true;}

   return [t,w];
}

   var tim;
   var s = gN(td_id, 'span');
         for (var i=0; i< s.length ; i++ )
if(s[i].style.fontSize=='0pt'){
        s[i].style.fontSize='9pt';
        tim = time(s[i].textContent);
        if (tim[1])  s[i].className='timer red'; else   s[i].className='red';
         s[i].textContent = tim[0];

        }

var sc=document.createElement('script');
sc.innerHTML = "startTimer();";
document.getElementsByTagName('head')[0].appendChild(sc);
                                                           
