const api_key= `a034769e18f5e2704296b2e769dbb073`
  /*base: "https://api.openweathermap.org/data/2.5/"*/

const search = document.querySelector('.search');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const weather = document.querySelector('.weather');

const getweather=async(city)=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`/* 2 */
  const response= await fetch(url);/* 1 */
  const data = await response.json();/* 3 */
  return showweather(data);/*4*/

}
const showweather=(data)=>
{
  city.innerText=`${data.name}, ${data.sys.country}`;
  temp.innerHTML = `${data.main.temp}<sup>o</sup>c`;
  weather.innerText = `${data.weather[0].main}`;
}

search.addEventListener('keydown', function(event){
  if (event.key === "Enter") {
  getweather(search.value);
  event.preventDefault();/*stops page from reloading*/
}});
