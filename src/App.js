import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Detail from './pages/Detail'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

axios.defaults.baseURL = 'https://api.codingthailand.com/api'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>

        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/detail/:id/title/:title">
            <Detail />
          </Route>
        </Switch>

        <Footer />

      </Router>
    </QueryClientProvider>
  );
}

export default App;
