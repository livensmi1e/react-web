import { http, HttpResponse } from "msw";

export const authHandler = [
  http.post("/auth/login", () => {
    return HttpResponse.json({ token: "fake-token" }, { status: 200 });
  }),

  http.post("/auth/register", async () => {
    return HttpResponse.json({ userId: 123 }, { status: 201 });
  }),
];
