BEGIN TRANSACTION;

-- Eliminar registros de la tabla "actions"
select count( *) FROM actions;

-- Eliminar registros de la tabla "ticket"
select count( *) FROM ticket;

-- Eliminar registros de la tabla "ticket_statuses"
select count( *) FROM ticket_statuses;

-- Eliminar registros de la tabla "ticket_severities"
select count( *) FROM ticket_severities;

-- Eliminar registros de la tabla "ticket_types"
select count( *) FROM ticket_types;

-- Eliminar registros de la tabla "users"
select count( *) FROM users;

-- Eliminar registros de la tabla "product_version"
select count( *) FROM product_version;

-- Eliminar registros de la tabla "products"
select count( *) FROM products;

-- Eliminar registros de la tabla "groups"
select count( *) FROM groups;

-- Eliminar registros de la tabla "contacts"
select count( *) FROM contacts;

-- Eliminar registros de la tabla "customers"
select count( *) FROM customers;

-- Eliminar registros de la tabla "organizations"
select count( *) FROM organizations;

COMMIT TRANSACTION;


BEGIN TRANSACTION;

-- Eliminar registros de la tabla "actions"
DELETE FROM actions;

-- Eliminar registros de la tabla "ticket"
DELETE FROM ticket;

-- Eliminar registros de la tabla "ticket_statuses"
DELETE FROM ticket_statuses;

-- Eliminar registros de la tabla "ticket_severities"
DELETE FROM ticket_severities;

-- Eliminar registros de la tabla "ticket_types"
DELETE FROM ticket_types;

-- Eliminar registros de la tabla "users"
DELETE FROM users;

-- Eliminar registros de la tabla "product_version"
DELETE FROM product_version;

-- Eliminar registros de la tabla "products"
DELETE FROM products;

-- Eliminar registros de la tabla "groups"
DELETE FROM groups;

-- Eliminar registros de la tabla "contacts"
DELETE FROM contacts;

-- Eliminar registros de la tabla "customers"
DELETE FROM customers;

-- Eliminar registros de la tabla "organizations"
DELETE FROM organizations;

COMMIT TRANSACTION;


EXEC sp_MSForEachTable 'ALTER TABLE ? NOCHECK CONSTRAINT ALL'
