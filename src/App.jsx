import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import css from './App.module.css'

const LazyHomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LazyOfficesPage = lazy(() => import("./pages/OfficesPage/OfficesPage"));
const LazyNotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {

  return (
    <div>
      <nav className={css.header}>
        <NavLink to='/' >
          Home
        </NavLink>
        <NavLink to='/offices' >
          List of offices
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
      </>
    </div>
  )
}

export default App
