import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link href={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}
