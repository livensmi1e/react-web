import { AxiosError } from "axios";
import { showError } from "@/shared/libs/toast";

export const handleApiError = (err: unknown) => {
  const error = err as AxiosError;
  const status = error.response?.status;

  switch (status) {
    case 400:
      showError("Invalid request.");
      break;
    case 403:
      showError("You are not authorized to perform this action.");
      break;
    case 404:
      showError("Requested resource was not found.");
      break;
    case 500:
      showError("Internal server error.");
      break;
    case undefined:
      showError("Network error. Please try again.");
      break;
    default:
      showError("An unknown error occurred.");
  }
};
