declare const window: any;

const pushToDataLayer = (name: string, value: string) => {
  window.dataLayer.push(name, value)
}

export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || []
  pushToDataLayer('js', `${new Date()}`)
  pushToDataLayer('config', 'G-K7R9XDFG9J')
}

export const recordPageView = (id: string) => {
  pushToDataLayer('pageView', id)
}
