import clsx from "clsx"

const Shop = () => {
  const boxConfig = "w-full p-9 bg-no-repeat bg-cover"
  const buttonConfig = "block w-full mt-5 border leading-loose duration-200"

  return (
    <section className="flex justify-center text-center text-white flex-col md:flex-row">
      <div
        className={clsx(
          boxConfig,
          "bg-[url('/public/images/main/con_agency.jpg')]"
        )}
      >
        <h3>
          <img
            src="/images/main/ico_onshop.png"
            alt="온라인 쇼핑몰"
            className="mx-auto"
          />
        </h3>
        <p className="text-xl font-semibold mt-1 mb-2">Online Shop</p>
        <p>
          네이버 스토어팜
          <br />
          온라인 쇼핑몰입니다.
        </p>
        <a
          href="#"
          className={clsx(
            buttonConfig,
            "hover:border-product-green hover:bg-product-green"
          )}
        >
          SHOP
        </a>
      </div>
      <div
        className={clsx(
          boxConfig,
          "md:ml-5 bg-[url('/public/images/main/con_gallery.jpg')]"
        )}
      >
        <h3>
          <img
            src="/images/main/ico_gallery.png"
            alt="인테리어 전시장"
            className="mx-auto"
          />
        </h3>
        <p className="text-xl leading-normal font-semibold mt-1 mb-2">
          Gallery Q
        </p>
        <p>
          한화L&amp;C의 토털 인테리어
          <br />
          솔루션 전시장입니다.
        </p>
        <a
          href="#"
          className={clsx(
            buttonConfig,
            "hover:border-product-red hover:bg-product-red"
          )}
        >
          GALLERY
        </a>
      </div>
    </section>
  )
}

export default Shop
