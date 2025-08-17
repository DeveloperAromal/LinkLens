export async function getPreviewData(url) {
  const apiUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}`;
  try {
    const res = await fetch(apiUrl);
    const json = await res.json();
    return {
      title: json.data.title,
      description: json.data.description,
      image: json.data.image?.url,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}

