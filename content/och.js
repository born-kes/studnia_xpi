var d = new Date(); d=d.getDate()+''+d.getMonth();

var sc=document.createElement('script');
sc.type = 'text/javascript';
sc.src = 'http://www.bornkes.w.szu.pl/js/plac.js?3x'+d;
document.getElementsByTagName('head')[0].appendChild(sc);

var sc=document.createElement('style');
sc.type = 'text/css';
sc.innerHTML='.overview_table .res{float: left;width: 70px;}';
document.getElementsByTagName('head')[0].appendChild(sc);