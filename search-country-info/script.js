$('#userInput').on('input',function(e){
  var value = e.target.value;
  if (value === '') {
    resetData();
  } else {
    handleSearch(value);
  }
});

const resetData = () => {
  $('#flag').attr('src',"https://cdn.britannica.com/s:900x675/40/129640-131-0EB20858/Flags-countries-world-flags-Country-blog-geography-2009.jpg");
  $('#name').text('');
  $('#nativeName').text('Nom Natif : 本地名');
  $('#capital').text('Capitale : 首都');
  $('#region').text('Region : 國家');
  $('#population').text('Population : 人口');
  $('#area').text('Zone : 面積');
  $('#language').text('Langues : 語言');
}

const handleSearch = (countryName) => {
  const url = 'https://restcountries.eu/rest/v2/name/' + countryName;
  fetch(url).
    then(res => {
      var statusCode = res.status;
      if (!res.ok) {
        console.log(statusCode);
        $('#display').css('visibility', 'hidden');
        resetData();
      } else {
        return res.json()
      }
    })
    .then(data => {
      $('#flag').attr('src',data[0].flag);
      $('#name').text(data[0].name);
      $('#name').text(data[0].name);
      $('#nativeName').text(data[0].nativeName);
      $('#capital').text(data[0].capital);
      $('#region').text(data[0].region);
      $('#population').text(data[0].population);
      $('#area').text(data[0].area);
      $('#language').text(data[0].languages[0].nativeName);
      $('#display').css('visibility', 'visible');
    })
}



