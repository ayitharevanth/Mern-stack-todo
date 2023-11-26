export default () => {
    return fetch(`${import.meta.env.API_URL}/todos`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${import.meta.env.TOKEN}`,
            "Content-Type": 'application/json'
        }
    })
    .then(res=> res.json())
}