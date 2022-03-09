import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route exact path="/checkout" element={<CheckoutPage />} />
            <Route
              exact
              path="/signin"
              element={
                currentUser ? (
                  <Navigate replace to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
