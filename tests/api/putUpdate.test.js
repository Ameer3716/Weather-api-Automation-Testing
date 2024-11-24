const frisby = require('frisby');

describe('PUT /posts/:id', () => {
    it('should update an existing post', async () => {
      await frisby
        .put('https://jsonplaceholder.typicode.com/posts/1', {
          body: {
            id: 1,
            title: 'updated title',
            body: 'updated body',
            userId: 1,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .expect('status', 200)
        .expect('json', 'title', 'updated title');
    });
  });
  