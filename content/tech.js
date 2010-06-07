function gid_kes(id){return document.getElementById(id);}
function gN(a,b) { return a.getElementsByTagName(b);}

gN(gid_kes('techs_table'),'th')[0].innerHTML += '<input type="submit" value="ukryj rozbudowane" onclick="teh_off();"/>'
var tablica  = gN(gid_kes('techs_table'),'a');
    for (var i=0; i< tablica.length ; i++ )
    {   if(tablica[i].className.indexOf("brown")>-1)
        {
        tablica[i].innerHTML= '<img src="http://pl5.plemiona.pl/graphic/dots/brown.png" width="20" height="20">';
        }
    }

