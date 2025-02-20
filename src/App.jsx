
import { Provider } from 'react-redux'
import './App.css'
import  MainContainer from './components/MainContainer'
import appStore from './utils/appStore'
function App() {

  return (
    <Provider store={appStore}>

   
    <div className='bg-radial-[at_20%_100%] from-sky-50 via-indigo-400 to-blue-600 to-90% h-screen flex justify-center items-center'>
   <MainContainer/>
   
    </div>
    </Provider>
  )
}

export default App
