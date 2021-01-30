import React, { useState, useEffect } from "react";
import ThreeButtons from "../ThreeButtons";
import "./Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useSelector, useDispatch } from "react-redux";

function Calendar({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-01-18T21:11:54")
  );
  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");

  const [isRequired, setIsRequired] = useState("No");
  const [constrains, setConstrains] = useState([]);

  const [optList, setOptList] = useState([]);
  const myformList = useSelector((state) => state.formList);
  const dispatch = useDispatch();

  useEffect(() => {
    var a = myformList.find((item) => item.id === id);
    console.log("this is a", a);

    if (a) {
      setLabel(a.label);
      setDesc(a.description);
      setIsRequired(a.isRequired);
      setOptList(a.inputs);
      setConstrains(a.constrains);
    }
  }, [myformList]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="work-area">
      <div
        className="calendar-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="calendar-title">
          {label}
          {isRequired ? <span style={{ color: "#ff0000" }}>*</span> : ""}
        </div>
        <div className="calendar-description">{desc}</div>
        <div className="calendar-wrapper">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                style={{ marginRight: "24px" }}
              />
              {/* <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              /> */}
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>

        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Calendar;
