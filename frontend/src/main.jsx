import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TodoContextProvider } from "./contexts/TodoContext.jsx";
import "./index.css";

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>
);
