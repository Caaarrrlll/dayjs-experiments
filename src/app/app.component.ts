import { Component, VERSION } from "@angular/core";

// import * as dayjs from "dayjs";
// import * as timezone from "dayjs/plugin/timezone";
// import * as utc from "dayjs/plugin/utc";
// dayjs.extend(timezone);
// dayjs.extend(utc);

// import { now } from "moment";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  momentNow = now();

  dayjsNow = dayjs();
}
