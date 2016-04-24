CREATE TABLE public.listings (
  id            serial NOT NULL,
  property_gid  integer NOT NULL,
  sale          boolean DEFAULT false,
  start_date    date NOT NULL DEFAULT CURRENT_DATE,
  end_end       date,
  short         boolean DEFAULT false,
  pets          boolean DEFAULT false,
  /* Keys */
  CONSTRAINT listing_pkey
    PRIMARY KEY (id),
  CONSTRAINT listing_property_id_key
    UNIQUE (property_id),
  /* Foreign keys */
  CONSTRAINT foreign_key01
    FOREIGN KEY (property_gid)
    REFERENCES public.property(gid)
) WITH (
    OIDS = FALSE
  );
