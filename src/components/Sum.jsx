import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const sum = (props) => {

    const { min, max } = props

    return (
        <Card title='Soma dos números' blue>
            <div>
                <span>Resultado: </span>
                <strong>{ min + max }</strong>
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

export default connect(mapStateToProps)(sum)