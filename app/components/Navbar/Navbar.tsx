'use client'
import { ArrowBarLeft, ArrowBarRight } from 'react-bootstrap-icons';
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

const Navbar = () =>{
    const [clicked, setClicked] = useState(false)
    const toggleClicked = () => {
        setClicked(!clicked)
    }
    const pathname = usePathname()

    return(
        <div className="navbar bg-red-500">
            <Link href="/" className="flex">
                <Image src="/assets/images/logoipsum-249.svg" alt="logo" width={40} height={40}/>
            </Link>

            <div id="navbar" className={clicked ? '#navbar active' : '#navbar'}>
                <Link
                  href="/"
                  className={`
                  p-2 cursor-pointer hover:text-[#ddd]
                  ${pathname === '/' ? 'text-[#ddd]' : 'text-white'}
                  `}
                  >Home
                </Link>
                <Link
                  href="/pages/examplePage"
                  className={`
                  p-2 cursor-pointer hover:text-[#ddd]
                  ${pathname === "/pages/examplePage" ? 'text-[#ddd]' : 'text-white'}
                  `}
                  >About
                </Link>
            </div>
            <div id="switch">
                <p onClick={toggleClicked}>{clicked ?
                    <ArrowBarRight className="text-[#fff] text-2xl"/>
                    :
                    <ArrowBarLeft className="text-[#fff] text-2xl"/>
                }
                </p>
            </div>
        </div>
    )
}

export default Navbar