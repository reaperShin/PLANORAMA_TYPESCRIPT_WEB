import React, { useState } from "react";
import "./TableSettings.css"; // Import the CSS file
import Menubar from "./Menubar.png";
import ThreeP from "./table3p.png";
import FourP from "./table4p.png";
import FiveP from "./table5p.png";
import SixP from "./table6p.png";
import SevenP from "./table7p.png";
import EightP from "./table8p.png";


interface DraggableImageProps {
  src: string;
  alt: string;
}

const DraggableImage: React.FC<DraggableImageProps> = ({ src, alt }) => {
  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    event.dataTransfer.setData("imageSrc", src);
  };

  return (
    <img
      src={src}
      alt={alt}
      className="draggable"
      draggable
      onDragStart={handleDragStart}
    />
  );
};

const App: React.FC = () => {
  const [droppedImages, setDroppedImages] = useState<string[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const imageSrc = event.dataTransfer.getData("imageSrc");
    if (imageSrc) {
      setDroppedImages((prevImages) => [...prevImages, imageSrc]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="body">
      <header className="header">
        <h1 className="Logo">Logo</h1>
        <div className="menu">
          <button>Save</button>
          <img className="menubar" src={Menubar} alt="Menu" />
        </div>
      </header>
      
      <div className="Environment">
        <div className="TableLayout" onDrop={handleDrop} onDragOver={handleDragOver}>
          {droppedImages.map((src, index) => (
            <img key={index} src={src} alt={`Dropped ${index}`} className="dropped" />
          ))}
        </div>
        
        <div className="Tables">
          <div className="TableContainer">
            <DraggableImage src={ThreeP} alt="Table 3P" />
            <DraggableImage src={FourP} alt="Table 4P" />
            <DraggableImage src={FiveP} alt="Table 5P" />
            <DraggableImage src={SixP} alt="Table 6P" />
            <DraggableImage src={SevenP} alt="Table 7P" />
            <DraggableImage src={EightP} alt="Table 8P" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
