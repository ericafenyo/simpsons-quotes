import React, { Component } from 'react'

export class Quote extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const quotes = this.props.quotes
    console.log(this.props.quotes.quote)
    return (
      <div>
        <figure className="figure text-left container">
          <img src={quotes.image} class="figure-img img-fluid" width="200px" alt="A Simson's character thumbnail" />
          <figcaption>
            <blockquote className="blockquote">
              <p style={{ fontSize: "20px" }} className="mb-0">{quotes.quote} </p>
              <footer className="blockquote-footer"><cite title="Source Title">{quotes.character}</cite></footer>
            </blockquote>
          </figcaption>
        </figure>

        <button className="btn btn-warning" onClick={this.props.getQuote}>Generate quotes</button>
      </div>
    )
  }
}

export default Quote
