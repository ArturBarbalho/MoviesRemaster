import { BannerProps, CardProps, DetailsProps, Genres, GetMovieDetails, bigbannerProps, movieResults, reviewsProps, reviews } from "../typesProps"
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

details(movie:GetMovieDetails){
    const genres = movie.genres.map((e)=>{
        return e.name
    })
    const data:DetailsProps = {
        bigsrc:`https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        genres:genres,
        id:movie.id,
        overview:movie.overview,
        relase:movie.release_date,
        smallsrc:`https://image.tmdb.org/t/p/original${movie.poster_path}`,
        title:movie.title,
        vote_avarage:movie.vote_average
    }
    return data
},
reviews(reviews:reviews[]){
    const rvws = reviews.map((e)=>{
        const data:reviewsProps = {
            content:e.content,
            name:e.author,
            src:e.author_details.avatar_path ? e.author_details.avatar_path.substring(1):e.author_details.avatar_path
        }
        return data
    })
    return rvws
},

}