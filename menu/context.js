const { app, Menu, MenuItem } = require('electron')

function createContextMenu() {
  const menu = new Menu()
  menu.append(new MenuItem({ label: 'Hello' }))
  menu.append(new MenuItem({ type: 'separator' }))
  menu.append(
    new MenuItem({ label: 'Electron', type: 'checkbox', checked: true })
  )

  app.on('browser-window-created', function(event, win) {
    win.webContents.on('context-menu', function(e, params) {
      menu.popup(win, params.x, params.y)
    })
  })
}

module.exports = createContextMenu
