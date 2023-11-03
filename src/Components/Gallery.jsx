import { useState } from "react";
import images from ""
const Gallery = () => {

    // thumbnail related states
    const [selectThumbnails, setSelectThumbnails] = useState([]);
    const [thumbnails, setThumbnails] = useState(images)

    // drugging states
    const [drugging, setDrugging] = useState(false);
    const [draggedImage, setDraggedImage] = useState(null);
    const [draggedIndex, setDraggedIndex] = useState(null)


    // handle New image upload functionality
    const handleUploadedImage = (e) => {
        const selectedFiles = e.target.files;

        const newImage = Array.from(selectedFiles).map((file, index) => {
            const id = thumbnail.length + index + 1;
            const thumbnail = URL.createObjectURL(file);

            return {id, thumbnail}
        })

        setThumbnails([...thumbnails, ...newImage])
    }


    // handle delete image 
    const handleDeleteImage = () => {

        // getting latest images
        const updatedImages = thumbnails.filter(
            (image) => !selectThumbnails.some((selected) => selected.id === image.id)
          );

          setThumbnails(updatedImages)
          setSelectThumbnails([])
    }

    return (
        <main className="min-h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4">
            <div className="flex flex-col gap-y-2">
                {/* todo */}
                {/* call galleryHeader */}

                <hr />
                <section className="h-full w-full p-6">
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6"
                    // todo
                    //   onDragOver={handleDragOver}
                    >

                    </div>
                </section>
            </div>
        </main>
    );
};

export default Gallery;