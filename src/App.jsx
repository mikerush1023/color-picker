import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: '180',
    saturation: '50',
    lightness: '50',
  }

  handleChangeHue = event => {
    const target = event.target

    const value = target.value

    this.setState({ hue: value })
  }

  handleChangeSaturation = event => {
    const target = event.target
    const value = target.value

    this.setState({ saturation: value })
  }

  handleChangeLightness = event => {
    this.setState({ lightness: event.target.value })
  }

  handleClickRandom = event => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const currentColor = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`

    return (
      <div>
        <figure style={{ backgroundColor: currentColor }}></figure>
        <p>{currentColor}</p>
        <section>
          <button onClick={this.handleClickRandom}>Random</button>
          <p>
            Hue:
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.handleChangeHue}
            />
          </p>
          <p>
            Saturation:
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.handleChangeSaturation}
            />
          </p>
          <p>
            Lightness:
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.handleChangeLightness}
            />
          </p>
        </section>
      </div>
    )
  }
}

export default App
