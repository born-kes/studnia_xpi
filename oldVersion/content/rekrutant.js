function gid_kes(id){return document.getElementById(id);}     // textContent
function gN(a,b) { return a.getElementsByTagName(b);}
var inputs = gN(gid_kes('mr_all_form').parentNode,'input');
    for (var i=0; i< inputs.length ; i++ ){
        if(inputs[i].name=='village_ids')
         inputs[i].id='village_ids';
    }
var v =" \n"+
"function max(a){ \n"+
"var vilage = gid_kes('village_ids').value.split(','); \n"+
"    for (var i=0; i< vilage.length-1 ; i++ ){  \n"+
"         unit_managers[vilage[i] ].set_max(a); \n"+
"    } \n"+
"} \n";
var sc=document.createElement('script');
sc.innerHTML += v;
document.getElementsByTagName('head')[0].appendChild(sc);

var th = gN(gid_kes('mass_train_table'),'th');
th[3].innerHTML = '<a href="javascript:max(\'spear\');">max' +th[3].innerHTML+'</a>';
th[4].innerHTML = '<a href="javascript:max(\'sword\');">max' +th[4].innerHTML+'</a>';
th[5].innerHTML = '<a href="javascript:max(\'axe\');">max'   +th[5].innerHTML+'</a>';
th[6].innerHTML = '<a href="javascript:max(\'archer\');">max'+th[6].innerHTML+'</a>';
th[7].innerHTML = '<a href="javascript:max(\'spy\');">max'   +th[7].innerHTML+'</a>';
th[8].innerHTML = '<a href="javascript:max(\'light\');">max' +th[8].innerHTML+'</a>';
th[9].innerHTML = '<a href="javascript:max(\'marcher\');">max'+th[9].innerHTML+'</a>';
th[10].innerHTML= '<a href="javascript:max(\'heavy\');">max' +th[10].innerHTML+'</a>';
th[11].innerHTML= '<a href="javascript:max(\'ram\');">max'   +th[11].innerHTML+'</a>';
th[12].innerHTML= '<a href="javascript:max(\'catapult\');">max'+th[12].innerHTML+'</a>';



