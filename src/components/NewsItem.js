// import { getByTitle } from '@testing-library/react';
import React, { Component } from 'react';

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, url, author, date, source} = this.props
    return (
      <div className = "my-3">
        <div className="card">
          <img src={!imageUrl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" : imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date (date).toGMTString()}</small></p>
            <a rel = {url} target= "_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
