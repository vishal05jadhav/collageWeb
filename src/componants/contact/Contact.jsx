import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9870c311-86e5-48a1-b756-c30b911d4e4e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send a massage <img src={msg_icon} alt="" /></h3>
            <p>Feel free reach out through contact form or find our contact information below.Your feedback, question , and suggetion are important to us we strive to provide exception service to our university community</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@jadhav.dev</li>
                <li> <img src={phone_icon} alt="" />+1 123-456-789</li>
                <li> <img src={location_icon} alt="" />77 massachusets ave , Combridge <br /> MA 021345, United Status</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" id="" placeholder='Enter your mobile number' required/>
                <label >Write your massage here</label>
                <textarea name="massage"  rows="6" placeholder='Enter your massage'required ></textarea>
                <button type='submit' className='btn dark-btn'  >Submit <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div> 
    </div>
  )
}

export default Contact