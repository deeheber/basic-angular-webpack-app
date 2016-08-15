import './main.css';
import angular from 'angular';
import getCow from './cow';

const app = angular.module('myApp', []);

app.controller('main', function($scope){
  $scope.name = 'world';
});

console.log(getCow());
