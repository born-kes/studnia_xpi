if(typeof(unsafeWindow) != 'undefined') {	gameData = unsafeWindow.game_data; $= unsafeWindow.$;}
else{ gameData = window.game_data; $= window.$; }
/* Funkcje do wychwycenia danych */
function gid_kes(id){return document.getElementById(id);}

/* 
 * Tworzenie nowego okna do wysy³ania ataków
 * Dodawanie skrutów klawiszowych
 * 
 */
function tworze(){
		var popup = document.body.appendChild(document.createElement('div'));
		popup.id = 'DSmak_kes';
		popup.className = 'popup_style ui-draggable';
		popup.style.width = '400px';
		popup.style.position = 'absolute';
		popup.style.display = 'none';
		popup.style.top = '100px';
		popup.style.right = '300px';
		popup.style.zIndex = '9999';
		
		var head = popup.appendChild(document.createElement('div'));
		head.id = 'DSmak_kes_menu';
		head.className = 'popup_menu';
		
		var closer = head.appendChild(document.createElement('a'));
		closer.id = 'DSmak_hide';
		closer.href = 'javascript:void(0);';
		closer.appendChild(document.createTextNode("zamknij"));
		closer.style.paddingRight = '3px';
		
		var content = popup.appendChild(document.createElement('div'));
		content.id = 'DSmak_kes_content';
		content.className = 'popup_content';
		content.style.height = '730px';
		content.style.padding = '8px';
		content.style.overflow = 'auto';
		
		var outputContainer = content.appendChild(document.createElement('div'));
		outputContainer.style.width = '100%';
		
		var outputArea = outputContainer.appendChild(document.createElement('iframe'));
		outputArea.id = 'frame_kes_popup';
		outputArea.style.width = '340px';
		outputArea.style.height = '700px';
		outputArea.style.marginRight = 'auto';
		outputArea.style.marginLeft = 'auto';
		outputArea.style.backgroundColor = 'white';
		outputArea.style.border = '0px';
		outputArea.style.padding = '3px';
		outputArea.style.textAlign = 'center';
		outputArea.style.overflow = 'auto';		

$("#DSmak_hide").click(function(){$('#DSmak_kes').hide();});
}//*/
function GET(s,str){
	   var get=G_explode(str);  for (var i=0; i< get.length ; i++ ){if(s==get[i]){return get[i+1];} }
	 return false; 
}
function gN(a,b) { return a.getElementsByTagName(b);}
function wojsko(a,b) {var c = a.innerHTML - b.innerHTML;  return c;}

/**************************************************
 *('brak typu','wioska off','wioska def','Zwiad','wioska LK','wioska CK','do rozbudowy','szlachta');
 *('name','pik','mie','axe','luk','zw',  'lk','kl',	'ck','tar','kat','ry','sz');
 *   0		1		2		3		4		5		6		7		8		9		10		11		12
 */

