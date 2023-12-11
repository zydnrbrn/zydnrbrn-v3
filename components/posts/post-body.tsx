import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface PostBodyProps {
    source: MDXRemoteSerializeResult
}

export function PostBody({ source }: PostBodyProps) {
    return (
        <MDXRemote
            {...source}
        />
    )
}