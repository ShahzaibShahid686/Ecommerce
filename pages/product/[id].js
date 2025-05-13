import { useRouter } from 'next/router';
import products from '../../data/products';

export default function ProductDetail({ product }) {
  const router = useRouter();

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => alert('Added to cart!')}>Add to Cart</button>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = products.map(p => ({
    params: { id: p.id.toString() }
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.id === params.id);
  return { props: { product: product || null } };
}
