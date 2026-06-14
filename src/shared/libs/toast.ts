import { toast } from "sonner";

type ToastOptions = {
  description?: string;
  id?: string;
};

export function showSuccessToast(message: string, options?: ToastOptions) {
  toast.success(message, {
    description: options?.description,
    id: options?.id,
  });
}

export function showErrorToast(message: string, options?: ToastOptions) {
  toast.error(message, {
    description: options?.description,
    id: options?.id,
  });
}
