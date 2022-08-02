import Image from 'next/image'
import foto from '../public/foto.png'
import Main from '../components/layout/main'

export default function Home() {
  return (
    <Main>
      <section id='home' className='pt-20 md:pt-36 min-h-screen'>
        <div className='container'>
          <div className='md:flex'>
            <div className='w-full self-center px-4 lg:w-1/2 md:ml-10 text-center'>
              <Image src={foto} alt="Foto Profile"/>
            </div>
            <div className='w-full self-center px-4 lg:w-1/2 md:ml-10 text-center md:text-left'>
              <h1 className='text-base font-semibold md:text-xl text-black'>Hallo Semua 👋, Saya <span className='mt-1 block text-4xl font-bold text-blue-600 lg:text-5xl'>Muhamad Arwani Maulana</span></h1>
              <h2 className='mb-5 md:mb-20 text-lg font-medium text-slate-600 lg:text-2xl'>Frontend Web & Backend Developer</h2>
              <a href="#" className='rounded-full bg-blue-600 py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg'>Hubungi Saya</a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className='pt-2 min-h-screen md:pt-20'>
        <div className='container p-2 mx-auto'>
          <h1 className='text-3xl text-blue-500 font-semibold mb-5'>Tentang Saya</h1>
          <div className='md:flex md:mt-20 text-slate-600'>
            <div className='md:pr-12'>
              <p className='mb-3 first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:text-blue-700 text-justify'>
                Seorang pegiat di bidang programming terutama pada bidang <span className='text-xl text-blue-500'>backend dan frontend web</span>. Saat ini menguasai beberapa tech stack seperti <span className='text-xl text-blue-500'>Laravel</span>, <span className='text-xl text-blue-500'>React Js</span>, <span className='text-xl text-blue-500'>Next Js</span>, juga bahasa pemrograman <span className='text-xl text-blue-500'>Python</span>, <span className='text-xl text-blue-500'>Php</span>, <span className='text-xl text-blue-500'>Javascript</span> dan juga memiliki pengalaman dalam membuat <span className='text-xl text-blue-500'>service docker</span> (Laravel, Next Js, Mysql). <a href='https://github.com/aronei44/docker-laravel-nextjs-mysql' target='_blank' rel='noreferrer' className='text-sm text-blue-500'>Lihat Repository</a>
              </p>
              <p className='mb-3 first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:text-blue-700 text-justify'>
                Awal mula perjalanan saya dibidang programming adalah karena ketertarikan saya pada proses pembuatan game yang kemudian saya lebih tertarik pada pembuatan website. Pernah <span className='text-xl text-blue-500'>menjadi Best Of The Best</span> pada program pelatihan pemrograman besutan <span className='text-xl text-blue-500'>Pemprov dan Gubernur Jawa Barat, Ridwan Kamil</span> yaitu <span className='text-xl text-blue-500'>Candradimuka Jabar Coding Camp Batch 1</span> pada tahun 2022.
              </p>
            </div>
            <div>
              <p className='mb-3 first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:text-blue-700 text-justify'>
                Saat ini, saya bekerja disebuah perusahaan IT sebagai  <span className='text-xl text-blue-500'>Frontend Engineer (React Js)</span>, juga sebagai  <span className='text-xl text-blue-500'>Fullstack Developer (Laravel dan React, Laravel dan Next)</span> pada beberapa project diluar perusahaan (freelance).
              </p>
              <p className='text-right'>
                Agustus 2022
              </p>
            </div>
          </div>
        </div>
      </section>
    </Main>
  )
}
