var proxyquire = require('proxyquire');
var path = require('path');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe('controllers/retrieveProductsRoutes.js', function() {
    var appStub, getSpy;
    beforeEach(function () {

        routeSpy = sinon.stub();
        getSpy = sinon.stub();

        appStub={
            route: sinon.stub().returns({
                get: getSpy
            })
        }

        controller = proxyquire(path.join(process.cwd(), 'api/routes', 'retrieveProductsRoutes'), {
            
		});
    });

    it('Should export the main function', function() {
		expect(controller).to.exist;
    });
    
    it('Should call function defining route', function() {  
        controller(appStub);
        
        expect(appStub.route).to.have.been.called;
    });
    
    it('Should call function defining method', function() {  
        controller(appStub);
        
        expect(appStub.route().get).to.have.been.called;
    });
    
});