export default function Home() {
  return (
    <main className=" bg-slate-100">
      <section className=" w-full bg-cover bg-center">
        <div className=" absolute w-full">
          <img src="homeBackGround.png" className=" object-cover w-full" />
        </div>
        <div className=" relative">
          <ul className="flex justify-between mt-10 mx-[50px] md:mx-[120px]">
            <li className="">
              <a className=" text-2xl font-bold text-[#B22222]" href="#">
                ICCL
              </a>
            </li>
            <li className="">
              <ul className=" flex justify-between gap-5">
                <button className=" p-2 hover:border-2 text-black rounded-xl hover:bg-[#B22222] hover:text-white">
                  Home
                </button>
                <button className=" p-2 hover:border-2 text-black rounded-xl hover:bg-[#B22222] hover:text-white">
                  Partner
                </button>
                <button className=" p-2 hover:border-2 text-black rounded-xl hover:bg-[#B22222] hover:text-white">
                  Value Chain
                </button>
                <button className=" p-2 hover:border-2 text-black rounded-xl hover:bg-[#B22222] hover:text-white">
                  Sustainability
                </button>
                <button className=" p-2 hover:border-2 text-black rounded-xl hover:bg-[#B22222] hover:text-white">
                  Gallery
                </button>
              </ul>
            </li>
          </ul>

          <div className=" flex flex-col justify-center items-start mx-[100px] mt-10 md:mx-[120px] md:mt-32">
            <h1 className=" text-left text-lg font-extrabold md:text-4xl">
              International <br /> Classic <br /> Composite Ltd.
            </h1>
            <h4 className=" mt-12 text-md font-medium text-[#737373] md:text-2xl">
              Delivering Excellence since 1984
            </h4>
            <div className=" mt-8">
              <button className=" py-1 px-4 bg-[#B22222] border-2 border-[#B22222] text-white rounded-xl mr-6 text-sm md:py-2 md:px-7 md:text-xl ">
                Get Quote Now
              </button>
              <button className=" py-1 px-4 border-2 border-[#00A0C1]  text-[#00A0C1] rounded-xl mr-6 text-sm hover:bg-[#00A0C1] hover:text-white md:py-2 md:px-7 md:text-xl ">
                Learn More
              </button>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-between gap-5 mx-[150px] mt-[100px] md:flex-row">
            <div className=" max-w-[300px] p-4 bg-[#fff] shadow-lg md:min-h-44">
              <img src="DMVector.png" className=" w-12 h-12" />
              <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl">
                Digital Marketing
              </h3>
              <p className=" text-sm font-normal text-gray-700 lg:text-base">
                We focus on ergonomics and meeting you where you work.
              </p>
            </div>
            <div className="  max-w-[300px] p-6 bg-[#fff] shadow-lg md:min-h-44">
              <img src="nt50Vector.png" className=" w-12 h-10" />
              <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-900">
                National top 50 firms
              </h3>
              <p className=" text-sm font-normal text-gray-700 ">
                Just type what's on your mind and we'll get you there.
              </p>
            </div>
            <div className="  max-w-[300px] p-6 bg-[#B22222] shadow-lg md:min-h-44">
              <img src="DMvextor2.png" className=" w-12 h-10" />
              <h3 className=" mb-2 text-xl font-bold tracking-tight text-[#fff]">
                Digital Marketing
              </h3>
              <p className=" text-sm font-normal text-[#fff]">
                the quick fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-32 mt-20 flex flex-col items-center mx-[200px] md:mx-[150px]">
        <h2 className=" text-xl font-bold md:text-3xl">WHY CHOOSE US</h2>
        <p className=" text-sm text-[#737373] text-center max-w-[600px] m-auto md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of classNameical physics: Newtonian mechanics{" "}
        </p>
        <div className=" flex flex-col justify-between mt-10 gap-5 md:flex-row">
          <div className="  max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="casesDone.png" className=" w-8 md:w-12" />
            <h3 className=" font-bold text-[30px] text-[#252B42] md:text-[40px]">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-sm">
              CASES DONE
            </p>
          </div>
          <div className="  max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center">
            <img src="hpCustomers.png" className=" w-8 md:w-12" />
            <h3 className=" font-bold text-[30px] text-[#252B42] md:text-[40px]">
              45
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-sm">
              HAPPY CUSTOMERS
            </p>
          </div>
          <div className="  max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center">
            <img src="awordIcn.png" className=" w-8 md:w-12" />
            <h3 className=" font-bold text-[30px] text-[#252B42] md:text-[40px]">
              12+
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-sm">
              AWARD WINNING
            </p>
          </div>
          <div className="  max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center">
            <img src="DMVector.png" className=" w-8 md:w-12" />
            <h3 className=" font-bold text-[30px] text-[#252B42] md:text-[40px]">
              1.5K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-sm">
              CASES DONE
            </p>
          </div>
        </div>
      </div>
      <div className="mb-32 mt-20 text-center flex flex-col items-center ">
        <h2 className=" text-xl font-bold md:text-3xl">Making Difference</h2>
        <p className=" text-sm text-[#737373] max-w-[600px] m-auto md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className=" flex flex-col justify-between mt-14 gap-5 md:flex-row">
          <div className=" max-w-[240px] p-0 bg-[#fff] flex flex-col items-center min-h-[250px] justify-between">
            <div className=" p-6">
              <h4 className=" font-bold text-lg text-[#252B42]">
                A single source of truth
              </h4>
              <p className=" mt-6 font-medium text-sm text-[#737373]">
                Newton thought that light was made up of particles, but then it
                was discovered{" "}
              </p>
            </div>
            <img src="singleSrc.png" className=" " />
          </div>
          <div className=" max-w-[240px] p-0 bg-[#fff] flex flex-col items-center min-h-[250px] justify-between">
            <div className=" p-6">
              <h4 className=" font-bold text-lg text-[#252B42]">
                Fastest way to organize
              </h4>
              <p className=" mt-6 font-medium text-sm text-[#737373]">
                “Quantum mechanics” is the description of the behaviour of
                matter{" "}
              </p>
            </div>
            <img src="organize.png" className=" " />
          </div>
          <div className=" max-w-[240px] p-0 bg-[#fff] flex flex-col items-center min-h-[250px] justify-between">
            <div className=" p-6">
              <h4 className=" font-bold text-lg text-[#252B42]">
                Fastest way to take action
              </h4>
              <p className=" mt-6 font-medium text-sm text-[#737373]">
                They describe a universe consisting of bodies moving{" "}
              </p>
            </div>
            <img src="takeAction.png" className=" " />
          </div>
          <div className=" max-w-[240px] p-0 bg-[#fff] flex flex-col items-center min-h-[250px] justify-between">
            <div className=" p-6">
              <h4 className=" font-bold text-lg text-[#252B42]">
                Work better together
              </h4>
              <p className=" mt-6 font-medium text-sm text-[#737373]">
                They finally obtained a consistent description of the behaviour{" "}
              </p>
            </div>
            <img src="wrkTogenther.png" className=" " />
          </div>
        </div>
      </div>
      <div className=" mb-32 mt-20 flex flex-col items-center mx-[200px]">
        <h2 className=" text-xl font-bold md:text-3xl">
          We are providing best business service.
        </h2>
        <p className=" text-sm text-[#737373] max-w-[600px] m-auto md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className=" flex flex-col justify-around mt-16 gap-10">
          <div>
            <img src="videoPlaceholderr.png" className=" w-[680px] h-[480px]" />
          </div>
          <div className=" text-left w-[500px]">
            <h2 className=" text-xl font-bold text-left md:text-3xl">
              Most trusted in our field
            </h2>
            <p className=" text-sm text-[#737373] max-w-[300px] md:text-base md:max-w-[500px]">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div className=" mt-10 flex flex-row gap-10">
              <img src="ppl.png" className=" w-10 h-10 mb-5 mt-0" />
              <div>
                <h4 className=" font-bold text-lg text-[#252B42] mt-0 md:text-xl">
                  the quick fox jumps over the lazy dog
                </h4>
                <p className=" font-semibold text-base text-[#737373] mt-0">
                  Things on a very small scale ...
                </p>
              </div>
            </div>
            <div className=" mt-10 flex flex-row gap-10">
              <img src="watch.png" className=" w-10 h-10 mb-5 mt-0" />
              <div>
                <h4 className=" font-bold text-lg text-[#252B42] mt-0 md:text-xl">
                  the quick fox jumps over the lazy dog
                </h4>
                <p className=" font-semibold text-base text-[#737373] mt-0">
                  Things on a very small scale ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#FAFAFA] py-5 mt-20 px-12 mb-32 text-center mx-[100px] gap-4">
        <div className=" flex flex-col justify-between gap-10 md:flex-row">
          <div className=" flex flex-row justify-between md:w-[30%]">
            <img src="hooli.png" className="w-24 h-24" />
            <img src="lyft.png" className="w-24 h-24" />
          </div>
          <div className=" flex flex-row justify-between md:w-[30%]">
            <img src="piperHat.png" className="w-24 h-24" />
            <img src="stripe.png" className="w-24 h-24" />
          </div>
          <div className=" flex flex-row justify-between md:w-[30%]">
            <img src="aws.png" className="w-24 h-24" />
            <img src="reddit.png" className="w-24 h-24" />
          </div>
        </div>
        <div className=" bg-[#16697A] mx-0 border-2 mt-10 p-8 flex flex-col justify-between items-center gap-5 md:flex-row">
          <h3 className=" font-bold text-[#fff] max-w-[200px] text-center text-xl">
            Subscribe For Latest Newsletter
          </h3>
          <form action="" className="p-0 flex">
            <input
              type="text"
              className="w-[200px] h-10 m-0 border-white border-2"
              placeholder="Your Email"
            />
            <input
              type="submit"
              className=" h-10 text-white bg-[#B22222] px-2 ml-0 border-white border-2"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
      <div className=" mb-32 mt-20 text-center mx-[100px] md:mx-[300px]">
        <h2 className=" text-xl font-bold md:text-3xl">Get In Touch</h2>
        <p className=" text-sm text-[#737373] max-w-[600px] m-auto md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>

        <div className=" flex flex-col gap-0 items-center justify-center mt-10 md:flex-row">
          <div className=" w-[340px] min-h-[300px] py-6 px-20 bg-[#fff] flex flex-col items-center gap-8">
            <img src="call.png" className=" h-[72px] w-[48px]" />
            <div>
              <p className=" font-semibold text-md">
                georgia.young@example.com
              </p>
              <p className=" font-semibold text-md">georgia.young@ple.com</p>
            </div>
            <h4 className=" font-bold text-lg">Get Support</h4>
            <button className=" p-2 border-2 border-[#B22222] text-[#B22222] rounded-xl text-lg hover:bg-[#B22222] hover:text-white">
              Submit Request
            </button>
          </div>
          <div className=" w-[340px] min-h-[450px] py-6 px-20 bg-[#252B42] flex flex-col items-center gap-8 text-white justify-center">
            <img src="location.png" className=" h-[72px] w-[72px]" />
            <div>
              <p className=" font-semibold text-md">
                georgia.young@example.com
              </p>
              <p className=" font-semibold text-md">georgia.young@ple.com</p>
            </div>
            <h4 className=" font-bold text-lg">Get Support</h4>
            <button className=" p-2 border-2 border-[#fff] text-[#fff] rounded-xl text-lg hover:bg-[#fff] hover:text-black">
              Submit Request
            </button>
          </div>
          <div className=" w-[340px] min-h-[300px] py-6 px-20 bg-[#fff] flex flex-col items-center gap-8">
            <img src="msg.png" className=" h-[72px] w-[72px]" />
            <div>
              <p className=" font-semibold text-md">
                georgia.young@example.com
              </p>
              <p className=" font-semibold text-md">georgia.young@ple.com</p>
            </div>
            <h4 className=" font-bold text-lg">Get Support</h4>
            <button className=" p-2 border-2 border-[#B22222] text-[#B22222] rounded-xl text-lg hover:bg-[#B22222] hover:text-white">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      <div className=" mb-0 my-0 mt-20 text-center">
        <div className=" flex flex-row justify-between bg-[#fff] px-[100px]">
          <div className=" text-left">
            <h4 className=" text-xl font-bold text-[#252B42]">
              Consulting Agency For Your Business
            </h4>
            <p className=" text-[#737373] font-medium text-md">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <button className="p-2 border-2 bg-[#B22222] border-[#B22222] text-[#fff] rounded-xl text-lg hover:text-black hover:bg-[#fff] ">
            Contact Us
          </button>
        </div>
        <div className="mt-2 bg-gradient-to-r from-purple-800 via-pink-800 to-green-800 relative overflow-hidden bg-cover bg-center bg-no-repeat p-12 text-center flex flex-row text-white justify-evenly">
          <ul className=" flex flex-col gap-2 ">
            <h4 className=" font-bold">Company Info</h4>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
          <ul className=" flex flex-col gap-2">
            <h4 className=" font-bold">Legal</h4>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
          <ul className=" flex flex-col gap-2">
            <h4 className=" font-bold">Features</h4>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
          <ul className=" flex flex-col gap-2">
            <h4 className=" font-bold">Resources</h4>
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
          <ul className=" flex flex-col gap-2 w-96">
            <h4 className=" font-bold">Get In Touch</h4>
            <li className=" flex flex-row justify-left">
              <img src="call.png" className=" w-6" />{" "}
              <p className="">(480) 555-0103</p>
            </li>
            <li className=" flex flex-row justify-left">
              <img src="location.png" className=" w-6 h-6" />{" "}
              <p className=" text-left">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </li>
            <li className=" flex flex-row justify-left">
              <img src="msg.png" className=" w-6" />{" "}
              <p>debra.holt@example.com</p>
            </li>
          </ul>
        </div>
        <div className=" flex flex-row justify-between px-[100px] py-10">
          <h5 className=" font-semibold text-md text-[#737373]">
            Made With Love By Biznextit All Right Reserved{" "}
          </h5>
          <div className=" flex flex-row gap-6">
            <img src="fbFooter.png" className=" w-5 h-5" />
            <img src="insFooter.png" className=" w-5 h-5" />
            <img src="Xfooter.png" className=" w-5 h-5" />
            <img src="yTubeFooter.png" className=" w-5 h-5" />
          </div>
        </div>
      </div>
    </main>
  );
}
