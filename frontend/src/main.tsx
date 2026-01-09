import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import './index.css'
import { AutofictionalProvider } from '@autofictional/runtime';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AutofictionalProvider appId="app_3a5df3fd20987ddc3d2b78f7f57f726b">
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    </AutofictionalProvider>
)

