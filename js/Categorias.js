 
 
export const getCategories = async () => {
    fetch("https://api.coingecko.com/api/v3/coins/categories/list", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Categories:", data.length);
        document.getElementById("categories").innerHTML = data.length;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };