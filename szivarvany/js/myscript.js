function myMap1() {
			var mapProp = {
				center: new google.maps.LatLng(47.491997, 19.013633),
				zoom: 17,
			};
			var map = new google.maps.Map(document.getElementById("hegyvidek"), mapProp);
		};

function myMap2() {
			var mapProp = {
				center: new google.maps.LatLng(47.4680794, 18.998006),
				zoom: 17,
			};
			var map = new google.maps.Map(document.getElementById("gazdagret"), mapProp);
		};

function myMap3() {
			var mapProp = {
				center: new google.maps.LatLng(47.498786, 18.986818),
				zoom: 17,
			};
			var map = new google.maps.Map(document.getElementById("jokai"), mapProp);
		};

function initialize() {
			myMap1();
			myMap2();
			myMap3();
		};

document.getElementById('btnEdzes').onclick = function() {
	galeria('edzes');
};

document.getElementById('btnEvadzaro').onclick = function() {
    galeria('evadzaro');
};

document.getElementById('btnTabor').onclick = function() {
    galeria('tabor');
};

document.getElementById('btnFellepesek').onclick = function() {
    galeria('fellepesek');
};

function galeria(galleryType){
	var gallery =" ";	
	for (let kep = 1; kep <= 12; kep++) {
		gallery += '<div class=\"col-sm-6 col-md-4\"><a class=\"lightbox\" href=\"img/';
		gallery = gallery + galleryType + '-' + kep;
		gallery += '.jpg\"><img src=\"img/';
		gallery = gallery + galleryType + '-' + kep;
		/*gallery +='.jpg\" alt=\"poz_1\"></a></div>';*/
		gallery +='.jpg\" alt=\"';
		gallery = gallery + galleryType + '-' + kep;
		gallery += '\"></a></div>';
	}
		
    document.getElementById('galeriaKepek').innerHTML = gallery;
	baguetteBox.run('.tz-gallery');
	};
	
