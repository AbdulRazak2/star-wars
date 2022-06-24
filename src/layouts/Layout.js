import React from 'react';
import logo from '../logo.svg';
import {
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import Characters from '../pages/Characters';


class Layout extends React.Component {
    render() {
        return <div>
            <div className="container-fluid">
                <header className="App-header p-2">
                    <div className="d-flex justify-content-center">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                    <nav className="d-flex justify-content-center">
                        <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
                        <NavLink to="/characters" activeClassName="active-link">Characters</NavLink>
                        
                    </nav>

                </header>
                <div className="content pb-2">
                    <Routes>
                        <Route exact path="/">
                        </Route>
                        <Route path="/characters" component={Characters} />
                      
                    </Routes>
                </div>

            </div>
        </div>

    }
}

export default Layout;