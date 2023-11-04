/* eslint-disable react/prop-types */

const Header = ({ selectThumbnails, setSelectThumbnails, handleDeleteImage }) => {

    return (
        <div className="px-3 py-5">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                    {/* adding "Gallery" text or selected files conditionally */}
                    {
                        selectThumbnails.length === 0 ? ("Gallery") : (
                            <label htmlFor="select" className="flex justify-between items-center">
                                <input type="checkbox"
                                    name="select"
                                    id="select"
                                    checked={selectThumbnails.length > 0}
                                    className="h-4 w-4 accent-blue-700 cursor-pointer"
                                    onChange={() => setSelectThumbnails([])}
                                />
                                {selectThumbnails.length} Files Selected
                            </label>
                        )
                    }

                </h2>

                {/* delete button for selected image */}
                <button
                    className="text-red-600"
                    onClick={handleDeleteImage}
                >
                    Delete Images
                </button>

            </div>
        </div>
    );
};

export default Header;