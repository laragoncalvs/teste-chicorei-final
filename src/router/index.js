import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ImagesView from '../views/ImagesView.vue'
import GalleryView from '../views/GalleryView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/finalizar-compra',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/imagens',
      name: 'gallery',
      component: GalleryView,

      children: [
        {path: '/imagens/:id',
        name: 'images',
        component: ImagesView,
        props: true}
      ]
    }

  ]
})

export default router
