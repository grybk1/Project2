drop table public.movies;



CREATE TABLE public.movies
(
    id serial NOT NULL,
    title character varying(100) COLLATE pg_catalog."default" NOT NULL,		
    gross money NOT NULL,
    location character varying(100) COLLATE pg_catalog."default" NOT NULL,
    rating real NOT NULL,
    year integer NOT NULL,
    plot character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT movies_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.movies
    OWNER to postgres;