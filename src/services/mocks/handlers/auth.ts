import { LoginRequestBody } from "@/application/contracts/auth";
import { http, HttpResponse, delay } from "msw";

export const authHandler = [
  http.post("*/auth/login", async ({ request }) => {
    const { email, password } = (await request.json()) as LoginRequestBody;
    await delay(1000);
    if (email === "dangquocbao9504@gmail.com" && password === "abc") {
      return HttpResponse.json(
        {
          data: {
            token: "fake-token",
            user: {
              id: "123",
              name: "username",
              email,
            },
          },
          statusCode: 200,
        },
        { status: 200 },
      );
    }
    return HttpResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }),

  http.post("*/auth/register", async () => {
    return HttpResponse.json(
      { data: { id: "123", email: "new@example.com" }, statusCode: 201 },
      { status: 201 },
    );
  }),
];
