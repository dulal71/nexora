import Marquee from "react-fast-marquee";

interface Offer {
  id: number;
  text: string;
}

interface OfferMarqueeProps {
  offers?: Offer[];
  speed?: number;
}

const defaultOffers: Offer[] = [
  { id: 1, text: "10% OFF OUTERWEAR GET EM WHILE THEY'RE HOT" },
  { id: 2, text: "FREE SHIPPING ON ALL ORDERS OVER $100" },
  { id: 3, text: "NEW ARRIVALS EVERY WEEK" },
  { id: 4, text: "USE CODE: SUMMER20 FOR EXTRA 20% OFF" },
];

const OfferMarquee: React.FC<OfferMarqueeProps> = ({
  offers = defaultOffers,
  speed = 80,
}) => {

  const repeatedOffers: Offer[] = [...offers, ...offers, ...offers];

  return (
    <div className="bg-black dark:bg-white text-white dark:text-black text-[10px] md:text-[12px] py-2 overflow-hidden">
      <Marquee gradient={false} speed={speed} autoFill>
        {repeatedOffers.map((offer: Offer, index: number) => (
          <span
            key={`${offer.id}-${index}`}
            className="mx-6 whitespace-nowrap font-medium tracking-wide"
          >
            {offer.text}
            <span className="mx-6 text-amber-400 dark:text-amber-500">♦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default OfferMarquee;