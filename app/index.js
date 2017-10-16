import React  from 'react'
import {Router, Scene, Stack} from 'react-native-router-flux'
import IndexPage from './pages/IndexPage'
import ArticleSinglePage from './pages/ArticleSinglePage'

export default class App extends React.Component {

    render() {

        return (
            <Router>
                <Stack key="root">
                    <Scene key="indexPage" title="Hurriyet Beta" component={IndexPage} initial />
                    <Scene key="articleSinglePage" component={ArticleSinglePage} />
                </Stack>
            </Router>
        )
    }
}
