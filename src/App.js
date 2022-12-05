/*import Events from './Events'
import ClassComponent from './ClassComponent'
import DemoExample from './DemoExample'
import StateExample from './StateExample'
import FuncProps from './Funcprops'
import JSX from './JSX'*/
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
  function App(){
    return(
      <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>

    {/*<StateExample/>
     <JSX/>
   <Events/>
      <DemoExample price="1st price"/>
      
      <FuncProps carname="rolls royce" year="1998"/>
      <h1>hello</h1>
    <PropsExample name="ravi" age="24"/>
      <PropsExample name="sivani" age="20"/>
      <p>good afternoon</p>
      <h1>heading tag</h1>
      <img src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" alt="msg"/>    
      <ClassComponent/>*/}
        </div>     
  )
}
export default App