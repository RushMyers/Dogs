import { Row, Input } from "antd";
import React, { ChangeEvent } from "react";
import { ClassNames } from "../../common/enumerations/ClassNames";
import { useBreeds } from '../hooks/useBreeds';
import { useFilteredBreeds } from '../hooks/useFilteredBreeds';
import BreedCard from './presentational/BreedCard';
import './Breeds.css'

function Breeds() {
    const { breeds, loadingBreeds } = useBreeds()
    const { filteredBreeds, filterBreeds } = useFilteredBreeds(breeds)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<Element>): void => {
        const targetNode = e.target as HTMLInputElement
        const searchTerm = targetNode.value

        filterBreeds(searchTerm)
    }

    return (
        <div style={{ maxWidth: '90vh', margin: 'auto' }}>
            <Row style={{ padding: '20px 0' }}>
                <Input.Search placeholder="Find a breed..." onChange={handleChange} />
            </Row>
            <Row className={ClassNames.breedListRow} style={{ maxHeight: '90vh', overflow: 'scroll', scrollbarGutter: 'always' }} gutter={16}>
                {filteredBreeds.map(breed => (
                    <BreedCard breed={breed} />
                ))}
            </Row>
        </div>
    );
}

export default Breeds;