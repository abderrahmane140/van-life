import './App.css'
  
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import './server'
import Vans, { loader as vansloader } from './pages/vans/Vans'
import VanDetail,{loader as vanDetailLoader} from './pages/vans/vanDetail'
import Layout from './component/LAyout'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './component/HostLayout'
import Dashboard from './pages/host/Dashboard'
import HostVans,{loader as hostVansLoader} from './pages/host/HostVans'
import HostVansDetail,{loader as hostVanDeatailLoader} from './pages/host/HostVansDetail'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVanPricing from './pages/host/HostVanPricing'
import NotFound from './pages/notFound'
import Error from './component/Error';
import Login, {loader as loginLoader,action as loginAction}from './pages/Login';
import { requireAuth } from "./utils.js"

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
  <Route index element={<Home />} />
  <Route path='about' element={<About />} />
  <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />
  <Route path='vans' element={<Vans />} loader={vansloader} errorElement={<Error />}/>
  <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />}/>


  <Route path="host" element={<HostLayout />}>
    <Route index element={<Dashboard />} loader={async ({ request }) => await requireAuth(request)} />
    <Route path="income" element={<Income />} loader={async ({ request }) => await requireAuth(request)} />
    <Route path="reviews" element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
    <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<HostVansDetail />} loader={hostVanDeatailLoader} errorElement={<Error />}>
      <Route index element={<HostVanInfo />} loader={async ({ request }) => await requireAuth(request)} />
      <Route path="photos" element={<HostVanPhotos />} loader={async ({ request }) => await requireAuth(request)} />
      <Route path="pricing" element={<HostVanPricing />} loader={async ({ request }) => await requireAuth(request)} />
    </Route>

  </Route>
  <Route path="*" element={<NotFound />}/>
  {/* * mean splate route  */}
  </Route>

))
function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
//i use this the way because <BrowserRouter>  not support the data APIs:
export default App
