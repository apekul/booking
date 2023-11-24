// Car rental logos
import Panek from "./img/carRental/panekLogo.jpg";
import Hertz from "./img/carRental/hertzLogo.png";
import Carwiz from "./img/carRental/carwizLogo.jpg";
import Direct from "./img/carRental/directLogo.jpg";
import Express from "./img/carRental/expressLogo.png";
import FlexToGo from "./img/carRental/flexToGoLogo.png";

// Hotel Img
// Hotel1
import Hotel1Img from "./img/hotels/Hotel1/img.jpg";
import Hotel1Img1 from "./img/hotels/Hotel1/img1.jpg";
import Hotel1Img2 from "./img/hotels/Hotel1/img2.jpg";
import Hotel1Img3 from "./img/hotels/Hotel1/img3.jpg";
// Hotel2
import Hotel2Img from "./img/hotels/Hotel2/img.jpg";
import Hotel2Img1 from "./img/hotels/Hotel2/img1.jpg";
import Hotel2Img2 from "./img/hotels/Hotel2/img2.jpg";
import Hotel2Img3 from "./img/hotels/Hotel2/img3.jpg";
// Hotel3
import Hotel3Img from "./img/hotels/Hotel3/img.jpg";
import Hotel3Img1 from "./img/hotels/Hotel3/img1.jpg";
import Hotel3Img2 from "./img/hotels/Hotel3/img2.jpg";
import Hotel3Img3 from "./img/hotels/Hotel3/img3.jpg";
// Hotel4
import Hotel4Img from "./img/hotels/Hotel4/img.jpg";
import Hotel4Img1 from "./img/hotels/Hotel4/img1.jpg";
import Hotel4Img2 from "./img/hotels/Hotel4/img2.jpg";
import Hotel4Img3 from "./img/hotels/Hotel4/img3.jpg";
// Hotel5
import Hotel5Img from "./img/hotels/Hotel5/img.jpg";
import Hotel5Img1 from "./img/hotels/Hotel5/img1.jpg";
import Hotel5Img2 from "./img/hotels/Hotel5/img2.jpg";
import Hotel5Img3 from "./img/hotels/Hotel5/img3.jpg";
// Hotel6
import Hotel6Img from "./img/hotels/Hotel6/img.jpg";
import Hotel6Img1 from "./img/hotels/Hotel6/img1.jpg";
import Hotel6Img2 from "./img/hotels/Hotel6/img2.jpg";
import Hotel6Img3 from "./img/hotels/Hotel6/img3.jpg";

// hotel icons
import { FaHouseChimney } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { MdBathroom } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaShower } from "react-icons/fa6";
import { GiCookingPot } from "react-icons/gi";
import { MdOutlineSmokeFree } from "react-icons/md";
import { LuAirVent } from "react-icons/lu";
import { PiTelevisionBold } from "react-icons/pi";

// trending destination img
import Warszawa from "../Assets/img/destination/warszawa.jpg";
import Krakow from "../Assets/img/destination/krakow.jpg";
import Sopot from "../Assets/img/destination/sopot.jpg";
import Wroclaw from "../Assets/img/destination/wroclaw.jpg";
import Zakopane from "../Assets/img/destination/zakopane.jpg";

// popular flights img
import milan from "../Assets/img/trendingFlights/milan.jpg";
import paris from "../Assets/img/trendingFlights/paris.jpg";
import rome from "../Assets/img/trendingFlights/rome.jpg";
import valletta from "../Assets/img/trendingFlights/valletta.jpg";

