import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";

function RegistrationCard({
  title,
  children,
  bgColor,
}: {
  title: string;
  children: ReactNode;
  bgColor: string;
}) {
  return (
    <div
      className="flex flex-col gap-y-4 items-center px-12 py-5 text-black rounded-md"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="font-semibold text-xl text-center">{title}</div>
      <div className="py-2">{children}</div>
      <Link href={'https://pat.paediatrics.or.tz/'} className="btn bg-black border-black hover:bg-black flex items-center gap-x-3 text-white">
        <FaArrowRight />
        <p>Register Now</p>
      </Link>
    </div>
  );
}

export default RegistrationCard;
