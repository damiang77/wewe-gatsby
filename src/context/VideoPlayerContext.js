import React, { Component, createContext } from "react";

const VideoPlayerContext = createContext();

class VideoPlayerContextProvider extends Component {
  state = {
    isOpen: false,
    videoUrl: ""
  };

  toggleVideoPlayer = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  setVideoUrl = (url) => {
    this.setState({ videoUrl: url});
  };

  handleOpenVideo = (url) =>{
    this.setState({ isOpen: true, videoUrl: url });
  }


  render() {
    const { children } = this.props
    const { isOpen, videoUrl } = this.state
    return (
      <VideoPlayerContext.Provider
        value={{
          isOpen,
          videoUrl,
          toggleVideoPlayer: this.toggleVideoPlayer,
          setVideoUrl: this.setVideoUrl,
          handleOpenVideo: this.handleOpenVideo
        }}
      >
        {children}
      </VideoPlayerContext.Provider>
    );
  }
}

export default VideoPlayerContext;
export {VideoPlayerContextProvider};