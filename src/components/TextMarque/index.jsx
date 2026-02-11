import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa6";

const marqueContent = [
  "Appetite that grow your business",
  "Appetite that grow your business",
  "Appetite that grow your business",
  "Appetite that grow your business",
  "Appetite that grow your business",
  "Appetite that grow your business",
];

export const TextMarque = () => {
  return (
    <div className="bg-black">
    <section className="py-16">
      <Marquee
        autoFill={true}
        pauseOnHover={true}
        speed={80}
        className="text-4xl font-bold bg-primary py-4"
      >
        {marqueContent.map((mar, index) => (
          <div
            key={index}
            className="cursor-pointer flex items-center gap-5 px-5"
          >
            <FaStarOfLife />
            <div>{mar}</div>
          </div>
        ))}
      </Marquee>
    </section>
    </div>
  );
};
