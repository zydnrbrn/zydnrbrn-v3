import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export function ListPosts() {
    const blogDir = "blogs"
    const files = fs.readdirSync(path.join(blogDir))
    const blogs = files.map(filename => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
        const { data: frontMatter } = matter(fileContent)
        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', '')
        }
    }
    )
    return (
        <div className='py-2'>
            {blogs.map(blog => (
                <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                    <div className='py-2 flex justify-between align-middle gap-2'>
                        <div>
                            <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                            <p className="text-gray-400">{blog.meta.description}</p>
                        </div>
                        <div className="my-auto text-gray-400">
                            <p>{blog.meta.date}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}