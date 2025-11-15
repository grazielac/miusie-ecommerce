import Link from 'next/link'
import Image from 'next/image'

// 'product' isn't defined. it's passed in from the parent component (ProductList)
// { product } is a parameter to the component
function ProductCard({ product }) {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
        <Image src={product.image} alt={product.title} width={80} height={80} className="rounded-lg" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard;
