import clsx from "clsx"
import { Products } from "../constants/product"

const Product = () => {
  return (
    <div className="md:my-12 my-2.5">
      <div className="center grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2">
        {Products.map((product, idx) => (
          <section
            key={idx}
            className={clsx("text-center", {
              "lg:order-1": idx === 0,
              "lg:order-2": idx === 2,
              "lg:order-3": idx === 1,
              "lg:order-4": idx === 3,
            })}
          >
            <a
              href="#"
              className="lg:flex lg:justify-between md:inline-flex group"
            >
              <div
                className={clsx(
                  "relative",
                  "w-full md:w-[300px] md:h-[280px]",
                  "bg-no-repeat bg-center bg-cover",
                  product.imgBgUrl,
                  {
                    "order-2": idx % 2 === 1,
                  }
                )}
              >
                <img
                  src={`/images/main/con_0${idx + 1}on.jpg`}
                  alt={product.name}
                  className="w-full h-full opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                />
                <p
                  className={clsx(
                    "absolute inset-0",
                    "flex justify-center items-center md:hidden",
                    "text-white font-bold",
                    "bg-secondary-gray/60 hover:bg-transparent transition duration-1000",
                    "before:content-[''] before:absolute",
                    "before:w-5/6 before:h-5/6",
                    "before:border"
                  )}
                >
                  {product.name}
                </p>
              </div>
              <div
                className={clsx(
                  "relative z-10",
                  "hidden md:flex flex-col justify-center",
                  "w-[310px] h-[280px]",
                  {
                    "py-10 pl-[50px] pr-10 -ml-2.5": idx % 2 === 0,
                    "after:content-[''] after:absolute after:bottom-10 after:right-[300px]":
                      idx % 2 === 0,
                    "after:border-y-[22px] after:border-r-[21px] after:border-transparent after:border-r-white":
                      idx % 2 === 0,
                    "order-1 py-10 pl-10 pr-[50px] -mr-2.5": idx % 2 === 1,
                    "before:content-[''] before:absolute before:top-10 before:left-[300px]":
                      idx % 2 === 1,
                    "before:border-y-[22px] before:border-l-[21px] before:border-transparent before:border-l-white":
                      idx % 2 === 1,
                  }
                )}
              >
                <div
                  className={clsx(
                    "absolute inset-0 bg-no-repeat bg-center bg-contain z-20",
                    product.imgLineUrl
                  )}
                />
                <h3
                  className={clsx("text-lg p-1", {
                    "text-product-green": idx === 0,
                    "text-primary-orange": idx === 1,
                    "text-product-red": idx === 2,
                    "text-tertiary-gray": idx === 3,
                  })}
                >
                  {product.title}
                </h3>
                <p
                  className={clsx("text-xl font-semibold", {
                    "text-product-green": idx === 0,
                    "text-primary-orange": idx === 1,
                    "text-product-red": idx === 2,
                    "text-tertiary-gray": idx === 3,
                  })}
                >
                  {product.name}
                </p>
                <p className="text-secondary-gray leading-normal mt-5 py-2.5 rounded-xl bg-[#f2f2f2]">
                  {product.content}
                </p>
              </div>
            </a>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Product
