import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
import PropTypes from 'prop-types'

import Player from './Player'
import {reducer} from './state'

export const createReducer = () => reducer

export default class PlayerWrapper extends Component {

  constructor(props, context) {
    super(props)

    if(!context.store) {
      this.store = createStore(createReducer())
    }

  }

  render() {

    return (
      <Provider store={this.store}>
        <Player {...this.props} />
      </Provider>
    )

    // return this.store ? (
    //   <Provider store={this.store}>
    //     <Player {...this.props} />
    //   </Provider>
    // ) : (
    //   <Player {...this.props} />
    // )

  }

  render() {

    return this.store ? (
      <Provider store={this.store}>
        <Player {...this.props} />
      </Provider>
    ) : (
      <Player {...this.props} />
    )

  }

}

PlayerWrapper.propTypes = {
  ...Player.propTypes
}

PlayerWrapper.contextTypes = {
  store: PropTypes.object
}
