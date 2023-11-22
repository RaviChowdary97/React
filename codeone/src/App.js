import logo from "./logo.svg";
import "./App.css";
import { AddColor } from "./AddColor";
import { useState } from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Badge, IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const INITIAL_PRODUCT_LIST = [
  {
    name: " iPhone 15 (128 GB)",
    poster: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    price: "₹77,900 ",
    rating: 4,
    summary:
      "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.",
  },

  {
    name: "iPhone 15 Pro (128 GB) ",
    poster: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    price: "₹1,34,900 ",
    rating: 5.0,
    summary:
      " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    trailer: "https://www.youtube.com/embed/xqyUdNxWazA",
  },

  {
    name: "Samsung Galaxy S23 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    price: "₹65,320",
    rating: 4.4,
    summary:
      "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever.",
  },

  {
    name: "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    price: "₹1,00,000",
    rating: 5.0,
    summary:
      "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice.",
  },

  {
    name: "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    poster: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    price: "₹20,999 ",
    rating: 4.8,
    summary:
      "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you.",
  },

  {
    name: " Apple Watch Series 9 [GPS + Cellular 41mm] ",
    poster: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    price: "₹75,900 ",
    rating: 4.9,
    summary:
      "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
  },

  {
    name: " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    poster: "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
    price: "₹22,999",
    rating: 4.5,
    summary:
      "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress.",
  },

  {
    name: "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
    poster: "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
    price: "₹27,141",
    rating: 4.3,
    summary:
      "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you",
  },

  {
    name: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    poster: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    price: "₹84,990",
    rating: 5.0,
    summary:
      "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.",
  },

  {
    name: "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
    poster: "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
    price: "₹1,10,790",
    rating: 4.9,
    summary:
      " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD",
  },
];

function App() {
  //lifting the state up or lifted from child to parent
  const [productList, setProductList] = useState(INITIAL_PRODUCT_LIST);
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* Link changes page without refresh */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productList">ProductList</Link>
          </li>
          <li>
            <Link to="/color-game">AddColor</Link>
          </li>
          <li>
            <Link to="/profile">UserList</Link>
          </li>
          <li>
            <Link to="/somewhere">Somewhere</Link>
          </li>
          {/* <li>
            <Link to="/example">Example</Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productList"
          element={
            <ProductList
              productList={productList}
              setProductList={setProductList}
            />
          }
        />
        <Route
          path="/productList/:productid"
          element={
            <ProductDetails
              productList={productList}
              setProductList={setProductList}
            />
          }
        />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/profile" element={<UserList />} />

        <Route path="/item" element={<Navigate replace to="/productList" />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        {/* <Route path="/example" element={<Example />} /> */}
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58q0MWIfeUd9Zo0lKMi7ErLLvCD1mQStirw&usqp=CAU"
        alt="Page Not Found"
      />
    </div>
  );
}

function ProductDetails({ productList }) {
  const { productid } = useParams(); //getting parameters from url
  console.log(productid);
  const product = productList[productid];

  console.log(product.name);
  const navigate = useNavigate();

  return (
    <div className="product-detail-container">
      <iframe
        width="100%"
        height="450"
        src={product.trailer}
        title="Introducing iPhone 15 Pro | Apple"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="product-spec">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-rating">⭐{product.rating}</p>
      </div>
      <h5 className="product-pricing">Price: ₹ {product.price}</h5>
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        startIcon={<ArrowCircleLeftIcon />}
      >
        BACK
      </Button>

      {/* <h1>Product Detail Page - {product.name}</h1> */}
    </div>
  );
}

function UserList() {
  const profile = [
    {
      pic: "https://tse1.mm.bing.net/th?id=OIP.TRnoXLjxnhqpxPIb7TIHCgHaEo&pid=Api&P=0&h=180",
      name: "Ravi",
    },
    {
      pic: "https://tse3.mm.bing.net/th?id=OIP.DXTzA53g5h_MlYhHIt7IEwHaFj&pid=Api&P=0&h=180",
      name: "Mike",
    },
    {
      name: "Hella",
      pic: "https://tse1.mm.bing.net/th?id=OIP.FaKu0c_POMvHSqkQcVqxbwHaDg&pid=Api&P=0&h=180",
    },
  ];
  return (
    <div>
      {profile.map((profile) => (
        <Msg name={profile.name} picture={profile.pic} />
      ))}
    </div>
  );
}

