angular.module('animalApp').controller('mainCtrl',function($scope, animalService){
  $scope.getAnimals = function(){
    animalService.getAllAnimals().then(function(res){
      console.log(res);
    });
  };
});
