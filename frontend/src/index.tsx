import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<AppRouter />);
