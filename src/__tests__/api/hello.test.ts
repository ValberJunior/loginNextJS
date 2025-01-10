import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/hello';

test('API hello returns John Doe', () => {
  const { req, res } = createMocks();
  handler(req, res);
  expect(res._getStatusCode()).toBe(200);
  expect(res._getData()).toEqual(JSON.stringify({ name: 'John Doe' }));
});