import React, { FC, useState } from 'react';
import { ImageInfoType } from '../../components/type';
import ImageContainer from '../../components/ImageContainer';
import AddDialogContainer from '../../components/AddDialogContainer';

const profileInfo = {
    name: "狗狗收容所",
    bg: "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-light-blue-pet-dog-poster-background-image_197821.jpg",
    photo: "https://www.poaipets.com.tw/wp-content/uploads/2021/03/%E5%89%96%E6%9E%90%E7%8B%97%E7%8B%97%E5%B8%B8%E8%A6%8B%E7%96%BE%E7%97%85.jpg",
    bio: "狗狗收容所是一個專門為流浪狗、被遺棄或受虐狗狗提供臨時或長期照顧的機構。我們主要目的是為了保護這些無辜的生命，同時也幫助它們找到一個永久且愛護它們的家。",
    location: "台北繁宇總部",
    info: "狗狗收容所是一個專門為流浪或被遺棄的狗狗提供臨時住所和照顧的機構。這些收容所的主要目的是為了保護這些無家可歸的動物，並盡可能地為它們找到一個永久性和愛心的家。狗狗收容所通常提供基本的醫療服務，包括疫苗、絕育和驅蟲，以及基本的日常照顧，如餵食和遛狗。一些收容所還會提供培訓和社會化課程，以增加狗狗被領養的可能性。除了照顧狗狗外，這些收容所也經常與社區合作，提供教育資源和領養活動，以提高人們對動物福利問題的認識。許多收容所由非營利組織運營，主要依賴於捐款、志願者和社區支持。儘管收容所工作人員和志願者會竭盡全力照顧這些動物，但由於資源和空間有限，不幸的是，一些收容所可能需要實施安樂死。因此，領養和捐款對這些機構至關重要，這不僅可以幫助更多的狗狗找到一個永久的家，也可以減少不必要的安樂死。總體而言，狗狗收容所在保護無家可歸動物和提高社會對動物福利的認識方面起著至關重要的作用。"
}

type form = {
    title?: string;
    content?: string;
    image?: File;
    url?: string;
};

type ComponentInfoType = {
    data: {
        id: number;
        type: string;
        title?: string;
        content?: string;
        images?: string[];
        url?: string;
        forms?: form[];
        image?: string;
        bg?: string;
    }
}

export const Box1: FC<ComponentInfoType> = ({ data }) => {
    const { image, bg, title, content } = data
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={bg} className='w-full aspect-[3] object-cover' />
                <img src={image} className='absolute bottom-0 translate-y-1/2 left-16 w-24 h-24 rounded-full object-cover' />
            </div>
            <div className='mt-16 px-16 text-white'>
                <p className='text-xl font-semibold'>{title}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}

export const Word1: FC<ComponentInfoType> = ({ data }) => {
    const { title, content } = data


    return (
        <div className='w-full px-16 text-white mt-2'>
            <p className='text-xl bg-transparent w-fit'>{title}</p>
            <p className='w-full'>{content}</p>
        </div>
    )
}


export const PictureContainer1: FC<ComponentInfoType> = ({ data }) => {
    const { images } = data
    return (
        <div className='w-full px-16 text-white flex items-center flex-wrap my-4'>
            {images?.map((url) => {
                return (
                    <div key={url} className='w-[200px] h-[200px] bg-gray-500 rounded-lg relative overflow-hidden my-2 mr-4'>
                        <img src={url} className='w-full h-full object-cover' />
                    </div>
                )
            })}
        </div>
    )
}

export const PictureContainer2: FC = () => {
    const [items, setItems] = useState<ImageInfoType[]>([])

    return (
        <div className='w-full px-16 text-white my-4'>
            <div className='flex items-center flex-wrap mt-4'>
                {items.map((item) => (
                    <ImageContainer key={item.id} item={item} setItems={setItems} />
                ))}
                <div>
                    <AddDialogContainer setImage={setItems} />

                </div>
            </div>
        </div>
    )
}


export const FrontTempBoxs = {
    "type1": Box1,
    "type5": Word1,
    "type7": PictureContainer1,
    "type8": PictureContainer2,
};

