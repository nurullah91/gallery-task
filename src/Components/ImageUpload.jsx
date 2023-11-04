/* eslint-disable react/prop-types */
import placeholderImg from './placeholder.webp'
const ImageUpload = ({ handleUploadedImage }) => {
    return (
        <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors ease-linear">
            <input
                type="file"
                multiple
                name="uploadImage"
                id="uploadImage"
                className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                title="Upload a image"
                onChange={handleUploadedImage}
            />

            <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
                <img src={placeholderImg} alt="Upload Placeholder" />
                <span className="`whitespace-nowrap">Add Image</span>
            </div>
        </div>
    );
};

export default ImageUpload;