const VALIDATE = {
  USER: {
    NAME: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣\s]{2,15}$/,
    NICKNAME: /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣\s]{2,15}$/,
    EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    PASSWORD: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/,
  },
};

export default VALIDATE;
