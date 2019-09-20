export interface Action {
  type: string
  [propName: string]: any
}

export interface HelmetProps {
  seo: {
    title: string
    description: string
    robots: string
  }
}
