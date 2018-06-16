$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#current-city').change(function(){
      var city = $('#current-city').val();
      var url = 'http://api.openweathermap.org/data/2.5/weather?q='
      var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
      var units = '&units=metric'

      $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      });
  });

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
});
