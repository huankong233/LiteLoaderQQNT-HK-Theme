const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('hk_theme', {
  updateStyle: (callback) => ipcRenderer.on('LiteLoader.hk_theme.updateStyle', callback),
  rendererReady: () => ipcRenderer.send('LiteLoader.hk_theme.rendererReady')
})
