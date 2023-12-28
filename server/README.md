It's absolutely required that you run setup.sql before trying to POST data. This is because Hibernate will try to set the type for signature to VARCHAR, which is too small and will error out, it should be TEXT. You must also update the database username, and password in src/main/resources
/application.properties.
