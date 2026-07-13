import React from 'react';
import { HiTruck, HiOutlineArrowPath, HiLockClosed, HiMiniChatBubbleLeftRight } from 'react-icons/hi2';
import { IconType } from 'react-icons';

interface FeatureItem {
  icon: IconType;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  { icon: HiTruck, title: 'FREE SHIPPING', description: 'When you spend $100+' },
  { icon: HiOutlineArrowPath, title: 'FREE RETURNS', description: '30-days free return policy.' },
  { icon: HiLockClosed, title: 'SECURED PAYMENTS', description: 'We accept all credit cards.' },
  { icon: HiMiniChatBubbleLeftRight, title: '24/7 HELP CENTER', description: 'Dedicated 24/7 support' },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12  dark:bg-black w-full border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-1">
            <feature.icon className="w-8 h-8 text-black dark:text-white mb-2" />
            <h3 className="text-xs md:text-xl font-black tracking-widest text-black dark:text-white uppercase">
              {feature.title}
            </h3>
            <p className="text-xs md:text-md text-gray-500 font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};