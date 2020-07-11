import React from 'react'
import { connect } from 'react-redux'
import { editNumberMin, editNumberMax } from '../store/actions/NumberAction'

import Card from './Card'

import './Interval.css'

const interval =  (props) => {

    const { min, max } = props

    return (
        <Card title='Intervalo de Números' red>
            <div className="Interval">
                <span>
                    <strong>Mínino:</strong>
                    <input type="number" value={min}
                        onChange={ e => props.handleNumberMin(+e.target.value) } />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} 
                        onChange={ e => props.handleNumberMax(+e.target.value) } />
                </span>
            </div>
        </Card>
    )
}

const mapStateToInterval = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        handleNumberMin(newValue) {
            const action = editNumberMin(newValue)
            dispatch(action)
        },
        handleNumberMax(newValue) {
            const action = editNumberMax(newValue)
            dispatch(action)
       }
    }
}

export default connect(mapStateToInterval, mapDispatchToProp)(interval)