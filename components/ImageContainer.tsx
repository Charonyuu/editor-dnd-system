import React, { SetStateAction } from 'react'
import { useRef } from 'react'
import { ImageInfoType } from './type'

type AddImageProps = {
    item: ImageInfoType
    setItems: React.Dispatch<SetStateAction<ImageInfoType[]>>
}


export default function ImageContainer({ item, setItems }: AddImageProps) {
    const inputRef = useRef<HTMLInputElement>(null)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const file = files[0] // Convert FileList to File[]

            setItems(prev => {
                const temp = [...prev]
                const index = temp.findIndex((ele) => ele.id === item.id)
                temp[index] = { ...temp[index], file }
                return temp
            }); // Now setImage expects File[] which is what we are giving
        }
    };

    const image = URL.createObjectURL(item.file)
    return (
        <div className='w-[200px] h-[200px] bg-gray-500 rounded-lg relative overflow-hidden cursor-pointer my-2 mr-2' onClick={() => inputRef.current?.click()}>
            <img src={image} className='w-full h-full object-cover' draggable="false" />
            <input type="file" hidden ref={inputRef} onChange={handleChange} />
        </div>
    )
}
