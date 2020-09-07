import React, { Component, createContext } from "react";

const defaultState = {
  isOpen: false
}

const MessageContext = createContext(defaultState);

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