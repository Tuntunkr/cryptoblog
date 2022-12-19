import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/LogoB.png";

function Navbar() {
  return (
    <>
      <nav className=" ">
        <div className="min-h-full bg-main-grad">
          <div className="mt-40 w-3/4 flex flex-col mx-auto sm:ml-32">
            <div className="pb-6">
              <Link href="/">
                <Image src={Logo} alt="logo" height={100} width={100} />
              </Link>
              <div className="font-spectral font-medium text-2xl sm:text-3xl text-mygrey mt-4 leading-6 tracking-tight w-4/5 md:w-1/2">
                A reading list for
                <span className="font-bold">Cryptocurrencies</span>
              </div>
            </div>
            <ul className="font-spectral  sm:pl-0 font-medium flex flex-row gap-4 mt-12 overflow-x-scroll no-scrollbar text-mygrey mr-3 text-gray-600 ">
          <Link href='/basic' ><li> BasicsofCryptocurrencies</li></Link>
          <Link href='/bitcoin' ><li>Bitcoin</li></Link>
          <Link href='/ethereum' ><li>Ethereum</li></Link>
          <Link href='/defi' ><li>Defi</li></Link>
          <Link href='/nft' ><li>NFT</li></Link>
          <Link href='/dao' ><li>DAO</li></Link>
          <Link href='/metaverse' ><li>Metaverse</li></Link>
          <Link href='/polkadot' ><li>Polkadot</li></Link>
          <Link href='/bnbchain' ><li>BNBChain</li></Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
