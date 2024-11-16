const BE_URL = import.meta.env.VITE_BE_URL;

export const createUserAPI = async (userDetails) => {
    const response = await fetch(`${BE_URL}/users`, {
        body: JSON.stringify(userDetails),
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return await response.json();
};

export const verifyAccountAPI = async (token) => {
    const response = await fetch(`${BE_URL}/users/verify-account?token=${token}`);
    return await response.json();
};

export const userLoginAPI = async (payload) => {
    const response = await fetch(`${BE_URL}/users/login`, {
      body: JSON.stringify(payload),
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  
    if (response.status !== 200) {
      throw new Error("Invalid Credentials or Something Wrong");
    }
  
    return await response.json();
};

export const forgotPasswordAPI = async (email) => {
    const response = await fetch(`${BE_URL}/users/forgot-password`, {
      body: JSON.stringify({ email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    return await response.json();
}

export const checkPasswordAPI = async (token) => {
    const response = await fetch(`${BE_URL}/users/check-password`, {
      body: JSON.stringify({ token }),
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    return await response.json();
}

export const resetPasswordAPI = async (token, password) => {
    const response = await fetch(`${BE_URL}/users/reset-password`, {
      body: JSON.stringify({ token, password }),
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    return await response.json();
}