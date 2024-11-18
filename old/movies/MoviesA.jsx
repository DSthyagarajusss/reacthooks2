import React from "react";
class MoviesA extends React.Component{

    movie_name='VENKEY_MAMA'
     hero_name='Venkatesh and Nagachithanya'
     story ='supper'
   


    render(){
    return <>
    <h1>movies com</h1>
    <h2>movie_name{this.movie_name}</h2>
    <h3>hero_name{this.hero_name}</h3>
    <p>story{this.story}</p>
    </>
}
}

export default MoviesA