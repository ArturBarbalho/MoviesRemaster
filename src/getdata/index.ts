import { Genres } from "../typesProps"
const key = '?api_key=4f4b4e5fe94ea194d54f83e0b1cd5bf8'
const link = 'https://api.themoviedb.org/3/'

async function Fetch(lnk:string){
    const request = await fetch(lnk)
    const res = await request.json()
    return res
}


export const GetData = {

    async movies(categorie:'top_rated'|'popular'|'upcoming'|'latest'|'now_playing'){
     const lnk = `${link}movie/${categorie}${key}`
     const res = await Fetch(lnk)
     return res.results
    },

    async tv(categorie:'on_the_air'|'airing_today'|'latest'|'popular'|'top_rated'){
        const lnk = `${link}tv/${categorie}${key}`
        const res = await Fetch(lnk)
        return res.results  
    },
    async genresList(media:'tv'|'movie'){
        const lnk = `${link}genre/${media}/list${key}`
        const res = await Fetch(lnk)
        return res.genres
    },
    async details(id:string|string[]|undefined, media:'movie'|'tv'){
        const lnk = `${link}${media}/${id}${key}`
        const res = await Fetch(lnk)
        return res
    },
    async reviews(id:string|string[]|undefined, media:'movie'|'tv'){
        const lnk = `${link}${media}/${id}/reviews${key}`
        const res = await Fetch(lnk)
        return res.results
    },
    async similars(id:string|string[]|undefined, media:'movie'|'tv'){
        const lnk = `${link}${media}/${id}/similar${key}`
        const res = await Fetch(lnk)
        return res.results  
    }
  
}

export const Functions = {
     getGenre(genres:number[], list: Genres[]){

            const gm = list.filter((e)=>{
                return genres.find(id=>id==e.id)
            })
            const n = gm.map((e)=>{
                return e.name
            })

            return n 
        
    },

    getImgSource(path:string|null){
        const imgLink = 'https://image.tmdb.org/t/p/original/'
        return `${imgLink}${path}`
        
    },

    RouterPath(title:string, id:number,media:'movie'|'tv'){
        const query = {
            id:id.toString(),
        }
        const path = {
            pathname:`/${media}/${title}`,
            query: query
        }
        return path
    }

}