// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
  .state( 'app.aboutus', {
    url: '/aboutus',
    views: {
      'menuContent' : {
        templateUrl: 'templates/aboutus.html' ,
      }
    }    
  } )
  
  .state( 'app.history', {
    url: '/history' ,
    views: {
      'menuContent' : {
        templateUrl: 'templates/history.html'
      }
    }
  } )
  
  .state( 'app.mvv', {
    url: '/mission-vision-and-values' ,
    views: {
      'menuContent':{
        templateUrl: 'templates/mvv.html'
      }
    }
  } )
  
  .state( 'app.screens', {
    url: '/screens' ,
    views: {
      'menuContent': {
        templateUrl: 'templates/screens.html'
      }
    }
  } )
  
  .state( 'app.kiosks', {
    url: '/kiosks' ,
    views: {
      'menuContent': {
        templateUrl: 'templates/kiosks.html'
      }
    }
  } )
  
  .state( 'app.booths', {
    url: '/booths' ,
    views: {
      'menuContent': {
        templateUrl: 'templates/booths.html'
      }
    }
  } )
  
  .state( 'app.mining', {
    url: '/mining' ,
    views: {
      'menuContent': {
        templateUrl: 'templates/mining.html'
      }
    }
  } )
  
  .state( 'app.software', {
    url: '/software' ,
    views: {
      'menuContent': {
        templateUrl: 'templates/software.html'
      }
    }
  } )
  
  .state( 'app.contact', {
    url: '/contact' ,
    views: {
      'menuContent' : {
        templateUrl: 'templates/formContact.html' ,
        controller: 'ContactCtrl'
      }
    }
  } )
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/aboutus');
});
