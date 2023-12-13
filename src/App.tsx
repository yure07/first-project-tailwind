import imgProductDesk from './assets/image-product-desktop.jpg'
import imgProductMob from './assets/image-product-mobile.jpg'
import iconCart from './assets/icon-cart.svg'

const App = () => {
  const isMobile = window.innerWidth <= 640

  return (
    <div className='flex flex-row items-center sm:items-center w-screen h-screen bg-cream'>
      <main className='flex flex-col sm:flex-row items-center mx-auto'>
        {isMobile ? 
          <img src={imgProductMob} alt='img-product-mobile' className='w-80 h-56'/> 
          :
          <img src={imgProductDesk} alt='img-product-desktop' className='w-75 rounded-l-md'/>
        }
        <article className='bg-white w-80 sm:w-72 h-96 sm:h-2/3 rounded-r-md p-6'>
          <h1 className='montserrat-500 text-md sm:text-lg text-dark-grayish-blue tracking-wider sm:tracking-widest'>PERFUME</h1>
          <section className='fraunces text-black text-3xl sm:text-4xl mt-2 sm:mt-5'>
            <h1>Gabrielle Essence Eau De Parfum</h1>
          </section>
          <section className='montserrat-500 text-sm text-dark-grayish-blue mt-4'>
            <p>A floral, solar and voluptuous interpretation composed by
              Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </section>
          <section className='flex flex-row mt-7'>
            <h1 className='fraunces text-dark-cyan text-4xl'>$149.99</h1>
            <p className='ml-5 mt-2 text-dark-grayish-blue line-through'>$169.99</p>
          </section>
          <section className='flex mx-auto'>
            <button 
              className='flex flex-row justify-center items-center 
              w-screen mt-4 sm:mt-7 h-11 rounded-lg bg-dark-cyan text-sm 
              text-white montserrat-700 hover:bg-dark-dark-cyan'> 
              <img src={iconCart} alt='icon-cart-product' className='mr-2'/> Add to Cart
            </button>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;