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
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'appController'
  })

  .state('app.page', {
    url: "/page",
    views: {
      'menuContent': {
        templateUrl: "templates/page.html"
      }
    }
  })

  .state('app.tabs', {
    url: "/tabs",
    views: {
      'menuContent': {
        templateUrl: "templates/tabs.html"
      }
    }
  })

  .state('app.tabs.one', {
    url: "/one",
    views: {
      'tab-one': {
        templateUrl: "templates/tab1.html"
      }
    }

  })

  .state('app.tabs.two', {
    url: "/two",
    views: {
      'tab-two': {
        templateUrl: "templates/tab2.html"
      }
    }

  })

  .state('app.tabs.three', {
    url: "/three",
    views: {
      'tab-three': {
        templateUrl: "templates/tab3.html"
      }
    }

  })

    .state('app.master', {
      url: "/master",
      views: {
        'menuContent': {
          templateUrl: "templates/master.html",
          controller: 'masterController'
        }
      }
    })

  .state('app.detail', {
    url: "/master/:itemId",
    views: {
      'menuContent': {
        templateUrl: "templates/detail.html",
        controller: 'detailController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/page');
});
