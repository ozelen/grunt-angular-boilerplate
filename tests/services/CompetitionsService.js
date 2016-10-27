describe('CompetitionsService', function() {
  var $httpBackend;
  var CompetitionsService;

  beforeEach(module('app'));

  beforeEach(inject(function(_$httpBackend_, _CompetitionsService_) {
    CompetitionsService = _CompetitionsService_;
    $httpBackend = _$httpBackend_
  }));

  it('should competitions from API', function() {

    $httpBackend.expectGET('http://api.football-data.org/v1/competitions/?season=1996').
      respond(200, [{id: 123, name: 'Euro 1996'}]);

    CompetitionsService.fetchCompetitions('1996').
      then(function(competitions) {
        expect(competitions).toEqual([{id: 123, name: 'Euro 1996'}]);
      }).
      catch(function(err) {
        throw 'Resquest should not fail'; // <- NOTICE: catching error
      });

    $httpBackend.flush();
  });

  it('should fail with an error on incorrect year', function() {

    $httpBackend.expectGET('http://api.football-data.org/v1/competitions/?season=1854').
      respond(403, {"error": "The resource you are looking for is restricted"});

    CompetitionsService.fetchCompetitions('1854').
      then(function(competitions) {
        throw 'Request should not succeed'; // <- NOTICE: success is not expected
      }).
      catch(function(err) {
        expect(err).toEqual("The resource you are looking for is restricted");
      });

    $httpBackend.flush();
  });

  // TODO: get competitions by multiple years
  xit('should get competitions by multiple years', function() {
    $httpBackend.expectGET('http://api.football-data.org/v1/competitions/?season=1996').
      respond(200, [{id: 123, name: 'Euro 1996'}]);

    $httpBackend.expectGET('http://api.football-data.org/v1/competitions/?season=2006').
      respond(200, [{id: 123, name: 'Euro 2006'}]);

    $httpBackend.expectGET('http://api.football-data.org/v1/competitions/?season=1996').
      respond(200, [{id: 123, name: 'Euro 2016'}]);

    CompetitionsService.fetchCompetitions('1996,2006,2016').
      then(function(competitions) {
        expect(competitions).toEqual([
          {id: 123, name: 'Euro 1996'},
          {id: 123, name: 'Euro 2006'},
          {id: 123, name: 'Euro 2016'}
        ]);
      }).catch(function() {
        throw 'Request should not fail';
      });

    $httpBackend.flush();
  });

});