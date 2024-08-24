import ImageRotator from "./components/ImageRotator";

const App = () => {
  const images = [
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=1',
    'https://via.placeholder.com/150/00FF00/FFFFFF?text=2',
    'https://via.placeholder.com/150/0000FF/FFFFFF?text=3',
    'https://via.placeholder.com/150/FFFF00/FFFFFF?text=4',
    'https://via.placeholder.com/150/FF00FF/FFFFFF?text=5'
    
  ];

  return (
    <div className="h-[4rem] flex items-center justify-center">
      <ImageRotator images={images} />
    </div>
  );
};

export default App;