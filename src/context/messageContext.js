import React, { Component, createContext } from "react";

const MessageContext = createContext();

class MessageContextProvider extends Component {
  state = {
    isOpen: false,
  };

  toggleMessageBox = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };


  render() {
    const { children } = this.props
    const { isOpen } = this.state
    return (
      <MessageContext.Provider
        value={{
          isOpen,
          toggleMessageBox: this.toggleMessageBox,
        }}
      >
        {children}
      </MessageContext.Provider>
    );
  }
}

export default MessageContext;
export {MessageContextProvider};