import { Dispatch, SetStateAction } from 'react'
import { useRef } from 'react'
import { ImageInfoType } from '.'

type AddImageProps = {
    setImage: Dispatch<SetStateAction<ImageInfoType[]>>
}


export default function AddImageContainer({ setImage }: AddImageProps) {
    const inputRef = useRef<HTMLInputElement>(null)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const file = files[0] // Convert FileList to File[]
            setImage(prev => [...prev, { id: Date.now().toString(), file }]); // Now setImage expects File[] which is what we are giving
        }
    };
    return (
        <div className='w-[200px] h-[200px] bg-gray-500 rounded-lg relative mx-2'>
            <img src='/icon/addImage.svg' className='w-12 h-8 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => inputRef.current?.click()} />
            <input type="file" hidden ref={inputRef} onChange={handleChange} />
        </div>
    )
}
