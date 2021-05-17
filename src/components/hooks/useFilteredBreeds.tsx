import { isEqual } from "lodash"
import { useEffect, useState } from "react"
import usePrevious from "../../common/hooks/usePrevious"
import { DogBreed } from "./useBreeds"

export const useFilteredBreeds = (breeds: DogBreed[]) => {
    const [filteredBreeds, setFilteredBreeds] = useState<DogBreed[]>(breeds)
    const prevBreeds = usePrevious(breeds)

    useEffect(() => {
        if (isEqual(prevBreeds, breeds)) return
        setFilteredBreeds(breeds)
    }, [breeds, prevBreeds])

    const filterBreeds = (searchTerm: string): any => {
        const subset = breeds.filter((breed: DogBreed) => breed.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredBreeds(subset)
    }

    return { filteredBreeds, filterBreeds }
}