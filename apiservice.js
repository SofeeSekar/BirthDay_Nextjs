// In your Next.js component or page
const fetchDataFromAspNetApi = async () => {
    try {
      const response = await fetch('http://localhost:5109api/api/data/get');
      if (!response.ok) {
        throw new Error('Failed to fetch data from ASP.NET API');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from ASP.NET API:', error);
      throw error;
    }
  };
  
  // Call fetchDataFromAspNetApi and handle the response
  const fetchDataAndRender = async () => {
    try {
      const data = await fetchDataFromAspNetApi();
      // Render data in your component
      console.log('Data from ASP.NET API:', data);
    } catch (error) {
      // Handle error
    }
  };
  
  // Call fetchDataAndRender when your component mounts or when you need to fetch data
  