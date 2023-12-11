import { ListPosts } from '@/components/posts'

export default function Home() {
    return (
        <main className="flex flex-col">
            <section className='py-10'>
                <h2 className='text-2xl font-bold'>
                    Latest Blogs
                </h2>
            </section>
            <ListPosts />
        </main>
    )
}