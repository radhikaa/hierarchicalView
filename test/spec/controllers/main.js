'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('hierarchicalViewApp'));

  var MainCtrl,
    scope, httpBackend;

  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should fetch database documents by document id', function () {
    var data = {name: 'Book', children: []};
    httpBackend.expectGET('').respond(200, data);

    scope.getStructuralData();

    httpBackend.flush();

    expect(scope.root.name).toBe(data.name);
  });
});

