function getSecondsToTomorrow() {
  let now = new Date();
  console.log(now);

  // завтрашняя дата
  let tomorrow = new Date(now.getFullYear() + 1, '11', getData() - 1);
  console.log(new Date(tomorrow));
  //   let diff = tomorrow - now; // разница в миллисекундах
  //   console.log(diff);
  //   return Math.round(diff / 1000); // преобразуем в секунды
}

console.log(getSecondsToTomorrow());
