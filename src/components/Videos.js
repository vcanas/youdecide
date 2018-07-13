import React from "react";
import YoutubePlayer from "react-youtube-player";
import * as videoActions from "../actions/videoActions";
import {connect} from "react-redux";

class Videos extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            metadata: {}
        }

    }

    componentWillMount(){
        if(!this.state)
            this.setState({
                metadata: this.props.metadata
            });
    }

    addVideo = () => {
        this.props.addVideo(this.props.metadata['id']['videoId']);
    }

    render(){
        return (
            <div className="result">
                <h1>{this.props.metadata.snippet.title}</h1>
                <div style={{height:"300px"}}>
                <VideoObject meta={this.props.metadata} />
                <VideoConsole addVid={this.addVideo} vidId={this.props.metadata['id']['videoId']} />
                </div>
            </div>
        );
    }
}

const VideoConsole = (props) => {

    let handleClick = () => {
        props.addVid();
    }

    return (
        <div className="consoleBody">
            <div className="consoleBodyWrap">
                <button onClick={handleClick} id="addBtn">+</button>
                <a className="ytlink" href={"https://www.youtube.com/watch?v="+props.vidId} target="_blank">
                    <span id="ytBtn">Watch on </span>
                    <img style={{width: "70px", height:"50px"}} src="http://pngimg.com/uploads/youtube/youtube_PNG18.png" alt="youtube logo"/>
                </a>
            </div>
        </div>
    );
}

export const VideoObject = (props) => {
    return (
        <YoutubePlayer videoId={props.meta['id']['videoId']}
                       playbackState='unstarted'/>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        videos: state.videos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addVideo: (videoId) => {dispatch(videoActions.addVideo(videoId))}
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Videos);