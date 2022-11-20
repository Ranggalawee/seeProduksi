import React from 'react'
import { FiBox } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import TasWanita from '../components/produk_a'

const Produk = () => {
    return (
        <>
            <div className="p-10">
                <div>
                    <div className="flex bg-transparent items-center font-bold text-xl">
                        <span className="pr-2">
                            <FiBox />
                        </span>
                        Produk
                    </div>
                </div>

                <div className="flex flex-row pt-8">
                    <div className="flex flex-col gap-5">
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            Tas Wanita
                        </button>
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            Tas Pria
                        </button>
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            Dompet
                        </button>
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            Pouch
                        </button>
                        <button className="w-72 h-12 p-2 flex rounded-lg bg-rose-900 justify-center items-center font-semibold hover:bg-transparent border hover:border-rose-900 text-white hover:text-rose-900">
                            <Link to="/inputProduk">Tambah produk</Link>
                        </button>
                    </div>

                    <TasWanita />
                </div>
            </div>
        </>
    )
}

export default Produk