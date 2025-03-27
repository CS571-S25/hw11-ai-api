
import { DataTypes, Sequelize, ModelStatic } from "sequelize";
import { CS571Config } from "@cs571/api-framework";
import HW11AIPublicConfig from "../model/configs/hw11-ai-public-config";
import HW11AISecretConfig from "../model/configs/hw11-ai-secret-config";

import OpenAIMessageLog from "../model/openai-message-log";

export class CS571HW11AIDbConnector {

    // private badgerLogsTable!: ModelStatic<any>;

    // private readonly sequelize: Sequelize
    // private readonly config: CS571Config<HW11AIPublicConfig, HW11AISecretConfig>;

    public constructor(config: CS571Config<HW11AIPublicConfig, HW11AISecretConfig>) {
        // this.config = config;
        // this.sequelize = new Sequelize(
        //     this.config.SECRET_CONFIG.SQL_CONN_DB,
        //     this.config.SECRET_CONFIG.SQL_CONN_USER,
        //     this.config.SECRET_CONFIG.SQL_CONN_PASS,
        //     {
        //         host: this.config.SECRET_CONFIG.SQL_CONN_ADDR,
        //         port: this.config.SECRET_CONFIG.SQL_CONN_PORT,
        //         dialect: 'mysql',
        //         retry: {
        //             max: Infinity,
        //             backoffBase: 5000
        //         }
        //     }
        // );
    }

    public async init() {
        // await this.sequelize.authenticate();
        // this.badgerLogsTable = await this.sequelize.define("BadgerLog", {
        //     id: {
        //         type: DataTypes.INTEGER,
        //         autoIncrement: true,
        //         primaryKey: true,
        //         unique: true,
        //         allowNull: false
        //     },
        //     badger_id: {
        //         type: DataTypes.STRING(128),
        //         allowNull: false
        //     },
        //     msg: {
        //         type: DataTypes.STRING(16394),
        //         allowNull: false
        //     },
        //     created: {
        //         type: DataTypes.DATE,
        //         allowNull: false
        //     }
        // });
        // await this.sequelize.sync();
    }

    public async log(log: OpenAIMessageLog): Promise<void> {
        // await this.badgerLogsTable.create({
        //     msg: log.msgs,
        //     badger_id: log.bid,
        //     created: new Date()
        // });

        // return;
    }
}