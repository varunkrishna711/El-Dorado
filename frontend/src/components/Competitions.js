import React from "react";
import Showcomp from "./Showcomp";
import './Competitions.css';

const Competitions=()=>{
    return(
        <div className="imgbody">
			<h1 className="heading">COMPETITIONS</h1>
    <div className="cards">
        <Showcomp
        image="https://scholarblogs.emory.edu/postcolonialstudies/files/2014/06/449px-Kathakalidancer.jpg"
        name="All Kerala Kathakali Competition"
        venue= "Trivandrum Town Square"
        date= "January 30"
        prize="20K"
      />

    <Showcomp
        image = "http://www.schoolchalao.com/img/extraimages/school-chalao-chakyar-dance1.jpg"
        name="All India Chakyarkuthu Competition"
        venue= "Marine Drive"
        date= "February 14,2022"
        prize="15K"
      />

    <Showcomp
        image="https://www.keralatourism.org/images/artforms/large/kalaripayattu20131111114353_27_1.jpg"
        name="District level kalari championship"
        venue= "Pulimada Beachresort"
        date= "February 28,2022"
        prize="30K"
      />
      <Showcomp
        image="https://www.sahapedia.org/sites/default/files/styles/sp_page_banner_800x800/public/IMG-20180425-WA0122.jpg?itok=g2X3KW0J"
        name="Amateur margamkali tournament"
        venue= "Lulu Mall"
        date= "March 27,2022"
        prize="25K"
      />
      <Showcomp
        image="https://media.istockphoto.com/photos/tiger-dance-of-kerala-picture-id849235044?k=20&m=849235044&s=612x612&w=0&h=C3t3EIIA2O66HQERebF0XpCUdj7ZYJuzTftyIZ6_U0I="
        name="National level pulikali championship"
        venue= "Decathlon Convention center"
        date= "April 7, 2020"
        prize="10K"
      />
      <Showcomp
        image="https://i.pinimg.com/originals/5a/f6/43/5af6436f5efa34c49376a8f9b91e7ac1.jpg"
        name="Oppana intercollege Competition"
        venue= "Camlot"
        date= "May 21, 2020"
        prize="5K"
      />
      </div>
        </div>
    );
}

export default Competitions;