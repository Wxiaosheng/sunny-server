const { Controller } = require('egg');
const MongoDB = require('@sunny-cli/mongdb');

const DB_URL = 'mongodb://www.sunny.com:27017';
const DB_NAME = 'sunny-cli';

class HomeController extends Controller {
  async getProjectTemplates() {
    const { ctx } = this;
    const mongo = new MongoDB(DB_URL, DB_NAME);
    const list = await mongo.query('project');
    ctx.body = list;
  }
}

module.exports = HomeController;
