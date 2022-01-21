import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Components/Header/Header';
import Header from './Components/Footer/Footer';
import Home from './Pages/Home/Home'



function App() {
  return (
    <div className='App'>
      <Router>
      <Switch>
      <Header />
      <Route path='/' exact component={Home} />



      
      </Switch>


      <Footer />
      </Router>
        </div>
  )


}

export default App;
