'use strict';

var ReservationActions = require('../../actions/ReservationActions');

/*
{
  baoTree: tree,                                          // Tree you'll be using paths to
  loadingCursor: ['view', 'loadingClass'],                // Path to Cursor of the loading className on tree
  componentToRenderCursor: ['view', 'componentToRender'], // Path to Cursor of string of which component to render
  routes: {
    locationSelect: {
      onHashChange: function() {
        ReservationFlowModelController.getReservationSession(); // Immediately get session on hashChange
                                                                // Or other data sequentially using deferredes
                                                                // Or ReservationActions.initialDataReady(true) and start lazy loading some stuff
      },
      waitOn: ReservationCursors.initialDataReady, // Path to a data ready cursor set after that in this instance would get set after successful session ajax call
      loading: 'loading',       // What class to put on container while waiting for data (for above cursor to be true,
      ready: true/false,        // A happy Boolean for anyone to use.
      onReady: fn,              // Any middleware where you want to pass props or do other synchronous stuff right before component mounts to avoid rerenders
                                // Useful for instance in setting LocationSearch type (pickup / dropoff)
      component: LocationSearch // Router will automatically set correct component type on tree when it is ready
                                // Switch defined in react component for instance in ReservationFlow.js
    }
  }
}
*/

var ReservationRouter = function(rules) {
  	this.routeRules = rules.routes;
    this.baoTree = rules.baoTree;
    this.currentHash = null;

    this.init = function() {
      this.initHashChangeHandler();
	  };

    this.initHashChangeHandler = function() {
      window.onhashchange = () => {
        var hash = location.hash;

        hash = hash.replace('#', '');

        this.currentHash = hash;

        this.baoTree.select(['view']).set('hash', hash);

        if(this.routeRules.hasOwnProperty(hash)) {
          //Set loading className if one exists otherwise fallback to 'loading'
          this.baoTree.select(['view']).set('loading', this.routeRules[hash].loading ? this.routeRules[hash].loading : 'loading');

          if(this.routeRules[hash].waitOn) { // Set up listener for when data is ready
            this.baoTree.select(this.routeRules[hash].waitOn)
              .once('update', () => this.componentIsReady());
          }

          if(this.routeRules[hash].onHashChange) // Hash change immediately gets called after the data ready handler is set
            this.routeRules[hash].onHashChange();

          if(!this.routeRules[hash].waitOn) // If the data didn't have a dataReady handler and
            this.componentIsReady();        // the hashChange logic has been called, the component is ready

        } else {
          console.log('route has no rules defined'); //Could set up generic error handlers here. 404's and so on.
        }
      };

      window.onhashchange();
    };

    this.componentIsReady = function() {
      if(this.routeRules[this.currentHash].onReady) {
        this.routeRules[this.currentHash].onReady();
      }
      this.routeRules[this.currentHash].ready = true;
      this.mountComponent(this.routeRules[this.currentHash].component);
      this.baoTree.select(['view']).set('loading', null);
    };

    this.mountComponent = function(component) {
      this.baoTree.select(['view']).set('componentToRender', component);
    }

};

module.exports = ReservationRouter;