// nycsubwayphotomap
$(document).ready(function(e){
	for(var i=0; i<stations.length; i++){
			var loc = stations[i].loc;
			var name = stations[i].name;
			$('#subway').append('<a href="images/' + name + '.jpg"' + 
				' title="'+ name + '" rel="prettyPhoto"' + name + '">' +
				'<area shape="circle" coords="' + loc + '"/></a>');
	}
	$("a[rel^='prettyPhoto']").prettyPhoto();
	$('img[usemap]').rwdImageMaps();
})

