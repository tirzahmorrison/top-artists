const BASE_URL = "https://www.last.fm/api/"
const API_KEY = "c71f91c6dacd8aed625de1c1078ffd30"
angular
  .module("top-artists", [])
  .controller("mainController", ["$scope", "$http", ($scope, $http) => {



    $http({
      method: "GET",
      url: BASE_URL + `show/chart.getTopArtists`
    }).then(response => {
      console.log(response)
      console.log(response.data)
    })

  }])



