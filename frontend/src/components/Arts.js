import ShowCards from './ShowCards';
import "./Arts.css";
import Showcomp from "./Showcomp.js";

const PopularShows = () => {
    return ( 
        <div className='pop-body'>
            <div className="pop-head">
                <h1 className="head">ARTS</h1>
            </div>

            <div className="PopularShows">
                <ShowCards 
                    image="https://st4.depositphotos.com/15460442/38654/i/450/depositphotos_386549970-stock-photo-bengaluru-india-april-6th-sattriya.jpg"
                    name="Mohiniyattom"
                    url="/mohiniyattom"
                />

                <ShowCards 
                    image="https://st4.depositphotos.com/15460442/38657/i/450/depositphotos_386576428-stock-photo-bengaluru-india-april-6th-kathakali.jpg"
                    name="Kathakali"
                    url="/kathakali"
                />

                <ShowCards 
                    image="https://imgs.search.brave.com/clChXp4KCRi9XN2vF4tViEK1onr2AMIfVUTCNphNEII/rs:fit:1024:746:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/Ly1Zc2FJa3JHNEVp/Yy9ULUhXbTQ0MHpK/SS9BQUFBQUFBQUE4/RS9ySmtHOXlhUk5k/MC9zMTYwMC9hbmFs/dWl6YS10b3JyZXMt/YS1xdWVlbi1vZi1r/dWNoaXB1ZGktZGFu/Y2UtaHVtYmxlNC0x/MDI0eDc0Ni5qcGc"
                    name="Kuchippudi"
                    url='/kuchipodi'
                />

                <ShowCards 
                    image="https://imgs.search.brave.com/99aovBxzBJjoyZCjbXFAILYoaYUdDsGggDUqPMGMwvA/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/a2lfX3BWcVpJTmtV/WEE5OGVta1lnSGFG/aiZwaWQ9QXBp"
                    name="Oppana"
                    url="/"
                />

                <ShowCards 
                    image="https://imgs.search.brave.com/2ynCUWtD35yuk4GfDcmcF8VTuYRZvPD2ERw9pHFXUYQ/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/ZFZnSjAtNVNJYU13/R0xueVlMYmh3SGFF/OCZwaWQ9QXBp"
                    name="Cheraw"
                    url="/"
                />

            </div>
            <div className='todcomp'>
                <h1 className='headtod'>LATEST UPCOMING COMPETITIONS</h1>
                <div className='todcompe'>
                    <Showcomp
                        image="https://i.pinimg.com/originals/5a/f6/43/5af6436f5efa34c49376a8f9b91e7ac1.jpg"
                        name="Oppana intercollege Competition"
                        venue="Camlot"
                        date="May 21, 2022"
                        prize="5K"
                    />
                    <Showcomp
                        image="https://imgs.search.brave.com/W4_MTe0iLJLYEg0U21JBnv4JCIHI0jYCy3go3WcZW80/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/UVdLSFc4SWF5VTdJ/dE5LQW5zUjR3SGFF/SyZwaWQ9QXBp"
                        name="All Kerala Margankalli Competition"
                        venue="Thiruvananthapuram"
                        date="May 25, 2022"
                        prize="10K"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default PopularShows;