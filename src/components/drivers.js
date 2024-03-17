import { Driver } from "driver.js";
import "driver.js/dist/driver.css";

const DriverElement = () => {
    const drivers = new Driver();
  drivers.highlight({
    showProgress: true,
    step:[{
  element: "#recipe",
  popover: {
    title: "レシピ",
    description: "Description"
  }}]
  
});
return drivers.drive(); 
}
export default DriverElement;

