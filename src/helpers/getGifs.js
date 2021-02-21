export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=wcoA8VsSg20W0CjVOd2GdCMxFmrQYJuT`; 
    const res = await fetch( url );
    const { data } = await res.json();

    const gifs = data.map( img => {
        const {id, title} = img;
        return {
            id,
            title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}