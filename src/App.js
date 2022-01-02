// * react basic import
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// * to use redux
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/store'

import main from './page/main'

function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact component={main}></Route>
                </Switch>
            </ConnectedRouter>
        </React.Fragment>
    )
}

export default App
