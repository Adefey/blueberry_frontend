const backendUrl = "https://blueberry.adefe.xyz";

function recipeAll(count, offset, search_query) {
  const handleUrl = "/recipes/all";
  const data = {
    recipes: [
      {
        caption: "Mac-N-Cheese",
        description:
          "Macaroni with cheese cooked in a saucepan. Traditional American meal.",
        image_url: "https://adefe.xyz/avatar.png",
        id: 1,
      },
      {
        caption: "Soup Yay Tsun",
        description: "Chinese morning meal. Consists of eggs and tomatoes",
        image_url: "https://adefe.xyz/avatar.png",
        id: 2,
      },
    ],
  };
  return data;
}

function recipeId(id) {
  const handleUrl = `/recipes/${id}`;
  const data = {
    recipes: [
      {
        caption: "Mac-N-Cheese",
        description:
          "Macaroni with cheese cooked in a saucepan. Traditional American meal.",
        image_url: "https://adefe.xyz/avatar.png",
        steps: {},
      },
    ],
  };
  return data;
}

export { recipeAll, recipeId };
