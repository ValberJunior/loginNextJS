import handler from '../pages/api/hello';
import { createMocks } from 'node-mocks-http';

describe('/api/hello API Endpoint', () => {
  it('should return a 200 status and a name', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toEqual(JSON.stringify({ name: 'John Doe' }));
  });
});