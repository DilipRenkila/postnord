import { BitbucketApi, bitbucketApiRef } from './api';
import {
  configApiRef,
  createApiFactory,
  createPlugin,
  discoveryApiRef,
  identityApiRef
} from '@backstage/core-plugin-api';
import {
  scmIntegrationsApiRef,
} from '@backstage/integration-react';
import { rootRouteRef } from './routes';


export const bitbucketPipelinesPlugin = createPlugin({
  id: 'bitbucket-pipelines',
  apis: [
    createApiFactory({
      api: bitbucketApiRef,
      deps: { discoveryApi: discoveryApiRef, identityApi: identityApiRef, configApi: configApiRef, scmIntegrationsApi: scmIntegrationsApiRef },
      factory: ({ }) => {
        return new BitbucketApi({ 
          username: "diliprenkila", 
          password: "ATBBfSE56GHxybjRpxyVnALtNHB3882C38E2"
        });
      },
    }),
  ],
  routes: {
    explore: rootRouteRef,
  },
});