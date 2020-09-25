const should = require('should');
const sinon = require('sinon');
const booksController = require('../controllers/booksController');

describe('Book Controller Tests:', () => {
  describe('Post', () => {
    it('should not allow an empty author on post', () => {
      const Book = function (book) { this.save = () => {}};

      const req = {
        body: {
          title: 'Book Title'
        }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      };

      const controller = booksController(Book);
      controller.post(req, res);

      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('Author is required').should.equal(true);
    });
  });
});
