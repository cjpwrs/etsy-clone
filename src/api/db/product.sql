CREATE TABLE products
  (

  id bigserial primary key,
  title varchar(1124),
  category varchar(64),
  who_made_it varchar(64),
  what_is_it varchar(64),
  when_was_it_made varchar(64),
  price decimal,
  quantity decimal,
  image_url varchar(1000),
  description varchar(5000),
  ownerid int references users(id)

  );
