import { Header } from "./UI/Header"
import { Footer } from "./UI/Footer"
import { Rutas } from "./routes/Rutas"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <>
          <Header/>
          <AuthProvider>
          <Rutas/>
          </AuthProvider>

          <Footer />
    </>
  )
}

export default App
