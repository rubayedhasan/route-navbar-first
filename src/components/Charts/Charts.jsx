import { useEffect, useState } from "react";
import Chart from "../Chart/Chart";
import Phones from "../Phones/Phones";
import axios from "axios";

const Charts = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch( )
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    // axios
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((obj) => {
        const fetchedPhones = obj.data.data;

        const fakePhones = fetchedPhones.map((phone) => {
          const obj = {
            name: phone?.phone_name,
            price: phone?.slug.split("-")[1],
          };

          return obj;
        });

        setPhones(fakePhones);
      });
  }, []);

  console.log(phones);

  return (
    <div className="mt-10 flex flex-col items-center">
      <h3>Recharts</h3>

      <Chart></Chart>
      <Phones></Phones>
    </div>
  );
};

export default Charts;
