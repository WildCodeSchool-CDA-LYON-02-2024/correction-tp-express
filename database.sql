DROP DATABASE IF EXISTS wcs_cda_tp_express;
CREATE DATABASE wcs_cda_tp_express;

use wcs_cda_tp_express;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'USER',
    created DATETIME DEFAULT NOW(),
    PRIMARY KEY (id),
    UNIQUE (username)
);