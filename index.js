const pathConfig = require('./config/path.config.js')
const electron = require('electron')
const {
  app,
  BrowserWindow,
  dialog,
  ipcMain,
  net,
  netLog,
  Menu,
  MenuItem,
  Tray
} = require('electron')

let appTray = null,
  trayIcon = null
let mainWindow

const createDockMenu = require('./menu/dock.js')

function createWindow() {
  createDockMenu()

  mainWindow = new BrowserWindow({
    title: 'Sogou Test',
    width: 800,
    height: 600,
    // fullscreen: true,
    // fullscreenable: true,
    icon: new Tray(pathConfig.favicon)
  })

  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools()

  // mainWindow.setProgressBar(0.5)

  mainWindow.on('closed', function() {
    mainWindow = null
  })

  // ipcMain.on('asynchronous-message', (event, arg) => {
  //   console.log(arg)
  //   event.sender.send('asynchronous-reply', 'pong')
  // })

  // ipcMain.on('synchronous-message', (event, arg) => {
  //   console.log('synchronous-message', arg) // prints "ping"
  //   event.returnValue = 'pong'
  // })

  // mainWindow.webContents.session.on('will-download',(event,item,webContents)=>{

  // })

  // dialog.showOpenDialog(
  //   {
  //     title: 'Sogou Test',
  //     defaultPath: '/Users/apple/Desktop',
  //     buttonLabel: '确认',
  //     filters: [{ name: 'Image', extensions: ['jpg', 'jpeg', 'png'] }],
  //     properties: [
  //       'openFile',
  //       'openDirectory',
  //       'multiSelections',
  //       'showHiddenFiles',
  //       'createDirectory'
  //     ],
  //     message: '选择文件',
  //     securityScopedBookmarks: true
  //   },
  //   (filePaths, bookmarks) => {
  //     console.log(filePaths)
  //   }
  // )

  // dialog.showSaveDialog(
  //   {
  //     title: 'Test',
  //     defaultPath: '/Users/apple/Desktop'
  //   },
  //   (filename, bookmarks) => {
  //     console.log(filename)
  //   }
  // )

  // dialog.showMessageBox(
  //   {
  //     type: 'info',
  //     buttons: ['cancel', 'submit'],
  //     defaultId: 1,
  //     title: 'Sogou Test',
  //     message: 'Message Box',
  //     detail: 'Message Box Detail',
  //     checkboxLabel: 'checkboxLabel',
  //     checkboxChecked: true
  //   },
  //   (response, checkboxChecked) => {
  //     console.log(response, checkboxChecked)
  //   }
  // )

  // const request = net.request('https://github.com')

  // request.on('response', res => {
  //   console.log(`STATUS: ${res.statusCode}`)
  //   // console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
  //   res.on('data', chunk => {})
  //   res.on('end', () => {
  //     console.log('No more data in response.')
  //   })
  // })

  // request.end()

  // new Notification({
  //   title: '通知',
  //   subtitle: '这是通知',
  //   body: '警告你不该做什么',
  //   icon: './images/logo.png'
  // })
  electron.powerMonitor.on('suspend', () => {
    console.log('The system is going to sleep')
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})

process.on('uncaughtException', e => {
  console.error(e)
})
