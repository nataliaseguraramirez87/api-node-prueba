USE company;

DELIMITER $$
USE `company`$$

CREATE PROCEDURE `productAddOrEdit` (
  IN _id INT,
  IN _name VARCHAR(45),
  IN description VARCHAR(45),
  IN _valor INT,
  IN _imageURL varchar(255),
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO product (name, valor)
    VALUES (_name, _valor);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE product
    SET
    name = _name,
    description = _description,
    valor = _valor,
    imageURL = _imageURL,
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
