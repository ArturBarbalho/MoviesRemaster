import { BannerProps, CardProps, DetailsProps, bigbannerProps, reviewsProps } from "../typesProps";

export const ReviewsMock:reviewsProps = {
  content:'Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato ...',
  name: 'ONYANKOPON' ,
  src:'https://image.tmdb.org/t/p/original//sKeC7qZLAKreuwxH4x6U3mN7Aa8.jpg'
}

export const DetailsMock:DetailsProps = {
  bigsrc: 'https://image.tmdb.org/t/p/original//9VIURlZvfnmFACs2m0MdUDDC3In.jpg',
  smallsrc:'https://image.tmdb.org/t/p/original//ifRFLx83Xk1DcwAS3OScgI6HmWO.jpg',
  genres:['Action', 'Comedy'],
  id:2,
  overview:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis...',
  title:'THE END OF ONYANKOPON ',
  relase:'2008-04-14',
  vote_avarage:5.0
}

export const BiggerBannerMock:bigbannerProps = {
  bigsrc: 'https://image.tmdb.org/t/p/original//9VIURlZvfnmFACs2m0MdUDDC3In.jpg',
  smallsrc:'https://image.tmdb.org/t/p/original//ifRFLx83Xk1DcwAS3OScgI6HmWO.jpg',
  genres:['Action', 'Comedy'],
  id:2,
  media:'movie',
  overview:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis...',
  title:'ONYANKOPON 3 A ORIGEM'
}
export const CardMock:CardProps = {
  id:2,
  media:'movie',
  src:'http://www.claquete.com/fotos/filmes/poster/12861_medio.jpg',
  title:'ONYANKOPON 2 O RETORNO'
}

export const BannerMock:BannerProps = {
    media: 'movie',
    relaseDate: '(1800)',
    id:1,
    title:'ONYANKOPON O FILME',
    src:'https://image.tmdb.org/t/p/original//9VIURlZvfnmFACs2m0MdUDDC3In.jpg',
    overview:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis...',
    genres: ['Action', 'Comedy' ]
  }