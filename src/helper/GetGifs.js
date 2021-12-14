
export const imageFun = async (category) => {


    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=BiJC2KNUNfnKN1JKYKg6b7pz5CNJ7piG`

    const response = await fetch(url)
    const { data } = await response.json()


    const dataImge = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            url: item.images.downsized_medium.url
        }
    })

    return dataImge
}