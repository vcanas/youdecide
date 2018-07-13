import React from "react";
import {connect} from "react-redux";

class Library extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount(){
        this.props.subscribe(()=>{
            this.setState({
                videos: this.props.getState().videos
            });
        });
    }

    render(){
        return (
            <span>mkay</span>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        videos: state.videos
    };
}

export default connect(mapStateToProps)(Library);