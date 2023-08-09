import Cookies from 'universal-cookie';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { useState } from 'react';
import SignIn from './components/signIn'

const cookies = new Cookies()

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))

  if (!isAuth){
  return ( 
  <>
    <SignIn setIsAuth={setIsAuth}/>
  </>
  );
}

return ( 
  <>
    <AppRoutes />
  </>
  );

}

export default App;
