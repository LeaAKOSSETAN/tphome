import React from 'react';
import ImageItem from './ImageItem';
import FirstImage from './FirstImage';


function ImageList() {
  const images = [
    {
      id: 1,
      titre: 'Icinia soluta. Lacus quas.',
      lien:'November 7, 2017 / Outdoors',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic04-free-img.jpg',
      description: 'Dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class […]',
      link: 'Read More »', 
    },
    {
      id: 2,
      titre: 'Eleifend sodales molestiae deserunt',
      lien:'November 2, 2017 / Outdoors',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic06-free-img.jpg',
      description: 'Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor',
      link: 'Read More »', 
    },
    {
      id: 3,
      titre: 'Crporis quae purus inventore!',
      lien:'October 17, 2017 / Outdoors',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/10/pic07-free-img.jpg',
      description: 'Luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
      link: 'Read More »', 
    },
    {
      id: 4,
      titre: 'Ex maxime quibusdam quam',
      lien:'April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/04/pic23-free-img.jpg',
      description: 'Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor',
      link: 'Read More »', 
    },
    {
      id: 5,
      titre: 'Natoque odio amet autem parturient',
      lien:'March 15, 2012 / Living Room, Outdoors',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2012/03/pic21-free-img.jpg',
      description: 'Velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a',
      link: 'Read More »', 
    },
  ];

  return (
    <div style={styles.imageList as React.CSSProperties}>
      {images.map((image) => image.id === 1?(
        <div style={styles.firstimage }>
          <FirstImage
          key={image.id}
          titre={image.titre}
          lien={image.lien}
          url={image.url}
          description={image.description}
          link={image.link}
        />
        </div>) : (
        <div style={styles.imageitem }>
          <ImageItem
          key={image.id}
          titre={image.titre}
          lien={image.lien}
          url={image.url}
          description={image.description}
          link={image.link}
        />
        </div>

      ))}
    </div>
  );
}

const styles = {
  imageList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
  
  },

  firstimage:{},

  imageitem:{},
};

export default ImageList;
