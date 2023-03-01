import React from 'react';
import styles from '../styles';
import AddProduct from './AddProduct';
import Footer from './Footer';
import { storeItems, prints } from '../assets'


//Part of this was generated from a free pre built tailwind component library. The link to the component library is: https://tailwindui.com/components/ecommerce/components/product-lists  
//This pages implemented the 'Simple' pre built component

const Store = () => {
return (
    <>
    <div>
        <h1 className={`${styles.heading2} text-center md:py-24 py-5`}>Garage Ink's Personal Collection</h1>
        <h1 className={`${styles.paragraph} text-center mb-10`}>Items presented below are available for purchase in-store only</h1>
        <h1 className='text-white text-center pt-16 pb-16 font-poppins md:text-[46px] text-[26px]'>Tattoo After Care and Apparel</h1>
        
    <div>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-screen-xl lg:px-8">
    <h2 className="sr-only">Products</h2>
    <div className="grid grid-cols-1 gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">


{/* Product 1 */}
        <a>
        <div className="w-full overflow-hidden rounded-lg bg-gray-200">
            <img src={storeItems[0]} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center " />
        </div>
        <h3 className="mt-4 text-sm text-white">Zoo Wrap - Second Skin</h3>
        <p className="mt-1 text-lg  font-medium text-white">$45</p>
        </a>



{/* Product 2 */}
        <a>
        <div className="w-full overflow-hidden rounded-lg bg-gray-200">
            <img src={storeItems[1]} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center " />
        </div>
        <h3 className="mt-4 text-sm text-white">After Care Cream - H2ocean</h3>
        <p className="mt-1 text-lg  font-medium text-white">$30</p>
        </a>



{/* Product 3 */}
        <a>
        <div className=" w-full overflow-hidden rounded-lg bg-gray-200">
            <img src={storeItems[2]} alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center " />
        </div>
        <h3 className="mt-4 text-sm text-white">Zoo Tattoo Cream</h3>
        <p className="mt-1 text-lg font-medium text-white">$40</p>
        </a>




{/* Product 4 */}
        <a>
        <div className="w-full overflow-hidden rounded-lg bg-gray-200">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Black Tee" className="h-full w-full object-cover object-center" />
        </div>
        <h3 className="mt-4 text-sm text-white">Garage Ink Black Tee</h3>
        <p className="mt-1 text-lg  font-medium text-white">$35</p>
        </a>





{/* Product 5 */}
        <a>
        <div className="w-full overflow-hidden rounded-lg bg-gray-200">
            <img src={storeItems[3]} alt="Oracle Cards" className="h-full w-full object-cover object-center " />
        </div>
        <h3 className="mt-4 text-sm text-white">Garage Ink Oracle Cards</h3>
        <p className="mt-1 text-lg  font-medium text-white">$20</p>
        </a>






{/* Product 7 */}
        <a>
        <div className="w-full overflow-hidden rounded-lg bg-gray-200">
            <img src={storeItems[4]} alt="Black Tee" className="h-full w-full object-cover object-center " />
        </div>
        <h3 className="mt-4 text-sm text-white">Garage Ink Black Tee</h3>
        <p className="mt-1 text-lg  font-medium text-white">$35</p>
        </a>





{/* Product 8 */}
        <a>
        <div className="w-full overflow-hidden rounded-lg bg-gray-200">
            <img src={storeItems[5]} alt="Black Tee" className="h-full w-full object-cover object-center " />
        </div>
        <h3 className="mt-4 text-sm text-white">Garage Ink Black Tee</h3>
        <p className="mt-1 text-lg  font-medium text-white">$35</p>
        </a>   
    </div>
</div>
</div>



{/* This section is also using part of a free tailwind component template. It can be found here: hyperui.dev/components/ecommerce/featured-sections  It is called: Collection with products   */}



<h1 className='text-white text-center pt-52 pb-16 font-poppins md:text-[46px] text-[26px]'>Custom prints</h1>
<p className={`${styles.paragraph} text-center mb-10 p-3`}>Prints are created by individual artists from Garage Ink. Availbility is different for each artist.</p>
<section className='relative'>


{/* gradient start */}
        <div className="absolute z-[0] w-[80%] h-[25%] top-0 pink__gradient" />
        <div className="absolute -z-[1] w-[30%] h-[40%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[70%] h-[40%] right-20 bottom-20 blue__gradient" />
{/* gradient end */}


  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 relative">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid p-6 bg-slate-300 rounded place-content-center sm:p-8">
        <div className="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 className="text-xl text-center font-bold text-gray-900 sm:text-3xl">Commissioned Prints</h2>

            <p className="mt-4 text-gray-500 text-center text-[22px]">Some of the artists at Garage Ink periodically offer custom commissioned prints. Typically, the artist will provide a theme and then allow for further customisation/requests from the client. They also advertise prints they have completed independently. The price of a print, both commissioned and not, varies depending on factors such as size, detail and materials.</p>
          </header>

          <a className="inline-block px-6 py-4 mt-12 text-sm font-medium text-black transition bg-blue-400 rounded-xl hover:shadow focus:outline-none focus:ring">
            Prints are typically advertised via Instagram. Click the photos to be directed to the artists' instagram.
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <li>
            <a href='https://www.instagram.com/em.taylor_tattoo/' >
              <img src={prints[0]} alt="" className="object-cover w-full rounded aspect-square"/>

              <div className="mt-3 bg-slate-500">
                <h3 className={`${styles.paragraph} text-center`}>Emily Taylor - Print 1 - A4
                </h3>

                <p className={`${styles.paragraph} text-center`}>$350</p>
              </div>
            </a>
          </li>

          <li>
            <a href='https://www.instagram.com/briar.celeste.art/'>
              <img src={prints[1]} alt="" className="object-cover w-full rounded aspect-square"/>
              <div className="mt-3 bg-slate-500">
                <h3 className={`${styles.paragraph} text-black text-center`}>Briar Celeste - Print 1 - A4</h3>

                <p className={`${styles.paragraph} text-black text-center`}>$350</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>





{/* Add product */}
{/* <h1 className='text-white text-center md:pt-[800px] pt-[500px] pb-16 font-poppins md:text-[26px] text-[16px]'>Admin, you can add a product listing to your store by completing the fields below.</h1> */}
<div className='flex items-center justify-center pb-56'>
    
{/* <AddProduct /> */}
</div>
</div>


{/* Footer */}
<div className='md:px-52  px-10'>
    <Footer />
</div>
</>
)
}

export default Store