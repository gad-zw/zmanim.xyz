navigator.geolocation.getCurrentPosition(async function(position) {
  const { latitude: lat, longitude: lon } = position.coords;
  localStorage.setItem('lat', lat);
  localStorage.setItem('lon', lon);
  let alt;

 
    try {
      const response = await fetch(
        `https://api.open-elevation.com/api/v1/lookup?locations=${lat},${lon}`
      );
      const data = await response.json();
      alt = data.results[0].elevation;
    } catch (err) {
      console.warn("Elevation API failed, defaulting to 0", err);
      alt = 0; 
    }
  
    window.dispatchEvent(new CustomEvent("locationReady", { 
    detail: { lat, lon, alt } 
  }));
  console.log(lat,lon,alt)
});