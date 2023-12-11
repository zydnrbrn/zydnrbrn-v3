import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'

export default async function PostPage({ params }: any) {
    const markdownFile = fs.readFileSync(path.join('blogs', params.slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownFile)

    return (
        <>
            <h1>{frontMatter.title}</h1>
            <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
                <Markdown remarkPlugins={[gfm]}>
                    {content}
                </Markdown>
            </article>
        </>
    );
}