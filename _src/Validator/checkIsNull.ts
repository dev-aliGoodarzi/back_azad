export const checkIsNull = <T>(
  data: T,
  expectedType: "string" | "number",
  errorData: {
    errorKey: string;
    errorMessage: string;
  },
  onErrorFunction?: (
    _data: {
      data: T;
      expectedType: "string" | "number";
      errorData: {
        errorKey: string;
        errorMessage: string;
      };
    },
    errorKey: string
  ) => void
):
  | {
      data: T | false;
    }
  | {
      errorMessage: string;
    } => {
  if (typeof data !== expectedType) {
    if (typeof onErrorFunction === "function") {
      onErrorFunction(
        {
          data,
          expectedType,
          errorData,
        },
        errorData.errorKey
      );
    }
    return {
      errorMessage: errorData.errorMessage,
    };
  }

  return {
    data,
  };
};
