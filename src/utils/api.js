const API_BASE_URL = "https://api.example.com";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API call error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("fetchData error:", error);
    throw error;
  }
}

async function postData(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API call error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("postData error:", error);
    throw error;
  }
}

export { fetchData, postData };
