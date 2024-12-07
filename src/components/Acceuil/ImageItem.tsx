import React from "react";
function ImageItem(props:{titre: string; lien: string; url: string; description: string; link: string}){
    return(
    
        <div style={styles.imageItem as React.CSSProperties}>
            <h3 style={styles.title}>{props.titre}</h3>
            <a href={props.lien} style={styles.lien}>{props.lien}</a>
            <img src={props.url} alt={props.titre} style={styles.image} />
            <p style={styles.description}>{props.description}</p>
            <a href={props.link} style={styles.readMore}>Read More »</a>
        </div>
    );

}

const styles = {
    imageItem: {
      width: '450px', 
      marginBottom: '10px',
      padding: '10px',   
      transition: 'transform 0.3s ease',  
      fontSize: '80px',

    },

    lien:{
        fontSize: '8px',
        marginBottom: '5px',
        color: 'red',
        textDecoration: 'underline',
    },
    title: {
      fontSize: '20px',
      marginBottom: '10px',
      fontWeight: 'bold',
      color: '#333',
    },
    image: {
      width: '350px',
      height: '200px',
      marginBottom: '10px',
      marginTop:'10px',
    },
    description: {
      fontSize: '15px',
      color: '#555',
      lineHeight: '1.5',
      marginBottom: '10px',
    },
    readMore: {
      display: 'inline-block',
      marginTop: '10px',
      color: 'red',
      textDecoration: 'none',
      fontSize: '20px',
    },
    readMoreHover: {
      color: '#0056b3',
      textDecoration: 'underline',
    },
  };
  
  export default ImageItem;
  