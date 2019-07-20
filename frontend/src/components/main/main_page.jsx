import React from "react";
import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <div id="chirper-landing">
          <div className="left-landing">
            <div className='left-landing-box'>
              <span>Follow your interests.</span>
              <span>Hear what people are talking about.</span>
              <span>Join the conversation.</span>
            </div>
          </div>
          <div className="right-landing">right</div>
        </div>
        <p>A Twitter Clone</p>
        <footer>Copyright &copy; 2019 Chirper</footer>
      </>
    );
  }
}

export default MainPage;
