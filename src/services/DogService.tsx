import { DogBreed } from "../components/hooks/useBreeds"

const dogApiUrl = 'https://api.thedogapi.com/v1'
const dogApiKey = process.env.DOG_API_KEY ? process.env.DOG_API_KEY : ''

const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'X-API-KEY': dogApiKey
}

const getBreeds = async (): Promise<DogBreed[]> => {
    const endpoint = '/breeds'
    const requestOptions: RequestInit = {
        method: 'GET',
        headers
    }
    const fullUrl = `${dogApiUrl}/${endpoint}`
    const response = await fetch(fullUrl, requestOptions)
    const breedsData = response.json()

    return breedsData

}

export const DogService = {
    getBreeds
}