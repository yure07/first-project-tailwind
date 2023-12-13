import imgProductDesk from './assets/image-product-desktop.jpg'
import iconCart from './assets/icon-cart.svg'

const App = () => {
  return (
    <div className='flex w-screen h-screen bg-cream'>
      <main className='flex flex-row items-center mx-auto'>
        <img src={imgProductDesk} alt='img-product-desktop' className='h-2/3 rounded-l-md'/>
        <article className='bg-white w-72 h-2/3 rounded-r-md p-6'>
          <h1 className='montserrat-500 text-lg text-dark-grayish-blue tracking-widest'>PERFUME</h1>
          <section className='fraunces text-black text-4xl mt-5'>
            <h1>Gabrielle</h1>
            <h1>Essence Eau</h1>
            <h1>De Parfum</h1>
          </section>
          <section className='text-dark-grayish-blue mt-4'>
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
              w-screen mt-7 h-11 rounded-lg bg-dark-cyan text-sm 
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