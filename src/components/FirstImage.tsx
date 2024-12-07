import React from 'react';

// Déclaration explicite des types de style
interface Styles {
    imageItem: React.CSSProperties;
    titleContainer: React.CSSProperties;
    linkContainer: React.CSSProperties; // Ajout de la propriété ici
    lien: React.CSSProperties;
    title: React.CSSProperties;
    imageContainer: React.CSSProperties;
    image: React.CSSProperties;
    descriptionContainer: React.CSSProperties;
    description: React.CSSProperties;
    readMoreContainer: React.CSSProperties;
    readMore: React.CSSProperties;
    readMoreHover: React.CSSProperties;
}

function FirstImage(props: { titre: string; lien: string; url: string; description: string; link: string }) {
    return (
        <div style={styles.imageItem}>
            {/* Conteneur du titre */}
            <div style={styles.titleContainer}>
                <h3 style={styles.title}>{props.titre}</h3>
            </div>

            {/* Conteneur du lien */}
            <div style={styles.linkContainer}> {/* Correction ici */}
                <a href={props.lien} style={styles.lien}>{props.lien}</a>
            </div>

            {/* Conteneur de l'image */}
            <div style={styles.imageContainer}>
                <img src={props.url} alt={props.titre} style={styles.image} />
            </div>

            {/* Conteneur de la description */}
            <div style={styles.descriptionContainer}>
                <p style={styles.description}>{props.description}</p>
            </div>

            {/* Conteneur du lien "Read More" */}
            <div style={styles.readMoreContainer}>
                <a href={props.link} style={styles.readMore}>Read More »</a>
            </div>
        </div>
    );
}

// Déclaration des styles
const styles: Styles = {
    imageItem: {
        width: '100%',
        marginBottom: '4em',
        padding: '2em',
        transition: 'transform 0.3s ease',
    },
    titleContainer: {
        marginBottom: '1em',
    },
    linkContainer: { // Ajout du style manquant
        marginBottom: '1em',
    },
    lien: {
      marginLeft:'10%',
        fontSize: '1.5em',
        color: 'red',
        textDecoration: 'underline',
    },
    title: {
      marginLeft:'10%',
        fontSize: '2.5em',
        marginBottom: '0.5em',
        fontWeight: 'bold',
        color: '#333',
    },
    imageContainer: {
        marginBottom: '1em',
    },
    image: {
       marginLeft:'10%',
        width: '50%',
        maxHeight: '40%',
        objectFit: 'cover',
        marginBottom: '1em',
    },
    descriptionContainer: {
        marginBottom: '1.5em',
    },
    description: {
        fontSize: '2em',
        color: '#555',
        lineHeight: '1.5',
    },
    readMoreContainer: {
        marginTop: '2em',
    },
    readMore: {
        display: 'inline-block',
        marginTop: '2em',
        color: 'red',
        textDecoration: 'none',
        fontSize: '1.2em',
    },
    readMoreHover: {
        color: '#0056b3',
        textDecoration: 'underline',
    },
};

export default FirstImage;
