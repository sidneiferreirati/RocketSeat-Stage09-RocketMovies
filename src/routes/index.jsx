import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.use";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
