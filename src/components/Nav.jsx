import styled from "styled-components";

const Nav = () =>{
const handlerShowHamMenue=()=>{
    const element = document.getElementById("nav_hamburger");
    element.classList.toggle("menu-show");
    const menuImg = document.querySelector(".nav_hambtn");
    if (
      menuImg.innerHTML ===
      '<img class="nav_hammenuimg" src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-512.png" alt="logo img">'
    ) {
      menuImg.innerHTML =
        '<img class="nav_hammenuimg" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="logo img"></img>';
    } else {
      menuImg.innerHTML =
        '<img class="nav_hammenuimg" src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-512.png" alt="logo img"></img>';
    }
} 

    return(
    <StyledNav>
        <nav>
        <a className="nav_logo" href="/">
          <img
            className="nav_logoimg"
            src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Youtube-512.png"
            alt="logo img"
          />
        </a>
        <div id="nav_hamburger">
          <ul className="nav_items">
            <li className="nav_item"><a href="/">Item1</a></li>
            <li className="nav_item"><a href="/">Item2</a></li>
            <li className="nav_item"><a href="/">Item3</a></li>
            <li className="nav_item"><a href="/">Item4</a></li>
          </ul>
          <button className="nav_hambtn" onClick={handlerShowHamMenue}>
            <img
              className="nav_hammenuimg"
              src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
              alt="ham menu img"
            />
          </button>
        </div>
        </nav>
      </StyledNav>
    );
}
export default Nav;

const StyledNav = styled.nav`
nav {
    background-color:#696565;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.466);
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 3;
    .nav_logo {
      width: 3rem;
      display: block;
      .nav_logoimg {
        max-width: 100%;
        height: auto;
      }
    }
    .nav_hambtn {
      display: block;
      border: none;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0);
      .nav_hammenuimg {
        width: 50px;
        height: auto;
      }
    }
  }
  .nav_items {
    /*隱藏選單開始*/
    height: 100vh;
    max-height: 100vh;
    width: 50%;
    overflow: hidden;
    /*隱藏選單結束*/
    /*絕對定位疊在網頁上*/
    position: absolute;
    z-index: 100;
    top: 60px;
    right: -100%;
    background:#696565;
    align-items: center;
    transition: 0.5s;
    li {
      margin: 10px 10px;
      text-align: center;
      a {
        font-size: 25px;
        transition: all 0.3s;
        color: #e0dada;
        &:hover {
          color: #ce8f8f;
        }
      }
    }
  }
  /*jQ點擊後動態在 body 加上 class */
  .menu-show .nav_items {
    right: 0;
    transition: 0.5s;
  }

  @media (min-width: 801px) {
    nav {
      .nav_hambtn {
        display: none;
        .nav_hammenuimg {
          display: none;
        }
      }
    }
    .nav_items {
      transition: unset !important;
      display: flex;
      align-items: center;
      height: auto;
      width: auto;
      position: static;
      li {
        margin: 0px 10px;
      }
    }
  }
`