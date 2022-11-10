function showWeather(){
	let city = document.getElementById('city');
	let temp = document.getElementById('temp');
	let weather = document.getElementById('weather');
	let humidity = document.getElementById('humidity');
	let windSpeed = document.getElementById('windSpeed');
	let icon = document.querySelector('#weatherIcon');

	let name = document.querySelector('input').value.toLowerCase();
	let cityName = name.charAt(0).toUpperCase()+name.slice(1);
	document.querySelector('input').value = cityName;
	const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

	fetch(url,{method: 'GET'})
	.then((res) => res.json())
	.then((data) => {
		city.innerText = `Weather in ${cityName}`;
		temp.innerText = `${data.list[0].temp.day}°C`;
		icon.style.display = "inline";
		let element = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
		icon.setAttribute("src", element);
		weather.innerText = `${data.list[0].weather[0].description}`;
		humidity.innerText = `Humidity: ${data.list[0].humidity}%`;
		windSpeed.innerText = `Wind Speed: ${data.list[0].speed}km/h`;
	})
	.catch((err) => {
		console.log(err)
	})
}