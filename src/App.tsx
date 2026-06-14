import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router";
import { AppRoutes } from "@/routes";
import { queryClient } from "@/services/query/client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
