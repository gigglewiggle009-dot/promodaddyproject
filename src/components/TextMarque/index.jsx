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

       {/* ADD THIS SECTION BELOW MARQUEE */}

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white mt-12">

          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-400 text-sm">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">160+</h3>
            <p className="text-gray-400 text-sm">Google Reviews</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">5.0 ⭐</h3>
            <p className="text-gray-400 text-sm">Google Rating</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">8+</h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>

        </div>
    </section>
    </div>
  );
};
