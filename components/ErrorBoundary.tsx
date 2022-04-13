import { Component, ErrorInfo } from 'react'

type ErrorBoundaryProps = {
  children: React.ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <h1 style={{ textAlign: 'center' }}>Sorry, something went wrong.</h1>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary as default }