function Msg({ name, picture }) {
  return (
    <div>
      <>
        <img className="profile-pic" src={picture} alt={name} />
        <h1>{name}</h1>
        <Counter />
      </>
    </div>
  );
}

function Home() {
  return <div>Welcome to Product App😊😊😊</div>;
}

function ProductList({ productList, setProductList }) {
  //const productList = INITIAL_PRODUCT_LIST;

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div>
      <div className="add-product-form">
        <TextField
          label="Name"
          variant="standard"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          label="Poster"
          variant="standard"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
        />

        <TextField
          label="Rating"
          variant="standard"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />

        <TextField
          label="Price"
          variant="standard"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <TextField
          label="Summary"
          variant="standard"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />

        {/* copy the productList and add newProduct to it */}

        <Button
          variant="contained"
          onClick={() => {
            const newProduct = {
              name: name,
              poster: poster,
              price: price,
              rating: rating,
              summary: summary,
            };
            setProductList([...productList, newProduct]);
            console.log("newProduct =>", newProduct);
          }}
        >
          Add Product
        </Button>
      </div>
      <div className="App">
        {productList.map((pd, index) => (
          <Product key={index} product={pd} id={index} />
        ))}
      </div>
    </div>
  );
}

function Product({ product, id }) {
  const [show, setShow] = useState(true);
  const Styles = {
    color: product.rating >= 4.5 ? "red" : "green",
  };
  //block => true => visible
  //none => false => hidden
  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate(); // React Hook "useNavigate" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function
  return (
    <div className="product-container">
      <img className="product-poster" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h2 className="product-name">
          {product.name} - {id}
        </h2>
        <p style={Styles} className="product-rating">
          ⭐{product.rating}
        </p>
      </div>
      <h5 className="product-pricing">Price: ₹ {product.price}</h5>
      {/* <button onClick={() => setShow(!show)}>Toggle Descripion</button> */}

      <IconButton
        aria-label="likeButton"
        color="primary"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      <IconButton
        aria-label="likeButton"
        color="primary"
        onClick={() => navigate("/productList/" + id)}
      >
        <InfoIcon />
      </IconButton>

      {/* <button onClick={() => navigate("/productList/" + id)}>Info</button> */}

      <p style={summaryStyle} className="product-summary">
        {product.summary}
      </p>
      <Counter />
    </div>
  );
}

function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);

  return (
    <div>
      <IconButton
        aria-label="likeButton"
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        aria-label="delete"
        onClick={() => {
          setdisLike(dislike + 1);
          console.log(dislike);
        }}
        color="primary"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setdisLike(dislike + 1);
          console.log(dislike);
        }}
      >
        👎 {dislike}
      </button> */}
    </div>
  );
}

// function Example() {
//   // const username = ["Deepak", "Richard", "Ravi"];
//   const [username, setUsername] = useState(["Deepak", "Richard", "Ravi"]);

//   const [name, setName] = useState("");
//   const movieName = "Iron-Man";
//   const rating = 5;

//   const handleClick = (event) => {
//     //  setUsername([...username, name]);
//     setName(event.target.value);
//   };
//   return (
//     <div>
//       <h1> Hi {name}</h1>
//       <input type="text" />
//       <button onClick={handleClick}>Change Name</button>

//       {/* {username.map((names) => (
//         <Example1 name={names} />
//       ))} */}
//       {/* <h1>Movie Name : {movieName}</h1>
//       <p>Rating fornthe Movie :{rating}</p> */}
//     </div>
//   );
// }

// function Example1({ name }) {
//   return (
//     <div>
//       <h1> Hi {name}</h1>
//     </div>
//   );
// }

export default App;
