

const getGifs = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=BiJC2KNUNfnKN1JKYKg6b7pz5CNJ7piG`
    const res = await fetch(url)
    const { data } = await res.json()

    const BDgif = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            image: item.images.downsized_medium.url
        }
    })


    return BDgif
}

export default getGifs