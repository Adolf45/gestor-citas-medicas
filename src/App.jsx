import { Header } from "./UI/Header"
function App() {
  return (
    <>
       <div className="min-h-screen flex flex-col">
         <Header/>
      {/*
          <Routes>
          <Route path="/resetPasswordSuccess" element={<ResetPasswordSuccess />} />
          <Route path="/resetPassword" element={<ResetPasswordPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/registroPage" element={<RegistroPage />} />
        </Routes>
      */}
          <Footer />
        </div> 
    </>
  )
}

export default App
