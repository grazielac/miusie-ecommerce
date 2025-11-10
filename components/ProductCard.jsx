import Link from 'next/link'
import Image from 'next/image'

function ProductCard({ product }) {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
        <Image src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard;
