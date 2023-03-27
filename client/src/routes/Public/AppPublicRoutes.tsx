import {
  AboutUs,
  ContactUs,
  Home,
  OurClients,
  OurProducts,
  PhysicalActivityPlan,
  QualityOfLife,
  SustainableDevelopment,
} from '@@/'
import { Outlet, Route } from 'react-router-dom'
import { Layout } from '../../components'
import { PublicRoutes } from '../../models/routes'
import AppRoutesWithNotFound from '../AppRoutesWithNotFound'

function AppPublicRoutes() {
  return (
    <AppRoutesWithNotFound>
      <Route
        path='/'
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<Home />} />
        <Route path={PublicRoutes.ABOUTUS} element={<AboutUs />} />
        <Route path={PublicRoutes.CONTACTUS} element={<ContactUs />} />
        <Route
          path={PublicRoutes.PHYSICALACTIVITYPLAN}
          element={<PhysicalActivityPlan />}
        />
        <Route path={PublicRoutes.QUALITYOFLIFE} element={<QualityOfLife />} />
        <Route
          path={PublicRoutes.SUSTAINABLEDEVELOPMENT}
          element={<SustainableDevelopment />}
        />
        <Route path={PublicRoutes.OURCLIENTS} element={<OurClients />} />
        <Route path={PublicRoutes.OURPRODUCTS} element={<OurProducts />} />
      </Route>
    </AppRoutesWithNotFound>
  )
}
export default AppPublicRoutes
