const electron = require('electron')
const path = require('path')
const axios = require('axios');
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('notifyBtn')

notifyBtn.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({ frame: false, width: 400, height: 200 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
  })
  var price = document.querySelector('h1')
  var targetPrice = document.getElementById('targetPrice')
  
function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
        const cryptos = res.data.BTC.USD
        price.innerHTML = '$'+cryptos.toLocaleString('en')
    })
  }
  

