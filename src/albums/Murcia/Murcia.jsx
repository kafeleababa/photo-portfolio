import React, { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import { Link } from "react-router-dom";
import { murcia_images } from "./imageGallery"
import Carousel, { ModalGateway, Modal } from "react-images";

const Murcia = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="switzerland">

            <h1>Murcia</h1>
            <Link to="/">back</Link>

            <Gallery photos={murcia_images} onClick={openLightbox} />

            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={murcia_images.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default Murcia