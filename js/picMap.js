// nycsubwayphotomap
$(document).ready(function(e){
	$.getScript('js/stations.js', function() {
		for(var i=0; i<stations.length; i++){
				var loc = stations[i].loc;
				var name = stations[i].name;
				$('#subway').append('<a href="images/242st.jpg"' + 
					' title="'+ name + '" rel="prettyPhoto"' + name + '">' +
					'<area shape="circle" coords="' + loc + '"/></a>');
		}
		$("a[rel^='prettyPhoto']").prettyPhoto();
		$('img[usemap]').rwdImageMaps();
	});
})

