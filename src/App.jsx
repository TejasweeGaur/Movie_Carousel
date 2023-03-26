/** @format */
import { useEffect, useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles",
        params: {
          list: "most_pop_movies",
          limit: "10",
          endYear: "2023",
          info: "base_info",
          startYear: "2020",
        },
        headers: {
          "X-RapidAPI-Key":
            "f7301d9800msh5c1122d7610a1e1p1088bdjsne3b1ffa60eca",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      const request = await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setMovies(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
      return request;
    }
    fetchData();
  }, []);
  //   return (
  //     <div className='App' style={{ display: "flex" }}>
  //       {Object.assign(movies).map((movie) => {
  //         return (
  //           <div key={movie.id}>
  //             <div>{movie.titleText.text}</div>
  //             <img
  //               src={movie.primaryImage.url}
  //               alt={movie.primaryImage.caption.plainText}
  //               width='200 px'
  //               height='200 px'
  //               style={{ borderRadius: "10px" }}
  //             />
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }
  return (
    <div className='App'>
      <nav>
        <div id='nav link-section' className='nav-section'>
          <a href='#'>
            <BiCameraMovie
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          </a>
        </div>
        <div id='nav logo-section' className='nav-section'>
          <a href='#'>ABOUT</a>
          <a href='#'>WORK</a>
        </div>
        <div id='nav social-section' className='nav-section'>
          <a href='#'>
            <GrLinkedin
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          </a>
          <a href='#'>
            <BsGithub
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          </a>
          <a href='#'>
            <ImCodepen
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          </a>
        </div>
        <div id='nav contact-section' className='nav-section'>
          <a href='#'>
            <BsFillSendFill
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
