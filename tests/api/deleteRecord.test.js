const frisby = require('frisby');

describe('DELETE /posts/:id', () => {
    it('should delete a post', async () => {
      await frisby
        .del('https://jsonplaceholder.typicode.com/posts/1')
        .expect('status', 200);
    });
  });
  