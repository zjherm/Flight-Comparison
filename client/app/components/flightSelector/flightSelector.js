import angular from 'angular';
import uiRouter from 'angular-ui-router';
import flightSelectorComponent from './flightSelector.component';

let flightSelectorModule = angular.module('flightSelector', [
  uiRouter
])

.component('flightSelector', flightSelectorComponent)

.name;

export default flightSelectorModule;
