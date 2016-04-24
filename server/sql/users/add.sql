INSERT INTO ${schema~}.users(
first_name,
last_name,
phone,
fax,
email,
street_name,
street_number,
ps_code,
city,
country,
is_active,
is_agency )
VALUES (
${firstName},
${lastName},
${phone},
${fax},
${email},
${streetName},
${streetNumber},
${psCode},
${city},
${country},
${isActive},
${isAgency} )
 RETURNING id
