import template from './flightSelector.html';
import controller from './flightSelector.controller';
import './flightSelector.scss';

let flightSelectorComponent = {
  bindings: {
  	where: '<',
  	selection: '<'
  },
  template,
  controller,
  controllerAs: 'fs'
};

export default flightSelectorComponent;
