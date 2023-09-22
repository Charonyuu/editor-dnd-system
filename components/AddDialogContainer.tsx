import { Dispatch, SetStateAction } from 'react'
import { useRef } from 'react'
import { ImageInfoType } from './type'

type AddImageProps = {
    setImage: Dispatch<SetStateAction<ImageInfoType[]>>
}


export default function AddDialogContainer({ setImage }: AddImageProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const file = files[0] // Convert FileList to File[]
            setImage(prev => [...prev, file]); // Now setImage expects File[] which is what we are giving
        }
    };
    return (
        <div className='bg-gray-400 w-[250px] rounded-xl flex flex-col items-center py-2 px-[25px]'>
            <div className='w-[200px] h-[200px] bg-gray-500 rounded-lg relative'>
                <img src='/icon/addImage.svg' className='w-12 h-8 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => inputRef.current?.click()} />
                <input type="file" hidden ref={inputRef} onChange={handleChange} />
            </div>
            <input placeholder='輸入標題' className='w-[200px] my-1 bg-transparent border-b border-solid border-white placeholder-white pl-1' />
            <textarea placeholder='輸入內文' className="w-full bg-transparent border border-white border-solid placeholder-white pl-1 resize-none" />
            <button className='mt-1'>儲存</button>
        </div>
    )
}
