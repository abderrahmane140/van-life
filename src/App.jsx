import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import './server'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/vanDetail'
import Layout from './component/LAyout'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './component/HostLayout'
import Dashboard from './pages/host/Dashboard'
import HostVans from './pages/host/HostVans'
import HostVansDetail from './pages/host/HostVansDetail'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVanPricing from './pages/host/HostVanPricing'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VanDetail />} />


        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansDetail />} >
            <Route index element={<HostVanInfo />} />
            <Route path="photos" element={<HostVanPhotos />} />
            <Route path="pricing" element={<HostVanPricing />} />
          </Route>

        </Route>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
