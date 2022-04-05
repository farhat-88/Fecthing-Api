// import { getByTitle } from '@testing-library/react';
import React, { Component } from 'react';

export class NewsItem extends Component {
  articles = [
    {
      "source":{
          "id":"google-news-in",
          "name":"Google News (India)"
      },
      "author":"TN Sports Desk",
      "title":"From Malinga to Sangakkara: How cricket fraternity reacted to Sri Lanka's economic crisis",
      "description":"Lasith Malinga, Mahela Jayawardene, Kumar Sangakkara, Bhanuka Rajapaksa, and Wanindu Hasaranga have expressed their solidarity with the people of Sri Lanka in the wake of the country's worst economic crisis since its independence. Former Sri Lanka captain San…",
      "url":"https://www.timesnownews.com/sports/cricket/kumar-sangakkara-to-mahela-jayawardene-how-cricket-fraternity-has-reacted-to-sri-lankas-economic-crisis-article-90631697",
      "urlToImage":"https://static.tnn.in/thumb/msid-90631697,imgsize-100,width-1280,height-720,resizemode-75/90631697.jpg",
      "publishedAt":"2022-04-04T02:53:00+00:00",
      "content":"Aus vs Eng, WC final: Alyssa Healy breaks Gilchrist's record, surpasses Richards and Ponting in elite list"
    },
    {
        "source":{
            "id":"bbc-sport",
            "name":"BBC Sport"
        },
        "author":"BBC Sport",
        "title":"Shane Warne memorial - watch & follow updates",
        "description":"Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
        "url":"http://www.bbc.co.uk/sport/live/cricket/60916236",
        "urlToImage":"https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
        "publishedAt":"2022-03-30T08:22:26.498888Z",
        "content":"Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
    },
    {
        "source":{
            "id":"espn-cric-info",
            "name":"ESPN Cric Info"
        },
        "author":null,
        "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt":"2020-04-27T11:41:47Z",
        "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source":{
            "id":"espn-cric-info",
            "name":"ESPN Cric Info"
        },
        "author":null,
        "title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url":"http://www.espncricinfo.com/story/_/id/28970907 learned-watching-1992-world-cup-final-full-again",
        "urlToImage":"https://a4.espncdn.com/combiner/img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt":"2020-03-30T15:26:05Z",
        "content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super();
    this.state= {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className = "my-3">
        <div className="card" style= {{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
