import FlightSelectorModule from './flightSelector';
import FlightSelectorController from './flightSelector.controller';
import FlightSelectorComponent from './flightSelector.component';
import FlightSelectorTemplate from './flightSelector.html';

describe('FlightSelector', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FlightSelectorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FlightSelectorController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(FlightSelectorTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = FlightSelectorComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(FlightSelectorTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(FlightSelectorController);
    });
  });
});
