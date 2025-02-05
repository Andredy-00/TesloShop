import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtiitle?: string;
  className?: string;
}

export const Title = ({ title, subtiitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold my-7`}
      >
        {title}
      </h1>
      {
        subtiitle && (
          <h3 className="text-xl mb-5">{subtiitle}</h3>
        )
      }
    </div>
  );
};
