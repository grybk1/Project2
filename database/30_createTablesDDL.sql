DROP TABLE public.movies;

CREATE TABLE public.movies
(
    id integer NOT NULL,
    title character varying(500) COLLATE pg_catalog."default" NOT NULL,
    director character varying(500) COLLATE pg_catalog."default" NOT NULL,
    year integer NOT NULL,
    location character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT movies_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.movies
    OWNER to postgres;



-- DROP TABLE public.country;

CREATE TABLE public.country
(
    id integer NOT NULL DEFAULT nextval('country_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT country_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.country
    OWNER to postgres;



-- DROP TABLE public.xref_movie_country;

CREATE TABLE public.xref_movie_country
(
    "movieId" integer,
    "countryId" integer
)

TABLESPACE pg_default;

ALTER TABLE public.xref_movie_country
    OWNER to postgres;