import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const terraformPortalPlugin = createPlugin({
  id: 'terraform-portal',
  routes: {
    root: rootRouteRef,
  },
});

export const TerraformPortalPage = terraformPortalPlugin.provide(
  createRoutableExtension({
    name: 'TerraformPortalPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
