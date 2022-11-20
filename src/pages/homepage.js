import { bgHomepage } from '../assets'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center text-rose-900 font-bold text-7xl ml-64">
          Kelola produksimu dengan kami!
          <div className="mr-64 mt-24">
            <img src={bgHomepage} alt="bg" width="800" height="800"></img>
          </div>

        </div>
        <button className="bg-rose-900 hover:bg-transparent text-white hover:text-rose-900 py-2 px-4 border hover:border-rose-900 rounded-full ml-64">
        <Link to="/produk">Produksi sekarang</Link>
        </button>
      </div>
    </>
  )
}

export default Homepage