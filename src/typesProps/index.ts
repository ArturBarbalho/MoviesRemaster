export type DetailsProps = {
  smallsrc: string
  bigsrc:string
  genres:string[]
  overview:string
  title:string
  id:number
  relase:string
  vote_avarage:number
}
export type bigbannerProps = {
  bigsrc:string
  smallsrc:string
  genres:string[]
  overview:string
  title:string
  id:number
  media:'tv'|'movie'
} 

export type CardProps = {
  title:string
  id:number
  src:string
  media:'movie'|'tv'
}
export type BannerProps = {
  src:string
  title:string
  relaseDate: string
  id:number
  media:'movie'|'tv'
  overview:string
  genres:string[]
}


export type Genres = {
    id:number
    name:string
}

export type movieResults={
  poster_path:string
  adult:boolean
  overview:string
  release_date:string
  genre_ids:number[]
  id:number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}
export type tvResults={
    poster_path: string
    popularity: number
    id: number,
    backdrop_path: string
    vote_average: number
    overview: string
    first_air_date: number
    origin_country: string[]
    genre_ids: number[]
    original_language: string
    vote_count: number
    name: string
    original_name: string
  }
export type reviews = {
author: string
author_details:autorDetails
content: string
created_at: string
id: string
updated_at: string
url: string
}

export type autorDetails =
 {
  name: string
  username: string
  avatar_path: string | null
  rating: boolean | null | number
}