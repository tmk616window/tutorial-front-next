import Image from 'next/image'

const MenuImage = () => {
    return (
        <Image
            src="../../public/logo.png" // srcはpublicディレクトリからの相対パス
            alt="Picture of the author"
            width={500} // 画像の幅を指定
            height={300} // 画像の高さを指定
        />
    );
}

export default MenuImage