/**
 * Created by jshedrof on 3/22/2017.
 */
angular.module("root", [])
    .controller("index", ["$scope", '$http', function($scope, $http) {
        
        $scope.movies;
        $scope.genreList;
        $scope.edit = false;
        
        $scope.addItem = function(movie) {
            movie.id = $scope.movies.length + 1;
            var data = JSON.stringify({
                id : movie.id,
                title : movie.title,
                year : movie.year,
                genreId : movie.genre.name
            });
            $http.post('/movies', data)
                .success(function(data, status, headers, config) {
                    $scope.getAllMovies();
                    $scope.movie = {};
                    document.forms["newItem"].clear();
                    $route.reload();
                })
                .error(function(data, status, headers, config) {
                    alert("Could not post Movie : " + status);
                });
        };
        
        $scope.editItem = function(movie) {
        	$scope.edit = true;
        	alert("You clicked!");
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
        
        $scope.addGenre = function(genre) {
        	genre.id = $scope.genreList.length + 1;
        	var data = JSON.stringify({
                id : genre.id,
                name : genre.name
        	});
        	
        	$http.post('/genres', data)
        		.success(function(data, status, headers, config){
        			$scope.getGenres();
                    $scope.genre = {};
                    document.forms["newGenre"].clear();
                    $route.reload();
        		})
        		.error(function(data, status, headers, config){
        			alert("Could not add Genre.");
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
