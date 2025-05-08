import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>home layout</h1>
    },
    {
        path: "/news",
        element: <h1>news layout</h1>
    },
    {
        path: "/auth",
        element: <h1>login</h1>
    },
    {
        path: "*",
        element: <h1>Error</h1>
    },
])

export default router;
