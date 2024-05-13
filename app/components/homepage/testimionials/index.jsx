import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import GlowCard from "../../helper/glow-card";


function Testimonial({}) {

  return (
    <div id='testimonial' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            What Client Says
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="container flex justify-center">
        <figure className="snip1390">
          <figcaption>
            <blockquote><small><i>Nice! Good output when it comes to projects and fast recommended developer!</i></small> - <b>Anonymous</b></blockquote>
          </figcaption>
        </figure>

        <figure className="snip1390 hover">
          <figcaption >
            <blockquote><small><i>Currently working on this block, busy developer!</i></small> - <b>Anonymous</b></blockquote>
          </figcaption>
        </figure>

        <figure className="snip1390">
          <figcaption>
            <blockquote><small><i>This is just a test feedback to my site, to display if it is working</i></small> - <b>Ram Ortega</b></blockquote>
          </figcaption>
        </figure>
      </div>
    
      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          // href="/blog"
          href="/#"
        >
        <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
