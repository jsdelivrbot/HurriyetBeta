import React  from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const cardStyle = {
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    borderColor: 'transparent',
    overflow: 'hidden',
}

const overlayStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)'
}

const titleStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
}

export default class ArticleRowComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const article = this.props.article
        const files = article.Files
        const imageUrl = files.length > 0 && files[0].FileUrl

        // do not render component
        if(!imageUrl) {
            return null
        }

        return (
            <TouchableOpacity
                style={cardStyle}
                onPress={this.props.onPress}
            >
                {
                    imageUrl &&
                    <Image
                        source={{uri: imageUrl}}
                        style={{width: 620, height: 348}}
                    />
                }

                <View style={overlayStyle} />
                <Text style={titleStyle}>{article.Title}</Text>
            </TouchableOpacity>
        )
    }
}
