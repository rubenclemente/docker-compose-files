-- init-schema.sql
DO $$
    BEGIN
        IF NOT EXISTS (SELECT schema_name
                       FROM information_schema.schemata
                       WHERE schema_name = 'example') THEN
            CREATE SCHEMA example;
        END IF;
    END
$$;