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
const getNativeName = (name: any): any => {
  let value: any = Object.values(name);
  return value[0].common;
};
const getValue = (curency: any) => {
  JSON.stringify(curency);
  let values: any = Object.values(curency);
  return values[0].name;
};
const getLanguage = (languages: any): Array<string> => {
  let values: any = Object.values(languages);
  return values;
};
const getBorders = (border:any):Array<string> =>{
  return border;
}

export { spliter, getLanguage, getNativeName, getValue , getBorders };
