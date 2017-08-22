const app = require('./app');
const request = require('supertest');

describe('GET /about/', () => {
  test('should return successfully', () => {
    // use .then() to manage the async tests
    // return the promise to jest
    return request(app)
      .get('/about/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('About what?');
      });
      // .expect('Content-Type', 'application/json')
  });
});
