import React, { useState } from 'react';
import ImageItem from './ImageItem';
import FirstImage from './FirstImage';

function ImageList() {
  const [currentPage, setCurrentPage] = useState(1);

  const images = [
    {
      id: 2,
      titre: 'Taciti hendrerit dis odit incidunt',
      lien: 'November 21, 2017 / Kitchen, Living Room, Reading Room',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg',
      description: 'Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? \nCorporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem',
      link: 'lien',
    },
    {
      id: 4,
      titre: 'Fugit quaerat vulputate! Irure. ',
      lien: 'November 20, 2017 / Living Room',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg',
      description: 'Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates',
      link: 'lien',
    },
    {
      id: 3,
      titre: 'Sunt doloremque blandit inven',
      lien: 'November 20, 2017 / Living Room',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg',
      description: 'Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros',
      link: 'lien',
    },
    {
      id: 5,
      titre: 'Litora aptent magnam laoreet!',
      lien: 'November 7, 2017 / Living Room',
      url: 'https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu',
      link: 'lien',
    },
  ];

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Liste des images */}
      <div style={styles.imageList as React.CSSProperties}>
        {images.map((image) =>
          image.id === 2 ? (
            <div style={styles.firstimage} key={image.id}>
              <FirstImage
                titre={image.titre}
                lien={image.lien}
                url={image.url}
                description={image.description}
                link={image.link}
              />
            </div>
          ) : (
            <div style={styles.imageitem} key={image.id}>
              <ImageItem
                titre={image.titre}
                lien={image.lien}
                url={image.url}
                description={image.description}
                link={image.link}
              />
            </div>
          )
        )}
      </div>

      {/* Pagination en bas de la première page */}
      {currentPage === 1 && (
        <div style={styles.pagination}>
          <button onClick={() => handlePageChange(1)} style={styles.pageButton}>
            1
          </button>

          <button onClick={() => handlePageChange(2)} style={styles.pageButton}>
            2
          </button>

          <button onClick={() => handlePageChange(currentPage + 1)} style={styles.pageButton}>
            Next &rarr;
          </button>
        </div>
      )}

      {/* Pagination en bas de la deuxième page */}
      {currentPage === 2 && (
        <div style={styles.pagination}>
          <button onClick={() => handlePageChange(1)} style={styles.pageButton}>
            1
          </button>

          <button onClick={() => handlePageChange(2)} style={styles.pageButton}>
            2
          </button>

          <button onClick={() => handlePageChange(currentPage - 1)} style={styles.pageButton}>
            &larr; Previous
          </button>
        </div>
      )}

      {/* Affichage du contenu pour la deuxième page */}
      {currentPage === 2 && (
        <div style={styles.imageList as React.CSSProperties}>
          {images.map((image) =>
            image.id === 2 ? (
              <div style={styles.firstimage} key={image.id}>
                <FirstImage
                  titre={image.titre}
                  lien={image.lien}
                  url={image.url}
                  description={image.description}
                  link={image.link}
                />
              </div>
            ) : (
              <div style={styles.imageitem} key={image.id}>
                <ImageItem
                  titre={image.titre}
                  lien={image.lien}
                  url={image.url}
                  description={image.description}
                  link={image.link}
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  imageList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  firstimage: {
    width: '100%',
  },
  imageitem: {
    width: '48%',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px', // Espace entre les images et la pagination
  },
  pageButton: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ImageList;
