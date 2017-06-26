class FlightSelectorController {
	/**
	* @param {FlightService} flightService
	*/
  constructor(flightService, $scope) {
    "ngInject"
    this.flightService = flightService;
    
    this.name = 'flightSelector';
    this.selectedAirport = null;
    this.selectedDate = new Date();
    this.$scope = $scope
    this.flightData = [];
    this.airports = [];
    this.sameAirports = false;
    this.errorMessage = '';
    this.dateOptions = {
        dateDisabled: false,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    this.popup1 = {
        opened: false
    };

    this.$onInit = function(){
      this.setDate()
    };

  	
    this.getFlightInfo = flightService.getFlightInfo()
      .then((response) => {
        this.flightData = response;
        this.airports = this.flightData.airports;
      });

    this.checkAirports = function() {
      this.sameAirports = this.flightService.originLocation.iataCode === this.flightService.destinationLocation.iataCode;
      this.errorMessage = this.sameAirports ? 'You destination must be a different location.' : '';
    };
  }

  open1() {
    this.popup1.opened = true;
  };

  airportSelected(item, model, label) {
      // this.errorMessage = '';
      this.selection = item;
      if(this.where == "origin") {
          this.$scope.$parent.$ctrl.originAirportData = item;
      }
      else if (this.where == "destination") {
          this.$scope.$parent.$ctrl.destinationAirportData = item;
      }
      // if(this.flightService.originLocation && this.flightService.destinationLocation) {
      //     this.checkAirports();
      // }

   };

   setDate() {
      if(this.where == "origin") {
          this.$scope.$parent.$ctrl.originDate = this.selectedDate;
      }
      else if (this.where == "destination") {
          this.$scope.$parent.$ctrl.destinationDate = this.selectedDate;
      }
   }


}

export default FlightSelectorController;
