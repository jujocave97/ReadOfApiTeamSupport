const { Product, ProductSchema } = require('./productModel');
const { Organization, OrganizationsSchema } = require('./organizationModel')
const { User, UserSchema } = require('./userModel');
const { Group, GroupSchema } = require('./groupModel');
const { Customer, CustomerSchema} = require ('./customerModel');
const { Contact, contactSchema} = require ('./contactsModel');
const { TicketStatus, TicketStatusesSchema} = require ('./ticketStatusesModel');
const { TicketSeverities, TicketSeveritiesSchema} = require ('./ticketSeveritiesModel');
const { TicketType, TicketTypesSchema} = require ('./ticketTypesModel');
const { ProductVersion, ProductVersionSchema} = require ('./productVersionStatuses');
const { Ticket, TicketSchema} = require ('./ticketModel');
const { Actions, ActionsSchema} = require ('./actionsModel');

// funcion para la creacion de las tablas mediante migraciones
function setupModels (sequelize) {
    Product.init(ProductSchema, Product.config(sequelize));
    Organization.init(OrganizationsSchema, Organization.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    Group.init(GroupSchema, Group.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Contact.init(contactSchema, Contact.config(sequelize));
    TicketStatus.init(TicketStatusesSchema, TicketStatus.config(sequelize));
    TicketSeverities.init(TicketSeveritiesSchema, TicketSeverities.config(sequelize));
    TicketType.init(TicketTypesSchema, TicketType.config(sequelize));
    ProductVersion.init(ProductVersionSchema, ProductVersion.config(sequelize));
    Ticket.init(TicketSchema, Ticket.config(sequelize));
    Actions.init(ActionsSchema, Actions.config(sequelize));

}

module.exports = setupModels;