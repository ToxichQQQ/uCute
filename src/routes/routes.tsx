import React from 'react'
import { Login, Registration, ResetPassword } from '../pages'
import {ErrorBoundary} from '../hocs/ErrorBoundary'

export const routes = [
  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorBoundary/>
  },
  {
    path: 'reset',
    element: <ResetPassword />,
    errorElement: <ErrorBoundary/>
  },
  {
    path: 'reset',
    element: <Registration />,
    errorElement: <ErrorBoundary/>
  },
]
