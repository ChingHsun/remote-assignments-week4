import styled from "styled-components";
import Nav from "./components/Nav";
import ContentBox from "./components/ContentBox";
import { useEffect, useState } from "react";
function App() {
  const [Product, setProduct] = useState([]);
  useEffect(()=>{
    
    // assignment1
    function delayedResult(n1, n2, delayTime, callback) {
      setTimeout(() => {
        callback(n1 + n2 + ` (${n1} + ${n2})`);
      }, delayTime);
    }
    delayedResult(4, 5, 3000, function (result) {
      console.log(result);
    }); // 9 (4+5) will be shown in the console after 3 seconds
    delayedResult(-5, 10, 2000, function (result) {
      window.alert(result);
    }); // 5 (-5+10) will be shown in an alert dialog after 2 seconds
  
     
    // assignment2
    const xhr = new XMLHttpRequest();
    function ajax(src, callback) {
    // your code here
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    };
    xhr.open("GET", src);
    xhr.send();
    }
    function render(data) {
    console.log(JSON.parse(data));
    setProduct(JSON.parse(data));
    }
    ajax(
    "https://cwpeng.github.io/live-records-samples/data/products.json",
    function (response) {
      render(response);
    }
    ); 
  }, [])

const handlerChangeTitle =() =>{
  const title = document.querySelector(".header_title");
  title.innerHTML = "Have a Good Time!";
  console.log("tilte", title);
}
const handlerShowContent =() =>{
  const hiddenContent = document.getElementById("hidden_content_container");
  hiddenContent.classList.toggle("hidden");
}

  return (
    <div className="App">
     <Nav></Nav>
    <StyledHeader>
      <div className="header_img">
        <h1 className="header_title" onClick={handlerChangeTitle}>Welcome Message</h1>
      </div>
    </StyledHeader>
    <StyledMain>
      <section>
        <div className="container">
          <h3>Section Title</h3>
          <div className="content">
            {Product.map((product, index) => {
              return   <ContentBox key={index} product={product}></ContentBox>
            })}
         

          </div>
          <button className="act_btn" onClick={handlerShowContent}>Call to Action</button>
        </div>
      </section>
        <div className="container hidden" id ="hidden_content_container">
          <div className="content " >
            <ContentBox></ContentBox>
            <ContentBox></ContentBox>
            <ContentBox></ContentBox>
            <ContentBox></ContentBox>
          </div>
          </div>
    </StyledMain>
    </div>
  );
}

export default App;
const StyledHeader = styled.header`
.header_img {
  height: 260px;
  padding-top: 80px;
  background: no-repeat center #ce8f8f;
  h1 {
    text-align: center;
    line-height: 180px;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }
}
`


const StyledMain = styled.main`



section {
  padding: 50px 0 0px;
}
h3 {
  color: #696565;
  line-height: 50px;
  font-size: 25px;
  font-weight: bold;
}
.container {
  padding: 0 2rem;
  margin: 0 auto;
  vertical-align: middle;
  text-align: center;
  .content_box {
    height: 150px;
    background: no-repeat center #696565;
    padding: 10px;
    margin: 30px 0;
    font-size: 16px;
    text-align: center;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.1);
    p{
      color: #e0dada;
    }
  }
}
.row {
  margin: 0 auto;
}
.act_btn {
  background-color: #8d5050;
  border-radius: 30px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}

.hidden {
  display: none;
}

@media (min-width: 500px) {
  .container {
    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 30px 0;
      .content_box {
        flex-basis: 48%;
      }
    }
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    padding: 0;
  }
}

`
