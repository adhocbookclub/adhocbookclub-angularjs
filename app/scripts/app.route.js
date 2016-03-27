'use strict';

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/')

  // Now set up the states
  $stateProvider
  .state('/', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  .state('join', {
    url: '/join',
    templateUrl: 'views/join.html'
  })
  .state('members', {
    url: '/members',
    templateUrl: 'views/members.html',
    controller: 'MembersCtrl'
  })
  .state('past-books', {
    url: '/past-books',
    templateUrl: 'views/past-books.html'
  });
});
