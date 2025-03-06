
import './global.css'

import { RouterProvider } from "react-router"

import { router } from "./routes"

import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryCliente } from './lib/react-query'

export function App() {

  return (
    <>
      <ThemeProvider storageKey='rocketpizzashop' defaultTheme='dark'>
        <Toaster richColors />
        <QueryClientProvider client={queryCliente}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
