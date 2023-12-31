const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('HK_theme', {
  updateStyle: callback => ipcRenderer.on('LiteLoader.HK_theme.updateStyle', callback),
  rendererReady: () => ipcRenderer.send('LiteLoader.HK_theme.rendererReady')
})
