import Link from 'next/link'
import Footer from "../comps/footer";
import Navbar from "../comps/navbar";

const Home = () => {
  return ( 

    <div>
      <Navbar />

      <h1>home page</h1>
      <Link href="/richie"><a>test</a></Link>
      <Footer />
    </div>
   );
}
 
export default Home;