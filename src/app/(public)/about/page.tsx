'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';



const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const team = [
  {
    name: 'Angela Robot',
    role: 'Founder & CEO',
    image: '/team/angela.avif',
    bg: 'bg-[#E8A548]',
  },
  {
    name: 'Julia Wille',
    role: 'Co. Founder',
    image: '/team/julia.avif',
    bg: 'bg-gray-200 dark:bg-gray-800',
  },
  {
    name: 'Steve Smith',
    role: 'Fashion Designer',
    image: '/team/steve.avif',
    bg: 'bg-gray-200 dark:bg-gray-800',
  },
];

const infoRows = [
  {
    label: 'WHY WE',
    content: (
      <p>
        Our themes come with easy-to-use interface and outstanding support.
        You can implement your own design. You can easily change the store&apos;s
        appearance as per your requirements using our ready sections and
        options available. All of this can be yours at the best price
        available in the market.
      </p>
    ),
  },
  {
    label: 'OUR VISION',
    content: (
      <p>
        By using our themes, you can improve the way your online store looks
        and increase your chances of attracting more customers. We work hard
        to ensure that our themes are both beautiful and effective, so you can
        achieve your business goals.
      </p>
    ),
  },
  {
    label: 'OUR MISSION',
    content: (
      <p>
        Our goal is to create top-quality Shopify themes that look great and
        help your business succeed. We focus on making themes that not only
        look good but also help you make more sales and grow your business.
      </p>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white transition-colors dark:bg-gray-950">
      {/* ---------- About Us ---------- */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-14 text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold tracking-wide text-gray-900 dark:text-white"
        >
          ABOUT US
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-[15px] md:text-[18px] leading-7 text-gray-600 dark:text-gray-400"
        >
          As a certified Shopify Partner, we have been consistently creating
          top-performing premium Shopify themes since 2017. With over 15,000
          satisfied merchants, our themes are highly praised for their
          user-friendly interface, strong capabilities, and dependable
          performance. Our carefully crafted themes provide all the necessary
          features to ensure the success of your Shopify store in an
          effortless manner.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-10 h-[280px] w-full overflow-hidden rounded-lg sm:h-[380px]"
        >
          <Image
            src="/image/store-front.webp"
            alt="Our store interior"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* ---------- Info rows: Why We / Our Vision / Our Mission ---------- */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="divide-y divide-gray-100 dark:divide-gray-900">
          {infoRows.map((row, i) => (
            <motion.div
              key={row.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-4 sm:gap-6"
            >
              <h2 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
                {row.label}
              </h2>
              <div className="text-[15px] leading-7 text-gray-600 dark:text-gray-400 sm:col-span-3">
                {row.content}
              </div>
            </motion.div>
          ))}

          {/* Contact Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-4 sm:gap-6"
          >
            <h2 className="text-xs font-bold tracking-wide text-gray-900 dark:text-white">
              CONTACT US
            </h2>
            <div className="text-[15px] leading-7 text-gray-600 dark:text-gray-400 sm:col-span-3">
              <p className="font-semibold text-gray-900 dark:text-white">
                55 Gallaxy Enque,
              </p>
              <p>2568 street, 23568 NY</p>
              <p className="mt-3">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Phone:
                </span>{' '}
                (440) 000 000 0000
              </p>
              <p>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Email:
                </span>{' '}
                sales@yousite.com
              </p>
            </div>
          </motion.div>

          {/* Our Team */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-4"
          >
            <h2 className="text-xs font-bold tracking-wide text-gray-900 dark:text-white">
              OUR TEAM
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:col-span-3 sm:grid-cols-3">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div
                    className={`relative h-[220px] w-full overflow-hidden rounded-md ${member.bg}`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm font-bold tracking-wide text-gray-900 dark:text-white">
                    {member.name.toUpperCase()}
                  </p>
                  <p className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                    {member.role.toUpperCase()}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}