
export const RidesMap = async () => {

    const response = await fetch('http://localhost:8080/ride/all')
    const ridesMap = await response.json();
    console.log(ridesMap.item)

    return ridesMap.item
};