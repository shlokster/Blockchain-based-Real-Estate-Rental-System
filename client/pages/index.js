import styles from "../styles/Home.module.css";
import ImageSlider from "./components/slider/ImageSlider";
import ImageData from "./components/slider/ImageData";
import Product from "./components/feature/Product";
import Phu from "./components/footer/Phu";
import End from "./components/footer/End";
import Slider from "./components/slider/Slider";
import SubProduct from "./components/feature/SubProduct";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const [pdList, setPdList] = useState([]);
  const [viewList, setViewList] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      fetchRsList();
      fetchViewList();
      fetchBookedList();
    }
  }, [router.isReady]);
  async function fetchRsList() {
    let promise = Axios({
      url: "http://localhost:5000/api/realEstate/",
      method: "GET",
    });
    promise
      .then((rs) => {
        setPdList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchViewList() {
    let promise = Axios({
      url: "http://localhost:5000/api/user/topview",
      method: "GET",
    });
    promise
      .then((rs) => {
        setViewList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchBookedList() {
    let promise = Axios({
      url: "http://localhost:5000/api/user/topbooking",
      method: "GET",
    });
    promise
      .then((rs) => {
        setBookList(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const bgImgBanner =
    "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80";

  return (
    <div className={styles.container}>
      <div>{/* <Header /> */}</div>
      <div className="mt-4">
        <ImageSlider sliders={ImageData} />
      </div>
      <div className="pt-16">
        <Phu />
      </div>
      {/* <div
        className="mt-6 bg-opacity-30 "
        style={{ backgroundImage: `url(${bgImgBanner})` }}
      >
        <h1 className="text-center italic font-serif mb-3 text-4xl text-slate-100 pt-6 font-semibold">
          Top Viewed Real Estate
        </h1>
        <div className="flex items-center justify-center px-6">
          {viewList.map((each, index) => {
            return (
              <div className="p-9 text-white">
                <Product
                  key={each.RealEstateId}
                  id={each.RealEstateId}
                  image={each.imgURL}
                  title={each.Title}
                  area={each.Area}
                  room={each.MaxRoom}
                  toilet={each.Toilet}
                  direction={each.Direct}
                  price={each.Price}
                  view={each.countViewed}
                />
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="pt-10 bg-gray-100">
        <Slider list={pdList} />
      </div>
      {/* <div className="mt-6 ">
        <h1 className="text-center italic font-serif mb-3 text-4xl text-sky-800 pt-6 font-semibold">
          Most Booked Apartment
        </h1>
        <div className="flex items-center justify-center px-6">
          {bookList.map((each, index) => {
            return (
              <div className="p-9 text-black">
                <SubProduct
                  key={each.RealEstateId}
                  id={each.RealEstateId}
                  image={each.imgURL}
                  title={each.Title}
                  area={each.Area}
                  room={each.MaxRoom}
                  toilet={each.Toilet}
                  direction={each.Direct}
                  price={each.Price}
                  book={each.countBooked}
                />
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="pb-16 bg-slate-50 w-full">
        <End />
      </div>
    </div>
  );
}
