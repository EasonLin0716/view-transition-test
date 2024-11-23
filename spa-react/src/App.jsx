import { Outlet } from "react-router"
import AppHeader from "./components/AppHeader"

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
