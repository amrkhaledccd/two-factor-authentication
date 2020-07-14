const request = (options) => {
  const headers = new Headers();

  if (options.setContentType !== false) {
    headers.append("Content-Type", "application/json");
  }

  if (localStorage.getItem("accessToken")) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem("accessToken")
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function login(loginRequest) {
  return request({
    url: "http://localhost:8081/signin",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function verify(verifyRequest) {
  return request({
    url: "http://localhost:8081/verify",
    method: "POST",
    body: JSON.stringify(verifyRequest),
  });
}

export function signup(signupRequest) {
  return request({
    url: "http://localhost:8081/users",
    method: "POST",
    body: JSON.stringify(signupRequest),
  });
}

export function getCurrentUser() {
  if (!localStorage.getItem("accessToken")) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: "http://localhost:8081/users/me",
    method: "GET",
  });
}
