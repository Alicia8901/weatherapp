const apiKey = "ac40ee6ca2a08c63f1c2d08b39cfdfb8";

document.getElementById("searchBtn").addEventListener("click", () => {
 const city = document.getElementById("cityInput").value;
 if (city.trim() === "") return;

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
   .then((response) => {
     if (!response.ok) throw new Error("City not found");
     return response.json();
   })
   .then((data) => {
     const weatherBox = document.getElementById("weatherInfo");
     weatherBox.innerHTML = `
       <p>🌍 ${data.name}, ${data.sys.country}</p>
       <p>🌡️ ${data.main.temp}°C</p>
       <p>☁️ ${data.weather[0].description}</p>
     `;
   })
   .catch((error) => {
     document.getElementById("weatherInfo").textContent = "City not found or error fetching data.";
   });
});