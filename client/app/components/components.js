import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import FlightSelector from './flightSelector/flightSelector';

let componentModule = angular.module('app.components', [
  Home,
  About,
  FlightSelector
])

.name;

export default componentModule;
