const { app } = require('electron')

function createLionMenu() {
  const trayIcon = pathConfig.favicon
  const appTray = new Tray(trayIcon)
  appTray.setToolTip('我的托盘图标')
  var trayMenuTemplate = [
    {
      label: '设置',
      click: function() {} //打开相应页面
    },
    {
      label: '帮助',
      click: function() {}
    },
    {
      label: '关于',
      click: function() {}
    },
    {
      label: '退出',
      click: function() {
        app.quit()
        app.quit() //因为程序设定关闭为最小化，所以调用两次关闭，防止最大化时一次不能关闭的情况
      }
    }
  ]

  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)

  appTray.setContextMenu(contextMenu)
  appTray.on('click', () => {
    mainWindow.show()
  })
}

module.exports = createLionMenu
