const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Please write the name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6bbfccdfd1dbbae2fb1bd90fcec217d4`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;

      const tempmood = arrData[0].weather[0].main;
      //condition to check sunny or cloudy
      if (tempmood == "Clear") {
        temp_status.innerHTML =
          " <i class='fa-solid fa-sun' style='color: #fdac21;''></i>";
      } else if (tempmood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-cloud' style='color: #ffffff;''></i>";
      } else if (tempmood == "Rain") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-cloud-rain' style='color: #a5b4cf;''></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa-solid fa-sun' style='color: #fdac21;''></i>";
      }
      datahide.classList.remove("data_hide");
    
     
    } 
    catch {
      city_name.innerText = `Plz enter the city name correctly`;
      datahide.classList.add("data_hide");
    }
  }
};


submitBtn.addEventListener("click", getInfo);
