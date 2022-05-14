import ShowCards from './ShowCards';
import "./Arts.css";

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
                    image="https://imgs.search.brave.com/4PFWMsiuaVGjul6v4HtP1Cf2fFUGsg8q0_jo3LD6Pfs/rs:fit:200:200:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FlL0t1Y2hpcHVk/aV9QZXJmb3JtZXJf/RFMuanBn"
                    name="Kuchippudi"
                    url='/kuchipodi'
                />

                <ShowCards 
                    image="https://imgs.search.brave.com/99aovBxzBJjoyZCjbXFAILYoaYUdDsGggDUqPMGMwvA/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/a2lfX3BWcVpJTmtV/WEE5OGVta1lnSGFG/aiZwaWQ9QXBp"
                    name="Oppana"
                    url="/"
                />

                <ShowCards 
                    image="https://imgs.search.brave.com/-GtHCELl-6hetY-fa-5n1VOFJnLPhLFJI0JcXXlMoHs/rs:fit:920:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/eWJMcUhTQVRaVlRk/Nk40dVFMOTdBSGFE/MCZwaWQ9QXBp"
                    name="Cheraw"
                    url="/"
                />

            </div>
        </div>
     );
}
 
export default PopularShows;