import React,{useState} from 'react'
import { Gallery } from "react-grid-gallery";
import Lightbox from 'react-image-lightbox'
import "react-image-lightbox/style.css";
import { images,  CustomGallery} from "../Components/data/Images";

const Portfolio = () => {

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = ( number,CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className='portfolio'> 
        {/* gallery */}

        <section className='portfolio_wrapper'>
              <h2 className='page_title'>Gallery</h2>
              
              {/* <div className="container">
              <div className="box">  <img className='portfolio_img' src='/projects/cadet.jpg'/></div>
              <div className="box2"> <img className='portfolio_img' src='/projects/ctc.jpg'/></div>
              <div className="box-3"> <img className='portfolio_img' src='/projects/gigibite.jpg'/></div>
              <div className="box-4"> <img className='portfolio_img' src='/projects/king.jpg'/></div>
              <div className="box-5"> <img className='portfolio_img' src='/projects/kkpic.png'/></div>
              <div className="box-6"> <img className='portfolio_img' src='/projects/ctc2.jpg'/></div>
              <div className="box-7"> <img className='portfolio_img' src='/projects/copiousStaffing.png'/></div>
              <div className="box-8"> <img className='portfolio_img' src='/projects/king.jpg'/></div>
              <div className="box-9"> <img className='portfolio_img' src='/projects/cadet.jpg'/></div>
              </div> */}
        <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
              
            </section>
    </div>
  )
}

export default Portfolio