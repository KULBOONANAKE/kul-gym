export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'bee37cf4c0msh8e270309560d594p1caa3fjsnb504f861b7f5',
  },
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'bee37cf4c0msh8e270309560d594p1caa3fjsnb504f861b7f5',
  },
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  return data
}
