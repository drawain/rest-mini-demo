var expect = require('chai').expect;
var request = require('supertest');
var app = require('./server');

describe('Meow endpoint', function() {

    beforeEach(function() {
        app.init();
    });

    describe('GET', function() {
        it('should respond with the value of meow', function(done) {
            request(app)
                .get('/api/meow')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res){
                    if (err) throw err;
                    expect(res.body).to.eql({ theValueOfMeow: 'meow1' });
                    done();
                });
        });
    });



    describe('POST', function() {
        it('should set the value of meow', function(done) {
            request(app)
                .post('/api/meow')
                .send("meowinput=newValue")
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res){
                    if (err) throw err;
                    expect(res.body).to.eql({ theValueOfMeow: 'newValue' });
                    expect(app.meow).to.eql('newValue');
                    done();
                });
        });
    });

});