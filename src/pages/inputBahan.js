import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const inputBahan = () => {
    return (
        <>
            <div className="p-10">
                <div className="flex flex-row gap-5">
                    <div>
                        <div className="flex items-center font-bold text-xl w-64 h-16">
                            <span className="pr-2">
                                <FiPlus />
                            </span>
                            Input Bahan Baku
                        </div>
                    </div>

                    <form className="w-full">
                        <div className="flex flex-col">
                            <div className="flex h-16 pl-4 rounded-lg bg-rose-900 items-center text-white font-bold">
                                Tambah Bahan Baku
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-row pt-5 items-center">
                                    <label className="text-black w-10">
                                        Kode
                                    </label>
                                    <input className="w-full h-12 ml-16 border border-rose-900 bg-transparent rounded-lg p-2"
                                        placeholder="enter kode bahan">
                                    </input>
                                </div>
                                <div className="flex flex-row pt-5 items-center">
                                    <label className="text-black w-10">
                                        Nama
                                    </label>
                                    <input className="w-full h-12 ml-16 border border-rose-900 bg-transparent rounded-lg p-2"
                                        placeholder="enter nama bahan">
                                    </input>
                                </div>
                                <div className="flex flex-row pt-5 items-center">
                                    <label className="text-black w-10">
                                        Stock
                                    </label>
                                    <input className="w-full h-12 ml-16 border border-rose-900 bg-transparent rounded-lg p-2"
                                        placeholder="enter stock bahan">
                                    </input>
                                </div>
                                <div className="flex flex-row pt-5 items-center">
                                    <label className="text-black w-10">
                                        Satuan
                                    </label>
                                    <input className="w-full h-12 ml-16 border border-rose-900 bg-transparent rounded-lg p-2"
                                        placeholder="enter satuan bahan">
                                    </input>
                                </div>
                            </div>
                            <div className="pt-5 flex flex-row gap-3 justify-end">
                                <button className="bg-transparent border border-rose-900 p-2 text-rose-900 rounded-lg">
                                    <Link to="/bahanbaku">Cancel</Link>
                                </button>
                                <button type="submit" className="bg-rose-900 rounded-lg p-2 text-white">Tambah</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default inputBahan