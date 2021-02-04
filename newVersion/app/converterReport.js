try {
	console.log('Konwerter Raportów')
	// const result = lib.compose(getSecondsTimeShyeowHowOld, getSecondsTimeFromFullDateString, text );

	let all,
		table,
		distance,
		report_ID,
		reportAge,
		dataAttack,
		// timeToAttack,
		// dataAttackNight,
		villageAttackId,

		userAttackId,
		userAttackName,
		villageAttackName,
		villageAttackCoords,
		villageAttackArmy,
		villageAttackArmySpeed,
		userDefenseId,
		villageDefenseId,
		villageDefenseCoords,
		villageDefense_wall,
		villageDefenseArmy,
		villageDefenseSupport,
		villageDefenseBuildings
	;





	$(document).ready(function () {

		let div ={
			timeWar : $("table.vis:eq(3) td:eq(1)"),
			box: {
				wall:$('<tr id="KesMur">MUR</tr>'),
			},
			info:{
				att: $("#attack_info_att"),
				def: $("#attack_info_def"),
			}
		}
		div.info = {...div.info,
			att_user: $('tr:eq(1) a', div.info.att),
			att_village: $("#attack_info_att_units", div.info.att),
			def_units: $("#attack_info_def_units", div.info.def),
			def_village: $('tr:eq(1) a', div.info.def)
		};


		dataAttack = /*lib.getSecondsTimeShowHowOld*/(
			lib.getSecondsTimeFromFullDateString(
				lib.text(div.timeWar)
			)
		);


		reportAge = lib.getDateForm(
			dataAttack/1000
		);
		villageAttackId = lib.getParamFromUrl(href(div.info.att_user));
		villageAttackCoords = lib.compose(lib.text, lib.getCoords)( div.info.att_user )
		villageAttackArmy = [];
		report_off_army_live = [];
		// villageAttackArmySpeed

		villageDefenseId = lib.getParamFromUrl( href(div.info.def_village));
		villageDefenseCoords = lib.compose(lib.text, lib.getCoords)( div.info.def_village );
		// villageDefenseArmy
		// villageDefense_wall
		// villageDefenseSupport
		// villageDefenseBuildings
		distance = lib.getDistance(villageAttackCoords, villageDefenseCoords)

		/**
		 * add def bottom box
		 */
		$(div.info.def).append(div.box.wall);

		$("tr:eq(2)", div.info.att_village)
			.clone(false)
			.insertAfter($([
				$("tr:eq(2)", div.info.att_village).attr('class', 'red'),
				$("tr:eq(2)", div.info.def_units).attr('class', 'red')
			]));

		$(div.timeWar).html(function (a, b) {
			return '<span style="float:left;" id="data_Atak"> ' + b + '</span>' +
				'<span style="float:right;"><span>raport ma: <b> ' + reportAge.Date + '</b></span>' +
				'<br><span>Atak szedl:<b id="marsz_atak"></b></span></span>';
		});


		// aggressor.setUnits( $("#attack_info_att_units tr:eq(1) td") );

		var WojskAgr = [];
		var WojskAgrAut = [];
		var WojskAgrMa = [];
		$("#attack_info_att_units tr:eq(1) td").text(function (a, b) {
			WojskAgr.push(b);
		});
		$("#attack_info_att_units tr:eq(2) td").text(function (a, b) {
			WojskAgrAut.push(b);
		});

		villageAttackArmySpeed = czas_marszu(distance, WojskAgr)
		$("#marsz_atak").text(villageAttackArmySpeed.Date);



		$("#attack_info_att_units tr:eq(3) td").text(function (a) {
			if (a == 0) return 'Zostalo';
			WojskAgrMa[a] = (WojskAgr[a] - WojskAgrAut[a]);
			if (WojskAgrMa[a] == 0) $(this).attr('class', "unit-item hidden"); else $(this).removeClass("hidden");
			return WojskAgrMa[a];
		});

		var WojskObr = [];
		var WojskObrAut = [];
		var WojskObrMa = [];

		if ($('#attack_info_def_units').length) {
			$("#attack_info_def_units tr:eq(1) td").text(function (a, b) {
				WojskObr.push(b);
			});
			$("#attack_info_def_units tr:eq(2) td").text(function (a, b) {
				WojskObrAut.push(b);
			});
		}

		$("#attack_info_def_units tr:eq(3) td").text(function (a) {
			if (a == 0)
				return 'Zostalo';
			WojskObrMa[a] = (WojskObr[a] - WojskObrAut[a]);
			if (WojskObrMa[a] == 0) $(this).attr('class', "unit-item hidden"); else $(this).removeClass("hidden");
			return WojskObrMa[a];
		});

		$("#attack_info_def_units tr:eq(3), #attack_info_att_units tr:eq(3)").attr('class', 'green');

		// var a_typ = typ_w(WojskAgr);
		var Poparcie,
			comeBackSupport = '';

		var spy_building_data = $("#attack_spy_building_data")
		if (spy_building_data.length) {

			villageDefense_wall = 0
			villageDefenseBuildings = JSON.parse(spy_building_data.val())
			villageDefenseBuildings.map((el) => {
				if (el.name == 'Mur') villageDefense_wall = el.level;
			});
		}

		$("#attack_results tr").html(function (a, b) {
//.innerHTML.indexOf('Budynki:')>=0){
			let report_ago_houer;
			if (b.indexOf('Poparcie:') >= 0) {

				villageDefenseSupport = lib.getLastElementNumeric(this);

				console.log(villageDefenseSupport)
				if (villageDefenseSupport < 0) {
					villageDefenseSupport = 25;
				}

				console.log(villageDefenseSupport)
				villageDefenseSupport += reportAge.hours;
				console.log(villageDefenseSupport)
				if (villageDefenseSupport > 100) {
					villageDefenseSupport = 100;
				}
				if (villageDefenseSupport < 99) {
					comeBackSupport = villageDefenseSupport + lib.remainingHours(distance * villageAttackArmySpeed.hours * 60)

					console.log('in %', comeBackSupport);
					if (comeBackSupport > 99) {
						comeBackSupport = 100;
					}
				} else {
					comeBackSupport = 100;
				}
				$(this).children(":last").append('' +
					'<span class="green" style="float:right;" title="Przy ponownym ataku z tej samej wioski">obecnie : ' + villageDefenseSupport + '% ?(=><strong>' + comeBackSupport + '%</strong>)</span>'
				);
			}

			if (!villageDefense_wall && b.indexOf('Mur') >= 0) {
				villageDefense_wall = lib.getLastElementNumeric(this);
			}
		});

		console.log('Poprcie w wiosce', Poparcie)
		console.log('mur', villageDefense_wall);
		if (villageDefense_wall > -1) {
			$("#KesMur").html('<th>Poziom Muru:</th>' +
				'<th style="text-align:center"><b>' + villageDefense_wall + '</b> <span style="float:right;"></span></th>');
		}

		WojskAgr = WojskAgr.splice(1, 13);
		WojskAgrAut = WojskAgrAut.splice(1, 13);
		WojskAgrMa = WojskAgrMa.splice(1, 13);
		if ($('#attack_info_def_units').length) {
			WojskObr = WojskObr.splice(1, 13);
			WojskObrAut = WojskObrAut.splice(1, 13);
			WojskObrMa = WojskObrMa.splice(1, 13);
		}

	});
}
catch (e) {
	console.error(e)
}