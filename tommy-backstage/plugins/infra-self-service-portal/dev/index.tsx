import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { infraSelfServicePortalPlugin, InfraSelfServicePortalPage } from '../src/plugin';

createDevApp()
  .registerPlugin(infraSelfServicePortalPlugin)
  .addPage({
    element: <InfraSelfServicePortalPage />,
    title: 'Root Page',
    path: '/infra-self-service-portal'
  })
  .render();
