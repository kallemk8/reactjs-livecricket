import Users from './components/users/users';
import User from './components/user';
import Home from './components/home';
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
      path: '/',
      name: 'dashboard',
      icon: 'mdi mdi-comment-processing-outline',
      component: Home
    }
  ];

  export default ThemeRoutes;