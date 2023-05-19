import Head from "next/head"
import React, { useEffect } from "react"

export default function NotFound() {
    useEffect(() => {
        window.location.href = "http://www.dinamus.org";
    }, [])

    return (
        <React.Fragment>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>

            <div>
                <p>Link inválido.</p>
                <p>Aguarde para ser redirecionado, ou <a href="https://www.dinamus.org">clique aqui</a></p>
            </div>
        </React.Fragment>
    )
}
  