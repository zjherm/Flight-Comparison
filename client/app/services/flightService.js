import angular from 'angular';

class FlightService {

    constructor($http, $q) {
        'ngInject';
        this.$http = $http;
        this.$q = $q;
        this.flightData = null;
        this.flightSearchResults = null;

        this.originLocation = null;
        this.destinationLocation = null;

        this.error = '';
    }
    getFlightInfo() {
        const flightSelectorURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';
        let deferred = this.$q.defer();
        this.$http.get(flightSelectorURL)
            .then((response) => {
                deferred.resolve(this.flightData = response.data)
            })
        return deferred.promise;
    }

    searchFlights(originCode, destinationCode, originDate, destinationDate) {
        const flightSearchURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/' + originCode + '/to/' + destinationCode + '/' + originDate + '/' + destinationDate + '/250/unique/?limit=15&offset-0';
        let deferred = this.$q.defer();
        this.$http.get(flightSearchURL)
            .then((response) => {
                deferred.resolve(this.flightSearchResults = response.data)
            })
        return deferred.promise;
    }

}

export default FlightService;