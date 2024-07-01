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
      className="flex items-center gap-x-10 py-5 px-10 rounded-md w-full"
      style={{
        backgroundColor: bgColor,
        color: txtColor,
      }}
    >
      <div className="text-xl font-semibold">{title}:</div>
      <div
        className="h-10 w-0.5 bg-black"
        style={{
          backgroundColor: txtColor,
        }}
      ></div>
      <div>{children}</div>
    </div>
  );
}

export default DetailsCard;
