import React from "react";
import '../App.css';
import searchYoutube from "youtube-api-search";
import Videos from "./Videos";

const InputForm = (props) => {
    let handleChange = (event) => {
        props.change(event);
    }
    return (
        <div>
            <input type="text" placeholder="Search for a Video" onChange={handleChange}/><br/>
        </div>
    );
}

const QueryResults = (props) => {
    return (
        <div className="query_results_wrap">
            {Object.entries(props.vids).map(([key, link]) => {
                return (
                    <div className="video_wrap" key={key}>
                        <Videos key={key} metadata={link}/>
                    </div>
                );
            })}
        </div>
    );
}

export class Search extends React.Component{

    constructor(){
        super();
        this.API_KEY = "AIzaSyC9x5YoilkOUlpZCSxvDPHQavspm81qtYM";
        this.maxResults = 20;
        this.state = {}

        this.search = this.search.bind(this);
    }

    search = (event) => {
        searchYoutube({key: this.API_KEY, term: event.target.value, maxResults: this.maxResults}, (videos) => {
            this.changeState(videos);
        });
    }

    changeState = (newState) => {
        this.setState({
            search: newState
        });
    }

    componentWillMount(){
        this.setState({search:{}})
    }

    componentDidMount(){
        if(this.props && this.props.query){
            this.setState({search:this.props.query});
        }
    }

    render(){
        return (
            <div>
                <InputForm change={this.search}/>
                <QueryResults vids={this.state.search}/>
            </div>
        );
    }
}

export default Search;