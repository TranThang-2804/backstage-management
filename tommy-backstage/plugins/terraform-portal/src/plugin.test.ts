import { terraformPortalPlugin } from './plugin';

describe('terraform-portal', () => {
  it('should export plugin', () => {
    expect(terraformPortalPlugin).toBeDefined();
  });
});
