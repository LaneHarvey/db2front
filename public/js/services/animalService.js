angular.module('animalApp').service('animalService',function($http){
  this.getAllAnimals = function(){
    return $http({
      method: 'GET',
      url: '/api/animals'
    });
  };


  this.createAnimal = function(animal){
    return $http({
      method: 'POST',
      url: '/api/animal',
      data: animal
    });
  };
});
