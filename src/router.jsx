import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CommentPage from "./pages/CommentPage";
import WritePage from "./pages/WritePage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CommentPage />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/comment/:id",
        element: <DetailPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPage />,
      },
    ],
  },
]);

export default router;
