var proxyquire = require('proxyquire');
var path = require('path');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe('controllers/retrieveProductsController.js', function() {
    var resStub, setSpy, jsonSpy;
    beforeEach(function () {

        setSpy = sinon.stub();
        jsonSpy = sinon.stub();

        resStub={
            set: setSpy,
            json: jsonSpy
        }

        controller = proxyquire(path.join(process.cwd(), 'api/controllers', 'retrieveProductsController'), {
            
		});
    });

    it('Should export the main function', function() {
		expect(controller.retrieve).to.exist;
    });
    
    it('Should set the Headers on response', function() {  
        controller.retrieve(null, resStub);
        
        expect(resStub.set.calledWith('Access-Control-Allow-Origin', '*')).to.equal(true);
        expect(resStub.set.calledWith('Access-Control-Allow-Methods', 'GET')).to.equal(true);
    });
    
    it('Should call function returnin json', function() {  
        controller.retrieve(null, resStub);
        
        expect(resStub.json).to.have.been.called;
	});
});