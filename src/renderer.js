hk_theme.updateStyle((event, id, data) => {
  let style = document.querySelector(`style[id="${id}"]`)

  if (!style) {
    style = document.createElement('style')
    style.id = id
    document.head.appendChild(style)
  }

  style.textContent = data
})

hk_theme.rendererReady()
