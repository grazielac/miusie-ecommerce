import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface ProductCardProps {
    title: string;
    image: StaticImageData;
    price: string;
    description: string;
    slug: string;
}

function ProductCard({ title, image, price, description, slug }: ProductCardProps) {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <Image src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
