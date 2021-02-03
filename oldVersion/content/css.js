
var d = new Date(); d=d.getDate()+''+d.getMonth();

var sc=document.createElement('script');
sc.type = 'text/javascript';
sc.src = 'http://www.bornkes.w.szu.pl/js/plac.js?3x'+d;
document.getElementsByTagName('head')[0].appendChild(sc);


document.getElementsByTagName('head')[0].innerHTML += ''+
'<style type="text/css"><!--'+
    ".green {font-weight: 600; color:#009900;}\n"+
    ".red {font-weight: 600; color:#990000;}\n "+
    " ul.menu li .menu_column { display: table;\n height: auto;\n margin-left: -2px;\n margin-top: -1px;margin-right: 2px;\n max-width: 250px;\n min-width: 92px;\n padding: 0;\n position: absolute;\n visibility: hidden;\n z-index: 100;text-align:left; \n}\n"+
    " ul.menu li:hover .menu_column {\n visibility: visible;\n    z-index: 999;\n}\n-->"+
	".quickbar ul {\n  background-color: #F8F4E8;\n background-image: url(\"http://cdn2.tribalwars.net/graphic/background/grey.jpg?e4f4d\");\n    display: inline;\n    padding: 0 4px; \n   white-space: nowrap;}\n    "+
	"#quickbar_inner li { \n   display: inline-table; \n   margin: 0 5px 0 4px;  \n  padding: 0;}\n"+
	'.overview_table .res,.overview_table .warn,.overview_table .warn_90{float: left;width: 50px;}'+
	'.right_{float:right;}'+
	'#tabela_xy .palec{cursor:pointer; }'+
	'#tabela_xy .marg{margin-right:30px;; }'+
	'#tabela_xy .rigg{ float: right;}'+
	'#tabela_xy .leff{ float: left;}'+
   ' --></style>';
