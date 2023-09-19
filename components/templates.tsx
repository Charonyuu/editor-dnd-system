import React, { FC } from 'react';

const profileInfo = {
    name: "狗狗收容所",
    bg: "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-light-blue-pet-dog-poster-background-image_197821.jpg",
    photo: "https://www.poaipets.com.tw/wp-content/uploads/2021/03/%E5%89%96%E6%9E%90%E7%8B%97%E7%8B%97%E5%B8%B8%E8%A6%8B%E7%96%BE%E7%97%85.jpg",
    bio: "這是一個很長的bio喔喔喔喔喔喔喔......",
    location: "台北繁宇總部",
    info: "儘管狗狗公司簡介看似不顯眼，卻佔據了我的腦海。謹慎地來說，我們必須考慮到所有可能。把狗狗公司簡介輕鬆帶過，顯然並不適合。狗狗公司簡介對我來說，已經成為了我生活的一部分。領悟其中的道理也不是那麼的困難。若發現問題比我們想像的還要深奧，那肯定不簡單。我們不得不相信，我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。范仲淹曾說過一句意義深遠的話，家貧志不移，貪讀如飢渴。這句話把我們帶到了一個新的維度去思考這個問題。梅森在不經意間這樣說過，比起任何特殊的科學理論來，對人類的價值觀影響更大的恐怕還是科學的方法。這段話看似複雜，其中的邏輯思路卻清晰可見。"
}

export const tempImageList = [
    { img: "/tempImages/type1.jpg", type: "type1" },
    { img: "/tempImages/type2.png", type: "type2" },
    { img: "/tempImages/type3.jpg", type: "type3" },
    { img: "/tempImages/type4.png", type: "type4" },
    { img: "/tempImages/type5.jpg", type: "type5" },
    { img: "/tempImages/type6.jpg", type: "type6" },

]

export const Box1: FC = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={profileInfo.bg} />
                <img src={profileInfo.photo} className='absolute bottom-0 translate-y-1/2 left-16 w-24 h-24 rounded-full object-cover' />
            </div>
            <div className='mt-16 ml-16 text-white'>
                <p className='text-xl font-semibold'>{profileInfo.name}</p>
                <p>{profileInfo.bio}</p>
                <p className='text-sm'>{profileInfo.location}</p>
            </div>
        </div>
    )
}
export const Box2: FC = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={profileInfo.bg} />
                <img src={profileInfo.photo} className='absolute bottom-0 translate-y-1/2 right-16 w-24 h-24 rounded-full object-cover' />
            </div>
            <div className='mt-2 ml-16 text-white'>
                <p className='text-xl font-semibold'>{profileInfo.name}</p>
                <p>{profileInfo.bio}</p>
                <p className='text-sm'>{profileInfo.location}</p>
            </div>
        </div>
    )
}
export const Box3: FC = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={profileInfo.bg} />
                <img src={profileInfo.photo} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-24 h-24 rounded-full object-cover' />
            </div>
            <div className='mt-2 ml-16 text-white'>
                <p className='text-xl font-semibold'>{profileInfo.name}</p>
                <p>{profileInfo.bio}</p>
                <p className='text-sm'>{profileInfo.location}</p>
            </div>
        </div>
    )
}
export const Box4: FC = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={profileInfo.bg} />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                    <img src={profileInfo.photo} className=' w-24 h-24 rounded-full object-cover' />
                    <p className='text-xl font-semibold'>{profileInfo.name}</p>
                    <p>{profileInfo.bio}</p>
                    <p className='text-sm'>{profileInfo.location}</p>
                </div>
            </div>

        </div>
    )
}
export const Word1: FC = () => {
    return (
        <div className='w-full px-16 text-white mt-2'>
            <p className='text-xl'>公司簡介</p>
            <p>{profileInfo.info}</p>
        </div>
    )
}
export const Word2: FC = () => {
    return (
        <div className='w-full px-16 text-white mt-2'>
            <p className='text-xl text-right mr-3'>公司簡介</p>
            <p>{profileInfo.info}</p>
        </div>
    )
}


export const tempBoxs = {
    "type1": Box1,
    "type2": Box2,
    "type3": Box3,
    "type4": Box4,
    "type5": Word1,
    "type6": Word2,
};

