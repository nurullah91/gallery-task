import { useState } from "react";
import images from "./images"
import Header from "./Header";
import GalleryImage from "./GalleryImage";
import ImageUpload from "./ImageUpload";
const Gallery = () => {

    // thumbnail related states
    const [selectThumbnails, setSelectThumbnails] = useState([]);
    const [thumbnails, setThumbnails] = useState(images)

    // drugging states
    const [dragging, setDragging] = useState(false);
    const [draggedImage, setDraggedImage] = useState(null);
    const [draggedIndex, setDraggedIndex] = useState(null)


    // handle New image upload functionality
    const handleUploadedImage = (e) => {
        const selectedFiles = e.target.files;
        
        const newImage = Array.from(selectedFiles).map((file, index) => {
            const id = thumbnail.length + index + 1;
            const thumbnail = URL.createObjectURL(file);

            return { id, thumbnail }
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

    // drug image handler
    const handleDragStart = (image) => {
        setDragging(true)
        setDraggedImage(image);
    }


    const handleDragOver = (e) => {
        e.preventDefault();
        e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children)
    }

    const handleDrugDrop = (targetIndex) => {
        setDragging(false);

        if (draggedImage) {
            const updatedImages = thumbnails.filter((image) => image.id !== draggedImage.id)

            updatedImages.splice(targetIndex, 0, draggedImage);

            setThumbnails(updatedImages);
            setDraggedImage(null);
        }
    }



    return (
        <main className="min-h-screen flex flex-row items-center justify-center md:p-0 p-4">
            <div className="flex flex-col gap-y-2">
                {/* call galleryHeader */}
                <Header
                    selectThumbnails={selectThumbnails}
                    setSelectThumbnails={setSelectThumbnails}
                    handleDeleteImage={handleDeleteImage}
                ></Header>

                <hr />
                <section className="h-full w-full p-6">
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6"
                        onDragOver={handleDragOver}
                    >
                        {thumbnails.map((image, index) => (<GalleryImage
                            key={index}
                            image={image}
                            index={index}
                            selectThumbnails={selectThumbnails}
                            setSelectThumbnails={setSelectThumbnails}
                            handleDragStart={handleDragStart}
                            handleDrugDrop={handleDrugDrop}
                            dragging={dragging}
                            draggedIndex={draggedIndex}
                        />))

                        }

                        {/* image upload component */}
                        <ImageUpload
                            handleUploadedImage={handleUploadedImage}
                        />

                    </div>
                </section>
            </div>
        </main>
    );
};

export default Gallery;