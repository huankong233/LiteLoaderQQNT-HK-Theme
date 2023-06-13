export function onLoad() {
  const element = document.createElement('style')
  document.head.appendChild(element)

  HK_theme.updateStyle((event, message) => {
    element.textContent = message
  })

  HK_theme.rendererReady()
}
