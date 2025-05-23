import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICardTestimoniasPropa {
  testimonial: string;
  infoTestimonial: string;
  imageTestimonial: StaticImageData;
  name: string;
  age: string;
  duration: string;
}

export default function CardTestimonials({
  infoTestimonial,
  testimonial,
  imageTestimonial,
  name,
  age,
  duration,
}: ICardTestimoniasPropa) {
  return (
    <div
      className={`
        max-w-[400px] w-auto h-auto bg-backgroundCardTestimunial
        flex flex-col items-center pt-[52px] pb-[42px] px-[21px] gap-[60px] rounded-2xl
      `}
    >
      <div className="w-[222px] h-[222px] bg-black rounded-full flex items-center justify-center">
        <Image
          src={imageTestimonial}
          alt="Imagem da pessoa que está testemunhando"
          className="w-[218px] h-[218px] rounded-full object-cover"
        />
      </div>
      <span className="flex flex-col items-center text-center gap-9">
        <h1 className="font-semibold text-lg">{`${name}, ${age}, ${duration}`}</h1>
        <p className="max-w-full w-[378px] text-lg italic font-medium">
          &quot; &#91; &hellip; &#93; {testimonial}&quot;
        </p>
        <Link className="text-textViolet font-semibold text-lg cursor-pointer hover:opacity-85" href={""}>{infoTestimonial}</Link>
      </span>
    </div>
  );
}
