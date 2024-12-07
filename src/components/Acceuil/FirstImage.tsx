import React from 'react';


function FirstImage(props:{titre: string; lien: string; url: string; description: string; link: string}){
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
          width: '800px', 
          marginBottom: '18px',
          padding: '10px',   
          transition: 'transform 0.3s ease',  
        },
    
        lien:{
            fontSize: '10px',
            marginBottom: '20px',
            color: 'red',
            textDecoration: 'underline',
        },
        title: {
          fontSize: '50px',
          marginBottom: '10px',
          fontWeight: 'bold',
          color: '#333',
        },
        image: {
          width: '800px',
          height: '400px',
          marginBottom: '10px',
          marginTop:'20px',
        },
        description: {
          fontSize: '20px',
          color: '#555',
          lineHeight: '1.5',
          marginBottom: '10px',
        },
        readMore: {
          display: 'inline-block',
          marginTop: '10px',
          color: 'red',
          textDecoration: 'none',
          fontSize: '15px',
        },
        readMoreHover: {
          color: '#0056b3',
          textDecoration: 'underline',
        },
    }
    export default FirstImage;
