import "./style.css"

function App() {
  return (
    <div>
      {/*below is an example of inline styling, the most specific  */}
      <h1 id="title" stlye= "color: steelblue;">My Website</h1>

      <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p>

      <h2 className="subtitle" >About Me</h2>

      <img src="../img/img-1.jpg" id="about-us-image" alt=' '/>

      <p className="para-text">Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      <span className="italics">Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. 

      Cillum dolore eu fugiat nulla , pariatur:

        <ul>
          <li className="list-item">Excepteur sint occaecat</li>
          <ol>
            <li className="list-item">My numbered list item</li>
          </ol>
        </ul>
      </p>

      <h2 className="subtitle" id="services">Services</h2>

      <a href="http://www.google.com" className="link">Click here to go to Google</a>

      <table border="1" className="site-table">
        <thead>
          <tr>
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Dolor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sit</td>
            <td>Amet</td>
            <td>Consectetur</td>
          </tr>
          <tr>
            <td>Adipisicing</td>
            <td>Elit</td>
            <td>Sed</td>
          </tr>
          
        </tbody>
      </table>


      <div id="service-image"></div>


      <div className="container">

      < div className="container-item" style={{order: 4, flex: '1 1 100px', alignSelf: 'center' }}>A</div>

        <div className="container-item" style={{order: 3, flex: '1 3 100px', alignSelf: 'flex-end'}}>B</div>
        <div className="container-item" style={{order: 5, flex: '5 1 100px', alignSelf: 'flex-start'}}>C</div>
        <div className="container-item" style={{order: 1, flex: '1 0 100px', alignSelf: 'flex-start'}}>D</div>
        <div className="container-item" style={{order: 2, flex: '1 1 100px', alignSelf: 'center'}}>E</div>
      </div>

      <div className="grid-container">
        <div className="grid-item" style={{ background: 'rgb(255, 150, 150)', gridArea: '2 / 1 / span 2 / span 3'}}>1</div>	
        <div className="grid-item" style={{ background: 'rgb(170, 255, 140)' }}>2</div>
        <div className="grid-item" style={{ background: 'rgb(222, 132, 255)'}}>3</div>
        <div className="grid-item" style={{ background: 'rgb(255, 207, 119)'}}>4</div>
        <div className="grid-item" style={{ background: 'rgb(140, 210, 255)'}}>5</div>
        <div className="grid-item" style={{ background: 'rgb(255, 203, 99)'}}>6</div>	
      </div>

      <h2 id="contact-us" className="subtitle">Contact Us</h2>

      <form>

        <input type="text" placeholder="Full Name" className="form-input"/>
        <input type="email" placeholder="Email" className="form-input"/>
        <textarea></textarea>
        <button className="submit-button">Submit</button>	
      </form>
    </div>
  );
}

export default App;
