/* @flow */
import { applyMiddleware, compose, createStore } from 'redux'
import type { Store } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const middleware: any =
  process.env.NODE_ENV === 'local'
    ? compose(
        applyMiddleware(thunk, createLogger()),
        window.devToolsExtension()
      )
    : applyMiddleware(thunk)

const store: Store<*, *> = createStore(reducers, middleware)

export default store
