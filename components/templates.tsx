import React, { FC, useEffect, useState } from 'react';
import { ComponentInfoType, ImageInfoType, TempContainerProps } from './type';
import AddImageContainer from './AddImageContainer';
import ImageContainer from './ImageContainer';
import AddDialogContainer from './AddDialogContainer';
import clsx from 'clsx';
import { useDragContext } from './Provider/DragProvider';
import { useRef } from 'react';

export const tempImageList = [
    { img: "/tempImages/type1.jpg", type: "type1", name: "簡介區塊" },
    { img: "/tempImages/type5.jpg", type: "type2", name: "文字區塊" },
    { img: "/tempImages/type7.jpg", type: "type3", name: "照片列表" },
    { img: "/tempImages/type8.jpg", type: "type4", name: "文章區塊" },

]




export const Box1: FC<TempContainerProps> = ({ id }) => {
    const { components, setComponents } = useDragContext()
    const data = components.find((ele) => ele.id === id);
    const [focus, setFocus] = useState("")
    const [title, setTitle] = useState(data?.title || "")
    const [content, setContent] = useState(data?.content || "")
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const [image, setImage] = useState<File | string>(data?.image || "/tempImages/user.jpg")
    const [bg, setBg] = useState<File | string>(data?.bg || "/tempImages/background.jpg")

    useEffect(() => {
        if (typeof image === "string") return;
        setComponents((prev) => {
            const newComponents = [...prev]; // 创建 prev 的一个副本
            const index = newComponents.findIndex((ele) => ele.id === id);
            if (index !== -1) {
                newComponents[index] = { ...newComponents[index], image };
            }
            return newComponents;
        });
    }, [image])
    useEffect(() => {
        if (typeof bg === "string") return;
        setComponents((prev) => {
            const newComponents = [...prev]; // 创建 prev 的一个副本
            const index = newComponents.findIndex((ele) => ele.id === id);
            if (index !== -1) {
                newComponents[index] = { ...newComponents[index], bg };
            }
            return newComponents;
        });
    }, [bg])
    useEffect(() => {
        setComponents((prev): ComponentInfoType[] => {
            const Index = prev.findIndex(ele => ele.id === id)
            prev[Index].title = title
            prev[Index].content = content

            return prev
        })
        resizeTextarea()
    }, [title, content])
    const resizeTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // 將高度重置為auto以獲取正確的scrollHeight
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 將高度設置為scrollHeight以適應文本
        }
    };

    const userImgRef = useRef<HTMLInputElement | null>(null)
    const bgImgRef = useRef<HTMLInputElement | null>(null)

    const userURL = typeof image !== "string" ? URL.createObjectURL(image) : image
    const bgURL = typeof bg !== "string" ? URL.createObjectURL(bg) : bg
    const handleUserImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const file = files[0] // Convert FileList to File[]
            setImage(file); // Now setImage expects File[] which is what we are giving
        }
    };
    const handleBgImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const file = files[0] // Convert FileList to File[]
            setBg(file); // Now setImage expects File[] which is what we are giving
        }
    };

    return (
        <div className='w-full'>
            <div className='relative'>
                <img draggable="false" src={bgURL} className='w-full max-h-[200px] aspect-[3] object-cover cursor-pointer' onClick={() => bgImgRef.current?.click()} />
                <input type="file" hidden ref={bgImgRef} onChange={handleBgImgChange} />
                <img draggable="false" src={userURL} className='absolute bottom-0 translate-y-1/2 left-16 w-[100px] h-[100px] rounded-full object-cover cursor-pointer' onClick={() => userImgRef.current?.click()} />
                <input type="file" hidden ref={userImgRef} onChange={handleUserImgChange} />
            </div>
            <div className='mt-[60px] px-16 text-white'>
                <input placeholder='標題' className={clsx('text-[18px] bg-transparent w-fit pl-1 border border-solid', focus === "title" ? " border-white" : "border-transparent")} onFocus={() => setFocus("title")} onBlur={() => setFocus("")} value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder='內容' rows={1} ref={textareaRef} className={clsx(' box-border bg-transparent w-full pl-1 resize-none overflow-hidden border border-solid', focus === "content" ? " border-white" : "border-transparent")} onFocus={() => setFocus("content")} onBlur={() => setFocus("")} value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
        </div>
    )
}

export const Word1: FC<TempContainerProps> = ({ id }) => {
    const { components, setComponents } = useDragContext()
    const data = components.find((ele) => ele.id === id);
    const [focus, setFocus] = useState("")
    const [title, setTitle] = useState(data?.title || "")
    const [content, setContent] = useState(data?.content || "")
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    useEffect(() => {
        setComponents((prev): ComponentInfoType[] => {
            const Index = prev.findIndex(ele => ele.id === id)
            prev[Index].title = title
            prev[Index].content = content

            return prev
        })
        resizeTextarea()
    }, [title, content])
    const resizeTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // 將高度重置為auto以獲取正確的scrollHeight
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 將高度設置為scrollHeight以適應文本
        }
    };
    return (
        <div className='w-full px-16 text-white mt-2'>
            <input placeholder='標題' className={clsx('text-[18px] bg-transparent w-fit pl-1 mb-1 border border-solid', focus === "title" ? " border-white " : "border-transparent")} onFocus={() => setFocus("title")} onBlur={() => setFocus("")} value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder='內容' rows={1} ref={textareaRef} className={clsx('text-[14px] border border-solid bg-transparent w-full pl-1 resize-none overflow-hidden', focus === "content" ? " border-white " : "border-transparent")} onFocus={() => setFocus("content")} onBlur={() => setFocus("")} value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
    )
}

export const PictureContainer1: FC<TempContainerProps> = ({ id }) => {
    const { components, setComponents } = useDragContext()
    const data = components.find((ele) => ele.id === id);
    const [items, setItems] = useState<ImageInfoType[]>(data?.images || [])

    // useEffect(() => {
    //     console.log(id)
    //     setComponents((prev): ComponentInfoType[] => {
    //         const Index = prev.findIndex(ele => ele.id === id)
    //         prev[Index].images = items

    //         return prev
    //     })
    // }, [items])
    return (
        <div className='w-full px-16 text-white flex items-center flex-wrap my-4'>
            {items.map((item, idx) => (
                <ImageContainer key={idx} id={id} item={item} index={idx} setItems={setItems} />
            ))}
            <AddImageContainer setImage={setItems} id={id} />
        </div>
    )
}

export const PictureContainer2: FC<TempContainerProps> = ({ id }) => {
    const [items, setItems] = useState<ImageInfoType[]>([])

    return (
        <div className='w-full px-16 text-white my-4'>
            <div className='flex items-center flex-wrap mt-4'>
                {items.map((item, idx) => (
                    <ImageContainer key={idx} id={id} item={item} index={idx} setItems={setItems} />
                ))}
                <div>
                    <AddDialogContainer setImage={setItems} />

                </div>
            </div>
        </div>
    )
}


export const tempBoxs = {
    "type1": Box1,
    "type2": Word1,
    "type3": PictureContainer1,
    "type4": PictureContainer2,
};

