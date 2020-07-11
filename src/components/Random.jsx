import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const random = (props) => {

    const { min, max } = props

    const random = parseInt(Math.random() * (max - min) + min)

    return (
        <Card title='Aleatório' green>
            <div>
                <span>Sorteio dos números: </span>
                <strong>{ random }</strong>
            </div>
        </Card>
    )
}

const mapStateToRandom = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToRandom)(random)