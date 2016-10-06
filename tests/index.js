var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Index Controller', function() {
	it('should load the homepage on / GET', (done) => {
		chai.request(server)
		.get('/')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			done();
		});
	}); // /
	it('should sign-in the user POST', (done) => {
		chai.request(server)
		.get('/sign-in')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			done();
		});
	}); // /sign-in
	it('should register the user POST', (done) => {
		chai.request(server)
		.get('/register')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			done();
		});
	}); // /register
	it('should show the user profile page GET', (done) => {
		chai.request(server)
		.get('/:id')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			expect(res.text).to.include(':id');
			done();
		});
	}); // /:id
});
