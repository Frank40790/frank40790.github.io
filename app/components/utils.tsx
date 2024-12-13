export async function fetchContent(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.text();
      return data;
    } else {
      return "Fetch Error";
    }
  } catch (error) {
    return "Fetch Error";
  }
}

