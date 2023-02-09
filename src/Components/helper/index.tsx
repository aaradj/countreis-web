const spliter = (population: number) => {
  const newNumber = population.toString();
  let numb: string;
   if (population >= 1000 && population <= 9999) {
    numb = `${newNumber[0]},${newNumber[1]}${newNumber[2]}${newNumber[3]}`;
    return numb;
  } else if (population >= 10000 && population <= 99999) {
    numb = `${newNumber[0]}${newNumber[1]},${newNumber[2]}${newNumber[3]}${newNumber[4]}`;
    return numb;
  } else if (population >= 100000 && population <= 999999) {
    numb = `${newNumber[0]}${newNumber[1]}${newNumber[2]},${newNumber[3]}${newNumber[4]}${newNumber[5]}`;
    return numb;
  } else if (population >= 1000000 && population <= 9999999) {
    numb = `${newNumber[0]},${newNumber[1]}${newNumber[2]}${newNumber[3]},${newNumber[4]}${newNumber[5]}${newNumber[6]}`;
    return numb;
  } else if (population >= 10000000 && population <= 99999999) {
    numb = `${newNumber[0]}${newNumber[1]},${newNumber[2]}${newNumber[3]}${newNumber[4]},${newNumber[5]}${newNumber[6]}${newNumber[7]}`;
    return numb;
  } else if (population >= 100000000 && population <= 999999999) {
    numb = `${newNumber[0]}${newNumber[1]}${newNumber[2]},${newNumber[3]}${newNumber[4]}${newNumber[5]},${newNumber[6]}${newNumber[7]}${newNumber[8]}`;
    return numb;
  } else if (population >= 1000000000 && population <= 9999999999) {
    numb = `${newNumber[0]},${newNumber[1]}${newNumber[2]}${newNumber[3]},${newNumber[4]}${newNumber[5]}${newNumber[6]},${newNumber[7]}${newNumber[8]}${newNumber[9]}`;
    return numb;
  }else{
    return newNumber;
  }
};

export { spliter };
