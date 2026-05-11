import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Application error:", error);
    console.error("Component stack:", info.componentStack);

    // Later, in production, this is where you can send errors
    // to a monitoring service such as Sentry.
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#F0F7FF] px-5">
          <div className="max-w-lg rounded-[2rem] border border-[#D8E8EE] bg-white p-8 text-center shadow-[0_24px_80px_rgba(16,42,67,0.12)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2F8F68]">
              Something went wrong
            </p>

            <h1 className="mt-4 text-2xl font-semibold text-[#102A43]">
              We could not load this page properly.
            </h1>

            <p className="mt-4 leading-relaxed text-[#64748B]">
              Please refresh the page and try again. If the issue continues,
              contact Enekem Medicals for assistance.
            </p>

            <button
              type="button"
              onClick={this.handleReload}
              className="mt-7 rounded-full bg-[#102A43] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0E3442]"
            >
              Reload Page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;