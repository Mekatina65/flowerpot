import Link from 'next/link'

const Navbar = () => {
    return ( 

        <nav>
            <h1>this is navbar</h1>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
     );
}
 
export default Navbar;