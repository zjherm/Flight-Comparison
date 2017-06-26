import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Bootstrap from 'angular-ui-bootstrap'
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
// import services from './services/services';

import flightService from './services/flightservice';

import 'normalize.css';

angular.module('app', [
    uiRouter,
    Bootstrap,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)

  .service('flightService', flightService);
