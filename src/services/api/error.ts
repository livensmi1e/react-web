import axios, { AxiosError } from "axios";

type ErrorResponse = {
  error?: string;
  message?: string;
};

export class AppError extends Error {
  readonly status?: number;
  readonly handled: boolean;

  constructor(message: string, options?: { status?: number; handled?: boolean }) {
    super(message);
    this.name = "AppError";
    this.status = options?.status;
    this.handled = options?.handled ?? false;
  }
}

export function toAppError(err: unknown): AppError {
  if (err instanceof AppError) {
    return err;
  }

  if (!axios.isAxiosError(err)) {
    return new AppError("Something went wrong. Please try again.");
  }

  return fromAxiosError(err);
}

function fromAxiosError(error: AxiosError<ErrorResponse>): AppError {
  const status = error.response?.status;
  const serverMessage = error.response?.data?.message ?? error.response?.data?.error;

  if (serverMessage) {
    return new AppError(serverMessage, { status });
  }

  switch (status) {
    case 400:
      return new AppError("Please check the details and try again.", { status });
    case 401:
      return new AppError("Please sign in to continue.", {
        status,
        handled: true,
      });
    case 403:
      return new AppError("You do not have permission to do that.", { status });
    case 404:
      return new AppError("We could not find that resource.", { status });
    case 409:
      return new AppError("This conflicts with the latest saved data.", {
        status,
      });
    case 422:
      return new AppError("Some fields need your attention.", { status });
    case 429:
      return new AppError("Too many attempts. Please wait a moment.", {
        status,
      });
    case 500:
    case 502:
    case 503:
    case 504:
      return new AppError("The service is temporarily unavailable.", {
        status,
      });
    case undefined:
      return new AppError("Network issue. Check your connection and try again.");
    default:
      return new AppError("Something went wrong. Please try again.", { status });
  }
}
