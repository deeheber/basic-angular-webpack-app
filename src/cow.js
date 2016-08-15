import cowsay from 'cowsay-browser';

export default function getCow(){
  return cowsay.think({
    text: 'Cows are cool',
    e: 'oO',
    T: 'U'
  });
}
