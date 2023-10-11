import { Dispatch, SetStateAction } from 'react'
import { useRef } from 'react'
import { ImageInfoType } from './type'
import { BiImageAdd } from "react-icons/bi"
import { useDragContext } from './Provider/DragProvider'

type AddImageProps = {
    id: number;
    setImage: Dispatch<SetStateAction<ImageInfoType[]>>
}


export default function AddImageContainer({ setImage, id }: AddImageProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    const { components, setComponents } = useDragContext()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const file = files[0] // Convert FileList to File[]
            setImage(prev => [...prev, file])
            setComponents((prev) => {
                const Index = prev.findIndex(ele => ele.id === id)
                // prev[Index].images = prev[Index].images ? [...prev[Index].images as ImageInfoType[], file] : [file]
                if (prev[Index].images) {
                    prev[Index].images?.push(file)
                    prev[Index].url?.push("")
                } else {
                    prev[Index].images = [file]
                    prev[Index].url = [""]
                }
                console.log(prev)
                return prev
            })
        }
        console.log(components)
    };
    return (
        <div className='w-[200px] h-[200px] bg-gray-500 rounded-lg relative mr-2'>
            <BiImageAdd className='w-12 h-8 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => inputRef.current?.click()} />
            <input type="file" hidden ref={inputRef} onChange={handleChange} />
        </div>
    )
}
