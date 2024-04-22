const backendUrl = "https://blueberry.adefe.xyz";

function recipeAll(count = 0, offset = 0, search_query = null) {
  if (count === 0) {
    return { recipes: [] };
  }
  console.log(count, offset, search_query);
  const handleUrl = "/recipes/all";
  const data = {
    recipes: [
      {
        caption: "Mac-N-Cheese",
        description:
          "Macaroni with cheese cooked in a saucepan. Traditional American meal.",
        image_url:
          "https://massystorestt.com/wp-content/uploads/2014/10/STOVE-TOP-MAC-AND-CHEESE-1024x768.jpg",
        id: 1,
      },
      {
        caption: "Soup Yay Tsun",
        description: "Chinese morning meal. Consists of eggs and tomatoes",
        image_url:
          "https://travel-dom.ru/wp-content/uploads/2020/06/ayEsk7D7g4A.jpg",
        id: 2,
      },
      {
        caption: "Cabbage with chicken",
        description:
          "Dmitrov city cuisine, very nutricious dish. Simple to prepare and tasty to consume",
        image_url: "https://5pirogov.ru/wp-content/uploads/3-76.jpg",
        id: 3,
      },
    ],
  };

  if (search_query) {
    data.recipes = data.recipes.filter((element) => {
      return (
        element.caption.includes(search_query) ||
        element.description.includes(search_query)
      );
    });
  }

  return data;
}

function recipeId(id) {
  const handleUrl = `/recipes/${id}`;
  const data = {
    caption: "Mac-N-Cheese",
    description:
      "Macaroni with cheese cooked in a saucepan. Traditional American meal.",
    image_url:
      "https://massystorestt.com/wp-content/uploads/2014/10/STOVE-TOP-MAC-AND-CHEESE-1024x768.jpg",
    steps: [
      {
        caption: "Prepare thyself",
        description:
          "Now we well cook Mac-N-Cheese. Prepare saucepan with boiling water, macaroni of your choise, grated cheese and some butter",
        image_url:
          "https://versiya.info/uploads/posts/2020-04/1586278312_airbrush_20200407194850.jpg",
        duration: 60,
      },
      {
        caption: "Boil macaroni",
        description: "Boil macaroni in boiling water for 10 minutes",
        image_url:
          "https://ketokotleta.ru/wp-content/uploads/9/a/8/9a86279d376c3a68fba78745fa578b79.jpeg",
        duration: 600,
      },
      {
        caption: "Drain almost all water",
        description:
          "Drain almost all the water from the macaroni. They should remain in the saucepan in the remaining amount of water",
        image_url: "https://fb.ru/media/i/4/7/8/0/4/0/i/478040.jpg",
        duration: 60,
      },
      {
        caption: "Add cheese and butter",
        description: "Add 150 grams of grated cheese and 15 grams of butter",
        image_url:
          "https://img.povar.ru/uploads/7a/41/03/30/spagetti_s_sirom-84792.jpg",
        duration: 45,
      },
      {
        caption: "Stir well",
        description:
          "Stir all together until it all mixes and gives you finished dish",
        image_url:
          "https://cdn.idntimes.com/content-images/post/20210621/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseatscom-recipes-images-2015-10-20151006-macaroni-and-cheese-stovetop-food-lab-18-20kenji-401e7a44dba5478d866cdda7e6c48bf2-f5ba829bc421e77ede03054370bf5861.jpg",
        duration: 180,
      },
      {
        caption: "Congratulations!",
        description: "Enjoy your meal!",
        image_url: "https://images.iptv.rt.ru/images/c6u67rjir4ssllttbseg.jpg",
        duration: 180,
      },
    ],
  };
  return data;
}

export { recipeAll, recipeId };
