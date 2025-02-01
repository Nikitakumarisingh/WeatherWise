document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '96ba90e8d9f015b25b8a6ffa842db540';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
          document.getElementById('weatherDescription').innerText = data.weather[0].description;
          document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
          document.getElementById('weatherIcon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          document.getElementById('weatherIcon').style.display = 'block';
          document.getElementById('weatherResult').style.display = 'block';
        } else {
          alert('City not found. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching data. Please try again.');
      });
  });
  
