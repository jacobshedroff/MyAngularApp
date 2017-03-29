/**
 * Created by jshedrof on 3/22/2017.
 */
angular.module("root", [])
    .controller("index", ["$scope", '$http', function($scope, $http) {
        
        $scope.movies;
        $scope.genreList;
        
        $scope.addItem = function(movie) {
            var data = JSON.stringify({
                title : movie.title,
                year : movie.year,
                genreId : movie.genre.name
            });
            
            $http.post('/movies', data)
                .success(function(data, status, headers, config) {
                    $scope.getAllMovies();
                    document.getElementById("newItem").reset();
                })
                .error(function(data, status, headers, config) {
                    alert("Could not post Movie : " + status);
                });
        };
        
        $scope.getAllMovies = function () {
            $http.get('/movies')
                .success(function (data, status, headers, config) {
                    $scope.movies = data._embedded.movies;
                })
                .error(function (data, status, headers, config) {
                    alert("Could not get movies")
                });
        };
        
        $scope.getGenres = function() {
            $http.get('/genres')
                .success(function (data, status, headers, config) {
                    $scope.genreList = data._embedded.genres;
                })
                .error(function(data, status, headers, config) {
                    alert("Could not load Genres");
                });
        };
        
        $scope.getGenres();
        $scope.getAllMovies();
    }]);
