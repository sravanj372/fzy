import {Routes, Route } from "react-router-dom"
import RestaurantManagement from "../adminflow/RestaurantManagement"
import OrderManagement from "../adminflow/OrderManagement"
import UserManagement from "../adminflow/UserManagement"
import DiscountandPromo from "../adminflow/DiscountandPromo"
import ConfigurationSettings from "../adminflow/ConfigurationSettings"
import AdminLayout from "../adminflow/AdminLayout"
import Dashboard from "../adminflow/Dashboard"
import RestuarentDetails from "../adminflow/RestuarentDetails"
import OrderandBills from "../adminflow/OrderandBills"
import UserprofileInfo from "../adminflow/Userprofile"
import Addcoupon from "../adminflow/AddCoupon"
import PartnerCommissionRule from "../adminflow/PartnerCommissionRule"
import Taxsettings from "../adminflow/Taxsettings"
import AddTax from "../adminflow/AddTax"
import Profile from "../adminflow/Profile"
import ProfilePasswordupdate from "../adminflow/ProfilePasswordupdate"

const Adminroutes = () => {
  return (
 
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
)

}

export default Adminroutes
