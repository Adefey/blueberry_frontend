const backendUrl = "https://api.blueberry.adefe.xyz";

async function recipeAll(count = 20, offset = 0, search_query = null) {
  if (count === 0) {
    return { recipes: [] };
  }

  let handleUrl = "/recipe/all?" + `count=${count}&offset=${offset}`;
  if (search_query && search_query != "") {
    handleUrl = handleUrl + `&search_query=${search_query}`;
  }
  console.log(handleUrl, count, offset, search_query);

  try {
    let response = await fetch(backendUrl + handleUrl, {
      method: "get",
      mode: "cors",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
      },
    });

    let responseJson = await response.json();
    console.log("Data received", responseJson);
    return responseJson;
  } catch (error) {
    console.error("Error loading data for", handleUrl, "Error:", error);
    return null;
  }
}

async function recipeId(id) {
  const handleUrl = `/recipe/${id}`;
  console.log(handleUrl, id);

  try {
    let response = await fetch(backendUrl + handleUrl, {
      method: "get",
      mode: "cors",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
      },
    });

    let responseJson = await response.json();
    console.log("Data received", responseJson);
    return responseJson;
  } catch (error) {
    console.error("Error loading data for", handleUrl, "Error:", error);
    return null;
  }
}

async function login(login, password) {
  const handleUrl = `/user/login`;
  console.log(handleUrl);
  try {
    let response = await fetch(backendUrl + handleUrl, {
      method: "post",
      mode: "cors",
      credentials: "include", 
      body: JSON.stringify({ login: login, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let status = response.status;
    console.log("Data received, status", status);
    return status;
  } catch (error) {
    console.error("Error loading data for", handleUrl, "Error:", error);
    return null;
  }
}

async function register(login, password) {
  const handleUrl = `/user/register`;
  console.log(handleUrl);
  try {
    let response = await fetch(backendUrl + handleUrl, {
      method: "post",
      mode: "cors",
      credentials: "include", 
      body: JSON.stringify({ login: login, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let status = response.status;
    console.log("Data received, status", status);
    return status;
  } catch (error) {
    console.error("Error loading data for", handleUrl, "Error:", error);
    return null;
  }
}

export { recipeAll, recipeId, login, register };
