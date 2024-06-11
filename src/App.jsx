import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import {Home} from "./pages/Home"
import { theme } from "./styles/theme"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}
