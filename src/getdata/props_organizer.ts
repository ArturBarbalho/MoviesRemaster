import { BannerProps, CardProps, Genres, bigbannerProps, movieResults } from "../typesProps"
import { Functions } from './index';

export function GenImg(list:Genres[],e:movieResults){
    const genres = Functions.getGenre(e.genre_ids,list)
    const backdrop = Functions.getImgSource(e.backdrop_path)
    const path = Functions.getImgSource(e.poster_path)
    const obj = {
        genres,
        backdrop,
        path
    }
    return obj
}

export const organizer = {

  banner(movie:movieResults[],list:Genres[]){ 
       const bnr = movie.map((e)=>{
            const genimg = GenImg(list,e)
            const data:BannerProps = { 
            genres:genimg.genres,
            id:e.id,
            overview:e.overview,
            media:'movie',
            relaseDate:e.release_date,
            src:genimg.backdrop,
            title:e.title
            }
          return data
        })
      return bnr  
},

cards(movie:movieResults[],list:Genres[]){
    const crd = movie.map((e)=>{
        const genimg = GenImg(list,e)
        const data:CardProps = {
            id:e.id,
            media:'movie',
            src:genimg.path,
            title:e.title
        }
        return data
    })
   return crd 
},

biggerbanner(movie:movieResults[],list:Genres[]){
    const bgbnr = movie.map((e)=>{
        const genimg = GenImg(list,e)
        const data:bigbannerProps = {
            bigsrc:genimg.backdrop,
            smallsrc:genimg.path,
            genres:genimg.genres,
            id:e.id,
            media:'movie',
            overview:e.overview,
            title:e.title
        }
        return data
    })
   return bgbnr 
},

details(){
    ''
},
reviews(){
    ''
}
}