const pushToDataLayer = (name, value) => {
  window.dataLayer.push(name, value)
}

export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || []
  pushToDataLayer('js', new Date())
  pushToDataLayer('config', 'G-8TLD4RLYZT')
}

export const recordPageView = id => {
  pushToDataLayer('pageView', id)
}
