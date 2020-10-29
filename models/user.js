// const bcrypt = require("bcryptjs");
// module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
//   User = sequelize.define("User", {
=======
//   const User = sequelize.define("User", {
>>>>>>> main
//     email: {
//       type: DataTypes.STRING,
//       allowNNull: false,
//       unique: true,
//       validate: {
//         isEmail: true
//       }
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   });
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };
//   User.addHook("beforeCreate", (user) => {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
//   return User;
// };