import React  from 'react'
import { Text, View, Image, ScrollView, Dimensions } from 'react-native'
import HTML from 'react-native-render-html'
import { Actions } from 'react-native-router-flux'
import HurriyetService from '../service/HurriyetService'

const titleStyle = {
    color: '#444444',
    fontSize: 22,
    fontWeight: 'bold'
}

export default class ArticleSinglePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            article: {
                Title: "...",
                Text: "...",
                Files: []
            }
        }
    }

    componentDidMount() {
        this.articleSingle()
    }

    articleSingle() {
        HurriyetService
            .articleSingle(this.props.articleId)
            .then(r => {
                this.setState({ article: r.data })
                Actions.refresh({ title: r.data.Title })
            })
    }

    render() {

        const article = this.state.article
        const files = article.Files
        const imageUrl = files.length > 0 && files[0].FileUrl

        return (
            <ScrollView>
                <View style={{
                    backgroundColor: '#ffffff',
                    padding: 10,
                    height: '100%'
                }}>
                    <Text style={titleStyle}>{article.Title}</Text>
                    <HTML html={article.Text}  imagesMaxWidth={Dimensions.get('window').width}  />
                </View>
            </ScrollView>
        )
    }
}
