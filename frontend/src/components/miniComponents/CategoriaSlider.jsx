import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import estilos from './CategoriaSlider.module.css';

const CategoriaSlider = () => {
  const categorias = [
    {
      imagen: 'src/img/computador.png',
      titulo: 'Portatiles',
      descripcion: 'Breve descripcion, categ... 1',
    },
    {
      imagen: 'src/img/telefono.png',
      titulo: 'Telefonos',
      descripcion: 'Breve descripcion, categ... 2',
    },
    {
      imagen: 'src/img/accesorio.png',
      titulo: 'Accesorios',
      descripcion: 'Breve descripcion, categ... 3',
    },
    {
      imagen: 'src/img/accesorio.png',
      titulo: 'Monitores',
      descripcion: 'Breve descripcion, categ... 3',
    },
    {
      imagen: 'src/img/accesorio.png',
      titulo: 'Escritorio',
      descripcion: 'Breve descripcion, categ... 3',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className={estilos.categoriaSlider_container}>
      <Slider {...settings}>
        {categorias.map((categoria, index) => (
          <div key={index} className={estilos.categoriaSlider}>

            <img src={categoria.imagen} alt={categoria.titulo} />
            <h2>{categoria.titulo}</h2>
            <p>{categoria.descripcion}</p>
            
            <button className='my_button'>Ver categoria</button>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoriaSlider;
