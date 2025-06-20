import { BrowserRouter,Routes, Route } from "react-router-dom"
import React, {lazy,Suspense } from "react"
import { Box } from "@mui/system"

const RestaurantManagement=React.lazy(()=>import('../adminflow/RestaurantManagement'))
const OrderManagement=React.lazy(()=>import('../adminflow/OrderManagement'))
const UserManagement=React.lazy(()=>import('../adminflow/UserManagement'))
const DiscountandPromo=React.lazy(()=>import('../adminflow/DiscountandPromo'))
const ConfigurationSettings=React.lazy(()=>import('../adminflow/ConfigurationSettings'))
const AdminLayout=React.lazy(()=>import('../adminflow/AdminLayout'))
const Dashboard=React.lazy(()=>import('../adminflow/Dashboard'))
const RestuarentDetails=React.lazy(()=>import('../adminflow/RestuarentDetails'))
const OrderandBills=React.lazy(()=>import('../adminflow/OrderandBills'))
const UserprofileInfo=React.lazy(()=>import('../adminflow/Userprofile'))
const Addcoupon=React.lazy(()=>import('../adminflow/AddCoupon'))
const PartnerCommissionRule=React.lazy(()=>import('../adminflow/PartnerCommissionRule'))
const Taxsettings=React.lazy(()=>import('../adminflow/Taxsettings'))
const AddTax=React.lazy(()=>import('../adminflow/AddTax'))
const Profile=React.lazy(()=>import('../adminflow/Profile'))
const ProfilePasswordupdate=lazy(()=>import('../adminflow/ProfilePasswordupdate'))

const Adminroutes = () => {
  return (
  <BrowserRouter>
  <Suspense fallback={<Box>Loading...</Box>}>
  <Routes>
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Dashboard />}/>
      <Route path="dashboard" element={<Dashboard />}/>
      <Route path="restaurant-management" element={<RestaurantManagement />}/>
      <Route path="restaurant-management/pending-request" element={<RestaurantManagement/>}/>
      <Route path="restaurant-management/suspend-account" element={<RestaurantManagement/>}/>
      <Route path="restaurant-management/restaurant-details" element={<RestuarentDetails/>}/> 
      <Route path="order-management" element={<OrderManagement />}/>
      <Route path="order-management/order-bills" element={<OrderandBills />}/>
      <Route path="user-management" element={<UserManagement />}/>
      <Route path="user-management/user-profile" element={<UserprofileInfo />}/>
      <Route path="user-management/suspend-user" element={<UserManagement />}/>
      <Route path="discountpromo" element={<DiscountandPromo />}/>
      <Route path="discountpromo/admin-coupon" element={<DiscountandPromo />}/>
      <Route path="discountpromo/add-coupon" element={<Addcoupon />}/>
      <Route path="configsetting" element={<ConfigurationSettings />}/>
      <Route path="configsetting/partner-bankdetails" element={<ConfigurationSettings />}/>
      <Route path="configsetting/partner-commission" element={<PartnerCommissionRule />}/>
      <Route path="configsetting/partner-commission/addpartner" element={<PartnerCommissionRule />}/>
      <Route path="configsetting/taxsettings" element={<Taxsettings />}/>
      <Route path="configsetting/taxsettings/addtax" element={<AddTax />}/>
      <Route path="profile" element={<Profile />}/>
      <Route path="profile/update-password" element={<ProfilePasswordupdate />}/>
 </Route>
</Routes>
</Suspense>
  </BrowserRouter>
  )
}

export default Adminroutes
