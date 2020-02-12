import Users from './components/users/users';
import User from './components/user';
import Home from './components/home';

import Players from './components/players/players';
import Player from './components/players/player';
var ThemeRoutes = [
    {
      path: '/user',
      name: 'User',
      icon: 'mdi mdi-comment-processing-outline',
      component: User
    },
    {
      path: '/users',
      name: 'User',
      icon: 'mdi mdi-comment-processing-outline',
      component: Users
    },
    {
      path: '/players',
      name: 'Players',
      icon: 'mdi mdi-comment-processing-outline',
      component: Players
    },
    {
      path: '/players/add',
      name: 'Add Players',
      icon: 'mdi mdi-comment-processing-outline',
      component: Player
    },
    {
      path: '/',
      name: 'dashboard',
      icon: 'mdi mdi-comment-processing-outline',
      component: Home
    }
  ];

  export default ThemeRoutes;