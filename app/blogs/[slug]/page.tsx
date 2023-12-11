import fs from 'fs'
import path from 'path'
import { getPost } from '@/utilites/blogUtils'
// import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter'
// import { MDXRemote } from 'next-mdx-remote'
import Markdown from 'react-markdown'


export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('blogs'));
    const params = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }));

    return params
}

export async function generateMetadata({ params }: any) {
    const blog = await getPost(params);
    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
        mdxSource: blog.mdxSource
    }
}

export default async function PostPage({ params }: any) {
    const markdownFile = fs.readFileSync(path.join('blogs', params.slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownFile)
    // const mdxSource = await serialize(content)
    // console.info(content)

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
            <h1>{frontMatter.title}</h1>
            {/* <MDXRemote {...mdxSource} /> */}
            <Markdown>
                {content}
            </Markdown>
        </article>
    );
}