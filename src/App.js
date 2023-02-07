
import Navbar from './Navbar'
import Homepage from './Home'
import CreatePage from './CreateBlog';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import BlogDetail from './BlogDetail';
import NotFound from './notFound';

function App() {

  return (
    <Router>
    <div className="App">
    <Navbar />

    <div className="content">
      <Switch>
        <Route exact path="/">
        <Homepage /> 
        </Route>

        <Route  path="/Create">
        <CreatePage />
        </Route>
        
        <Route  path="/Blogs/:id">
        <BlogDetail />
        </Route>

        <Route  path="*">
        <NotFound/>
        </Route>
      </Switch>
    
    </div>
    
    </div>
    </Router>
  );
}

export default App;
