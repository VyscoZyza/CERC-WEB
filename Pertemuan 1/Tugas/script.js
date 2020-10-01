const linkData1 = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts/2/comments')
    .then(res => {
      const db = {};
      db.name = 'Alvin Zulham';
      db.data = res.data;
      db.length = res.data.length;
      console.log(db);
    });
}
linkData1();


const linkData2 = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      const filterData2 = res.data.filter(value => {
        return value.userId == 8;
      });
      console.log("Alvin Zulham")
      console.log(filterData2);
    })
}

linkData2();
