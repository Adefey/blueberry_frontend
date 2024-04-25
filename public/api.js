const backendUrl = "https://api.blueberry.adefe.xyz";

async function recipeAll(count = 0, offset = 0, search_query = null) {
  if (count === 0) {
    return { recipes: [] };
  }
  const handleUrl = "/recipe/all";
  console.log(handleUrl, count, offset, search_query);

  return fetch(backendUrl + handleUrl, {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json().then((responseJson) => {
        console.log("Data received", responseJson);
        return responseJson;
      });
    })
    .catch((error) => {
      console.error("Error loading data for", handleUrl, "Error:", error);
      return null;
    });
}

function recipeId(id) {
  const handleUrl = `/recipe/${id}`;
  console.log(handleUrl, id);

  return fetch(backendUrl + handleUrl, {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response
      .json()
      .then((responseJson) => {
        console.log("Data received", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error("Error loading data for", handleUrl, "Error:", error);
        return null;
      });
  });
}

export { recipeAll, recipeId };
