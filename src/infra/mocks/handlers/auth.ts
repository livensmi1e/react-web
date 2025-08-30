import { LoginRequestBody } from "@/infra/api/handlers/auth";
import { http, HttpResponse, delay } from "msw";

export const authHandler = [
  http.post("http://localhost:8000/api/auth/login", async ({ request }) => {
    const { email, password } = (await request.json()) as LoginRequestBody;
    await delay(1000);
    if (email === "dangquocbao9504@gmail.com" && password === "abc") {
      return HttpResponse.json(
        {
          token: "fake-token",
          user: {
            id: "123",
            name: "username",
            email,
          },
        },
        { status: 200 },
      );
    }
    return HttpResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }),

  http.post("http://localhost:8000/api/auth/register", async () => {
    return HttpResponse.json({ userId: "123" }, { status: 201 });
  }),
];
