import Link from 'next/link'

const Home = () => {
  return ( 

    <p>
      <h1>this is home page</h1>
      <Link href="/createindex"><a>create index</a></Link>
      
      <h1>security</h1>
      <h1>education</h1>
      <h1>medical</h1>
      <h1>revenue</h1>
    </p>
   );
}
 
export default Home;
