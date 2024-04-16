import { Image } from "react-grid-gallery";
 
export const  images = [
  {
    src: "/images/firstCharacter.png",
 
    width: 320,
    height: 174,
    tags: [
      
      { value: "Zee", title: "zee" },
    ],
    
  },
  {
    src: "/images/bottles.jpg",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 500,
    height: 252,
    tags: [
      { value: "Juice Bottles", title: "candles" },
    ],
  },
  {
    src: "/images/candles.jpg",
 
    width: 400,
    height: 202,
    tags: [
      { value: "Bleack Rose Candles", title: "candles" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/gas station.png",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 400,
    height: 212,
    tags: [
      { value: "20s Gas Station", title: "Gas Station" },
    ],
  },
  {
    src: "/images/lilbuttah.png",
 
    width: 320,
    height: 174,
    tags: [
      { value: "lil buttah", title: "lil buttah" },
    ],
  },
  {
    src: "/images/delorean.jpg",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 420,
    height: 212,
    tags: [
      { value: "CyberCity", title: "candles" },
    ],
 
  },
  {
    src: "/images/portal.png",
 
    width: 320,
    height: 174,
    tags: [
      { value: "portal to unknown", title: "portal" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/kingkaiplanet.png",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/giant alien.jpg",
 
    width: 500,
    height: 174,
    tags: [
      { value: "Overseer", title: "overseer" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/zee chilling.png",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Just Chill", title: "chill" },
    ],
  },
  
];

export function CustomGallery() {
    return (
        
      <div>
        {images.map((image, index) => (
            <Image
            key={index}
            src={image.src}
            thumbnail={image.src}
            thumbnailWidth={image.width}
            thumbnailHeight={image.height}
            caption={image.caption}
            tags={image.tags}
            />
        ))}
      </div>
       
    )
  }