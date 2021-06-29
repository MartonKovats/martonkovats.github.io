function myMap() {
			var mapProp = {
				center: new google.maps.LatLng(47.5093509, 19.0532578),
				zoom: 16,
			};
			var map = new google.maps.Map(document.getElementById("terkep"), mapProp);
		};
function initialize() {
			myMap();
		};