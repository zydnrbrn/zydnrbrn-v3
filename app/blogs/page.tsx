import { ListPosts } from '@/components/posts'

export default function Home() {
    return (
        <main className="flex flex-col">
            <h1 className="text-3xl font-extralight">
                My Blogging Site
            </h1>
            <section className='py-10'>
                <h2 className='text-2xl font-bold'>
                    Latest Blogs
                </h2>
            </section>
            <ListPosts />
        </main>
    )
}