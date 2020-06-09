const MiddleValue = (data) => {
  const tempArr = data.map((elem) => parseFloat(elem.stv_t));
  const sumOfTemp = tempArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const middleValue = (sumOfTemp / tempArr.length).toFixed(2);
  return middleValue;
};

export default MiddleValue;
