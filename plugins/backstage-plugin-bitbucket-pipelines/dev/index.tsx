import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { backstagePluginBitbucketPipelinesPlugin, BackstagePluginBitbucketPipelinesPage } from '../src/plugin';

createDevApp()
  .registerPlugin(backstagePluginBitbucketPipelinesPlugin)
  .addPage({
    element: <BackstagePluginBitbucketPipelinesPage />,
    title: 'Root Page',
    path: '/backstage-plugin-bitbucket-pipelines'
  })
  .render();
