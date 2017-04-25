function init_map()
		{
			var myOptions = {
				zoom:16,
				center:new google.maps.LatLng(50.4501,30.523400000000038),mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
			marker = new google.maps.Marker(
				{
					map: map,
					position: new google.maps.LatLng(50.4501,30.523400000000038)
				});
			
			infowindow = new google.maps.InfoWindow(
				{
					content:'<strong>Location</strong><br>Kiev, Ukraine<br>'
				});
			
			google.maps.event.addListener(marker, 'click', function()
			{
				infowindow.open(map,marker);
			});
			infowindow.open(map,marker);
		}

google.maps.event.addDomListener(window, 'load', init_map);