/* eslint-disable no-unused-vars */
import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import DatabaseConfig from '../config/database';

const models = [User, File];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
