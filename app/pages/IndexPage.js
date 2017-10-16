import React  from 'react'
import { FlatList, View } from 'react-native'
import HurriyetService from '../service/HurriyetService'
import ArticleRowComponent from '../components/ArticleRowComponent'
import { Actions } from 'react-native-router-flux'

export default class IndexPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.articles()
    }

    articles() {
        HurriyetService
            .articles()
            .then(r => this.setState({ articles: r.data }))
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#FFFFFF',
                padding: 10
            }}>
                <FlatList
                    data={this.state.articles}
                    keyExtractor={item => item.Id}
                    renderItem={({ item }) => (
                        <ArticleRowComponent
                            article={item}
                            onPress={() => Actions.articleSinglePage({ articleId: item.Id })}
                        />
                    )}
                />
            </View>
        )
    }
}
