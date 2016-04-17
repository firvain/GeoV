INSERT INTO ${schema~}.users(first_name, last_name, phone_number, fax_number, email, street_name, street_number, ps_code,city, country, is_active)
VALUES (${firstName}, ${lastName}, ${phoneNumber}, ${faxNumber}, ${email}, ${streetName}, ${streetNumber},${psCode}, ${city}, ${country}, ${isActive})
 RETURNING id
