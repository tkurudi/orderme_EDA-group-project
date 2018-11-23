import React from 'react'
import Header from './Header'
import Footer from './Footer'

import GameSpace from './GameSpace'
import { getLevles } from './api_client/orderme_api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: []
    }
  }



  componentDidMount(evt) {
    // evt.preventDefault()
    console.log('App componentDidMount')
    getLevles()
      .then(leveles => {
        this.setState({
          level: leveles.game
        })
      })
  }

  render() {
    return (
      <div style={{ position: "absolute" }} className="gridcontainer">

        <Header />
        <GameSpace blocks={this.state.level} />
        <Footer />
      </div>
    )
  }
}





export default App

