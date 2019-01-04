import React from 'react'
import Reader from '../api/Reader'
import RecordView from './RecordView'

import '../assets/scss/main.scss'

export default class App extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = { files: [], records: [] }

        this.Reader = new Reader()
        this.handleFileInput = this.handleFileInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleFileInput() {
        const inputFile = document.querySelector('input[name=fileToRead]')
        inputFile.click()
    }

    handleSubmit() {
        const info = document.querySelector('#info')
        info.innerHTML = ""
        const inputFile = document.querySelector('input[name=fileToRead]')
        const { files } = inputFile
        
        if ( files.length === 0 ) {
            return info.insertAdjacentHTML('beforeend', `<span class="error">Selecione um arquivo para a leitura</span>`)
        }

        this.Reader.init(files[0])
        .then( result => {
            this.setState( state => ({
                files: state.files.concat(files[0]),
                records: result.records
            }) )
        })
        .catch( err => info.insertAdjacentHTML('beforeend', `<span class="error">${err}</span>`) )
    }

    render() {
        return (
            <section>
                <header>
                    <section>
                        Dattos File Reader
                    </section>
                </header>
                <section className="content">
                    <span>
                        Selecione um arquivo no formato CNAB240 para o detalhamento do mesmo:
                    </span>
                    <input type="file" name="fileToRead" onChange={this.handleSubmit} />
                    <button type="button" name="btn-get-file" className="btn btn-success" onClick={this.handleFileInput}>
                        Clique aqui para selecionar o arquivo
                    </button>
                    <section id="info"></section>
                    { this.state.records.length !== 0 && 
                        <RecordView records={this.state.records} /> }
                </section>
            </section>
        )
    }

}