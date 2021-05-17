import { useEffect, useRef, useState } from "react";
import { DogService } from "../../services/DogService";

enum BreedGroup {
    afghanHound = 'Afghan Hound',
    hound = 'Hound',
    terrier = 'Terrier',
    toy = 'Toy',
    working = 'Working',
    mixed = 'Mixed',
    unknown = '',
    nonSporting = 'Non-Sporting',
    herding = 'Herding',
}

type SystemsOfMeasurement = {
    height: string,
    metric: string
}

type Image = {
    height: Number,
    id: string,
    url: string,
    width: Number
}

export type DogBreed = {
    id: string
    bred_for: string,
    breed_group: BreedGroup,
    height: SystemsOfMeasurement,
    image: Image,
    life_span: string,
    name: string,
    origin: string,
    reference_image_id: string,
    temperament: string,
    weight: SystemsOfMeasurement
}

export const useBreeds = () => {
    const [breeds, setBreeds] = useState<DogBreed[]>([])
    const [loadingBreeds, setLoadingBreeds] = useState<Boolean>(true)
    const mounted = useRef(true)
    useEffect(() => {
        const getBreeds = async () => {
            const breedsData = await DogService.getBreeds()
            if (mounted.current === true) {
                setBreeds(breedsData)
                setLoadingBreeds(false)
            }
        }
        getBreeds()
        return () => {
            mounted.current = false
        }
    }, [])

    return { loadingBreeds, breeds }
}