import React  from 'react'
import {Router, Scene, Stack} from 'react-native-router-flux'

import IndexPage from './pages/IndexPage'

export default class App extends React.Component {

    render() {

        return (
            <Router>
                <Stack key="root" hideNavBar>
                    <Scene key="indexPage" component={IndexPage} initial />
                </Stack>
            </Router>
        )
    }
}
