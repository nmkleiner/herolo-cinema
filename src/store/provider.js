import React, { Component } from 'react';

const MyContext = React.createContext();

class Provider extends Component {
  state = {
    isTitleListOpen: false,
    showMoviesDetails: false
  }

  render() {
    return (
      <MyContext.Provider value={
        {
          state: this.state,
          toggleTitleList: () => this.setState({
            isTitleListOpen: !this.state.isTitleListOpen
          }),
          openMoviesDetails: () => this.setState({
            showMoviesDetails: true
          }),
          openMovieDetails: async (id) => {
            await this.setState({ showMoviesDetails: true })
            const el = document.querySelector(`#${id}`)
            el.scrollIntoView({block: 'start'})
          },
          closeMoviesDetails: () => this.setState({
            showMoviesDetails: false
          })
        }
      }>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {
  Provider,
  MyContext
}

