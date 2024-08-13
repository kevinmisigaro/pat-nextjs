import { ReactNode } from "react";

function DetailsCard({
  title,
  children,
  bgColor,
  txtColor,
}: {
  title: string;
  children: ReactNode;
  bgColor: string;
  txtColor: string;
}) {
  return (
    <div
      className="flex flex-col md:flex-row items-center gap-x-10 py-5 px-20 md:px-10 rounded-md w-full"
      style={{
        backgroundColor: bgColor,
        color: txtColor,
      }}
    >
      <div className="text-xl font-semibold mb-2 md:mb-0">{title}:</div>
      <div
        className="h-10 w-0.5 bg-black md:block hidden"
        style={{
          backgroundColor: txtColor,
        }}
      ></div>
      <div>{children}</div>
    </div>
  );
}

export default DetailsCard;
