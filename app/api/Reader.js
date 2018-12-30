import CNAB240 from './CNAB240'

export default class Reader {

    constructor() {
        this.CNAB240 = new CNAB240()
    }

    init(file) {
        return new Promise((resolve, reject) => {
            this.readFile(file)
            .then( res => resolve(res) )
            .catch( err => reject(err) )
        })
    }

    getCNAB240data(data) {
        const content = data.split('\n')
        const header = this.CNAB240.getHeader(content)
        const records = this.CNAB240.getRecords(content)

        return { header, records }
    }

    readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.onload = () => {
                const { result } = reader
                const data = this.getCNAB240data(result.toString())
                resolve(data)
            }

            reader.onerror = (error) => reject(error)

            reader.readAsText(file)
        })
    }

}