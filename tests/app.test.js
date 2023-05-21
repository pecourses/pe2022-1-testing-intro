const request = require('supertest')
const app = require('./../app')

describe('Testing app', function () {
  it('response from GET / should be 200 "Hello)"', function (done) {
    request(app).get('/').expect(200).expect('Hello)').end(done)
  })
  // Протестувати GET /users/4
  it('response from GET /users/4 should be 200 { name: "Test" }', function (done) {
    request(app).get('/users/4').expect(200).expect({ name: 'Test' }).end(done)
  })
})
