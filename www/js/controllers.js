angular.module('starter.controllers', [])

.controller('appController', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.showModal = function() {
    $scope.modal.show();
  };

})

.controller('masterController', function($scope) {
  $scope.items = [
    { label: 'Item One', id: 1 },
    { label: 'Item Two', id: 2 },
    { label: 'Item Three', id: 3 },
    { label: 'Item Four', id: 4 },
    { label: 'Item Five', id: 5 },
    { label: 'Item Six', id: 6 }
  ];
})

.controller('detailController', function($scope, $stateParams) {
});
