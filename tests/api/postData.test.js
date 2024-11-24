const frisby = require('frisby');
describe('POST /posts', () => {
    it('should create a new post', async () => {
      await frisby
        .post('https://jsonplaceholder.typicode.com/posts', {
          body: {
            title: 'foo',
            body: 'bar',
            userId: 1,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .expect('status', 201)
        .expect('json', 'title', 'foo');
    });
  });
  