export const fakeHotels = [
  {
    id: 1,
    name: "HARBOR APARTMENTS",
    location: "Old Town, Kraków",
    rate: "8.1",
    reviews: 2000,
    price: 200,
    stars: 3,
    images: [Hotel1Img, Hotel1Img1, Hotel1Img2, Hotel1Img3],
    type: "Hotel",
    roomType: "Twin Room",
    roomShortInfo: "2 single beds",
    roomInfo:
      "Kościuszki BENJAMIN'S Apartments is situated in Katowice, 600 metres from Katowice Railway Station, 1.8 km from Spodek, as well as 3 km from Silesia City Center shopping mall. The property is located 1.4 km from University of Silesia, 6.4 km from FairExpo Convention Center and 7.1 km from Stadion Śląski. Free WiFi is available throughout the property and Medical University of Silesia is 700 metres away. At the apartment complex, every unit comes with a wardrobe, a flat-screen TV, a private bathroom, bed linen and towels. There is also a fully equipped kitchen in some of the units equipped with an oven. All units will provide guests with a fridge. Ruch Chorzów Stadium is 7.8 km from the apartment, while Górnik Zabrze is 22 km from the property. The nearest airport is Katowice Airport, 36 km from Kościuszki BENJAMIN'S Apartments. Couples particularly like the location — they rated it 9.2 for a two-person trip.",
    breakfastIncluded: true,
  },
  {
    id: 2,
    name: "SAVOY Mariacka Apartments",
    location: "Katowice, Poland",
    rate: "7.1",
    reviews: 1500,
    price: 150,
    stars: 2,
    images: [Hotel2Img, Hotel2Img1, Hotel2Img2, Hotel2Img3],
    type: "Hotel",
    roomType: "Twin Room",
    roomShortInfo: "2 single beds",
    roomInfo:
      "Senator is an intimate property, located in the city centre, offering en suite rooms, equipped with a TV and Wi-Fi.  The popular Spodek Arena is 1.4 km away. Each room at Senator includes private bathroom facilities and cable channels. There is also a balcony and a work desk. The Senator restaurant offers a selection of Polish, Silesian and international cuisine. The restaurant and coffee-bar are decorated in a classic style, creating a relaxed atmosphere. The Main Train Station is 1.8 km away. The dynamic, trendy Mariacka Street is a 10-minute walk away. Couples particularly like the location — they rated it 8.7 for a two-person trip.",
    breakfastIncluded: false,
  },
  {
    id: 3,
    name: "APARTAMENTY ATRIUM",
    location: "Warszawa, Poland",
    rate: "5.1",
    reviews: 700,
    price: 100,
    stars: 5,
    images: [Hotel3Img, Hotel3Img1, Hotel3Img2, Hotel3Img3],
    type: "Apartment",
    roomType: "Superior Apartment",
    roomShortInfo:
      "Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 45m² 2 beds (1 sofa bed, 1 large double)",
    roomInfo:
      "Senator is an intimate property, located in the city centre, offering en suite rooms, equipped with a TV and Wi-Fi.  The popular Spodek Arena is 1.4 km away. Each room at Senator includes private bathroom facilities and cable channels. There is also a balcony and a work desk. The Senator restaurant offers a selection of Polish, Silesian and international cuisine. The restaurant and coffee-bar are decorated in a classic style, creating a relaxed atmosphere. The Main Train Station is 1.8 km away. The dynamic, trendy Mariacka Street is a 10-minute walk away. Couples particularly like the location — they rated it 8.7 for a two-person trip.",
    breakfastIncluded: false,
  },
  {
    id: 4,
    name: "Trojak",
    location: "Mysłowice, Katowice",
    rate: "2",
    reviews: 325,
    price: 80,
    stars: 2,
    images: [Hotel4Img, Hotel4Img1, Hotel4Img2, Hotel4Img3],
    type: "Resort",
    roomType: "Comfort Double Room",
    roomShortInfo: "2 single beds",
    roomInfo:
      "Offering a la carte restaurant, Trojak is located in the quiet Słupna district of Mysłowice. It also has a bowling alley, a squash court and a gym. Rooms here will provide you with a TV and a seating area. Featuring a shower, private bathrooms also come with towels. At Trojak you will find a 24-hour front desk, a terrace and a bar. Other facilities offered include a children's playground and a sports hall where guests can play volleyball or basketball. Katowice Pyrzowice Airport is 32 km away. Couples particularly like the location — they rated it 8.6 for a two-person trip.",
    breakfastIncluded: false,
  },
  {
    id: 5,
    name: "Pensjonat Sielec",
    location: "Sosnowiec, Poland",
    rate: "6",
    reviews: 550,
    price: 125,
    stars: 4.5,
    images: [Hotel5Img, Hotel5Img1, Hotel5Img2, Hotel5Img3],
    type: "Guest House",
    roomType: "Comfort Double Room with Balcony",
    roomShortInfo: "3 beds (2 singles, 1 sofa bed",
    roomInfo:
      "Offering a la carte restaurant, Trojak is located in the quiet Słupna district of Mysłowice. It also has a bowling alley, a squash court and a gym. Rooms here will provide you with a TV and a seating area. Featuring a shower, private bathrooms also come with towels. At Trojak you will find a 24-hour front desk, a terrace and a bar. Other facilities offered include a children's playground and a sports hall where guests can play volleyball or basketball. Katowice Pyrzowice Airport is 32 km away. Couples particularly like the location — they rated it 8.6 for a two-person trip.",
    breakfastIncluded: false,
    freeCancelation: true,
  },
  {
    id: 6,
    name: "Orange tree Hotel",
    location: "Bedzin, Poland",
    rate: "5.1",
    reviews: 880,
    price: 170,
    stars: 4.5,
    images: [Hotel6Img, Hotel6Img1, Hotel6Img2, Hotel6Img3],
    type: "Hostel",
    roomType: "Deluxe Double Room",
    roomShortInfo: "3 beds (2 singles, 1 sofa bed",
    roomInfo:
      "Located in Będzin, 13 km from University of Silesia, Orange Tree Hotel provides accommodation with a shared lounge, free private parking and a terrace. The property is around 13 km from Spodek, 14 km from Katowice Railway Station and 14 km from Silesia City Center shopping mall. The accommodation offers karaoke and room service. Featuring a private bathroom with a shower and a hairdryer, rooms at the hostel also offer free WiFi, while some rooms are equipped with a city view. A Full English/Irish breakfast is available daily at Orange Tree Hotel. The area is popular for hiking and cycling, and bike hire is available at the accommodation. FairExpo Convention Center is 17 km from Orange Tree Hotel, while Medical University of Silesia is 17 km away. The nearest airport is Katowice, 29 km from the hostel, and the property offers a paid airport shuttle service. Couples particularly like the location — they rated it 8.3 for a two-person trip.",
    breakfastIncluded: false,
    freeCancelation: false,
    bookWithoutCreditCard: true,
  },
];

