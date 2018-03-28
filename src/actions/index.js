import axios from 'axios';
import { CHANGE_COLOR } from './type';


const changeColor = (color) => {
  return {
    type: "CHANGE_COLOR",
    color: color
  }
};


export const loadColor = () => {
  return (dispatch) => {
    return axios.get("http://www.colr.org/json/color/random")
      .then(res => {
        dispatch(changeColor("#" + res.data.new_color));
    })
  }
}




