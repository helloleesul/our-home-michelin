const MESSAGE = {
  JOIN: {
    SYNTAX_EMAIL: "올바른 이메일을 입력해 주세요.",
    SYNTAX_NICKNAME:
      "한글 또는 영문으로 2글자 이상 15글자 이하로 입력해 주세요.",
    SYNTAX_PASSWORD:
      "영문, 숫자, 특수 문자 조합으로 8글자 이상으로 입력해 주세요.",
    SYNTAX_PASSWORD_CHECK: "비밀번호가 일치하지 않습니다.",
    FAILURE: "회원 가입에 실패했습니다.",
  },
  CONFIRM: {
    COMPLETE: "정보 수정이 완료되었습니다.",
    NICKNAME: "현재 닉네임과 동일합니다. 다시 입력해 주세요.",
    PASSWORD: "올바른 비밀번호를 입력해 주세요.",
    ALL: "입력되지 않은 정보가 있습니다. 모두 입력해 주세요.",
  },
  LOGIN: {
    FAILURE: "로그인에 실패했습니다.",
    ERROR: "로그인에 문제가 발생했습니다. 잠시 후에 다시 시도해 주세요.",
    REQUIRED: "로그인이 필요한 서비스입니다. 로그인 후에 이용해 주세요!",
  },
  ERROR: {
    DEFAULT: "에러가 발생했습니다. 다시 시도해 주세요.",
    EXPIRED: "로그인이 만료되었습니다. 다시 로그인해 주세요.",
    ONLY_USER: "회원만 접근이 가능합니다.",
    WRONG: "잘못된 접근입니다.",
  },
  RECIPE: {
    COMPLETE: "레시피 작성이 완료되었습니다.",
    EDIT: "작성한 레시피를 수정하시겠습니까?",
    EDITFIN: "레시피 수정이 완료되었습니다.",
    DELETE: "레시피를 삭제하시겠습니까?",
    CANCEL: "레시피 작성을 취소하시겠습니까?",
  },
  FILE: {
    UPLOAD: "JPEG, JPG, PNG 파일만 업로드 가능합니다.",
    NOT_FILE: "첨부된 이미지가 없습니다. 이미지를 첨부해 주세요.",
  },
  DELETE: {
    COMPLETE: "삭제가 완료되었습니다.",
    USER: "회원 탈퇴가 완료되었습니다.",
  },
};

export default MESSAGE;
