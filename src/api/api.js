import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d075aadf-9fc0-4045-9fac-f3aa46fa4e92"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  unfollowUsers(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data;
    });
  },
  followUsers(id) {
    return instance.post(`follow/${id}`, {}).then(response => {
      return response.data;
    });
  },
  getAuthData() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    });
  },
  getUserProfile(userId) {
    return profileAPI.getUserProfile(userId);
  }
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => {
      return response.data;
    });
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => {
      return response.data;
    });
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, { status }).then(response => {
      return response.data;
    });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        return response.data;
      });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  }
};

export const authAPI = {
  getAuthData() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then(response => {
        return response.data;
      });
  },
  logOut() {
    return instance.delete(`auth/login`);
  }
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
};
