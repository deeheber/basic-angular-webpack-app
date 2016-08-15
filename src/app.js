import './main.css';
import angular from 'angular';
//import getCow from './cow';
import cowsay from 'cowsay-browser';

const app = angular.module('myApp', []);

app.controller('main', function($scope){
  $scope.name = 'world';
  $scope.cow = function(){
    return cowsay.think({
      text: 'Cows are cool',
      e: 'oO',
      T: 'U'
    });
  };

});

//console.log(getCow());
