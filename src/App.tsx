
import './global.css'

import { RouterProvider } from "react-router"

import { router } from "./routes"

import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {

  return (
    <>
      <ThemeProvider storageKey='rocketpizzashop' defaultTheme='dark'>
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
