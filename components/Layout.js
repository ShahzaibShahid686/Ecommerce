import Link from "next/link";
import Head from "next/head";
export default function Layout({children}){
    return (
        <>
        <Head>
        <tittle> Mini e commerce Store </tittle>
        <meta name="description" content="A simple Next js e commerce app"/>
        </Head>
        <header style={{padding:'1rem',borderBottom:'1px solid #ccc'}}>
        <nav>
            <Link href="/">Home</Link>
            <span style={{marginLeft:'1rem'}}><Link href="/cart">Cart</Link></span>
        </nav>
        </header>
        <main style={{padding:'2rem'}}> 
        {children}
        </main>
        <footer style={{padding:'1rem',borderTop:'1px solid #ccc',textAlign:'center'}}>
        <p>{newDate.getFullYear()}Mini store </p>
        </footer>
        </>
    );
}