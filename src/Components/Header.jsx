/* eslint-disable react/prop-types */
import logo from '../assets/logo.png'

const Header = ({ selectThumbnails, setSelectThumbnails, handleDeleteImage }) => {

    return (
        <div className="px-3 py-5">
            <div className="flex justify-between items-center">
              
                    {/* adding "Gallery" text or selected files conditionally */}
                    {
                        selectThumbnails.length === 0 ?<div className='flex items-center justify-center'>
                            <img className='w-20 mr-2' src={logo} alt="Logo" />
                            <h2 className="text-2xl font-bold">Gallery</h2>
                        </div> : (
                            <label htmlFor="select" className="flex justify-between items-center text-2xl font-bold">
                                <input type="checkbox"
                                    name="select"
                                    id="select"
                                    checked={selectThumbnails.length > 0}
                                    className="h-4 w-4 accent-blue-700 cursor-pointer mr-3"
                                    onChange={() => setSelectThumbnails([])}
                                />
                                {selectThumbnails.length} Files Selected
                            </label>
                        )
                    }

                

                {/* delete button for selected image */}
                <button
                    className="text-red-600 hover:underline"
                    onClick={handleDeleteImage}
                >
                    Delete Images
                </button>

            </div>
        </div>
    );
};

export default Header;