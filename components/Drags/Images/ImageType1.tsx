import { ImageType } from "@/Types/imageType";
import React, { FC } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import { twMerge } from "tailwind-merge";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <FaAngleRight
      className="absolute bottom-4 bg-black bg-opacity-50 rounded-full w-5 h-5 z-[1] right-1 pl-[2px] text-white border border-solid border-white cursor-pointer hover:right-0 transition-all"
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <FaAngleLeft
      className="absolute bottom-4 bg-black bg-opacity-50 rounded-full w-5 h-5 z-[1] left-1 pr-[2px] text-white border border-solid border-white cursor-pointer hover:left-0 transition-all"
      onClick={onClick}
    />
  );
}

const ImageType1: FC<{ data: ImageType[] }> = ({ data }) => {
  const length = data.length;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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