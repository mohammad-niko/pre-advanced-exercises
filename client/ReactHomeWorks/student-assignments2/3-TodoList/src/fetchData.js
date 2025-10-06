export async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5"
    );

    if (!response.ok) {
      if (response.status === 404) throw new Error(`Data not found states:${response.status}`);
      if (response.status === 500) throw new Error(`Server error , states:${response.status}`);
      throw new Error(`Http Error : State:${response.status} `);
    }

    const data = await response.json();

    if (!Array.isArray(data)) throw new Error("Unexpected data format");

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
