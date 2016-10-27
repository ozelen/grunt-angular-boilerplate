'use strict';

describe('Champ List Directive', function () {
  var scope, element, template;

  beforeEach(module('app', 'views/templates/champList.html'));

  beforeEach(inject(function ($rootScope, $compile, $templateCache, $filter) {

    scope = $rootScope.$new();

    template = $templateCache.get('views/templates/champList.html');
    $templateCache.put('views/templates/champList.html', template);

    scope.competitions = [
      {id:1,caption: 'Premier League',numberOfTeams:20,lastUpdated: 'today'},
      {id:2,caption: 'Bundesliga',numberOfTeams:20,lastUpdated: 'yesterday'},
    ];

    element = $compile('<champ-list competitions=competitions>')(scope);

    scope.$digest();
  }));

  it('should contain field name', function() {
    expect(element.find('td').text()).toContain('Premier League');
    expect(element.find('td').text()).toContain('Bundesliga');
  });

});
