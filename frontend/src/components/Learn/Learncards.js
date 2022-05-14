import './Learncards.css';
import Tcard from './Tcard';

import TextField from "@mui/material/TextField";

function Learn() {
  //const [loc,setLoc] = useState(["Thiruvananthapuram","Kollam","Pathanamthitta","Kottayam","Alappuzha","Ernakulam","Thrissur","Palakkad","Kozhikode","Kannur","Kasargod"]);
  // const defaultOption;
  return (
      <div className="Learn">
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search the ArtForm....."
          />
        </div>
        <label className="location">Location:  </label>

          <select className='loc'>
            <option value="nil">NIL</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Thrissur">Thrissur</option>
          </select> 
        <div className='teacher'>
          <div className='card-body'>
            <Tcard 
              art_form="Theyyam"
              name="Padmini Jose"
              image='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Tcard 
              art_form="Ottam Thullal"
              name="Sreya Iyyer"
              image='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Tcard 
              art_form="Puli Kali"
              name="Geetha Roy"
              image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Tcard 
              art_form="Chavittunadakam"
              name="Kathrina Thomas"
              image='https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Tcard 
              art_form="Kathakali"
              name="Sangeeth Kumar"
              image='https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Tcard 
              art_form="Mohiniyaatam"
              name="Vishal Krishna"
              image='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
        </div>
    </div>
  )  
}
export default Learn;