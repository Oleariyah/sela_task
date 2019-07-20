export default () => {
  return new Promise((resolve, reject) => {
    fetch(`../data.json`)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
