import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

function Posts() {
  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      title: "Consectetuer vehicula ab",
      category: "In Kitchen, Lifestyle",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg",
    },
    {
      id: 2,
      title: "Taciti hendrerit dis odit incidunt",
      category: "In Kitchen, Living Room, Reading Room",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-150x150.jpg",
    },
    {
      id: 3,
      title: "Sunt doloremque blandit inven",
      category: "In Living Room",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/08/pic08-free-img.jpg",
    },
    {
      id: 4,
      title: "Fugit quaerat voluptate! Irure.",
      category: "In Living Room",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-150x150.jpg",
    },
    {
      id: 5,
      title: "Litora aptent magnam",
      category: "In Bedroom",
      image: "https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot-150x150.jpg",
    },
    
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="my-4 bg-light">
      {/* Barre de recherche */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={6}>
          <Form.Control 
            type="text" 
            placeholder="Search..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </Col>
      </Row>

      {/* Titre */}
      <Row>
        <Col>
          <h5 className="text-left font-weight-bold mb-6">Recent Posts</h5>
        </Col>
      </Row>

      {/* Liste des posts */}
      <Row>
        {filteredPosts.map(post => (
          <Col key={post.id} xs={12} className="mb-2">
            <Card className="border-0 shadow-sm">
              <Card.Body className="d-flex align-items-center">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="me-3 rounded" 
                  style={{ width: '120px', height: '120px' }} 
                />
                <div className="float-right">
                  <Card.Title className="text-danger mb-1 text-red-500" style={{ fontSize: '15px' }}>
                    {post.title}
                  </Card.Title>
                  <Card.Subtitle className="text-muted text-red-500" style={{ fontSize: '12px' }}>
                    {post.category}
                  </Card.Subtitle>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Posts;