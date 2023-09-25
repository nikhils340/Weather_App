const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');
const getInfo = async (event) => {
  event.preventDefault();
  console.log("Button clicked");
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = "Plz write city name before searching";
    datahide.classList.add('data_hide')
  } else {
    try {
      // let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0ef6e3a7b374845b3f116f93ac2bfd91`;
      // let url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&units=metric&lon={lon}&q=${cityVal}&appid=0ef6e3a7b374845b3f116f93ac2bfd91`
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0ef6e3a7b374845b3f116f93ac2bfd91`;

      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const arrdata = [data]; //converting into the array
      city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
      temp_real_val.innerText=arrdata[0].main.temp;

      const tempmood=arrdata[0].weather[0].main;
      if(tempmood==='Clear'){
            temp_status.innerHTML="<i class='fas fa-sun' style='color :#eccc68;'><i>";
      }
      else if(tempmood==='Clouds'){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color :#f1f2f6;'><i>";
      }
      else if(tempmood==='Rain'){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color :#a4b0be;'><i>";
      }
      else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color :#eccc68;'><i>";
      }
      datahide.classList.remove('data_hide')
    } catch {
      city_name.innerText = "Plz write city name properly";
      datahide.classList.add('data_hide')
    }
  }
};
submitBtn.addEventListener("click", getInfo);
