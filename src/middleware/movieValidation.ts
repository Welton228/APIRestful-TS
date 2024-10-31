import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatório")
      .isLength({ min: 5 })
      .withMessage("O título precisa ter no minimo 05 caracteres"),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um numero")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa estar entre 0 e 10");
        }
        return true;
      }),
    body("description").isString().withMessage("A descrição é obrigatório"),
    body("director").isString().withMessage("O nome do diretor é obrigatório"),
    body("poster").isURL().withMessage("A imagem precisa ser uma URL"),
  ];
};
