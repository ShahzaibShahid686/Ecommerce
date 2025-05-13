import products from '../data/products';
import Productcard from '@/components/Productcard';
export default function Home({products}){
    return(
        <div>
          <h1>Mini Store</h1>
          {products.map(p=>(
            <Productcard key={p.id} product={p} />
          ))}  

        </div>

    );
}
export async function getStaticProps() {
    return {
        props:{products}
    };
}