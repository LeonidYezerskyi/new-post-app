import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import cn from 'classnames';

import css from './App.module.css'

const LazyHomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LazyOfficesPage = lazy(() => import("./pages/OfficesPage/OfficesPage"));
const LazyNotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {

  return (
    <div>
      <nav className={css.header}>
        <NavLink to='/' className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>
          Check TTN
        </NavLink>
        <NavLink to='/offices' className={({ isActive }) =>
          cn(css.tabPage, { [css.active]: isActive, })}>
          Offices
        </NavLink>
      </nav>

      <>
        <Suspense>
          <Routes >
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/offices/*" element={<LazyOfficesPage />} />
            <Route path="/*" element={<LazyNotFoundPage />} />
          </Routes>
        </Suspense>
        <ToastContainer />

      </>
    </div>
  )
}

export default App
