const getImage = async () => {
  try {
    const api_key = "gC2LEaFV2Mi0LJvkKBqA7LxY7yOGHN3E";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImage();
