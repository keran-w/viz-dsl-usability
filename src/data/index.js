async function getCarData() {
  const response = await fetch('./src/data/cars.json');
  const carData = await response.json();
  return carData;
}

export { getCarData };