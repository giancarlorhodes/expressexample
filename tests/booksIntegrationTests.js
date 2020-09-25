/* eslint-disable no-console */
require('should');

process.env.DB_ENV = 'TEST';
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app.js');

const Book = mongoose.model('Book');
const agent = request.agent(app);

describe('Book Crud Test', () => {
  it('should allow a post to be posted and return read and _id', (done) => {
    const jsonToSend = { title: 'New Book Test', author: 'Firstname Lastname', genre: 'Non-fiction' };
    agent.post('/api/books')
      .send(jsonToSend)
      .expect(200)
      .end((err, results) => {
        // console.log(results);
        // results.body.should.not.equal(false);
        results.body.should.have.property('_id');
        done();
      });
  });

  afterEach((done) => {
    Book.deleteMany({}).exec();
    done();
  });

  after((done) => {
    mongoose.connection.close();
    app.server.close(done());
  });
});
