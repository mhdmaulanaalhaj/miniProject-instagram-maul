module.exports = (sequelize, Sequelize) => {
  const token = sequelize.define(
    "Tokens", //nama table
    {
      token: {
        type: Sequelize.STRING,
      },
      expired: {
        type: Sequelize.DATE,
      },
      payload: {
        type: Sequelize.STRING,
      },
      valid: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      status: {
        type: Sequelize.ENUM("LOGIN", "FORGOT-PASSWORD", "VERIFY"),
      },
    },
    {
      paranoid: true,
    }
  );
  return token;
};
