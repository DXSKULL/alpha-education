import BlogsPage from "../pages/BlogsPage"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"
import OneBlogPage from "../pages/OneBlogPage"
import { ROUTES } from "./consts"

export const routes = [
    {
        path: ROUTES.HOME_PAGE,
        element: HomePage
    },
    {
        path: ROUTES.BLOGS_PAGE,
        element: BlogsPage
    },
    {
        path: ROUTES.ONE_BLOG_PAGE,
        element: OneBlogPage
    },
    {
        path: "*",
        element: NotFoundPage
    }
]