import './main.css';
import angular from 'angular';
import cowsay from 'cowsay-browser';
import getTest from './test';

const app = angular.module('myApp', []);

app.controller('main', function($scope){
  $scope.name = 'your name here';
  $scope.phrase = 'Mooooooo';
  $scope.toggle = function(){
    $scope.greeting = !$scope.greeting;
  };
  $scope.cow = function(phrase){
    return cowsay.think({
      text: phrase,
      e: 'oO',
      T: 'U'
    });
  };
  $scope.dogs = [{name: 'Bert', color: 'yellow', gender: 'M'}, {name: 'Elmo', color: 'red', gender: 'F'}, {name: 'Ernie', color: 'orange', gender: 'M'}];
  $scope.genderFilter = function(value){
    console.log(value);
    return function(dog){
      // could probably do this with a switch
      if(value.Female && value.Male){
        return dog;
      } else if(value.Female){
        return dog.gender == 'F';
      } else if(value.Male){
        return dog.gender == 'M';
      } else {
        return $scope.dogs;
      }
    };
  };
});

console.log(getTest());