export const fakeFlights = [
  {
    name: "Warsaw to Parma",
    flightType: "Round trip",
    date: "14 Nov - 21 Nov",
    images: [
      "https://img.freepik.com/free-photo/evening-view-cathedral-cuenca_1398-2103.jpg?w=1380&t=st=1699460070~exp=1699460670~hmac=9043cb6eb68a293a71abc2b76256f41fe0b838c9bde4836d0235f911d1010def",
    ],
  },
];

// DisplayPopular data
export const popularFlights = {
  europe: [
    {
      title: "Warsaw to Paris",
      subtitle: "Shortest flight time: 4h 20m",
      info: "",
      img: paris,
    },
    {
      title: "Warsaw to Valletta",
      subtitle: "Shortest flight time: 5h 20m",
      info: "",
      img: valletta,
    },
    {
      title: "Warsaw to Milan",
      subtitle: "Shortest flight time: 5h 20m",
      info: "",
      img: milan,
    },
    {
      title: "Warsaw to Rome",
      subtitle: "Shortest flight time: 5h 20m",
      info: "",
      img: rome,
    },
  ],
  africa: [
    {
      title: "Warsaw to Hurghard",
      subtitle: "Shortest flight time: 4h 20m",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  asia: [
    {
      title: "Warsaw to Dubai",
      subtitle: "Shortest flight time: 4h 20m",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  north_america: [
    {
      title: "Warsaw to New York",
      subtitle: "Shortest flight time: 4h 20m",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};

export const popularCarDestination = {
  cities_in_poland: [
    {
      title: "Kraków",
      subtitle: "13 car hire locations",
      info: "Average price of 190.83 zł per day",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  cities_in_germany: [
    {
      title: "Berlin",
      subtitle: "5 car hire locations",
      info: "Average price of 190.83 zł per day",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  cities_worldwide: [
    {
      title: "Phoenix",
      subtitle: "10 car hire locations",
      info: "Average price of 190.83 zł per day",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Phoenix",
      subtitle: "10 car hire locations",
      info: "Average price of 190.83 zł per day",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};
export const destinationsAttraction = {
  europe: [
    {
      title: "Kraków",
      subtitle: "88 things to do",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  north_america: [
    {
      title: "Kraków",
      subtitle: "88 things to do",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  asia: [
    {
      title: "Kraków",
      subtitle: "88 things to do",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  africa: [
    {
      title: "Kraków",
      subtitle: "88 things to do",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  oceania: [
    {
      title: "Kraków",
      subtitle: "88 things to do",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  middle_east: [
    {
      title: "Kraków",
      subtitle: "88 things to do",
      info: "",
      img: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};

export const CarRentalBrands = [
  { name: "Panek", img: Panek },
  { name: "Hertz", img: Hertz },
  { name: "Direct", img: Direct },
  { name: "Flex to Go", img: FlexToGo },
  { name: "Carwiz", img: Carwiz },
  { name: "Express", img: Express },
];

export const iconInfo = [
  { icon: <FaHouseChimney />, name: "Apartments" },
  { icon: <FaWifi />, name: "Free WiFi" },
  { icon: <MdBathroom />, name: "Private bathroom" },
  { icon: <IoMdEye />, name: "View" },
  { icon: <FaShower />, name: "Shower" },
  { icon: <GiCookingPot />, name: "Kitchen" },
  { icon: <MdOutlineSmokeFree />, name: "Non-smoking rooms" },
  { icon: <LuAirVent />, name: "Air conditioning" },
  { icon: <PiTelevisionBold />, name: "Tv" },
];

export const reviews = [
  {
    name: "Olga",
    location: "Ukraine",
    review:
      "Clean new accomodation. I stayed one night, everything was great! Good location on central street close to railway station, available reception desk with late check-in",
  },
  {
    name: "Alex",
    location: "United Kingdom",
    review:
      "Clean new accomodation. I stayed one night, everything was great! Good location on central street close to railway station, available reception desk with late check-in",
  },
  {
    name: "Tom",
    location: "Poland",
    review:
      "Clean new accomodation. I stayed one night, everything was great! Good location on central street close to railway station, available reception desk with late check-in",
  },
];

// City for trending destinations
export const citys = [
  {
    name: "Warszawa",
    img: Warszawa,
  },
  {
    name: "Kraków",
    img: Krakow,
  },
  {
    name: "Wrocław",
    img: Sopot,
  },
  {
    name: "Sopot",
    img: Wroclaw,
  },
  {
    name: "Zakopane",
    img: Zakopane,
  },
];
