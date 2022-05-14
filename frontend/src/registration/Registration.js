
   import './Registration.css'
   


   function Registration() {
      return (
          <div className="form-container">
            
            <div className='rules'>
              <label className="lbl1"><u>Rules and Regulations </u></label>
              <p className='desc'>1. It is not a team competition.<br/>
                  &nbsp;2. Each match is of maximum 30 minutes.<br/>
                  &nbsp;&nbsp;3. All must report before 10 am.<br/>
                  &nbsp;&nbsp;&nbsp;4. There will be 3 rounds: prelims, semi and final.<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;5. Certificates will be provided to the winners with cash awards.
              </p>
            </div>
            <div className="wrapper">
            <form>
              <div className="apply-det">
                <span className="heading" style={{color: 'black'}}>APPLY</span><br/><br/>
                <label className="lbl" style={{"margin-top":"20px"}}>Name :</label><br />
                <input type="text" placeholder="Name" className="txt" /><br /><br />
                <label className="lbl">Phone Number :</label><br />
                <input type="number" placeholder="phn no" className="txt" /><br /><br />
                <label className="lbl">Email :</label><br />
                <input type="email" placeholder="email" className="txt" /><br /><br />
                <label className="lbl">Place :</label><br />
                <input type="text" placeholder="Place" className="txt" /><br /><br />
                <label className="lbl">Gender :</label><br />
                <input type="radio" defaultValue="male" name="Gender" id="male" />
                <label className='gen'>Male</label><br />
                <input type="radio" defaultValue="female" name="Gender" id="female" />
                <label className='gen'>Female</label><br /><input type="radio" defaultValue="others" name="Gender" id="others" />
                <label className='gen'>Others</label><br /><br />
                <label className="lbl">Address :</label><br />
                <input type="text" id="adr" placeholder="Type your Address here" className="txt" size={50} /><br /><br />
                <button className='submitbtn'>Submit</button>
              </div>
            </form>
            </div>

          </div>
      );
    }
  export default Registration;