import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import DashboardHabits from './pages/DashboardHabits';
import { LoginAuth } from './store/LoginStore';
import type { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import client from './apollo';


function App() {

  type PrivateRouteProps = {
    children: ReactNode;
  };

  function PrivateRoute({ children }: PrivateRouteProps) {
    const username = LoginAuth((state: any) => state.username);
    return username ? <>{children}</> : <Navigate to="/" replace />;
  }

  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route
              path="/habits"
              element={
                <PrivateRoute>
                  <DashboardHabits />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Navigate to="/" replace />}></Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

export default App
