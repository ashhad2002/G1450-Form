DROP TABLE IF EXISTS form_data;

CREATE TABLE form_data (
    id BIGSERIAL PRIMARY KEY,
    given_name VARCHAR(255),
    street_name VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zip_code VARCHAR(20),
    credit_card_name VARCHAR(255),
    credit_card_number VARCHAR(255),
    credit_card_expiry VARCHAR(255),
    credit_card_holder_email VARCHAR(255),
    authorized_payment_amount VARCHAR(255),
    card_type VARCHAR(255),
    apt_ste_flr VARCHAR(255),
    apt_ste_flr_number VARCHAR(255),
    phone_number VARCHAR(255),
    signature TEXT
);