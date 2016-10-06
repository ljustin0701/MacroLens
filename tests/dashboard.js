var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Dashboard Controller', function() {
	it('should show the dashboard on /dashboard GET'); // /dashboard
	it('should show a page to upload a new photo GET'); // /dashboard/new
	it('should be able to display a photo GET'); // /dashboard/:id
	it('should be able to edit a photo GET'); // /dashboard/:id/edit
	it('should be able to update a photo PUT'); // /dashboard/:id
	it('should be able to delete a photo DELETE'); // /dashboard/:id
	it('should be able to search for users GET'); ///dashboard/search/:username
});
