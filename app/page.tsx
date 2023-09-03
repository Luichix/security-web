import Container from '@/components/container';
import Image from 'next/image';
// import MoreStories from '@/components/more-stories';
// import HeroPost from '@/components/hero-post';
// import Intro from '@/components/intro';
// import Post from '@/interfaces/post';
// import { fetchAllPosts } from '@/lib';

export default async function Home() {
  // const allPosts: Post[] = await fetchAllPosts();

  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen w-full bg-gradient-to-t from-gray-200 to-white pt-16 ">
        <Container>
          <div className="custom-shape-divider-bottom-1693624099">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <section>
            <h1 className="text-2xl font-medium text-center leading-8 text-gray-950 my-8">
              Tienda Online de
              <b className="text-3xl block">Camaras de Seguridad</b>
            </h1>
            <p className="text-justify text-gray-800 text-lg">
              Nos apasiona <b>tu seguridad y la de tus seres queridos</b>, y
              creemos que una de las <b>mejores maneras de proteger</b> lo que
              más valoras es a través de la tecnología de{' '}
              <b>cámaras de seguridad</b>.
            </p>
            <p className="text-justify text-gray-800 py-4 text-lg">
              Te mostraremos desde <b>reseñas de productos</b> hasta &nbsp;
              <b>guías de compra</b> y <b>consejos de instalación.</b>
            </p>
          </section>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-b from-white to-gray-300 py-20">
        <Container>
          <section>
            <Title title="Análisis de las mejores camaras de seguridad de 2023" />
            <div className="grid grid-cols-1  grid-rows-1 gap-12 ">
              <Item
                image="https://m.media-amazon.com/images/I/51QMojuBcWL._AC_SX466_.jpg"
                size={280}
                alt="Camara de seguridad"
                name="KASA"
                description="CÁMARA DE SEGURIDAD INTELIGENTE PARA INTERIORES"
              />
              <Item
                image="https://m.media-amazon.com/images/I/516jOc19WpL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                size={280}
                alt="Camara de seguridad"
                name="KASA"
                description="CÁMARA DE SEGURIDAD INTELIGENTE PARA INTERIORES"
              />
              <Item
                image="https://m.media-amazon.com/images/I/61kO28K0ajL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                size={280}
                alt="Camara de seguridad"
                name="KASA"
                description="CÁMARA DE SEGURIDAD INTELIGENTE PARA INTERIORES"
              />
              <Item
                image="https://m.media-amazon.com/images/I/51QMojuBcWL._AC_SX466_.jpg"
                size={280}
                alt="Camara de seguridad"
                name="KASA"
                description="CÁMARA DE SEGURIDAD INTELIGENTE PARA INTERIORES"
              />
            </div>
          </section>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-tl from-gray-700 to-gray-950 pt-6 pb-16">
        <Container>
          <section>
            <Title
              title="Catálogo de Camaras de seguridad al mejor precio"
              dark
            />
            <div className="grid grid-cols-1  grid-rows-1 gap-12 ">
              <Product
                image="https://m.media-amazon.com/images/I/51QMojuBcWL._AC_SX466_.jpg"
                size={280}
                alt="Camara de seguridad"
                name="KASA"
                description="CÁMARA DE SEGURIDAD INTELIGENTE PARA INTERIORES"
              />
              <Product
                image="https://m.media-amazon.com/images/I/516jOc19WpL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                size={280}
                alt="Camara de seguridad"
                name="KASA"
                description="CÁMARA DE SEGURIDAD INTELIGENTE PARA INTERIORES"
              />
              <Product
                image="https://m.media-amazon.com/images/I/61kO28K0ajL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                size={280}
                alt="Camara de seguridad"
                name="KASA"
                description="CÁMARA DE SEGURIDAD INTELIGENTE PARA INTERIORES"
              />
              <Product
                image="https://m.media-amazon.com/images/I/51QMojuBcWL._AC_SX466_.jpg"
                size={280}
                alt="Camara de seguridad"
                name="KASA"
                description="CÁMARA DE SEGURIDAD INTELIGENTE PARA INTERIORES"
              />
            </div>
          </section>
        </Container>
      </div>
    </main>
  );
}

const Title = ({ title, dark = false }: { title: string; dark?: boolean }) => {
  return (
    <h2
      className={`font-bold ${
        dark ? 'text-white' : 'text-gray-950'
      }  text-2xl  my-8  `}
    >
      {title}
    </h2>
  );
};

const Item = ({
  image,
  alt,
  size,
  name,
  description,
}: {
  image: string;
  alt: string;
  size: number;
  name: string;
  description: string;
}) => {
  return (
    <figure className="flex flex-col items-center border-2 rounded-xl bg-white pt-4 ">
      <Image src={image} width={size} height={size} alt={alt} />
      <figcaption className="text-lg text-center text-gray-800 py-4 rounded-xl px-2 bg-white">
        <b>{name}</b> - {description}
      </figcaption>
    </figure>
  );
};

const Product = ({
  image,
  alt,
  size,
  name,
  description,
}: {
  image: string;
  alt: string;
  size: number;
  name: string;
  description: string;
}) => {
  return (
    <figure className="flex flex-col items-center border-2 rounded-xl bg-white py-4 ">
      <Image src={image} width={size} height={size} alt={alt} />
      <figcaption className="text-md text-center text-gray-800 py-4 rounded-xl px-2 bg-white">
        {description}
      </figcaption>
      <span className="pb-4 font-bold text-xl text-gray-800">
        <small>US</small>$ 129.00
      </span>
      <button className="bg-gradient-to-b from-yellow-500 to-orange-400 px-8  py-4 rounded-md font-bold text-slate-800">
        Comprar en Amazon
      </button>
    </figure>
  );
};
