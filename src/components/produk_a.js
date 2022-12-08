import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './modal'

const produk_a = () => {
    return (
        <>
            <div className="pt-16 pl-8 flex flex-row flex-wrap justify-between w-full overflow-auto gap-y-10">
                <div class="w-80 h-56 rounded-lg overflow-hidden shadow-xl p-3">
                    <div className="rounded bg-rose-900 h-36"></div>
                    <div class="py-5">
                        <div class="font-bold text-xl mb-2">
                            <Link to='/produk/detailproduksi'>Anandi Bag</Link>
                        </div>
                    </div>
                </div>
                <div class="w-80 h-56 rounded-lg overflow-hidden shadow-xl p-3">
                    <div className="rounded bg-rose-900 h-36"></div>
                    <div class="py-5">
                        <div class="font-bold text-xl mb-2">Anandi Bag</div>
                    </div>
                </div>
                <div class="w-80 h-56 rounded-lg overflow-hidden shadow-xl p-3">
                    <div className="rounded bg-rose-900 h-36"></div>
                    <div class="py-5">
                        <div class="font-bold text-xl mb-2">Anandi Bag</div>
                    </div>
                </div>
                <div class="w-80 h-56 rounded-lg overflow-hidden shadow-xl p-3">
                    <div className="rounded bg-rose-900 h-36"></div>
                    <div class="py-5">
                        <div class="font-bold text-xl mb-2">Anandi Bag</div>
                    </div>
                </div>
                <div class="w-80 h-56 rounded-lg overflow-hidden shadow-xl p-3">
                    <div className="rounded bg-rose-900 h-36"></div>
                    <div class="py-5">
                        <div class="font-bold text-xl mb-2">Anandi Bag</div>
                    </div>
                </div>
                <div class="w-80 h-56 rounded-lg overflow-hidden shadow-xl p-3">
                    <div className="rounded bg-rose-900 h-36"></div>
                    <div class="py-5">
                        <div class="font-bold text-xl mb-2">Anandi Bag</div>
                    </div>
                </div>
                <div class="w-80 h-56 rounded-lg overflow-hidden shadow-xl p-3">
                    <div className="rounded bg-rose-900 h-36"></div>
                    <div class="py-5">
                        <div class="font-bold text-xl mb-2">Anandi Bag</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default produk_a