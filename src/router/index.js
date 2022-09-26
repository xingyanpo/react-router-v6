import React from 'react'
import Redirect from '../components/Redirect';
import AuthComponent from '../components/AuthComponent';
import { Route,Routes } from 'react-router-dom';
// import Film from '../views/Film';
// import Cinema from '../views/Cinema';
// import Center from '../views/Center';
// import NotFound from '../views/NotFound';
// import Search from '../views/Search';
// import Nowpalying from '../views/film/Nowpalying';
// import Comingsoon from '../views/film/Comingsoon';
// import Detail from '../views/Detail';
// import Login from '../views/Login';
import LazyLoad from '../components/LazyLoad'

export default function MRouter() {
  return (
    <Routes>
      <Route path='/film' element={LazyLoad('Film')}>
        {/* <Route index element={<Nowpalying/>}/> */}  { /* 嵌套重定向一 index */ }
        <Route path='' element={<Redirect to='/film/nowplaying'/>}/> { /* 嵌套重定向写法二 path路径默认情况 重定向到nowplaying组件 */ }
        <Route path='/film/nowplaying' element={LazyLoad('film/Nowplaying')}/>  { /* 嵌套写法 ：1. 绝对路径写法 */ }
        <Route path='comingsoon' element={LazyLoad('film/Comingsoon')}/>  { /* 嵌套写法 ：2. 相对路径写法 */ }
      </Route>
      <Route path='/cinema' element={LazyLoad('Cinema')}/>
      <Route path='/center' element={<AuthComponent>
        {LazyLoad('Center')}
      </AuthComponent>}/>
      <Route path='/cinema/search' element={LazyLoad('Search')}/>
      <Route path='/login' element={LazyLoad('Login')}/>
      {/* <Route path='/detail' element={<Detail/>}/> */}
      {/* 动态路由 */}
      <Route path='/detail/:id' element={LazyLoad('Detail')}/>

       {/* <Route path="*" element={<Navigate to="/films"/>}/>  */}
      <Route path='/' element={<Redirect to='/film'/>}/>
      <Route path='*' element={LazyLoad('NotFound')}/>
    </Routes>
  )
}

