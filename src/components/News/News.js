import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const News = (props) => {
    const {title, description, urlToImage, publishedAt} = props.article;
    return (
        <Card className="mx-2 my-3 shodow">
        <Card.Img variant="top" className='w-50 p-3' src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            {publishedAt}
          </Card.Text>
          <Button variant="primary">Visits</Button>
        </Card.Body>
      </Card>
    );
};

export default News;