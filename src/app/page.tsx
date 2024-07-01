"use client";

import DetailsCard from "@/components/DetailsCard";
import RegistrationCard from "@/components/RegistrationCard";
import { FaLocationDot, FaCalendarDays, FaCheck } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      {/* Main hero */}
      <div
        className="hero h-[80vh] bg-center"
        style={{
          backgroundImage: "url(/images/banner1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-85 bg-[#0f4c15]"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl text-white py-10">
            <h1 className="mb-3 text-4xl font-bold">
              ANNUAL GENERAL MEETING & SCIENTIFIC CONFERENCE OF THE PAEDIATRIC
              ASSOCIATION OF TANZANIA
            </h1>
            <p className="mb-3 text-xl mt-16">
              THEME: INTERSECTORAL COLLABORATION IN ADVANCING CHILD HEALTH AND
              DEVELOPMENT
            </p>
            <div className="flex items-center gap-x-5 justify-center mt-10">
              <button className="btn btn-primary">FIND OUT MORE</button>
              <button className="btn bg-[#f29719] border-[#f29719] hover:border-[#f29719] hover:text-[#f29719]">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end of main hero */}

      <div className="flex items-center justify-center -mt-12">
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 items-center md:items-start justify-center gap-x-32 bg-[#f29719] max-w-fit py-8 px-20">
          <div className="basis-1/3 flex flex-col gap-y-2 items-center justify-center">
            <FaLocationDot className="text-6xl" />
            <div className="font-bold text-2xl">Dodoma</div>
            <div className="text-base">Conference Venue</div>
          </div>
          <div className="basis-1/3 flex flex-col gap-y-2 items-center justify-center">
            <FaCalendarDays className="text-6xl" />
            <div className="font-bold text-2xl text-center">
              1<sup>st</sup> July - 30<sup>th</sup> September
            </div>
            <div className="text-base">Early Bird Date</div>
          </div>
          <div className="basis-1/3 flex flex-col gap-y-2 items-center justify-center">
            <FaCalendarDays className="text-6xl" />
            <div className="font-bold text-2xl text-center">
              1<sup>st</sup> - 3<sup>rd</sup> October
            </div>
            <div className="text-base">Event date</div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20">
        <div className="flex items-stretch">
          <div className="py-20 basis-2/3 px-10">
            <div className="font-black text-5xl mb-10">
              Secure your Spot & <br /> Mark the Date!
            </div>
            <div className="text-xl">
              Be a catalyst for change in Paediatric healthcare in Tanzania.
              Join us at the Paediatric Association of Tanzania Conference 2024.
            </div>
            <div className="mt-6">
              <div className="grid grid-flow-col gap-x-10 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-[#0f4c15] rounded-box text-white p-6">
                  <span className="countdown font-mono text-5xl">15</span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-[#0f4c15] rounded-box text-white p-6">
                  <span className="countdown font-mono text-5xl">10</span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-[#0f4c15] rounded-box text-white p-6">
                  <span className="countdown font-mono text-5xl">11</span>
                  min
                </div>
              </div>
            </div>
            <div className="btn bg-[#f29719] hover:bg-[#f29719] text-white border-[#f29719] mt-10">
              FIND OUT MORE
            </div>
          </div>
          <div className="basis-1/3 bg">
            <img src="/images/doctor-mask-3.png" className="w-full" />
          </div>
        </div>
      </div>

      <div className="bg-cover bg-[url('/images/banner-pat-4.jpg')] bg-opacity-60">
        <div className="py-20">
          <h3 className="text-center font-bold text-2xl">CONFERENCE DETAILS</h3>

          <div className="flex flex-col gap-y-10 justify-center my-10 mx-32">
            <DetailsCard title="THEME" txtColor="black" bgColor="#ffdfca">
              <h4 className="text-xl font-semibold">
                INTERSECTORAL COLLABORATION IN ADVANCING CHILD HEALTH AND
                DEVELOPMENT
              </h4>
            </DetailsCard>

            <DetailsCard title="SUB THEMES" txtColor="black" bgColor="#fff2bd">
              <div className="flex flex-col gap-y-3 py-5">
                <div className="flex items-center gap-x-4">
                  <FaCheck />{" "}
                  <p className="font-semibold">
                    OVERCOMING THE HARMFUL MIX OF INSECURITY AND POVERTY ON
                    CHILD HEALTH
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaCheck />{" "}
                  <p className="font-semibold">
                    OVERCOMING THE HARMFUL MIX OF INSECURITY AND POVERTY ON
                    CHILD HEALTH
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaCheck />{" "}
                  <p className="font-semibold">
                    OVERCOMING THE HARMFUL MIX OF INSECURITY AND POVERTY ON
                    CHILD HEALTH
                  </p>
                </div>
              </div>
            </DetailsCard>
          </div>
        </div>
      </div>

      <div className="py-24 bg-[#011906] text-white">
        <div className="text-center text-4xl font-bold mb-10">
          REGISTRATION FEES
        </div>
        <p className="my-5 text-center">
          Early bird registration ends{" "}
          <span className="underline">15th September 2024 </span> <br />
          Regular registration ends{" "}
          <span className="underline">30th September 2024</span> <br />
          Late/on-site registration starts{" "}
          <span className="underline">1st October 2024 </span>
        </p>

        <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 items-center justify-center gap-x-10 mt-10">
          <RegistrationCard title="Members" bgColor="#81dd8d">
            <div className="flex flex-col gap-y-2 items-center text-base">
              <p>Early Bird: TZS 90,000 </p>
              <p>Late/on-site: TZS 100,000</p>
            </div>
          </RegistrationCard>

          <RegistrationCard title="Students" bgColor="#dbca7b">
            <div className="flex flex-col gap-y-2 items-center text-base">
              <p>Early Bird: TZS 90,000 </p>
              <p>Late/on-site: TZS 100,000</p>
            </div>
          </RegistrationCard>

          <RegistrationCard title="International Delegates" bgColor="#fabebf">
            <div className="flex flex-col gap-y-2 items-center text-base">
              <p>Early Bird: $100 </p>
              <p>Late/on-site: $150</p>
            </div>
          </RegistrationCard>
        </div>
      </div>

      <div className="bg-[#3b3b3b] py-20 px-20">
        <div className="text-center text-white text-3xl font-bold">
          EXPLORE THE CITY OF DODOMA
        </div>
        <div className="my-10 text-center text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptatem ut delectus! <br /> Explicabo consequatur deleniti maxime
          quo eum nemo alias maiores vero! <br /> Quisquam ipsum exercitationem
          incidunt. Nihil doloribus perspiciatis nulla.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7">
          <img src="/images/hills.jpg" className="max-w-xs rounded-md" />
          <img src="/images/hills.jpg" className="max-w-xs rounded-md" />
          <img src="/images/hills.jpg" className="max-w-xs rounded-md" />
          <img src="/images/hills.jpg" className="max-w-xs rounded-md" />
          <img src="/images/hills.jpg" className="max-w-xs rounded-md" />
          <img src="/images/hills.jpg" className="max-w-xs rounded-md" />
        </div>
      </div>
    </div>
  );
}
