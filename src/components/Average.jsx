import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const average = (props) => {
    const { min, max } = props
    console.log(props)
    return (
        <Card title='Média' purple>
            <div>
                <span>Resulado dos números: </span>
                <strong>{ (min + max) / 2 }</strong>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(average)