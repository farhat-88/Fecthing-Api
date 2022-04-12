import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

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
          "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
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
            "urlToImage":"https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
            "publishedAt":"2020-03-30T15:26:05Z",
            "content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

   

    constructor(){
    super();
    console.log("Hello, I am a constructor from news Component")
    this.state= {
        articles: this.articles,
        loading: false,
        page: 1
    }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae3c10c7071b4d068b7a245f1f3b59ee&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading:false
        })
    }

    handlePrevClick = async () =>{
        
        console.log("Previous");

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae3c10c7071b4d068b7a245f1f3b59ee&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
   
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })
    }

    handleNextClick = async () => {

        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            
            console.log("Next");

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae3c10c7071b4d068b7a245f1f3b59ee&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({loading:false});
       
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render () {
        return (
            <div className="container my-3">
                <h2 className="text-center"> NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key = {element.url}>
                        <NewsItem title = {element.title ? element.title.slice(0, 44) : ""} description = {element.description ? element.description.slice(0, 88) : "" } imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                        </div>
                    })}
                </div>
                <div className = "container d-flex justify-content-between">
                    <button type ="button" disabled = {this.state.page<=1} className = "btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type = "button" disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className= "btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News