// @flow
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

export class Routes extends React.Component<*> {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact={true} path="/" />
        </Switch>
      </Fragment>
    )
  }
}
