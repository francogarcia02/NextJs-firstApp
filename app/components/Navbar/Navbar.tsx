'use client'
import { ArrowBarLeft, ArrowBarRight } from 'react-bootstrap-icons';
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () =>{
    const [clicked, setClicked] = useState(false)
    const toggleClicked = () => {
        setClicked(!clicked)
    }

    return(
        <div className="navbar bg-red-500">
            <Link href="/" className="flex">
                <Image src="/assets/images/logoipsum-249.svg" alt="logo" width={40} height={40}/>
            </Link>

            <div id="navbar" className={clicked ? '#navbar active' : '#navbar'}>
                <Link href="/" className="p-2 cursor-pointer text-white hover:text-[#ddd]">Home</Link>
                <Link href="/pages/examplePage" className="p-2 cursor-pointer text-white hover:text-[#ddd]">About</Link>
            </div>
            <div id="switch">
                <p onClick={toggleClicked}>{clicked ?
                    <ArrowBarRight/>
                    :
                    <ArrowBarLeft/>
                }
                </p>
            </div>
        </div>
    )
}

export default Navbar