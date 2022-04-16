import React from 'react';
import { Card } from 'react-bootstrap';

const Experience = (props) => {
    const { img, client, project, description } = props.experience;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{client}</Card.Title>
                    <Card.Title>{project}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Experience;