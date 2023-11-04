/* eslint-disable react/prop-types */

import DragDropOverlay from "./DragDropOverlay";

const GalleryImage = ({ image, index, selectThumbnails, setSelectThumbnails, handleDragStart, handleDrugDrop, dragging, draggedIndex, }) => {

    return (
        <div
            className={`group relative before:content-[''] before:absolute before:h-full before:w-full before:rounded-lg before:transition-colors before:cursor-move ${(index === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1")} ${(selectThumbnails.find((photo) => photo.id === image.id) ? "opacity-100" : "hover:before:bg-black/50")}`}
            draggable={true}
            onDragStart={() => handleDragStart(image)}
            onDrop={() => handleDrugDrop(index)}
        >
            <img src={image.image} alt="Image" className={`h-full w-full max-w-full rounded-lg object-contain border-2 ${selectThumbnails.find((photo) => photo.id === image.id) && "opacity-30"}`} />

            <input type="checkBox" name={image.id} id={image.id} className={`absolute top-4 left-4 h-4 w-4 accent-blue-700 group-hover:opacity-100 transition-all delay-100 duration-200 ease-linear cursor-pointer ${selectThumbnails.find((photo) => photo.id === image.id) ? "opacity-100" : "opacity-0"}`}

                checked={
                    selectThumbnails.find((photo) => photo.id === image.id) ? true : false
                }

                onChange={() => {
                    if (selectThumbnails.find((photo) => photo.id === image.id))
                        setSelectThumbnails(setSelectThumbnails.filter((photo) => photo.id !== image.id))
                    else setSelectThumbnails([...selectThumbnails, image])
                }}
            />

            <DragDropOverlay
                dragging={dragging}
                draggedIndex={draggedIndex}
                image={image}
            />
        </div>
    );
};

export default GalleryImage;