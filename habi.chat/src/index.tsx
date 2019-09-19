import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'routes/Router'
import { initDataLayer } from 'utils/analytics'
import * as workers from 'utils/workers'
initDataLayer()

ReactDOM.render(<Router />, document.getElementById('root'))
workers.unregister()
