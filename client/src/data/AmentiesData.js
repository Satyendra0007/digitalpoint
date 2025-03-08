import { IoIosChatbubbles } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";


const amenties = [
  {
    text: "Free Consultation",
    Icon: IoIosChatbubbles
  },
  {
    text: "Wifi on the Premises",
    Icon: FaWifi
  },
  {
    text: "Debit & Creadit Cards Accepted",
    Icon: FaRegCreditCard
  },
  {
    text: "Bike Parking Available",
    Icon: RiMotorbikeFill
  },
  {
    text: "By Appointment Only",
    Icon: MdPermContactCalendar
  },
  {
    text: "Cash Only",
    Icon: FaRegMoneyBill1
  },
  {
    text: "24/7 Avilablity",
    Icon: FaRegClock
  },
  {
    text: "Good For Children",
    Icon: FaChild
  }

]


export default amenties;