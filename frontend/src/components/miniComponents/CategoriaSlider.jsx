import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import estilos from './CategoriaSlider.module.css';

const CategoriaSlider = () => {
  const categorias = [
    {
      imagen: 'src/img/computador.png',
      titulo: 'Portatiles',
    },
    {
      imagen: 'src/img/telefono.png',
      titulo: 'Telefonos',
    },
    {
      imagen: 'src/img/accesorio.png',
      titulo: 'Accesorios',
    },
    {
      imagen: 'src/img/monitores.png',
      titulo: 'Monitores',
    },
    {
      imagen: 'src/img/p7.png',
      titulo: 'Escritorio',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={`${estilos.categoriaSlider_container} m-auto px-2`}>
      <Slider {...settings}>
        {categorias.map((categoria, index) => (
          <div key={index} className={estilos.categoriaSlider}>

            <img src={categoria.imagen} alt={categoria.titulo} />
            <h2>{categoria.titulo}</h2>
            
            <button className='my_button'>Ver mas...</button>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoriaSlider;
