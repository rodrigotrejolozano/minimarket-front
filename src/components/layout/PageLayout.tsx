import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import Navbar from '../Navbar/Navbar'

interface PageLayoutProps {
    title?: string,
    description?: string,
    favicon?: string,
}

const PageLayout: React.FC<PropsWithChildren<PageLayoutProps>> = ({
    children,
    title = "Minimarket",
    description = "Minimarket es una tienda web",
    favicon = "/favicon.ico",
}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href={favicon} />
            </Head>
            <header>
                <Navbar />
            </header>
            <main
                className='min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 p-4 sm:p-8'
            >
                {children}
            </main>
            <footer>
            </footer>

        </>
    )
}

export default PageLayout