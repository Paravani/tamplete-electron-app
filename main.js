const { app, BrowserWindow } = require('electron')

function createWindow(){

    const window = new BrowserWindow({
        
    })


}

app.whenReady().then(() => {
  createWindow()
})