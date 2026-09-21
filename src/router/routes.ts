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
    props: {
      featureKey: 'paymentTracking',
      locale: 'en',
      routePath: '/en/features/payment-tracking',
    },
  },
  {
    path: '/en/features/trust',
    name: 'en-trust',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'trust', locale: 'en', routePath: '/en/features/trust' },
  },
  {
    path: '/blog',
    name: 'blog-redirect',
    component: () => import('@/pages/BlogRedirectPage.vue'),
  },
  {
    path: '/en/blog',
    name: 'en-blog',
    component: () => import('@/pages/BlogIndexView.vue'),
    props: { locale: 'en' },
  },
  {
    path: '/en/blog/what-is-a-tanda-how-it-works',
    name: 'en-blog-what-is-a-tanda',
    component: () => import('@/pages/BlogPostView.vue'),
    props: {
      slug: 'what-is-a-tanda-how-it-works',
      locale: 'en',
      routePath: '/en/blog/what-is-a-tanda-how-it-works',
    },
  },
  {
    path: '/en/blog/how-to-build-trust-in-a-tanda',
    name: 'en-blog-build-trust',
    component: () => import('@/pages/BlogPostView.vue'),
    props: {
      slug: 'how-to-build-trust-in-a-tanda',
      locale: 'en',
      routePath: '/en/blog/how-to-build-trust-in-a-tanda',
    },
  },
  {
    path: '/en/blog/how-to-start-and-organize-a-tanda-group',
    name: 'en-blog-organize-group',
    component: () => import('@/pages/BlogPostView.vue'),
    props: {
      slug: 'how-to-start-and-organize-a-tanda-group',
      locale: 'en',
      routePath: '/en/blog/how-to-start-and-organize-a-tanda-group',
    },
  },
  {
    path: '/en/blog/tanda-vs-traditional-savings',
    name: 'en-blog-vs-traditional-savings',
    component: () => import('@/pages/BlogPostView.vue'),
    props: {
      slug: 'tanda-vs-traditional-savings',
      locale: 'en',
      routePath: '/en/blog/tanda-vs-traditional-savings',
    },
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
    props: {
      featureKey: 'onlineTandas',
      locale: 'es',
      routePath: '/es/caracteristicas/tandas-en-linea',
    },
  },
  {
    path: '/es/caracteristicas/ahorro-grupal',
    name: 'es-ahorro-grupal',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: {
      featureKey: 'groupSavings',
      locale: 'es',
      routePath: '/es/caracteristicas/ahorro-grupal',
    },
  },
  {
    path: '/es/caracteristicas/control-pagos',
    name: 'es-control-pagos',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: {
      featureKey: 'paymentTracking',
      locale: 'es',
      routePath: '/es/caracteristicas/control-pagos',
    },
  },
  {
    path: '/es/caracteristicas/confianza',
    name: 'es-confianza',
    component: () => import('@/pages/FeatureContentView.vue'),
    props: { featureKey: 'trust', locale: 'es', routePath: '/es/caracteristicas/confianza' },
  },
  {
    path: '/es/blog',
    name: 'es-blog',
    component: () => import('@/pages/BlogIndexView.vue'),
    props: { locale: 'es' },
  },
  {
    path: '/es/blog/que-es-una-tanda-como-funciona',
    name: 'es-blog-que-es-una-tanda',
    component: () => import('@/pages/BlogPostView.vue'),
    props: {
      slug: 'que-es-una-tanda-como-funciona',
      locale: 'es',
      routePath: '/es/blog/que-es-una-tanda-como-funciona',
    },
  },
  {
    path: '/es/blog/como-generar-confianza-en-una-tanda',
    name: 'es-blog-generar-confianza',
    component: () => import('@/pages/BlogPostView.vue'),
    props: {
      slug: 'como-generar-confianza-en-una-tanda',
      locale: 'es',
      routePath: '/es/blog/como-generar-confianza-en-una-tanda',
    },
  },
  {
    path: '/es/blog/como-organizar-crear-grupo-tanda',
    name: 'es-blog-organizar-crear-grupo',
    component: () => import('@/pages/BlogPostView.vue'),
    props: {
      slug: 'como-organizar-crear-grupo-tanda',
      locale: 'es',
      routePath: '/es/blog/como-organizar-crear-grupo-tanda',
    },
  },
  {
    path: '/es/blog/tanda-vs-ahorro-tradicional',
    name: 'es-blog-vs-ahorro-tradicional',
    component: () => import('@/pages/BlogPostView.vue'),
    props: {
      slug: 'tanda-vs-ahorro-tradicional',
      locale: 'es',
      routePath: '/es/blog/tanda-vs-ahorro-tradicional',
    },
  },
  {
    path: '/en/privacy',
    name: 'en-privacy',
    component: () => import('@/pages/LegalView.vue'),
    props: { type: 'privacy', locale: 'en', routePath: '/en/privacy' },
  },
  {
    path: '/en/terms',
    name: 'en-terms',
    component: () => import('@/pages/LegalView.vue'),
    props: { type: 'terms', locale: 'en', routePath: '/en/terms' },
  },
  {
    path: '/es/privacidad',
    name: 'es-privacy',
    component: () => import('@/pages/LegalView.vue'),
    props: { type: 'privacy', locale: 'es', routePath: '/es/privacidad' },
  },
  {
    path: '/es/terminos',
    name: 'es-terms',
    component: () => import('@/pages/LegalView.vue'),
    props: { type: 'terms', locale: 'es', routePath: '/es/terminos' },
  },
  {
    path: '/privacy',
    name: 'privacy-redirect',
    component: () => import('@/pages/LegalRedirectPage.vue'),
    props: { type: 'privacy' },
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy-redirect',
    component: () => import('@/pages/LegalRedirectPage.vue'),
    props: { type: 'privacy' },
  },
  {
    path: '/terms',
    name: 'terms-redirect',
    component: () => import('@/pages/LegalRedirectPage.vue'),
    props: { type: 'terms' },
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-conditions-redirect',
    component: () => import('@/pages/LegalRedirectPage.vue'),
    props: { type: 'terms' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue'),
  },
]
