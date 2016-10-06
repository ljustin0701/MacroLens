var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Index Controller', function() {
	it('should load the homepage on / GET'); // /
	it('should sign-in the user POST'); // /sign-in
	it('should register the user POST'); // /register
	it('should show the user profile page GET'); // /:id
});
