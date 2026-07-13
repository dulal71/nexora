export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F5F5] px-4">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[var(--foreground)]">
          Newsletter Subscribe
        </h2>
        
        {/* Subtext */}
        <p className="text-[var(--foreground)] opacity-80">
          Sign up to stay in the loop. Receive updates, access to exclusive deals, and more.
        </p>

        {/* Input Form */}
        <form className="flex flex-col sm:flex-row gap-3 mt-8" >
          <input
            type="email"
            placeholder="Email address"
            className="flex-grow px-4 py-3 rounded-full border border-gray-300 bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] font-semibold hover:opacity-90 transition-opacity"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};