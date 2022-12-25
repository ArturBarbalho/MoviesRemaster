import { Functions } from "."
import { BannerProps, CardProps, DetailsProps, Genres, GetTvDetails, bigbannerProps, reviewsProps, tvResults, reviews } from "../typesProps"

export function GenImg(list:Genres[],e:tvResults){
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

export const TVorganizer = {

    banner(tv:tvResults[],list:Genres[]){ 
         const bnr = tv.map((e)=>{
              const genimg = GenImg(list,e)
              const data:BannerProps = { 
              genres:genimg.genres,
              id:e.id,
              overview:e.overview,
              media:'tv',
              relaseDate:e.first_air_date.toString(),
              src:genimg.backdrop,
              title:e.name
              }
            return data
          })
        return bnr  
  },
  
  cards(tv:tvResults[],list:Genres[]){
      const crd = tv.map((e)=>{
          const genimg = GenImg(list,e)
          const data:CardProps = {
              id:e.id,
              media:'tv',
              src:genimg.path,
              title:e.name
          }
          return data
      })
     return crd 
  },
  
  biggerbanner(tv:tvResults[],list:Genres[]){
      const bgbnr = tv.map((e)=>{
          const genimg = GenImg(list,e)
          const data:bigbannerProps = {
              bigsrc:genimg.backdrop,
              smallsrc:genimg.path,
              genres:genimg.genres,
              id:e.id,
              media:'tv',
              overview:e.overview,
              title:e.name
          }
          return data
      })
     return bgbnr 
  },
  
  details(tv:GetTvDetails){
    const genres = tv.genres.map((e)=>{
        return e.name
    })
    const data:DetailsProps = {
        bigsrc:`https://image.tmdb.org/t/p/original${tv.backdrop_path}`,
        genres:genres,
        id:tv.id,
        overview:tv.overview,
        relase:tv.first_air_date,
        smallsrc:`https://image.tmdb.org/t/p/original${tv.poster_path}`,
        title:tv.name,
        vote_avarage:tv.vote_average
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