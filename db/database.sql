-- CREATE DATABASE IF NOT EXISTS companydb;

-- USE companydb;

CREATE TABLE product (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  description VARCHAR(255) DEFAULT NULL,
  valor INT(11) DEFAULT NULL, 
  imageURL varchar(255) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY(id)
);

DESCRIBE product;

INSERT INTO product values 
  (1, 'Producto 1', 'Descripción de los productos', 20000, 'https://conceptoabc.com/wp-content/uploads/2021/09/Producto.jpg','2023-07-31 02:27:09', '2023-07-31 02:27:09'),
  (2, 'Producto 2', 'Descripción de los productos', 40000, 'https://conceptoabc.com/wp-content/uploads/2021/09/Producto.jpg','2023-07-31 02:27:09', '2023-07-31 02:27:09'),
  (3, 'Producto 3', 'Descripción de los productos', 50000, 'https://conceptoabc.com/wp-content/uploads/2021/09/Producto.jpg','2023-07-31 02:27:09', '2023-07-31 02:27:09');

SELECT * FROM product;
