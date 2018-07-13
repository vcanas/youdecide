import React from "react";
import {connect} from "react-redux";
import YoutubePlayer from "react-youtube-player";

class Library extends React.Component{

    render(){
        console.log(this.props.videos)
        return (
            <div>
                <h1 style={{color: "rgb(150, 0, 0)"}}>Your Library</h1>
                {Object.entries(this.props.videos['videos']).map((key, value) => {
                    return <YoutubePlayer key={key} videoId={key[1]}
                                   playbackState='unstarted'/>

                })}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        videos: state.videos
    };
}

export default connect(mapStateToProps)(Library);