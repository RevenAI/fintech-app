import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import './index.css'
import App from './App.jsx'
import { SectionsContextProvider } from './state/context/SectionsContext.jsx'
//import NavContext from './state/context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
  {/*   <NavContext>
 */}    
    <SectionsContextProvider>    
        <App />
    </SectionsContextProvider>
    {/* </NavContext> */}
  </StrictMode>,
)


