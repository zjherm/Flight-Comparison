import flightService from '../../services/flightService';

class HomeController {
  constructor(flightService, $filter) {
  	'ngInject';
    this.name = 'home';
    this.title = 'Find Flights'
    this.flightService = flightService;
    this.$filter = $filter;

    this.originAirportData = null;	
    this.destinationAirportData = null;
    this.originDate = null;	
    this.destinationDate = null;

    this.flightSearchResults = null;

    this.airportsSelectedCorrectly = false;

    this.$doCheck = function() {
    	this.airportsSelectedCorrectly = this.originAirportData !== null && this.destinationAirportData !== null
    					   && this.originAirportData.iataCode !== this.destinationAirportData.iataCode;
    }

  }

  searchFlights() {
  	// this.flightService.searchFlights(originAirportData.iataCode, destinationAirportData.iataCode);
  	let originCode = this.originAirportData.iataCode;
  	let desintationCode = this.destinationAirportData.iataCode;
  	let originDate =  this.$filter('date')(this.originDate, 'yyyy-MM-dd');  //{{1288323623006 | date:'yyyy-MM-dd'}}
  	let destinationDate =  this.$filter('date')(this.destinationDate, 'yyyy-MM-dd'); //{{1288323623006 | date:'yyyy-MM-dd'}}

  	console.log('originDate: ' + this.$filter('date')(this.originDate, 'yyyy-MM-dd'));

  	this.searchFlightsPromise = this.flightService.searchFlights(originCode, desintationCode, originDate, destinationDate)
  	  .then((response) => {
  	    this.flightSearchResults = response;
  	    console.log(this.flightSearchResults);
  	});


  }
  
}

export default HomeController;
