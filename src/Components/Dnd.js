import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/sortable";
import "jquery-ui/ui/widgets/draggable";

function Dnd() {
  const [myList, setMyList] = useState([
    { id: "123", val: "hello world" },
    { id: "1234", val: "this is shit" },
    { id: "12345", val: "type something" },
  ]);

  useEffect(() => {
    console.log("printing inside", myList);
  }, [myList]);

  console.log("this is initial", myList);
  const change = (order) => {
    var newList = order.map((item) => {
      let item2 = myList.find((i2) => i2.id === item);
      console.log("this is item2", item2);
      return item2 ? { ...item2 } : item;
    });
    console.log("this is new", newList);
    setMyList(
      order.map((item) => {
        let item2 = myList.find((i2) => i2.id === item);
        console.log("this is item2", item2);
        return item2 ? { ...item2 } : item;
      })
    );
  };
  $("button").on("click", function () {
    alert("hello world");
  });
  $(function () {
    $("#sortable").sortable({
      revert: true,
      axis: "y",
      containment: "#hello",
      connectWith: myList,
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
    <div id="hello" style={{ backgroundColor: "grey", paddingTop: "40px" }}>
      <ul id="sortable" style={{ paddingTop: "40px" }}>
        {myList.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              {item.val}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dnd;
