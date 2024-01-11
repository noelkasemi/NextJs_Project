import FacebookIcon from "@/SVG/facebookIcon";
import InstagramIcon from "@/SVG/instagramIcon";
import TwitterIcon from "@/SVG/twitterIcon";

export default function Footer() {
  return (
    <footer className=" bg-[#414141] w-full mt-14 h-fit px-0 md:px-24 py-8 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items items-center">
      <section className="flex flex-col items-center ">
        <article className="flex md:space-x-4 space-y-2">
          <FacebookIcon style={`w-16`} />
          <TwitterIcon style={'w-16'} />
          <InstagramIcon style={'w-16'} />
        </article>
        <h1 className="text-2xl text-white">Inner Pieces</h1>
        <p className="text-white">123-456-7890</p>
        <p className="text-white">info@mysite.com</p>
        <p className="text-white">2035 by Inner Pieces</p>
      </section>
      <section className="flex flex-col items-center ">
        <h1 className="text-3xl text-white">Contact</h1>
        <h2 className="text-xl text-white">Ask me anything</h2>
        <article className="flex flex-col md:flex-row md:space-x-4 w-fit">
          <label className="text-[#d3bdb3] flex flex-col" htmlFor="name">Full Name
          <input id="name" className="text-black" type="text" />
          </label>
          <label htmlFor="email" className="flex flex-col text-[#d3bdb3]" >Email
          <input className="text-black" id="email" type="email" />
          </label>
        </article>
        <label className="text-[#d3bdb3] ">Leave us a message...</label>
        <input className="text-black" type='text' />
        <button className="text-white outline outline-1 mt-8 outline-white hover:bg-white hover:text-[#414141] px-8 py-3">Submit</button>
      </section>
    </footer>
  );
}
