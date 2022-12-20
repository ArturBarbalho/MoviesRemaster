import { Settings } from "react-slick";
import { Left, Right } from "../components/Cardslider/styles";

export const settings:Settings = {
    slidesToShow:4,
    infinite:true,
    touchMove:false,
    nextArrow:<Right/> ,
    prevArrow: <Left/> ,
    variableWidth:true,
    responsive:[
        {
            breakpoint: 600,
            settings: {
              arrows:false,
              touchMove:true
            }
          },
    ]    
    }