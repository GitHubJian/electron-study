const { app, Menu, MenuItem } = require('electron')

function createDockMenu() {
  const dockMenu = Menu.buildFromTemplate([
    {
      label: 'New Window',
      click: function() {
        console.log('New Window')
      }
    },
    {
      label: 'New Window with Settings',
      submenu: [{ label: 'Basic' }, { label: 'Pro' }]
    },
    { label: 'New Command...' }
  ])

  app.dock.setMenu(dockMenu)
}

module.exports = createDockMenu
