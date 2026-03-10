import SunCalc from "https://esm.sh/suncalc3?dev"; 
window.addEventListener("locationReady", (event) => {
  const { lat, lon, alt } = event.detail;
  displaySunTimes(lat, lon, alt);
});



function displaySunTimes(lat, lon, alt) {
  const date = new Date();

   
  SunCalc.addTime(-16.9, "alot", "a");
  console.log(SunCalc.getSunTimes(date, lat, lon,alt).alot.value); 


 //document.getElementById("alot").innerHTML = "Alot Hashajar: " +  SunCalc.getSunTimes(date, lat, lon);
  //document.getElementById("misheyakir").innerHTML = "Misheyakir: " + SunCalc.getSunTime(date, lat, lon, -10.2, alt).rise.value.toLocaleTimeString("en-GB");
  //document.getElementById("shkia").innerHTML = "Shkia: " + SunCalc.getSunTimes(date, lat, lon, alt).sunriseStart.value.toLocaleTimeString("en-GB");
}