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
import { Link, useLocation, useNavigate } from "react-router";
import { useLogin } from "@/services/query/hooks/auth";
import { setAuthSession } from "@/services/store/auth";
import { Terminal } from "lucide-react";
import { toAppError } from "@/services/api/error";
import { showErrorToast, showSuccessToast } from "@/shared/libs/toast";

const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/";
  const { mutate: login, isPending } = useLogin({
    onSuccess(payload) {
      const data = payload.data;
      showSuccessToast("Signed in", {
        description: "Welcome back, my friend!",
      });
      setAuthSession(data.token, data.user);
      navigate(from, { replace: true });
    },
    onError(error) {
      const appError = toAppError(error);
      if (appError.handled) {
        return;
      }
      showErrorToast("Could not sign in", {
        description: appError.message,
        id: "login-error",
      });
    },
  });
  function onSubmit(values: z.infer<typeof LoginSchema>) {
    login(values);
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
          <span className="ml-3 text-xs text-terminal-dim">auth/login</span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="mb-8">
            <Terminal className="mb-4 size-5 text-primary" />
            <h1 className="text-xl font-medium text-terminal-fg">
              Welcome back
            </h1>
            <p className="mt-2 text-sm leading-6 text-terminal-muted">
              Sign in to continue building your next deployable idea.
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
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <p className="text-center text-xs text-terminal-muted">
        No account yet?{" "}
        <Link to="/signup" className="text-primary underline-offset-4 hover:underline">
          Create one
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
