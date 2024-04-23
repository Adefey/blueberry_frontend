const backendUrl = "https://api.blueberry.adefe.xyz";

async function recipeAll(count = 0, offset = 0, search_query = null) {
  if (count === 0) {
    return { recipes: [] };
  }
  const handleUrl = "/recipe/all";
  console.log(handleUrl, count, offset, search_query);

  return fetch(backendUrl + handleUrl, {
    method: "get",
  }).then((response) => {
    return response.json().then((responseJson) => {
      console.log("Data received", responseJson);
      return responseJson;
    });
  });
}

function recipeId(id) {
  const handleUrl = `/recipe/${id}`;
  console.log(handleUrl, id);

  return fetch(backendUrl + handleUrl, {
    method: "get",
  }).then((response) => {
    return response.json().then((responseJson) => {
      console.log("Data received", responseJson);
      return responseJson;
    });
  });
}

export { recipeAll, recipeId };
