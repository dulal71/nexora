import Link from 'next/link';
import Image from 'next/image';

interface Category {
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  { name: 'Women', image: '/image/women.webp', link: '/shop' },
  { name: 'Men', image: '/image/men.webp', link: '/shop' },
  { name: 'Backpack', image: '/image/backpack.webp', link: '/shop' },
  { name: 'Accessories', image: '/image/sunglasses.webp', link: '/shop' },
];

export const ShopTheEdit = () => {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-[var(--foreground)] mb-2">Shop The Edit</h2>
        <p className="text-[var(--foreground)] opacity-70 mb-10">
          The easiest and fastest way to create grid banners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Items */}
          {categories.slice(0, 2).map((cat) => (
            <Link href={cat.link} key={cat.name} className="relative group overflow-hidden rounded-lg h-[400px]">
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-2 rounded-full font-semibold text-black shadow-lg">
                {cat.name}
              </div>
            </Link>
          ))}

          {/* Small Items Column */}
          <div className="flex flex-col gap-4">
            {categories.slice(2).map((cat) => (
              <Link href={cat.link} key={cat.name} className="relative group overflow-hidden rounded-lg h-[192px]">
                <Image 
                  src={cat.image} 
                  alt={cat.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-1 rounded-full font-semibold text-black shadow-lg">
                  {cat.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};