import { Card, Col, Divider, Row } from "antd";
import React from "react";
import { DogBreed } from "../../hooks/useBreeds";

type OwnProps = {
    breed: DogBreed
}

const BreedCard: React.SFC<OwnProps> = (props: OwnProps) => {
    const { breed } = props
    const { image, name, breed_group, bred_for, origin } = breed
    const description = (
        <>
            <Divider />
            <Row className="breed-description">
                <Col className="breed-description-label">
                    Bred For:{' '}
                </Col>
                <Col className="breed-description-value">
                    {bred_for ? bred_for : 'Unknown'}
                </Col>
            </Row>
            <Row>
                <Col className="breed-description-label">
                    Origin:{' '}
                </Col>
                <Col className="breed-description-value">
                    {origin ? origin : 'Unknown'}
                </Col>
            </Row >
            <Row>
                <Col className="breed-description-label">
                    Group:{' '}
                </Col>
                <Col className="breed-description-value">
                    {breed_group ? breed_group : 'Unknown'}
                </Col>
            </Row >
        </>
    )

    return (
        <Col span={12} key={breed.id}>
            <Card
                hoverable
                cover={
                    <img alt={name}
                        src={image.url}
                    />
                }
                style={{ marginBottom: 16 }}>
                <Card.Meta title={name}
                    description={description}
                />
            </Card>
        </Col >
    )
}

export default BreedCard;