const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('HK_theme', {
  updateStyle: callback => ipcRenderer.on('betterQQNT.HK_theme.updateStyle', callback),
  rendererReady: () => ipcRenderer.send('betterQQNT.HK_theme.rendererReady')
})
