const pushToDataLayer = (name: string, value: string) => {
  (window as any).dataLayer.push(name, value)
}

export const initDataLayer = () => {
  (window as any).dataLayer = (window as any).dataLayer || []
  pushToDataLayer('js', `${new Date()}`)
  pushToDataLayer('config', 'G-8TLD4RLYZT')
}

export const recordPageView = (id: string) => {
  pushToDataLayer('pageView', id)
}
