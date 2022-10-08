/* eslint-disable @typescript-eslint/indent */
import React, { ErrorInfo, Suspense } from 'react';
import { FallbackComponent } from 'widgets/FallbackComponent';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    if (error) {
      console.log(error);
    }
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback=''>
          <FallbackComponent />
        </Suspense>
      );
    }

    console.log(children);

    return children;
  }
}

export default ErrorBoundary;
