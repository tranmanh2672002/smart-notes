import Image from "next/image";

interface Props {
  label: string;
  width?: string;
  height?: string;
  variant?: "primary" | "secondary";
  prependIcon?: any;
  appendIcon?: any;
}

export default function ButtonBase(props: Props) {
  const style =
    props.variant == "primary"
      ? `flex h-fit bg-gradient-to-r from-[#55A6A2] to-[#AAD9D1] px-6 py-4 rounded-lg`
      : `flex h-fit bg-secondary px-6 py-4 rounded-lg border-primary border-[1px]`;

  return (
    <button className={style}>
      {props.prependIcon && (
        <Image
          className="mr-2 "
          src={props.prependIcon}
          alt="prepend-icon"
          width={24}
          height={24}
        />
      )}
      <span className="">{props.label}</span>
      {props.appendIcon && (
        <Image
          className="ml-2"
          src={props.appendIcon}
          alt="append-icon"
          width={24}
          height={24}
        />
      )}
    </button>
  );
}
