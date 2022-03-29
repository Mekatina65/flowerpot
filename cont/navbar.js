import Link from 'next/link'

const Navbar = () => {
    return ( 

        <nav>
            <div className="logo">
                this is the navagation bar
            </div>
            <Link href="/about"> <a>about</a></Link>
            <Link> <a href="#">Contact</a></Link>
            <Link> <a href="#"> About </a></Link>
            
        </nav>
     );
}
 
export default Navbar;