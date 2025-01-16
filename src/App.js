import CategoryMenu from "./components/category-menu/category-menu.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      img: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      img: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      img: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      img: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      img: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return <CategoryMenu categories={categories} />;
};

export default App;