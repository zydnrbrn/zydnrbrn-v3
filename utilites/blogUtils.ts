import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

export async function generatedStaticParams() {
    const files = fs.readdirSync(path.join('blogs'));
    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }));

    return paths
}

export async function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join('blogs', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    const mdxSource = await serialize(content)

    return {
        frontMatter,
        slug,
        mdxSource
    }
}

export async function generateMetaData({ params }: any) {
    const blog = await getPost(params);
    return {
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
        mdxSource: blog.mdxSource
    }
}


export async function getStaticProps({ params }: any) {
    const post = await getPost(params);
    return {
        props: {
            mdxSource: post.mdxSource,
            frontMatter: post.frontMatter
        }
    }
}