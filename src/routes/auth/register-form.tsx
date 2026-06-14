import { cn } from "@/shared/libs/util";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Link, useNavigate } from "react-router";
import { useRegister } from "@/services/query/hooks/auth";
import { Terminal } from "lucide-react";
import { toAppError } from "@/services/api/error";
import { showErrorToast, showSuccessToast } from "@/shared/libs/toast";

const RegisterSchema = z
  .object({
    email: z.email(),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
    confirmPassword: z.string().min(2, {
      message: "Confirm Password must be at least 2 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();
  const { mutate: register, isPending } = useRegister({
    onSuccess() {
      showSuccessToast("Account created", {
        description: "You can log in with your new account.",
      });
      navigate("/login");
    },
    onError(error) {
      const appError = toAppError(error);
      if (appError.handled) {
        return;
      }
      showErrorToast("Could not create account", {
        description: appError.message,
        id: "register-error",
      });
    },
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    register({
      email: values.email,
      password: values.password,
    });
  }
  return (
    <div className={cn("space-y-5", className)} {...props}>
      <div className="border border-terminal-border bg-terminal-surface">
        <div className="flex items-center border-b border-terminal-border px-3 py-2">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-terminal-dim/40" />
            <div className="size-2.5 rounded-full bg-terminal-dim/40" />
            <div className="size-2.5 rounded-full bg-terminal-dim/40" />
          </div>
          <span className="ml-3 text-xs text-terminal-dim">auth/signup</span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="mb-8">
            <Terminal className="mb-4 size-5 text-primary" />
            <h1 className="text-xl font-medium text-terminal-fg">
              Create account
            </h1>
            <p className="mt-2 text-sm leading-6 text-terminal-muted">
              Create a workspace account and deploy the first version.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <p className="text-center text-xs text-terminal-muted">
        Already have an account?{" "}
        <Link to="/login" className="text-primary underline-offset-4 hover:underline">
          Sign in
        </Link>
      </p>
      <div className="text-center text-xs text-terminal-dim">
        You can replace this auth flow with your real backend later.
      </div>
    </div>
  );
}

export default RegisterForm;
