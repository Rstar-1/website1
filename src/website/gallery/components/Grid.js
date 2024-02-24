import React from "react";

const Grid = () => {
const gridcard = [
  {
    id: 1,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/8/334829028/ER/ME/RT/21925577/430-stainless-steel-sheet-250x250.jpg",
  },
  {
    id: 2,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/8/334830010/DU/PH/EN/21925577/441-stainless-steel-plate-250x250.jpg",
  },
  {
    id: 3,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329443384/ST/FZ/EZ/21925577/439-stainless-steel-coil-250x250.jpg",
  },
  {
    id: 4,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329454665/KG/SV/VL/21925577/409-stainless-steel-flat-bar-250x250.jpg",
  },
  {
    id: 5,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329414612/FA/TX/JC/21925577/441-stainless-steel-sheet-250x250.jpg",
  },
  {
    id: 6,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/8/334827239/ZD/YO/MK/21925577/409-stainless-steel-sheet-250x250.jpg",
  },
  {
    id: 7,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329446682/TS/CA/SB/21925577/304-stainless-steel-pipe-250x250.jpg",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329444466/LJ/XJ/UD/21925577/409-stainless-steel-coil-250x250.jpg",
  },
  {
    id: 9,
    img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329451501/KI/FW/NR/21925577/304-stainless-steel-circle-250x250.jpg",
  },
];
  return (
    <div className="bgwhite ptpx60 pbpx60 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="grid-cols-3 sm-grid-cols-1 w-full gap-12">
          {gridcard.map((e) => (
            <div>
              <img src={e.img} alt="Grid" className="grid-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
