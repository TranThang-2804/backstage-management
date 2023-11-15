import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const infraSelfServicePortalPlugin = createPlugin({
  id: 'infra-self-service-portal',
  routes: {
    root: rootRouteRef,
  },
});

export const InfraSelfServicePortalPage = infraSelfServicePortalPlugin.provide(
  createRoutableExtension({
    name: 'InfraSelfServicePortalPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.MainPage),
    mountPoint: rootRouteRef,
  }),
);
