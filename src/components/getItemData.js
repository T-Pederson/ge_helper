// API's found at https://oldschool.runescape.wiki/w/RuneScape:Real-time_Prices
// 1hr average prices can be found at https://prices.runescape.wiki/api/v1/osrs/1h
// Abyssal Whip id:4151

  export default async function getData(itemName) {
    // Initialize a data object to store all required item data
    const data = {
      "name": "",
      "itemID": "",
      "buyPrice": 0,
      "sellPrice": 0,
      "margin": 0,
      "ROI": 0,
      "limit": 0,
      "highAlch": 0,
      "lowAlch": 0,
      "examine": "",
      "members": "",
      "icon": ""
    }

    // Format item name
    itemName = itemName.trim();
    itemName = itemName.charAt(0).toUpperCase() + itemName.slice(1).toLowerCase();

    // Get mapping of item that contains examine, id, members, lowalch, highalch, limit, value, icon, and name attributes
    let items = await fetch("https://prices.runescape.wiki/api/v1/osrs/mapping");
    items = await items.json();
    let searchedItem;
    for (let item of items) {
      if (item["name"] === itemName) {
        searchedItem = item;
        data["name"] = searchedItem["name"];
        data["itemID"] = searchedItem["id"];
        data["examine"] = searchedItem["examine"];
        searchedItem["members"] ? data["members"] = "Yes" : data["members"] = "No";
        data["lowAlch"] = searchedItem["lowalch"];
        data["highAlch"] = searchedItem["highalch"];
        data["limit"] = searchedItem["limit"];
        data["icon"] = "https://secure.runescape.com/m=itemdb_oldschool/obj_sprite.gif?id=" + data["itemID"];
      }
    }

    if (data["name"] === "") {
      data["name"] = "Item not found";
      data["icon"] = "https://oldschool.runescape.wiki/images/Elder_Gnome_child_chathead.png?e08f0";
      return data;
    }

    // Get current high and low prices of an item
    let prices = await fetch(`https://prices.runescape.wiki/api/v1/osrs/latest?id=${searchedItem["id"]}`);
    prices = await prices.json();
    prices = prices["data"][searchedItem["id"]];
    data["buyPrice"] = prices["high"];
    data["sellPrice"] = prices["low"];

    // Calculate the individual and total profit of the item
    data["margin"] = parseInt(prices["high"]) - parseInt(prices["low"]);
    if (parseInt(prices["high"]) >= 100) {
      data["margin"] -= Math.round(Math.min(5000000, prices["high"] * 0.01))
    }
    data["ROI"] = Math.round(data["margin"] / data["sellPrice"] * 10000) / 100;

    // Return data object
    return data;
  }
