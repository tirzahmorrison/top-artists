const BASE_URL = "https://www.last.fm/api/";
  angular
    .module("top-artists", [])
    .controller("mainController", ["$scope","$http",($scope, $http) => {

    }])

    $http({
      method: "GET",
      url: + "show/chart.getTopArtists",
    }).then(response =>{
      console.log(response);
      console.log(response.data);
    })

    



