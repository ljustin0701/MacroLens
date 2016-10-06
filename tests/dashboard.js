var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Dashboard Controller', function() {
	it('should show the dashboard on /dashboard GET', (done) => {
		chai.request(server)
		.get('/dashboard')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			done();
		});
	}); // /dashboard
	it('should show a page to upload a new photo GET', (done) => {
		chai.request(server)
		.get('/dashboard/new')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			done();
		});
	}); // /dashboard/new
	it('should be able to display a photo GET', (done) => {
		chai.request(server)
		.get('/dashboard/:id')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			expect(res.text).to.include(':id')
			done();
		});
	}); // /dashboard/:id
	it('should be able to edit a photo GET', (done) => {
		chai.request(server)
		.get('/dashboard/:id/edit')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			expect(res.text).to.include(':id');
			done();
		});
	}); // /dashboard/:id/edit
	it('should be able to update a photo PUT', (done) => {
		chai.request(server)
		.get('/dashboard/:id')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			expect(res.text).to.include(':id');
			done();
		});
	}); // /dashboard/:id
	it('should be able to delete a photo DELETE', (done) => {
		chai.request(server)
		.get('/dashboard/:id')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			expect(res.text).to.include(':id');
			done();
		});
	}); // /dashboard/:id
	it('should be able to search for users GET', (done) => {
		chai.request(server)
		.get('/dashboard/search/:username')
		.end((err,res) => {
			expect(res.status).to.equal(200);
			expect(res.text).to.include(':username');
			done();
		});
	}); ///dashboard/search/:username
});
