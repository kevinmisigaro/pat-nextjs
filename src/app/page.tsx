"use client";

import Countdown from "@/components/Countdown";
import DetailsCard from "@/components/DetailsCard";
import RegistrationCard from "@/components/RegistrationCard";
import Link from "next/link";
import { FaLocationDot, FaCalendarDays, FaCheck } from "react-icons/fa6";
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
              {/* <button className="btn btn-primary">FIND OUT MORE</button> */}
              <Link href={'https://pat.paediatrics.or.tz/'} className="btn bg-[#f29719] border-[#f29719] hover:border-[#f29719] hover:text-[#f29719]">
                <FaAnglesRight /> REGISTER NOW
              </Link>
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

      <div className="px-5 md:px-32 mt-20">
        <div className="font-black text-2xl mb-5">
          CONFERENCE PROGRAM AND AUDIENCE
        </div>
        <div className="text-xl text-justify">
          The conference program will offer special keynote sessions, panel
          discussions, round table deliberations, symposia on topics of
          interest, abstract presentations, dialogues, research dissemination,
          and exhibition platforms. Speakers will be experts from within and
          beyond Tanzania and leaders in their fields of healthcare
          specialization.
          <br />
          <br />
          The Paediatric Association of Tanzania invites paediatricians,
          policymakers, non-governmental partners, medical students and
          paediatric trainees, scientists, researchers, paediatric nurses,
          health educators, allied health experts, pharmacists, pharmaceutical
          companies, and other stakeholders interested in improving health
          outcomes for children to attend the conference. A total of over 300
          participants are expected to attend the annual conference making it an
          excellent opportunity for networking, experience sharing, and
          showcasing research findings.
        </div>
        <div className="font-black text-2xl mt-10 mb-5">EXPECTED OUTCOMES</div>
        <div className="text-xl text-justify">
          It is expected that the Annual Scientific Conference will provide an
          avenue for child health practitioners, researchers, and other
          stakeholders to critically discuss the status of neonatal, child, and
          adolescent health outcomes in Tanzania. Participants will be updated
          with new developments in the field, recent innovations, trends, latest
          research findings, pressing challenges and finally deliberate on
          translating these to bedside clinical decisions, guidelines, and
          policies that will improve health outcomes of children in Tanzania and
          the wider East African Region.
        </div>
      </div>

      <div
        className="px-5 md:px-20 bg-right bg-contain bg-no-repeat md:bg-[url('/images/female-doc-left.png')]"
      >
        <div className="flex items-stretch">
          <div className="py-20 basis-2/3 px-3 md:px-10">
            <div className="font-black text-3xl md:text-5xl mb-10">
              Secure your spot & <br /> mark the date!
            </div>
            <div className="text-xl">
              Don&apos;t miss out on this essential Paediatrics Healthcare Event
              in Tanzania! Join us for an insightful day filled with expert
              talks, interactive sessions, and networking opportunities with
              leading professionals in the field. Secure your spot now and be
              part of a community dedicated to advancing pediatric care. Make
              sure to mark the date on your calendar!
            </div>
            <div className="mt-6">
              <Countdown targetDate={targetDate} />
            </div>
            <div className="btn bg-[#202abd] hover:bg-[#f29719] text-white border-[#f29719] mt-10">
              FIND OUT MORE
            </div>
          </div>
          <div className="basis-1/3">
          </div>
        </div>
      </div>

      <div className="bg-cover bg-[url('/images/banner-pat-4.jpg')] bg-opacity-60">
        <div className="py-20">
          <h3 className="text-center font-bold text-2xl">CONFERENCE DETAILS</h3>

          <div className="flex flex-col gap-y-10 justify-center my-10 mx-10 md:mx-32">
            <DetailsCard title="THEME" txtColor="black" bgColor="#ffdfca">
              <h4 className="text-xl font-semibold uppercase md:text-left text-center">
                Foundation of life: improving health outcomes in children
              </h4>
            </DetailsCard>

            <DetailsCard title="SUB THEMES" txtColor="black" bgColor="#fff2bd">
              <div className="flex flex-col gap-y-3 py-5">
                <div className="flex items-center gap-x-4">
                  <FaCheck />{" "}
                  <p className="font-semibold">
                    Perinatology: Fetal maternal and early newborn care,
                    Nutrition and breastfeeding, Jaundice management,
                    Respiratory support, and oxygen toxicity, antimicrobial
                    resistance and probiotics, Neurodevelopmental care, Kangaroo
                    mother care
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaCheck />{" "}
                  <p className="font-semibold">
                    Double burden of disease in paediatric population:
                    Non-communicable diseases, Emerging antimicrobial
                    resistance, TB/HIV, Nutrition
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaCheck />{" "}
                  <p className="font-semibold">
                    General Paediatrics and Adolescent medicine: Vaccinology,
                    Early childhood development, Equity and equality to access
                    health care
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaCheck />{" "}
                  <p className="font-semibold">
                    Health system strengthening: Health systems and digital
                    technologies
                  </p>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaCheck />{" "}
                  <p className="font-semibold">
                    Impact of climatic change and enviromental health
                  </p>
                </div>
              </div>
            </DetailsCard>

            <div className="py-5 px-10 rounded-md w-full bg-gray-700 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Rules for Submission of Abstracts
              </h3>
              <p className="mb-2">
                Abstracts must be submitted via this website link{" "}
                <a
                  href="https://pat.paediatrics.or.tz/"
                  className="text-blue-500"
                >
                  pat.paediatrics.or.tz
                </a>
                . Abstracts submitted via email will not be considered.
              </p>
              <p className="mb-2">
                Please read the submission instructions before submitting an
                abstract.
              </p>
              <p className="mb-2">
                The presenting author is required to ensure that all co-authors
                are aware of the contents of the abstract before submission.
              </p>
              <p className="mb-2">
                All abstracts should be submitted and presented in English
                language.
              </p>
              <p className="mb-2">
                Please note that the submitting author will receive all
                correspondence about the abstract, so we advise the submitting
                author&apos;s details entered should be the same details as those of
                the presenting author.
              </p>
              <p className="mb-4">
                You will receive a confirmation email once you have successfully
                submitted an abstract. Please contact us via phone number: xxxx
                if you experience any difficulties during submission.
              </p>
              <h3 className="text-xl font-semibold mt-10 mb-2">
                Submission Instructions
              </h3>
              <p className="mb-2">
                Before you begin the submission process, kindly review the
                following information:
              </p>
              <ul className="list-disc list-inside mb-4 ml-5">
                <li>
                  Abstract topic – abstracts must be allocated to the respective
                  track and sub-themes.
                </li>
                <li>
                  Presenting author&apos;s contact details (E-mail address,
                  mobile phone number)
                </li>
                <li>
                  Author and co-authors&apos; details (Full first and family
                  name(s); Affiliation details: department,
                  institution/hospital, city, country).
                </li>
                <li>
                  Abstract text – limited to 300 words; Format – Microsoft Word;
                  Font – Arial 10 points; Paragraph line spacing – Single.
                </li>
                <li>
                  The abstract should not contain tables, figures, and
                  references.
                </li>
                <li>
                  Abstract must be submitted with the following sections:
                  Introduction, Objectives, Methodology, Results, and
                  Conclusion.
                </li>
                <li>
                  Please indicate your preferred mode of (Oral or Poster)
                  presentation in case your abstract is accepted. (Note that the
                  committee will have the final decision on the mode of
                  presentation)
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-10 mb-2">
                Abstract Selection and Presentation
              </h3>
              <p className="mb-2">
                The Scientific committee will review all submitted abstracts and
                will notify the submitting author regarding abstract acceptance
                status. If accepted, details of the presentation schedule will
                be sent to the submitting author.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-[#011906] text-white">
        <div className="text-center text-4xl font-bold mb-10">
          REGISTRATION FEES
        </div>
        <p className="my-5 text-center">
          Early bird registration ends{" "}
          <span className="underline">30th September 2024 </span> <br />
          Regular registration ends{" "}
          <span className="underline">16th October 2024</span> <br />
          0n-site registration starts{" "}
          <span className="underline">17th October 2024 </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 items-center justify-center mt-10">
          <RegistrationCard title="PAT Members" bgColor="#81dd8d">
            <div className="flex flex-col gap-y-2 items-center text-base">
              <p>Early Bird: TZS 120,000 </p>
              <p>Regular: TZS 150,000</p>
            </div>
          </RegistrationCard>

          <RegistrationCard
            title={"Students, nurses, allied health care workers"}
            bgColor="#dbca7b"
          >
            <div className="flex flex-col gap-y-2 items-center text-base">
              <p>Early Bird: TZS 80,000 </p>
              <p>Regular: TZS 100,000</p>
            </div>
          </RegistrationCard>

          <RegistrationCard title="International Delegates & Non PAT Members" bgColor="#fabebf">
            <div className="flex flex-col gap-y-2 items-center text-base">
              <p>Early Bird: 200,000 </p>
              <p>Regular: 250,000</p>
            </div>
          </RegistrationCard>

          <RegistrationCard title="Associate Members" bgColor="#81dd8d">
            <div className="flex flex-col gap-y-2 items-center text-base">
              <p>Early Bird: 50,000 </p>
              <p>Regular: 80,000</p>
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
            Nestled in Tanzania&apos;s southwestern highlands, Mbeya is a
            vibrant city known for its stunning landscapes and warm hospitality.
            Visitors can enjoy breathtaking views of rolling hills, lush
            valleys, and majestic mountains. The city&apos;s cool climate
            supports fertile coffee and tea plantations, perfect for
            exploration. Mbeya also serves as a gateway to natural attractions
            like Ngozi Crater Lake and Mbeya Peak. Rich in culture, the city
            features lively markets, traditional music, and dance. Whether
            you&apos;re an adventurer, nature lover, or cultural enthusiast,
            Mbeya offers an unforgettable experience in the heart of Tanzania.
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
