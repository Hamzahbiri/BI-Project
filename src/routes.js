import Views from './components/views.vue';
import Clicks from './components/Clicks.vue';
import Visites from './components/Visited.vue';
import TotalSpent from './components/Totalspent.vue';
import Accueil from './components/Accueil.vue';


export const routes = [
    {
        name: 'Accueil',
        path: '/',
        component: Accueil
    },
    {
      name: 'Totalspent',
      path: '/Totalspent',
      component: TotalSpent,
    },
    {
      name: 'Clicks',
      path: '/Clicks',
      component: Clicks,
    },
    ,
    {
      name: 'Visited',
      path: '/Visited',
      component: Visites,
    },
    ,
    {
      name: 'views',
      path: '/views',
      component: Views,
    },
   
  
];
