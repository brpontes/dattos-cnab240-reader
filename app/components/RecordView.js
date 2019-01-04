import React from 'react'
import PropTypes from 'prop-types'

export default class RecordView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { records } = this.props
        const entry_billet = records.filter( record => record.codigo_movimentacao === '02' )
        const paid_billet = records.filter( record => record.codigo_movimentacao === '06' )
        const rejected_billet = records.filter( record => record.codigo_movimentacao === '03' )
        const down_billet = records.filter( record => record.codigo_movimentacao === '09' )

        return (
            <section id="record-view">
                <p>Títulos registrados: {entry_billet.length}</p>
                <p>Títulos pagos: {paid_billet.length}</p>
                <p>Títulos rejeitados: {rejected_billet.length}</p>
                <p>Títulos baixados: {down_billet.length}</p>
            </section>
        )
    }
}

RecordView.propTypes = {
    records: PropTypes.array
}
 
RecordView.defaultProps = {
    records: []
}