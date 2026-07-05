import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'redirect',
    component: () => import('@/pages/RedirectPage.vue'),
  },
  {
    path: '/en',
    name: 'en-home',
    component: () => import('@/pages/en/HomePage.vue'),
  },
  {
    path: '/en/features/online-tandas',
    name: 'en-online-tandas',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'onlineTandas', locale: 'en', routePath: '/en/features/online-tandas' },
  },
  {
    path: '/en/features/group-savings',
    name: 'en-group-savings',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'groupSavings', locale: 'en', routePath: '/en/features/group-savings' },
  },
  {
    path: '/en/features/payment-tracking',
    name: 'en-payment-tracking',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'paymentTracking', locale: 'en', routePath: '/en/features/payment-tracking' },
  },
  {
    path: '/en/features/trust',
    name: 'en-trust',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'trust', locale: 'en', routePath: '/en/features/trust' },
  },
  {
    path: '/es',
    name: 'es-home',
    component: () => import('@/pages/es/HomePage.vue'),
  },
  {
    path: '/es/caracteristicas/tandas-en-linea',
    name: 'es-tandas-en-linea',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'onlineTandas', locale: 'es', routePath: '/es/caracteristicas/tandas-en-linea' },
  },
  {
    path: '/es/caracteristicas/ahorro-grupal',
    name: 'es-ahorro-grupal',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'groupSavings', locale: 'es', routePath: '/es/caracteristicas/ahorro-grupal' },
  },
  {
    path: '/es/caracteristicas/control-pagos',
    name: 'es-control-pagos',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'paymentTracking', locale: 'es', routePath: '/es/caracteristicas/control-pagos' },
  },
  {
    path: '/es/caracteristicas/confianza',
    name: 'es-confianza',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'trust', locale: 'es', routePath: '/es/caracteristicas/confianza' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue'),
  },
]
