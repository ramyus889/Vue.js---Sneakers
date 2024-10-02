import UseFavorites from '@/pages/UseFavorites.vue';
import UseHome from '@/pages/UseHome.vue';

export const routes = [
  {
    path: '/',
    component: UseHome
  },
  {
    path: '/favorites',
    component: UseFavorites
  }
];
