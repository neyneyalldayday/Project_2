module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", 
    {
      category: { 
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[1]
        }
      },
      itemName: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          len: [1]
        }
      },
      descript: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      },
      replica: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      highestBid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      imageLink: {
        type: DataTypes.STRING,
        allowNull: true, 
        defaultValue: "/image/defImg.jpg"
      }

    });

  return Item;
};