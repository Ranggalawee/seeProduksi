import React from 'react'
import { FiPaperclip } from 'react-icons/fi'

const laporan = () => {
    return (
        <>
            <div className="p-10">
                <div>
                    <div className="flex bg-transparent items-center font-bold text-xl">
                        <span className="pr-2">
                            <FiPaperclip />
                        </span>
                        Produk
                    </div>
                </div>

                <div className="flex flex-row pt-8">
                    <div className="flex flex-col gap-5">
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            Laporan Penjualan
                        </button>
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            Laporan Karyawan
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default laporan