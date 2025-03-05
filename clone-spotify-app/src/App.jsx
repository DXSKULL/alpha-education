import "./assets/css/style.css";
import AppRouter from "./components/core/AppRouter";
import Layout from "./components/core/Layout";

export default function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}
