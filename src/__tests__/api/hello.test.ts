import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/hello';

describe('/api/hello API Endpoint', () => {
  it('should return a 200 status and the correct response', async () => {
    const { req, res } = createMocks();
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toEqual(JSON.stringify({ name: 'John Doe' }));
  });
});