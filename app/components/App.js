import React from 'react'

export default class App extends React.Component {
    
    constructor(props) {
        super(props)

        this.handleFileInput = this.handleFileInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    handleFileInput() {
        const inputFile = document.querySelector('input[name=fileToRead]')
        inputFile.click()
    }

    handleSubmit() {
        const btn = document.querySelector('button[name=btn-get-file]')
        const inputFile = document.querySelector('input[name=fileToRead]')
        const { files } = inputFile

        if ( files.length === 0 ) {
            console.log('Selecione ao menos um arquivo')
        }
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
                </section>
            </section>
        )
    }

}