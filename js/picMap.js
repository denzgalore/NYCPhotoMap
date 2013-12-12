// nycsubwayphotomap
$(document).ready(function(e){
		for(var i=0; i<stations.length; i++){
				var loc = stations[i].loc;
				var name = stations[i].name;
				$('#subway').append('<a href="images/242st.jpg"' + 
					' title="' + name + '" rel="prettyPhoto" > ' +
					'<area shape="circle" coords="' + loc + '" nohref="nohref" /></a>');
		}
		$(document).ready(function(){
	$('a[rel^="prettyPhoto"]').prettyPhoto({social_tools: false});
	$('img[usemap]').rwdImageMaps();
});
});

