import '../App.css';


export default function Header(){
    return(
    <div>
     
      <header className='header-Box'>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        

        </div>

        <ul className='header-Option'>
          <li href="#" > MENU </li>
          <li href="#" >LOCATION</li>
          <li href="#" >ABOUT</li>
          <li href="#" >CONTACT</li>
        </ul>

        <button className="Login">Login</button>
      </header>
    </div>

    )
}