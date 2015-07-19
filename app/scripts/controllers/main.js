'use strict';

angular.module('hierarchicalViewApp')
  .controller('MainCtrl', function ($scope, $resource) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.root = {name: 'Root', children: [{name: 'Part1', children: [{name: 'Section 1', children: [{name: 'Subsection 1', children: [{name: 'Chapter 1', children: []},{name: 'Chapter 2', children: []}]}]},{name: 'Section 2', children: [{name: 'Subsection 2', children: []}]}]}]};
    $scope.showChildren = false;

    $scope.sortableOptions = {
      connectWith: ".apps-container"
    };

    var errorFn = function () {
      console.log('error occurred while fetching data');
    };

    //TODO:: Obtain hierarchical data from REST api
    $scope.getStructuralData = function() {
      $resource('').get(function(data){
        $scope.root = data;
      }, errorFn);
    };
  });
