import axios from "axios"

export async function fetchBlogs(id) {
    try {
        const { data } = await axios.get(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)

        
        if (!data.blog) {
            throw new Error(JSON.stringify(data) )
        }

        const { user_id, title, description, category } = data.blog


        return { user_id, title, description, category }
    } catch (error) {
        throw new Error("Error while fetching blog: " + error.message)
    }
}