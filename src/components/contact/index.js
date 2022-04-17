import style from './style.css'; 

const Contact = () => (
  <div class={style.contactcontainer} id='contact'>
  <span>Contact</span>
  <div class={style.contactform}>
    <div class={style.usermessage}>
      <textarea type="text" id="message" name="message" cols="50" rows="10"/>
    </div>
    <div class={style.userinfo}>
      <form>
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname"/><br/>
        <label for="email">Email:</label><br/>
        <input type="text" id="email" name="email"/><br/>
      </form>
      <button>Submit</button>
    </div>

  </div>
  
</div>
)

export default Contact;