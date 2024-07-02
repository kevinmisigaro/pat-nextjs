"use client";

import Countdown from "@/components/Countdown";
import DetailsCard from "@/components/DetailsCard";
import RegistrationCard from "@/components/RegistrationCard";
import { FaLocationDot, FaCalendarDays, FaCheck} from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

export default function Home() {

  const currentYear = new Date().getFullYear();
  const targetDate = new Date(`October 17, ${currentYear} 00:00:00`);

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
              24<sup>TH</sup> PAT SCIENTIFIC CONFERENCE AND ANNUAL GENERAL
              MEETING
            </h1>
            <p className="mb-3 text-xl mt-16 uppercase">
              THEME: Foundation of life: improving health outcomes in children
            </p>
            <div className="flex items-center gap-x-5 justify-center mt-10">
              <button className="btn btn-primary">FIND OUT MORE</button>
              <button className="btn bg-[#f29719] border-[#f29719] hover:border-[#f29719] hover:text-[#f29719]">
               <FaAnglesRight /> REGISTER NOW
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
            <div className="font-bold text-2xl">Mbeya</div>
            <div className="text-base">EDEN HIGHLANDS HOTEL</div>
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
              17<sup>th</sup> - 19<sup>th</sup> October
            </div>
            <div className="text-base">Event date</div>
          </div>
        </div>
      </div>

      <div
        className="px-5 md:px-20 bg-right bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/images/female-doc-left.png')",
        }}
      >
        <div className="flex items-stretch">
          <div className="py-20 basis-2/3 px-10">
            <div className="font-black text-5xl mb-10">
              Secure your Spot & <br /> Mark the Date!
            </div>
            <div className="text-xl">
              Don&apos;t miss out on this essential Pediatrics Healthcare Event in
              Tanzania! Join us for an insightful day filled with expert talks,
              interactive sessions, and networking opportunities with leading
              professionals in the field. Secure your spot now and be part of a
              community dedicated to advancing pediatric care. Make sure to mark the date on your calendar!
            </div>
            <div className="mt-6">
            <Countdown targetDate={targetDate} />
            </div>
            <div className="btn bg-[#202abd] hover:bg-[#f29719] text-white border-[#f29719] mt-10">
              FIND OUT MORE
            </div>
          </div>
          <div className="basis-1/3 bg">
            {/* <img src="/images/female-doc-left.png" className="w-full" /> */}
          </div>
        </div>
      </div>

      <div className="bg-cover bg-[url('/images/banner-pat-4.jpg')] bg-opacity-60">
        <div className="py-20">
          <h3 className="text-center font-bold text-2xl">CONFERENCE DETAILS</h3>

          <div className="flex flex-col gap-y-10 justify-center my-10 mx-32">
            <DetailsCard title="THEME" txtColor="black" bgColor="#ffdfca">
              <h4 className="text-xl font-semibold uppercase">
                Foundation of life: improving health outcomes in children
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
          EXPLORE THE CITY OF MBEYA
        </div>
        <div className="flex justify-center ">
          <div className="my-10 text-center text-white max-w-4xl">
            Nestled in Tanzania&apos;s southwestern highlands, Mbeya is a vibrant
            city known for its stunning landscapes and warm hospitality.
            Visitors can enjoy breathtaking views of rolling hills, lush
            valleys, and majestic mountains. The city&apos;s cool climate supports
            fertile coffee and tea plantations, perfect for exploration. Mbeya
            also serves as a gateway to natural attractions like Ngozi Crater
            Lake and Mbeya Peak. Rich in culture, the city features lively
            markets, traditional music, and dance. Whether you&apos;re an adventurer,
            nature lover, or cultural enthusiast, Mbeya offers an unforgettable
            experience in the heart of Tanzania.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7">
          <div
            className="max-w-sm h-52 bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/mbeya/mbeya-1.jpg')",
            }}
          />
          <div
            className="max-w-sm h-52 bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/mbeya/mbeya-2.jpg')",
            }}
          />
          <div
            className="max-w-sm h-52 bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/mbeya/mbeya-3.jpg')",
            }}
          />
          <div
            className="max-w-sm h-52 bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/mbeya/mbeya4.jpeg')",
            }}
          />
          <div
            className="max-w-sm h-52 bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/mbeya/mbeya-5.jpg')",
            }}
          />
          <div
            className="max-w-sm h-52 bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/mbeya/mbeya-6.jpeg')",
            }}
          />
        </div>
      </div>
    </div>
  );
}
