const mettings = false;

const metting = new Promise((resolve, reject) => {
  if (!mettings) {
    const mettingDetails = {
      name: "shanto",
      location: "google meet",
      time: "12:30",
    };
    resolve(mettingDetails);
  } else {
    reject(new Error("already have metting"));
  }
});

metting
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
