HK_theme.updateStyle((event, cssFileName, data) => {
  const id = cssFileName.substring(0, cssFileName.lastIndexOf('.'))
  let style = document.querySelector(`style[id="${id}"]`)
  if (!style) {
    style = document.createElement('style')
    style.id = id
    document.head.appendChild(style)
  }

  style.textContent = data
})

HK_theme.rendererReady()

export const onSettingWindowCreated = view => {}
