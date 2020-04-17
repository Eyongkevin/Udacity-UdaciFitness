import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white } from '../utils/colors'
import { connect } from 'react-redux'
import MetricCard from './MetricCard'
import { addEntry } from '../actions'
import { removeEntry } from '../utils/api'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import TextButton from './TextButton'

class EntryDetail extends Component{
    setTitle = (formattedDate) =>{
        //const year = entryId.slice(0, 4)
        //const month = entryId.slice(5,7)
        //const day = entryId.slice(8)
        this.props.navigation.setOptions({
            title: formattedDate // `${month}/${day}/${year}`
        })
    }
    reset = () =>{
        const { remove, goBack, entryId } = this.props
        remove()
        goBack()
        removeEntry(entryId)
    }
    // This is a build-in function that defines rules for rendering the component.
    shouldComponentUpdate(nextProps){
        return nextProps.metrics && !nextProps.metrics.today;
    }
    render(){
        const { metrics, formattedDate } = this.props
        this.setTitle(formattedDate)
        return(
            <View style={styles.container}>
                <MetricCard metrics={metrics} />
                <TextButton onPress={this.reset} style={{margin:20}}>
                    RESET
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: white,
        padding: 15
    }
})

function mapStateToProps(state, { route } ){
    const { entryId, formattedDate } = route.params
    return{
        entryId, 
        formattedDate,
        metrics: state[entryId]
    }
}
// Add dispatch handlers. This returns functions that uses dispatch
function mapDispatchToProps(dispatch, { route, navigation }){
    const { entryId } = route.params

    return{
       remove: () => dispatch(addEntry({
           [entryId]: timeToString() === entryId
           ? getDailyReminderValue()
           : null
       })),
       goBack: () => navigation.goBack()
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail)