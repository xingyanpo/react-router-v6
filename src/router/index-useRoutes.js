import Redirect from '../components/Redirect';
import AuthComponent from '../components/AuthComponent';
import { useRoutes } from 'react-router-dom';
import LazyLoad from '../components/LazyLoad'

export default function MRouter() {
  const routes = useRoutes([
    {
      path: '/film', 
      element: LazyLoad('Film'),
      children: [
        {
          path: '',
          element: <Redirect to={'/film/nowplaying'}/>
        },
        {
          path: '/film/nowplaying',
          element: LazyLoad('film/Nowplaying')
        },
        {
          path: 'co mingsoon',
          element: LazyLoad('film/Comingsoon')
        }
      ]
    },
    {
      path: '/cinema',
      element: LazyLoad('Cinema')
    },
    {
      path: '/center',
      element: <AuthComponent>
        {LazyLoad('Center')}
      </AuthComponent>
    },
    {
      path: `/detail/:id`,
      element: LazyLoad('Detail')
    },
    {
      path: '/cinema/search',
      element: LazyLoad('Search')
    },
    {
      path: 'login',
      element: LazyLoad('Login')
    },
    {
      path: '/',
      element: LazyLoad('/film')
    },
    {
      path: '*',
      element: LazyLoad('NotFound')
    }
  ])
  return (
    routes
  )
}

