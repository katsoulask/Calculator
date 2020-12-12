
export default function CalculateValue(){
const calculate = (val) => {
  if (val.includes("+")) {
    return val.split('+').map((x)=>+x).reduce((a, b) => a + b);
}else if (val.includes('--')){
  return val.split('--').map((x)=>+x).reduce((a,b)=>a+b)
}else if (val.includes('-')){
  return val.split('-').map((x)=>+x).reduce((a,b)=>a-b)
}else if ( val.includes('X')){
  return val.split('X').map((x)=>+x).reduce((a,b)=>a*b)
}else if (val.includes('/')){
  return val.split('/').map((x)=>+x).reduce((a,b)=>a/b)
}
  return console.log(val);
};
return calculate;
}
