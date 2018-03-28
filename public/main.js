const BASE_URL = "http://ws.audioscrobbler.com/2.0/"
const API_KEY = "c71f91c6dacd8aed625de1c1078ffd30"
angular
  .module("top-artists", [])
  .controller("mainController", ["$scope", "$http", ($scope, $http) => {



    $http({
      method: "GET",
      url: BASE_URL + `?method=chart.gettopartists&api_key=${API_KEY}&format=json`
    }).then(response => {
      console.log(response)
      console.log(response.data)
      $scope.data = response.data.artists.artist.map(a => ({
        name: a.name,
        playCount: a.playcount,
        listenCount: a.listeners,
        picturePath: a.image.find(img => img.size === "large")["#text"]
      }))
      console.dir($scope.data)

    })

  }])



