// nycsubwayphotomap
var stations = [
		{ line: "Red-line", name: "242st", loc: "276,508,34"}, 
		{ line: "Red-line", name: "238st", loc: "286,560,20"}, 
		{ line: "Red-line", name: "231st", loc: "286,595,15"}
];

$(document).ready(function(){
	for(var i=0; i<stations.length; i++){
			var loc = stations[i].loc;
			var name = stations[i].name;
			var line = stations[i].line;
			$('#subway').append('<a href="images/' + name + '.jpg"' + 
				' title="' + line + " " + name + '" rel="prettyPhoto"' + name + '">' +
				'<area shape="circle" coords="' + loc + '" border="1" /></a>');
	}
	$("a[rel^='prettyPhoto']").prettyPhoto();
	$('img[usemap]').rwdImageMaps();
})

