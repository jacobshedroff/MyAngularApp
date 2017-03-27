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
        
        $scope.addItem = function(movie) {
            $scope.movies.push({
                "title": movie.title,
                "year":  movie.year,
                "genre": movie.genre_id
            });
        };
        
        $scope.getAllMovies = function () {
            $http.get('/movies')
                .success(function (data, status, headers, config) {
                    $scope.movies = data._embedded.movies;
                    alert($scope.movies.toString())
                })
                .error(function (data, status, headers, config) {
                    alert("Could not get movies")
                });
        }
        
        $scope.getAllMovies();
    }]);
