import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: {
        quote: "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
        character: "Lisa Simpson",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
        characterDirection: "Right"
      }
    }
  }

  /**
   * Get constent from the `localeStore` if not empty, and update the state,
   * else hit the quotes' server and cache the response. This prevents too many 
   * calls to the server whenever our componenets re-render.
   */
  getQuote = () => {
    let quotes = localStorage.getItem("quotes");
    if (quotes) {
      //localStore is "not clean", proceed to update the state.
      quotes = JSON.parse(quotes);
      this.setState({ quotes: quotes[Math.floor(Math.random() * quotes.length)] });
    } else {
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
        .then(response => response.json())
        .then(quotes => {
          this.setState({ quotes: quotes[Math.floor(Math.random() * quotes.length)] });
          localStorage.setItem("quotes", JSON.stringify(quotes));
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Quote quotes={this.state.quotes} getQuote={() => this.getQuote()} />
      </div>
    );
  }
}

export default App;