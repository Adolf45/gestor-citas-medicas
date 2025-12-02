import { Header } from "./Layout/Header"
import { Footer } from "./Layout/Footer"
import { Rutas } from "./routes/Rutas"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <>
          <AuthProvider>
          <Header/>
          <Rutas/>
          <Footer />
          </AuthProvider>
    </>
  )
}

export default App
