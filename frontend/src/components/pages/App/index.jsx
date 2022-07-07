import { Route, Routes } from 'react-router-dom'
import React from 'react'

import Layout from 'components/layoutComponents/Layout'
import PageNotFound from 'components/pages/PageNotFound'
import Home from 'components/pages/Home'
import Mockup from 'components/pages/Mockup'

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />} >
      <Route index element={<Mockup />} />
      <Route path={encodeURIComponent('ADavidov')} element={<Home />} />
      <Route path={encodeURIComponent('DAkhmadullin')} element={<Home />} />
    </Route>
    <Route path='*' element={<PageNotFound />} />
  </Routes>
)


export default App
