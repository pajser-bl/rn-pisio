export default class Login {
  logIn(username, password) {
    let data = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        Accept: "application/json",
        "Contetn-Type": "application/json",
      },
    };
    fetch("http://pisio.etfbl.net/~pavlev/AssetManager/api/user/auth", data)
      .then((res) => res.json())
      .then(function (res) {
        if (res.access - token !== "") return res.access_token;
      });

    return "";
  }
}
