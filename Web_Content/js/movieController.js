/**
 * Created by jshedrof on 3/22/2017.
 */
// 'use strict';
// angular.module('movieController')
//     .controller('movieController', [$scope, function($scope){
//
//         $scope.testItems = ["test1", "test2", "test3"];
//         alert("this ia a test")
// }]);

angular.module("root", [])
    .controller("index", ["$scope", function($scope) {
        
        if($scope.store == null) {
        
        }
        $scope.movies = [
            {
                "title": "test1",
                "year": "2010",
                "genre": "Comedy"
            },
            {
                "title": "test2",
                "year": "2013",
                "genre": "Drama"
            },
            {
                "title": "test3",
                "year": "2014",
                "genre": "Action"
            }
        ];
        
        $scope.addItem = function(movie) {
            $scope.movies.push({
                "title": movie.title,
                "year":  movie.year,
                "genre": movie.genre
            });
        };
    }]);
