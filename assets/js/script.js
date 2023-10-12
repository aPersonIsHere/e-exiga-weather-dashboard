function getData(requestUrl) {
    fetch (requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}

//getData(http://api.openweathermap.org/geo/1.0/direct?q=Euless,{state code},{country code}&limit={limit}&appid={API key});
getData("https://api.openweathermap.org/data/3.0/onecall?lat=32.835469&lon=-97.091402&appid=ba9baed66de2d733275cfcd885e30900");

$('#search-button').click(function () {
    console.log("Hi");
    getData("https://api.openweathermap.org/data/3.0/onecall?lat=32.835469&lon=-97.091402&appid=ba9baed66de2d733275cfcd885e30900");
 });