function typ_w(arra){	
if(arra[5]>4000){return 3;} //zw
else if( (arra[3] + (arra[6]*4)+(arra[7]*5)) > 300){return 1;} // 0ff
else if( (arra[1] + arra[2]+ arra[4] + (arra[8]*4)) > 300){return 2;} //def
return 0;
}
function czas_marszu(odleglosc,arra){
	return G_timeDrop(odleglosc * G_TempoMarszu(arra) * 60); 
}var get;
function wyciagaID(str){
   str= G_explode(str);
      for (var i=0; i< str.length ; i++ ) if(str[i].lastIndexOf('id')>-1) return str[i+1] ;
}
/* Koniec definicji Funkcji*/

	
var all, table,d,e,f,s,v,heddde;
$(document).ready(function(){
	if(G_wersjaff>6){	tworze();}
	
	$("table.vis:eq(2) a").html(function(a,b){
		 if(a==0){$(this).attr({  id: 'key_c',  title: 'wywolanie strzalka w dul'}); return b+'<br>\\<u>|</u>/';} 
		 if(b.indexOf('&lt;&lt;')>=0){$(this).attr({  id: 'key_z',  title: 'wywolanie strzalka'}); return b+'<br>&lt;-';} 
		 if(b.indexOf('&gt;&gt;')>=0){$(this).attr({  id: 'key_x',  title: 'wywolanie strzalka'}); return b+'<br>-&gt;';} 
	});
	$("table.vis:eq(3) a").html(function(a,b){
		if(b.indexOf('Ponowny napad tymi samymi wojskami')>=0){
			$(this).attr({ id: 'key_w',title: 'wywolanie strzalka do gore'});return b+'( strzalka w gore )';
		} 
		if(b.indexOf('Ponowny napad wszystkimi wojskami')>=0){
			$(this).attr({ id: 'key_q',title: 'wywolanie klawiszem q'});return b+' (key_q)';
		} 
	});
	
 var timeR,data;	
	$("table.vis:eq(3) td:eq(1)").html(function(a,b){ timeR =G_time(data=b);
		return '<span style="float:left;" id="data_Atak">'+ b+'</span>'+
				 '<span style="float:right;"><span>raport ma: <b> '+ G_timeDrop(timeR)+'</b></span>'+
				 '<br><span>Atak szedl:<b id="marsz_atak"></b></span></span>';
	});
		
	//$("#attack_info_att:parent()").text(function(a,b){alert(a+"\n"+b);});
	$(window).bind("keydown", function(oEvent){
	 switch(oEvent.keyCode){
		case 37: //z strza³ka
		 if($('#key_z').length )	window.location.href=$('#key_z').attr('href');	 break;
		case 39: //x
		 if($('#key_x').length )	window.location.href=$('#key_x').attr('href');	 break;
		case 38: //w
		 if($('#key_w').length && G_wersjaff>6){
		 	$('#frame_kes_popup').attr('src',function(){	return $('#key_w').attr('href');});
		 	$('#DSmak_kes').show();
		 	}
		 else if($('#key_w').length) window.location.href=$('#key_w').attr('href'); break;
		case 81: //q
		 if($('#key_q').length && G_wersjaff>6){
		 	$('#frame_kes_popup').attr('src',function(){return $('#key_q').attr('href');});
		 	$('#DSmak_kes').show();
		 	}
		 else if($('#key_q').length) window.location.href=$('#key_q').attr('href'); break;
		case 40: //c
		 if($('#key_c').length && G_wersjaff>6){
		 	$('#frame_kes_popup').attr('src',function(){	return $('#key_c').attr('href');});
		 	$('#DSmak_kes').show();
		 	}
		else if($('#key_c').length )	window.location.href=$('#key_c').attr('href');	 break;
     default:
	 }//*/
	});
/* Koniec Deklaracji Skrutów klawiszowych */

/* Zbieranie danych */
  	var idWsiAtt = wyciagaID($("#attack_info_att tr:eq(1) a").attr('href'));// pobraæ id (ostatnia dana z url);
  	var aXY = 		G_xy($("#attack_info_att tr:eq(1) a").text());
  	
  	var idWsiObr = wyciagaID($("#attack_info_def tr:eq(1) a").attr('href'));// pobraæ id (ostatnia dana z url);
  	var oXY = 		G_xy($("#attack_info_def tr:eq(1) a").text());
  	
  	$("#attack_info_def").append('<tr id="KesMur"></tr>');
  	
  	
  	$("#attack_info_att_units tr:eq(2)").attr('class','red')
  		.clone(false)
  		.insertAfter("#attack_info_att_units tr:eq(2),#attack_info_def_units tr:eq(2)")
  		.parent('tbody')
  		.append('<tr class="framKes"></tr>');
  	$("#attack_info_def_units tr:eq(2)").attr('class','red');
   	
           // Czas Marszu Ataku
     var odleglosc= Math.sqrt(G_kwadrat(aXY[1]-oXY[1])+G_kwadrat(aXY[2]-oXY[2]));
         odleglosc = Math.floor(odleglosc*1000)/1000;
     var iloscGodzin=Math.floor(timeR/3600);
     
 var WojskAgr = [];
 var WojskAgrAut=[];
 var WojskAgrMa=[];
 
 var WojskObr = [];
 var WojskObrAut=[];
 var WojskObrMa=[];
   
 $("#marsz_atak").text(function(){
         $("#attack_info_att_units tr:eq(1) td").text(function(a,b){ WojskAgr.push(b); });
         $("#attack_info_att_units tr:eq(2) td").text(function(a,b){ WojskAgrAut.push(b); });
          if($('#attack_info_def_units').length){
         $("#attack_info_def_units tr:eq(1) td").text(function(a,b){ WojskObr.push(b); });
         $("#attack_info_def_units tr:eq(2) td").text(function(a,b){ WojskObrAut.push(b); });
         }
 return czas_marszu(odleglosc,WojskAgr );
 });

	$("#attack_info_att_units tr:eq(3) td").text(function(a){
  		if(a==0)return 'Zostalo'; 
  		WojskAgrMa[a]=(WojskAgr[a]-WojskAgrAut[a]);
  		if(WojskAgrMa[a]==0)	$(this).attr('class',"unit-item hidden"); else $(this).removeClass("hidden");
  	return WojskAgrMa[a];
  	});
  	$("#attack_info_def_units tr:eq(3) td").text(function(a){
  		if(a==0)return 'Zostalo';
  		WojskObrMa[a]=(WojskObr[a]-WojskObrAut[a]);
  		if(WojskObrMa[a]==0)	$(this).attr('class',"unit-item hidden"); else $(this).removeClass("hidden");
  	return WojskObrMa[a];
  	});
  	
 	$("#attack_info_def_units tr:eq(3),#attack_info_att_units tr:eq(3),#KesMur").attr('class','green');
 	
 var a_typ = typ_w(WojskAgr);	 
 var Poparcie,zaPoparcie,mur=-1;
 /* £upy 
  * Poparcie
  * Budynki
  * Mur
  */
  
  $("#attack_results tr").html(function(a,b){
//.innerHTML.indexOf('Budynki:')>=0){
		if(b.indexOf('Poparcie:')>=0){
			Poparcie =Math.floor( $(this).children(":last").children(":last").text() );

				if(Poparcie<0){ Poparcie = 25; }				 
			Poparcie += iloscGodzin;
				if(Poparcie>100){ Poparcie=100; }
			zaPoparcie = Poparcie + Math.floor( (odleglosc * G_TempoMarszu(WojskAgr) * 60) /3600 );
				if(zaPoparcie>99){ zaPoparcie=100; }

			$(this).children(":last").append(''+
			 '<span class="green" style="float:right;">obecnie '+Poparcie+'% ?(=>'+zaPoparcie+'%)</span>'
		 	);
		}
		if(b.indexOf('Mur')>=0){
			mur=( $(this).children(":last").children(":last").text() );
		}
  	});
  	if($("#attack_spy").length){
  		if( $("#attack_spy").text().indexOf('Mur') >= 0 ){
		  		mur = G_dels($("#attack_spy b:last").text() );
  		}else mur =0;
  		}
  	if(mur > -1){$("#KesMur").html('<th>Poziom Muru:</th><td style="text-align:center"><b>'+mur+'</b></td>'); }else{mur = '';}
  	
WojskAgr		=WojskAgr.splice(1,13);
WojskAgrAut	= WojskAgrAut.splice(1,13);
WojskAgrMa	= WojskAgrMa.splice(1,13);
 if($('#attack_info_def_units').length){
WojskObr		= WojskObr.splice(1,13);
WojskObrAut	= WojskObrAut.splice(1,13);
WojskObrMa	= WojskObrMa.splice(1,13);
 	}
  	$("#attack_info_att tr.framKes").html('<td valign="top"><p>Studnia</p>Raport ma:</td><td colspan="12">'+
                                         '<iframe src="' + G_bornkes + 'dw/raport.php?'+
                                         '&o0=0&data='+data+
                                         '&typ='+a_typ+
                                         '&w='+WojskAgrMa+
                                         '&w0='+WojskAgr+
                                         '&id='+idWsiAtt+
                                         '" height="55" width="102%" style="border:0pt;"></iframe></td>');
  if($('#attack_info_def_units').length){                                       
   $("#attack_info_def tr.framKes").html('<td valign="top"><p>Studnia</p>Raport ma:</td><td colspan="12">'+
                                         '<iframe src="' + G_bornkes + 'dw/raport.php?'+
                                         '&o0=1&data='+data+
                                         '&w='+WojskObrMa+
                                         '&Mur='+mur+
                                        '&id='+idWsiObr+
                                        '&zw='+WojskAgr[5]+
                                          '" height="55" width="102%" style="border:0pt;"></iframe></td>');
}else{ 
   $("#attack_info_def #KesMur").parent('tbody')
  		.append('<tr><td valign="top"><p>Studnia</p>Raport ma:</td><td colspan="12">'+
                                         '<iframe src="' + G_bornkes + 'dw/raport.php?'+
                                         '&id='+idWsiObr+
                                         '" height="55" width="102%" style="border:0pt;"></iframe><td></tr>');

}
                                    
});
