/**
 * Created by jshedrof on 3/22/2017.
 */
angular.module("root", [])
    .controller("index", ["$scope", '$http', function($scope, $http) {
        
        $scope.movies;
        $scope.genreList;
        
        $scope.addItem = function(movie) {
            movie.id = $scope.movies.length + 1;
            var data = JSON.stringify({
                id : movie.id,
                title : movie.title,
                year : movie.year,
                genreId : movie.genre.name
            });
            //TODO - Figure out how to add the id into the movie object.
            $http.post('/movies', data)
                .success(function(data, status, headers, config) {
                    //TODO - Figure out how to clear the form after submit. (setPristine not working)
                    $scope.getAllMovies();
                })
                .error(function(data, status, headers, config) {
                    alert("Could not post Movie : " + status);
                });
        };
        
        $scope.updateMovie = function(movie) {
            var data = JSON.stringify({
                id: movie.id,
                title: movie.title,
                year: movie.year,
                genreId : movie.genre.name
            });
            //TODO - Get the Movie Id from the movie Object
            $http.put('/movies/' + data.id, data)
            //TODO - Finish updateMovie method
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
        
        //TODO - Pre-populate genreList before calling the rest api (or just persist the data).
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
