import React, { FC, useState } from 'react';
import { ImageInfoType, StorageComponentsType } from '../../components/type';
import ImageContainer from '../../components/ImageContainer';
import AddDialogContainer from '../../components/AddDialogContainer';

type ComponentInfoType = {
    data: StorageComponentsType
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
    const [items, setItems] = useState<[]>([])

    return (
        <div className='w-full px-16 text-white my-4'>
            <div className='flex items-center flex-wrap mt-4'>
                {/* {items.map((item) => (
                    <ImageContainer key={item} item={item} setItems={setItems} />
                ))}
                <div>
                    <AddDialogContainer setImage={setItems} />

                </div> */}
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

