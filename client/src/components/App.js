import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

const SurveyNew = () => <h1>SurveyNew</h1>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        return (
            <div className="container">
              <BrowserRouter>
               <div>
                   <Header />
                   <Route exact path="/" component={Landing}/>
                   <Route exact path="/surveys" component={Dashboard}/>
                   <Route  path="/surveys/new" component={SurveyNew}/>
               </div>
              </BrowserRouter>
            </div>
        )
    }
}

export default connect(null,action)(App);