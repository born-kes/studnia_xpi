	var $x = function(p, context) {
		if(!context)
			context = document;
	    	 var i, arr = [], xpr = document.evaluate(p      , context,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		for (i = 0; item = xpr.snapshotItem(i); i++)
			arr.push(item);
		return arr;
	};
var all = document.evaluate('//strong[@class="group_tooltip"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var table = all.snapshotItem(0);   alert(table.innerHTML);
        var groups = [];
	var selectedgroup = '';                                            //@href,"mode=mass"
//	var grps = $x('//td/a[contains(@href,"screen=train") and contains(@href,"mode=success") and contains(@href,"group=") and not(contains(@href,"page=")) and starts-with(.," [")]');
	if(grps.length > 0) {
		var grpsel = $x('parent::td/strong[starts-with(.," >")]', grps[0]);
		for(var i = 0; i < grps.length; i++) {
			var grp = / \[(.*)\] /.exec(grps[i].textContent);
			if(grp)
				groups.push(grp[1]);
		}
	} else {
		var grpsel = $x('//td/strong[@class="group_tooltip"]');
	}
unit_input_spear
unit_input_sword
unit_input_axe
unit_input_archer
unit_input_spy
unit_input_light
unit_input_marcher
unit_input_heavy
unit_input_ram
unit_input_catapult
res_buffer







