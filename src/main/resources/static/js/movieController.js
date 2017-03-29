/**
 * Created by jshedrof on 3/22/2017.
 */
angular.module("root", [])
    .controller("index", ["$scope", '$http', function($scope, $http) {
        
        if($scope.store == null) {
        
        }
        // $scope.movies = [
        //     {
        //         "title": "test1",
        //         "year": "2010",
        //         "genre": "Comedy"
        //     },
        //     {
        //         "title": "test2",
        //         "year": "2013",
        //         "genre": "Drama"
        //     },
        //     {
        //         "title": "test3",
        //         "year": "2014",
        //         "genre": "Action"
        //     }
        // ];
        
        $scope.movies;
        $scope.genreList;
        
        $scope.addItem = function(movie) {
            // $scope.movies.push({
            //     "title": movie.title,
            //     "year":  movie.year,
            //     "genre": movie.genre
            // });
    
            var data = JSON.stringify({
                title : movie.title,
                year : movie.year,
                genreId : movie.genre.id
            });
            
            $http.post('/movies', data)
                .success(function(data, status, headers, config) {
                    // data = JSON.stringify({
                    //     title : movie.title,
                    //     year : movie.year,
                    //     genre : movie.genre.name
                    // });
                    $scope.getAllMovies();
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
