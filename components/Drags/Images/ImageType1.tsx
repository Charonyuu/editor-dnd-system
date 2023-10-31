import { ImageType } from "@/Types/imageType";
import React, { FC } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import { twMerge } from "tailwind-merge";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <AiOutlineArrowRight
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <AiOutlineArrowLeft
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

const ImageType1: FC<{ data: ImageType[] }> = ({ data }) => {
  const length = data.length;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
      {length > 1 ? (
        <div>
          <Slider {...settings}>
            {data.map((item) => (
              <div className="w-full aspect-[4]" key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="w-full aspect-[4]">
          <a href={data[0].url} target="_blank" rel="noopener noreferrer">
            <img
              src={data[0].img}
              className="w-full h-full object-cover rounded-sm"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageType1;
