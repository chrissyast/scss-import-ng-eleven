import { Component, OnInit } from '@angular/core';

//import styles from "../styles.scss";   // "export 'default' (imported as 'styles') was not found in '../styles.scss'
const styles = require("../styles.scss")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  buttonColor = styles["colors-primary"]; //"#387ef5"

  ngOnInit() {
      console.log(styles);
      console.log(styles["colors-primary"]);
  }
}
