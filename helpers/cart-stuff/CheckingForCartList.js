import { useEffect } from "react";
import { CartList } from "../../arrays/CartList";

// Figures
import {
  Jotaro_F1,
  StarPlatinum_F1,
  Joseph_F1,
  Dio_F1,
} from "../../objects/Figures";
import { DiamondsAUB_M1, PhantomB_M1, StardustC_M1 } from "../../objects/Manga";
import {
  JotaroBlue_S1,
  MudaPurple_S1,
  PurpleJBA_H1,
} from "../../objects/Clothing";

const CheckingForCartList = () => {
  useEffect(() => {
    CartList.length = 0; // Resets and prevents increase when routing

    // This will be used to create instances instead of alot of if statements
    function checkForCartItem(cookie, object) {
      if (sessionStorage.getItem(cookie) && !CartList.indexOf(object) > -1) {
        CartList.push(object);
      }
    }

    //! Figures
    // Jotaro
    checkForCartItem("Jotaro F1", Jotaro_F1);
    // Joseph
    checkForCartItem("Joseph F1", Joseph_F1);
    // Dio
    checkForCartItem("Dio F1", Dio_F1);
    // Stands
    checkForCartItem("Star Platinum F1", StarPlatinum_F1);

    //! Manga
    // Phantom Blood
    checkForCartItem("PB M1", PhantomB_M1);
    // Stardust
    checkForCartItem("SDC M1", StardustC_M1);
    // Diamonds
    checkForCartItem("DAUB M1", DiamondsAUB_M1);

    //! Clothing
    // Hats
    checkForCartItem("Purple JBA H1", PurpleJBA_H1);

    // Shirts
    checkForCartItem("Jotaro Blue S1", JotaroBlue_S1);
    checkForCartItem("Muda Purple S1", MudaPurple_S1);

    console.log("Current Cart List:");
    console.table(CartList);

    /* 
      This will be used to calculate the cart total prices 
      ! NOTE: This is for the console and not the cart page, as that code will be different
    */
    var i, cartTotalPrice;
    function getConsoleCartTotalPrice() {
      const cartPrices = [];

      console.log("Current Prices inside of the Cart:");
      for (i = 0; i < CartList.length; i++) {
        console.log(`Price ${i + 1}: $${CartList[i].price}`);
        cartPrices.push(CartList[i].price);
      }

      cartTotalPrice = 0;
      for (i = 0; i < cartPrices.length; i++) {
        cartTotalPrice += cartPrices[i];
      }
    }

    /* 
      This will be used to print the cart total prices to the console 
      ! NOTE: This is for the console and not the cart page, as that code will be different
    */
    function logCartTotalPrice() {
      const finalCartPrice = Math.round(cartTotalPrice * 100) / 100;
      console.log("-----------------------------------");
      console.log("Current Cart Total: $" + finalCartPrice);
    }

    console.log("-----------------------------------");
    getConsoleCartTotalPrice();
    logCartTotalPrice();
  }, []);

  return "";
};

export default CheckingForCartList;
