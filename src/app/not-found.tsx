import Link from 'next/link';
import { BiHome, BiSearch } from 'react-icons/bi';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center transition-colors dark:bg-gray-950">
      <h1 className="animate-[fadeIn_0.4s_ease-out] text-7xl font-bold text-gray-900 dark:text-white">
        404
      </h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        We couldn&apos;t find the page you&apos;re looking for.
      </p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
        It may have been moved or no longer exists.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <BiHome size={16} />
          Go home
        </Link>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
        >
          <BiSearch size={16} />
          Search products
        </Link>
      </div>
    </div>
  );
}