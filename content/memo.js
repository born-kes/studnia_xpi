function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}

   var td_id = gid_kes("content_value");
     // alert(td_id.innerHTML);
   var div = gN(td_id, 'b');
   
      for (var i=0; i< div.length ; i++ )
      {
       if(div[i].textContent.lastIndexOf('|')>-1){div[i].innerHTML='<a href="'+window.location+'&boby=tak&nr='+i+'"  ><span class="groupLeft icon" /></span> Boczne MENU </a><br />'+div[i].innerHTML;}
      }
   gid_kes("bb_bar").innerHTML += '<a onclick="BBCodes.insert(\'[quote][b]\', \'[/b][/quote]\');return false;" href="#" title="Mozliwosc przeslania listy wiosek do bocznego manu" >Boczna meny</a>';
