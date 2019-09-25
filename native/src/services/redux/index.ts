import { createStore } from 'redux'
// import devToolsEnhancer from 'remote-redux-devtools'
import rootReducer from 'src/services/redux/reducers'

export default createStore(rootReducer)
