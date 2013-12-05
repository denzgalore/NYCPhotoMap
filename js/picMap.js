// nycsubwayphotomap
var stations = [
		{ name: "242st", loc: "276,508,34"}, 
		{ name: "238st", loc: "286,560,20"}, 
		{ name: "231st", loc: "286,595,15"}
];

$(document).ready(function(){
	for(var i=0; i<stations.length; i++){
			var loc = stations[i].loc;
			var name = stations[i].name;
			$('#subway').append('<a href="img/' + name + '.jpg"' + 
				' title="' + name + '" rel="prettyPhoto"' + name + 
				'"><area shape="circle" coords="' + loc + '" border="1" /></a>');
	}
	$("a[rel^='prettyPhoto']").prettyPhoto();
})

