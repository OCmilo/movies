const imagePath = (path: string) => `https://image.tmdb.org/t/p/w500${path}`
const convertDate = (date: string) => new Date(date).toLocaleDateString()

export { imagePath, convertDate }
