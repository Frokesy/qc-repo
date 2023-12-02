import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import {
  AuthPage,
  LandingPage,
  ProtectedRoutes,
} from './components/layout/index'
// import DashboardRoutes from './dashboard/';
import Home from './screens/home/index'
import { Termspage } from './components/layout/termspage'
import { Privacypage } from './components/layout/privacypage'
import Reset from './screens/auth/reset'
import Login from './screens/auth/login'
import Signup from './screens/auth/createAccount'
import Dashboard from './screens/dashboard'
import BookDelivery from './screens/book/bookDelivery'
import Import from './screens/book/importDelivery'
import Domestic from './screens/book/domestic'
import TrackingPage1 from './screens/tracking/trackingPage1'
import TrackingPage2 from './screens/tracking/trackingPage2'
import TrackingPage3 from './screens/tracking/trackingPage3'
import TrackingPage4 from './screens/tracking/trackingPage4'
import { Aboutus } from './components/layout/about_us'
import TrackingPage5 from './screens/tracking/trackingPage5'
import ReferFriend from './screens/refer/referFriend'
import Track from './screens/book/track.js'
import AllBooks from './screens/book/allBooks'
import Account from './screens/account/account'
import ForgotPassword from './screens/auth/forgot'
import Admin from './screens/auth/Admin'
import AdminPage from './screens/Admin/Admin'
import ProtectedRoute from './ProtectedRoute'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/admin/login'>
          <Admin />
        </Route>
        {/* <Route exact path='/admin/:page'>
          <AdminPage />
        </Route> */}
        <ProtectedRoute exact path='/admin/:page' component={AdminPage} />
        <ProtectedRoute exact path='/admin/:page/:id' component={AdminPage} />
        <LandingPage exact path='/'>
          <Home />
        </LandingPage>

        <LandingPage exact path='/home'>
          <Home />
        </LandingPage>

        <AuthPage exact path='/login'>
          <Login />
        </AuthPage>

        <AuthPage exact path='/signup'>
          <Signup />
        </AuthPage>
        <AuthPage exact path='/reset'>
          <Reset />
        </AuthPage>
        <ProtectedRoutes exact path='/app'>
          <Dashboard />
        </ProtectedRoutes>

        <ProtectedRoutes exact path='/book_delivery'>
          <BookDelivery />
        </ProtectedRoutes>

        <ProtectedRoutes exact path='/all_bookings'>
          <AllBooks />
        </ProtectedRoutes>

        <ProtectedRoutes exact path='/import'>
          <Import />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/domestic'>
          <Domestic />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/tracking_page'>
          <TrackingPage1 />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/tracking_page2'>
          <TrackingPage2 />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/account'>
          <Account />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/tracking_page3'>
          <TrackingPage3 />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/locate_hub'>
          <TrackingPage4 />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/tracking_page5'>
          <TrackingPage5 />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/refer_friend'>
          <ReferFriend />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/track'>
          <Track />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/terms'>
          <Termspage />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/privacy'>
          <Privacypage />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/about_us'>
          <Aboutus />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/forgot'>
          <ForgotPassword />
        </ProtectedRoutes>
      </Switch>
    </Router>
  )
}

export default Routes
