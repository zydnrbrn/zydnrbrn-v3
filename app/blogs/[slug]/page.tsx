import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import remarkGfm from 'remark-gfm'

import { MDXRemote } from 'next-mdx-remote/rsc'
import Button from '@/components/mdx/button'

// const options = {
//     mdxOptions: {
//         remarkPlugins: [remarkGfm],
//         rehypePlugins: [],
//     }
// }

export async function generatedStaticParams() {
    const files = fs.readdirSync(path.join('blogs'));
    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }));

    return paths
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function Post({ params }: any) {
    const props = getPost(params);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
            <h1>{props.frontMatter.title}</h1>
            <MDXRemote source={props.content} components={{ Button }} />
        </article>
    )
}

export async function generateMetaData({ params }: any) {
    const blog = getPost(params);
    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description
    }
}