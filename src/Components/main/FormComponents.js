import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import MulitipleChoice from "../formComponents/MultipleChoice/MulitipleChoice";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { formList } from "../../actions";
import $ from "jquery";
import "jquery-ui/ui/widgets/sortable";
import "jquery-ui/ui/widgets/draggable";
import Text from "../formComponents/Text/Text";
import { formList, prevListSetter } from "../../actions";
import Agreement from "../formComponents/Agreement/Agreement";
import Attachment from "../formComponents/Attachment/Attachment";
import Calendar from "../formComponents/Calendar/Calendar";
import ContactForm from "../formComponents/ContactForm/ContactForm";
import Dropdown from "../formComponents/Dropdown/Dropdown";
import Email from "../formComponents/Email/Email";
import Footer from "../formComponents/Footer/Footer";
import Header from "../formComponents/Header/Header";
import Link from "../formComponents/Link/Link";
import Number from "../formComponents/Number/Number";
import OpinionScale from "../formComponents/OpinionScale/OpinioneScale";
import Payment from "../formComponents/Payment/Payment";
import PictureChoice from "../formComponents/PictureChoice/PictureChoice";
import Rank from "../formComponents/Rank/Rank";
import Rating from "../formComponents/Rating/Rating";
import SectionBreak from "../formComponents/SectionBreak/SectionBreak";
import YesorNo from "../formComponents/YesorNo/YesorNo";

function FormComponents() {
  const [myList, setMyList] = useState([]);
  // const [prevList, setPrevList] = useState([]);
  const myformList = useSelector((state) => state.formList);
  // const prevList = useSelector((state) => state.prevList);
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // if (myformList.length > 0) {
    //   console.log("hellon world");

    // }
    setMyList(myformList);

    console.log("total change", myformList);
  }, [myformList]);

  // const check_changes = () => {
  //   console.log("this is prev", prevList);
  //   console.log("this is current", myList);
  //   for (var i = 0; i < myList.length; i++) {
  //     var d = myList[i].id;
  //     var a = prevList.find((cur) => cur.id === d);

  //     if (a === undefined) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  useEffect(() => {
    // console.log(check_changes());
    if (myList.length > 1) {
      scrollToBottom();
    }
  }, [myList]);
  const change = (order) => {
    var newList = order.map((item) => {
      let item2 = myformList.find((i2) => i2.id === item);
      console.log("this is item2", item2);
      return item2 ? { ...item2 } : item;
    });
    console.log("this is new", newList);
    /// use the following sunction to set prev list.
    // dispatch(prevListSetter())
    dispatch(
      formList(
        order.map((item) => {
          let item2 = myformList.find((i2) => i2.id === item);
          console.log("this is item2", item2);
          return item2 ? { ...item2 } : item;
        })
      )
    );
  };
  $("button").on("click", function () {
    alert("hello world");
  });
  $(function () {
    $("#sortable").sortable({
      revert: true,
      axis: "y",
      // containment: "#hello",
      //   scroll: false,
      connectWith: myformList,
      update: function (event, ui) {
        //   var changedList = this.id
        var order = $(this).sortable("toArray");
        change(order);
        // console.log("this is new", myList);
        console.log(order);
      },
    });

    //   $("ul, li").disableSelection();
  });

  return (
    <div id="hello">
      <div id="sortable">
        {myformList.map((item) => {
          if (item.compType === "Multiple choice") {
            return (
              <div key={item.id} id={item.id}>
                <MulitipleChoice id={item.id} />
              </div>
            );
          }
          if (item.compType === "Text") {
            return (
              <div key={item.id} id={item.id}>
                <Text id={item.id} />
              </div>
            );
          }
          if (item.compType === "Rating") {
            return (
              <div key={item.id} id={item.id}>
                <Rating id={item.id} />
              </div>
            );
          }
          if (item.compType === "Header") {
            return (
              <div key={item.id} id={item.id}>
                <Header id={item.id} />
              </div>
            );
          }
          if (item.compType === "Email") {
            return (
              <div key={item.id} id={item.id}>
                <Email id={item.id} />
              </div>
            );
          }

          if (item.compType === "Yes or No") {
            return (
              <div key={item.id} id={item.id}>
                <YesorNo />
              </div>
            );
          }
          if (item.compType === "Opinion Scale") {
            return (
              <div key={item.id} id={item.id}>
                <OpinionScale id={item.id} />
              </div>
            );
          }
          if (item.compType === "Picture choice") {
            return (
              <div key={item.id} id={item.id}>
                <PictureChoice id={item.id} />
              </div>
            );
          }
          if (item.compType === "Footer") {
            return (
              <div key={item.id} id={item.id}>
                <Footer id={item.id} />
              </div>
            );
          }
          if (item.compType === "Contact form") {
            return (
              <div key={item.id} id={item.id}>
                <ContactForm id={item.id} />
              </div>
            );
          }
          if (item.compType === "Section break") {
            return (
              <div key={item.id} id={item.id}>
                <SectionBreak id={item.id} />
              </div>
            );
          }
          if (item.compType === "Number") {
            return (
              <div key={item.id} id={item.id}>
                <Number id={item.id} />
              </div>
            );
          }
          if (item.compType === "Rank") {
            return (
              <div key={item.id} id={item.id}>
                <Rank id={item.id} />
              </div>
            );
          }
          if (item.compType === "Dropdown") {
            return (
              <div key={item.id} id={item.id}>
                <Dropdown id={item.id} />
              </div>
            );
          }

          if (item.compType === "Calendar") {
            return (
              <div key={item.id} id={item.id}>
                <Calendar id={item.id} />
              </div>
            );
          }
          if (item.compType === "Link") {
            return (
              <div key={item.id} id={item.id}>
                <Link id={item.id} />
              </div>
            );
          }
          if (item.compType === "Payment") {
            return (
              <div key={item.id} id={item.id}>
                <Payment id={item.id} />
              </div>
            );
          }
          if (item.compType === "Attachment") {
            return (
              <div key={item.id} id={item.id}>
                <Attachment id={item.id} />
              </div>
            );
          }
          if (item.compType === "Agreement") {
            return (
              <div key={item.id} id={item.id}>
                <Agreement id={item.id} />
              </div>
            );
          }
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default FormComponents;
