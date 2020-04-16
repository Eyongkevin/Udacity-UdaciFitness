import React, { Component } from 'react'
import { View, Text } from 'react-native'

class EntryDetail extends Component{
    setTitle = (entryId) =>{
        const year = entryId.slice(0, 4)
        const month = entryId.slice(5,7)
        const day = entryId.slice(8)
        this.props.navigation.setOptions({
            title: `${month}/${day}/${year}`
        })
    }
    render(){
        const { entryId } = this.props.route.params
        this.setTitle(entryId)
        return(
            <View>
                <Text>Entry Detail - {JSON.stringify(entryId)}</Text>
            </View>
        )
    }
}
export default EntryDetail