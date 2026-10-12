import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
export const Book = sequelize.define(
    "Book", { title:{type:DataTypes.STRING,allowNull:false

    }, author:{type:DataTypes.STRING,allowNull:false

    }, 
    genre:{type:DataTypes.STRING,allowNull:false

    }, 
    isbn:{type:DataTypes.STRING,allowNull:true,unique:true

    }, 
    totalCopies:{type:DataTypes.INTEGER,allowNull:false,defaultValue:1

    },
    availableCopies:{type:DataTypes.INTEGER,allowNull:false,defaultValue:1

    }
    },
    {tableName:"books",
    timestamps:false,validate:
    {validInventory(){if(this.totalCopies<0||this.availableCopies<0||this.availableCopies>this.totalCopies)throw new Error("Invalid inventory counts");}}});
