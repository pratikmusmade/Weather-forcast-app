
    navigator.geolocation.getCurrentPosition(function(position) {
      // Access latitude and longitude from the position object
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      // Now you can use latitude and longitude to do whatever you need
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
    }, function(error) {
      // Handle errors
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    })