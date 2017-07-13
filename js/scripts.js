const xhr = new XMLHttpRequest()
const method = 'GET'
const url = 'http://localhost:3001/'
let output = document.getElementById('output')


xhr.open(method, url, true)

xhr.onload = (data) => {
    if (xhr.status !== 200) {
        console.log('Error')
    } else {
        let results = xhr.data
        console.log(results)
    }
}

xhr.send()