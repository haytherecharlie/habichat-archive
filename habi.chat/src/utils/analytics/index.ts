declare const window: any;

const pushToDataLayer = (name: string, value: string) => {
  window.dataLayer.push(name, value)
}

export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || []
  pushToDataLayer('js', `${new Date()}`)
  pushToDataLayer('config', 'G-8TLD4RLYZT')
}

export const recordPageView = (id: string) => {
  pushToDataLayer('pageView', id)
}
