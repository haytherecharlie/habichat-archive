declare namespace Express {
  export interface Request {
    [propName: string]: any
  }
  export interface Response {
    [propName: string]: any
  }
}
