import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { terraformPortalPlugin, TerraformPortalPage } from '../src/plugin';

createDevApp()
  .registerPlugin(terraformPortalPlugin)
  .addPage({
    element: <TerraformPortalPage />,
    title: 'Root Page',
    path: '/terraform-portal'
  })
  .render();
