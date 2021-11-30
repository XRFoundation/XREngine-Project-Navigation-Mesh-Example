import type { ProjectConfigInterface } from '@xrengine/projects/ProjectConfigInterface'

const config: ProjectConfigInterface = {
  onEvent: undefined,
  thumbnail: '/static/xrengine_thumbnail.jpg',
  routes: {
    '/foo': {
      component: () => import('./index'),
      props: {
        exact: true
      }
    },
  },
  services: undefined,
  databaseSeed: undefined
}

export default config
