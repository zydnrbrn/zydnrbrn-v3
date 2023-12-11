import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {children}
        </main>
    </div>
)

export default Layout