import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { YupValidation } from "src/utils/yup-validation";

import { InputComponent } from "./input";
import { TextAreaComponent } from "./textarea";

export {
  Form,
  YupValidation,
  InputComponent,
  TextAreaComponent,
};

export type { FormHandles };
