import { dataProps } from "@/types/index"

export const useFetch = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const GetData = async () => {
    const data  = await useFetch("https://www.olivas.digital/wp-json/wp/v2/posts?categories=373")

    const posts = data.map((post: dataProps) => {
        return{
            date: post.date,
            slug: post.slug,
            id: post.id,
            title: post.title?.rendered,
            content: post.content?.rendered,
            description: post.excerpt?.rendered
        }})
        
        // Formatar a hora
        const formatter = Intl.DateTimeFormat("pt-br");

    return{
        posts,
        formatter
    }
}
