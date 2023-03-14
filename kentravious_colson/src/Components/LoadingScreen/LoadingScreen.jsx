import React from 'react';
import './loadingScreen.scss'


const LoadingScreen = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading Content...</div>
      </div>
    );
  } else {
    return null;
  }
};

export default LoadingScreen;
