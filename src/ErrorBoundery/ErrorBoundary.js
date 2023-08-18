import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    return () => {
      if (hasError) {
        // Custom error handling or logging can be done here
      }
    };
  }, [hasError]);

  const componentDidCatch = (error, errorInfo) => {
    setHasError(true);
    setError(error);
    setErrorInfo(errorInfo);
  };

  if (hasError) {
    // Custom error handling UI or fallback component
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>{error && error.toString()}</p>
      </div>
    );
  }

  return children; // Render the child components as usual
};

export default ErrorBoundary;
