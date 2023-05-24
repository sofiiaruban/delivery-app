import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "./AppRouter";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
