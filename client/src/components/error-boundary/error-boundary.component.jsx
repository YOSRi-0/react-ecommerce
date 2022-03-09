import React from 'react';
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
          <ErrorText>This page is lost in space</ErrorText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
