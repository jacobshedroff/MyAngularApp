/**
 * Created by jshedrof on 3/22/2017.
 */
angular.module("root", [])
    .controller("index", ["$scope", '$http', function($scope, $http) {
        
        $scope.movies;
        $scope.genreList;
        $scope.edit = false;
        $scope.editItem = {};
        
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
                })
                .error(function(data, status, headers, config) {
                    alert("Could not post Movie : " + status);
                });
        };
        
        
        $scope.editItem2 = function(movie){
            $scope.id = $scope.getId(movie.title);
            $scope.edit = true;
            $scope.editItem.title = movie.title;
            $scope.editItem.year = movie.year;
            $scope.editItem.genreId = movie.genreId;
        };
        
        $scope.getId = function(title){
            for(var m = 1 in $scope.movies){
                if($scope.movies[m].title == title){
                    var index = parseInt(m) + 1;
                    return index.toString();
                }
            }
        };
        
        $scope.updateMovie = function(movie) {
            
            var data = JSON.stringify({
                title: movie.title,
                year: movie.year,
                genreId : movie.genreId.name
            });
            $http.put('/movies/' + $scope.id, data)
                .success(function(data, status, headers, config){
                    $scope.getAllMovies();
                    $scope.editItem = {};
                }).error(function(data, status, headers, config) {
                alert("Could not update Movie : " + status);
            });
            $scope.edit = !$scope.edit;
        };
        
        $scope.deleteMovie = function(movie) {
            var data = JSON.stringify({
                title: movie.title,
                year: movie.year,
                genreId : movie.genreId.name
            });
            $http.delete('/movies/' + $scope.id)
                .success(function (data, status, headers, config) {
                    $scope.getAllMovies();
                    $scope.editItem = {};
                })
                .error(function (data, status, headers, config) {
                    alert("Could not delete Movie : " + status);
                })
            $scope.edit = !$scope.edit;
        }
        
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
