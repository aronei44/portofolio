import { useState } from "react";


const Nav = () => {
  const [hamburger, setHamburger] = useState(false)
  const [scroll, setScroll] = useState(false)
  const handleHamburgerClick = (e) => {
    e.stopPropagation()
    setHamburger(!hamburger)
  }
  if(typeof window !== "undefined"){
    const elHam = window.document.getElementById('hamburger')
    const elNav = document.getElementById('nav-menu')
    window.onclick = (e) =>{
      if (e.target !== elHam || e.target !== elNav){
        setHamburger(false)
      }
    }
    window.onscroll = (e) => {
      setScroll(window.scrollY > 0)
    }
  }
  return (
    <>
      <header className={`absolute top-0 left-0 z-10 flex w-full items-center bg-transparent ${scroll ? 'navbar-fixed':''}`} onClick={(e)=>e.stopPropagation()}>
        <div className="container  mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a href="#home" className="block py-6 text-lg font-bold text-blue-600">Muhamad Arwani Maulana</a>
            </div>
            <div className="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" className={`absolute right-4 block lg:hidden ${hamburger ? 'hamburger-active':''}`} onClick={handleHamburgerClick}>
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out" />
                <span className="hamburger-line transition duration-300 ease-in-out" />
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
              </button>
              <nav id="nav-menu" className={`absolute right-4 top-full ${hamburger ? '' : 'hidden'} w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}>
                <ul className="block lg:flex">
                  <li className="group">
                    <a href="#home" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Beranda</a>
                  </li>
                  <li className="group">
                    <a href="#about" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Tentang Saya</a>
                  </li>
                  <li className="group">
                    <a href="#portfolio" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Portfolio</a>
                  </li>
                  <li className="group">
                    <a href="#contact" className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white">Contact</a>
                  </li>
                  <li className="mt-3 flex items-center pl-8 lg:mt-0">
                    <div className="flex">
                      <span className="mr-2 text-sm text-slate-500">light</span>
                      <input type="checkbox" className="hidden" id="dark-toggle" />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out" />
                        </div>
                      </label>
                      <span className="ml-2 text-sm text-slate-500">dark</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <a href="#home" className={`fixed bottom-4 right-4 z-[9999] ${scroll ? '':'hidden'} h-14 w-14 items-center justify-center rounded-full bg-blue-400 p-4 hover:animate-pulse`} id="to-top">
        <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"/>
      </a>
    </>
  )
}
export default Nav;