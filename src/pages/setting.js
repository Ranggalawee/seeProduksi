import React from 'react'
import { FiSettings } from 'react-icons/fi'

const setting = () => {
    return (
        <>
            <div className="p-10">
                <div>
                    <div className="flex bg-transparent items-center font-bold text-xl">
                        <span className="pr-2">
                            <FiSettings />
                        </span>
                        Pengaturan
                    </div>
                </div>

                <div className="flex flex-row pt-8">
                    <div className="flex flex-col gap-5">
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            Akun
                        </button>
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            HPP
                        </button>
                        <button className="w-72 h-12 p-2 flex rounded-md bg-transparent items-center font-semibold hover:bg-zinc-100">
                            Karyawan
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default setting